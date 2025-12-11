# Settings you might want

There are many things you can do with froxlor. However, some defaults may not seem very intuitive to you. This is - for the most part - intentional. froxlor tries to be as lightweight as possible. It tries to modify your system only where necessary, and otherwise make do with the defaults. The changes that are made are required for froxlor and its own services to work. **froxlor is a toolkit. It is not meant to replace the administrator\!**

Still, there are settings you may want to change in your installation. This guide will cover some items you might want to set for yourself as it's common to have them - or for web software to work.

## Apache

### `mod_rewrite`

A lot of PHP software nowadays uses `mod_rewrite` to create so-called clean URLs, e.g. `/my-first-post/` instead of `/index.php?p=69`. For this to work, you need the `rewrite` module which is not enabled by default. To enable it, run these commands as root:

```shell
a2enmod rewrite
systemctl restart apache2
```

### HTTP/2

You can enable HTTP/2 support globally in froxlor and then on a per-domain basis. However, it must also be enabled in the web server itself. Also, it only works with Apache's Multi-Processing Module (MPM) `event`, while the default is `prefork`.

If you want to enable HTTP/2 and thus `mpm_event`, you must first check your PHP settings and possibly adjust and reconfigure them. Note that `mpm_event` is incompatible with `mod_php`. You would have to use FCGId or PHP-FPM instead.

If you meet all the requirements, you can enter these commands as root in your shell to enable HTTP/2 and mpm\_event.

```shell
a2dismod php* mpm_prefork
a2enmod http2 mpm_event
```

Apache will check to see if there are any other incompatibilities and tell you if there is anything that needs your attention. If not, restart Apache now:

```shell
systemctl restart apache2
```

After you've enabled `mpm_event`, you may want to adjust the settings. You can find them in `/etc/apache2/mods-available/mpm_event.conf`. Each time you change something, you will need to restart Apache for your changes to take effect.

### Hide `ServerSignature` and `ServerTokens`

Apache is a bit chatty about itself in error messages and HTTP response headers. It is considered bad practice to make it reveal version numbers, or better yet, loaded extensions. While you should make sure all your packages are up to date, we don't need to hand an attacker more information than necessary on a silver platter.

To make Apache more discreet about itself, point your favorite editor to the file `/etc/apache2/conf-available/security.conf` and find the lines that start with `ServerTokens` and `ServerSignature` (and that are not comments, starting with a hash (`#`)). Change them accordingly:

```
ServerTokens Prod
ServerSignature Off
```

Again, don't forget to restart Apache for these changes to take effect.

```shell
systemctl restart apache2
```

## HTTPS/SSL

### What settings should I use?

froxlor allows you to specify settings related to SSL. You can find them in System -\> Settings -\> SSL settings. The most common use case is HTTPS. froxlor comes with defaults that were chosen with two considerations in mind: What supported Linux distributions offer out of the box and what is the best compromise between security and compatibility.

#### TLS protocol version

The choice here is fairly straightforward; TLSv1.2 is fine for most use cases. If your software is new enough to support it, it won't hurt to **additionally** select TLSv1.3 (because clients and your server will decide which to use on the first handshake). TLSv1 and TLSv1.1 are considered insecure, so only select them if you know you need them. If you don't, don't.

### SSL ciphers

This is a list of methods for how a client should talk to the server. There are ciphers that are considered broken, and there are those that are still considered good. However, relying only on modern ciphers means that you're potentially excluding older browsers or services from being able to connect. Since the list of what to use may change over time, we recommend getting [a recent one from Mozilla](https://ssl-config.mozilla.org/).

### Other settings that will get you an A+ on SSLLabs

Other settings that would make most SSL testers happy can be found in your domain settings. You should enable `SSL redirect` so the first order of business is to redirect a user from http to https. Another is to enable `HTTP Strict Transport Security` and set it to at least one year (i.e. `31536000` seconds). OCSP Stapling is also considered a good thing to have; however, please note that Let's Encrypt does not support this feature any longer.

## MySQL/MariaDB

MySQL and MariaDB come with defaults from the last century (literally). They are meant to work universally but may not work well on modern systems.

If you want to use your own settings, you should create a file in `/etc/mysql/conf.d/` that ends with `.cnf`, e.g. `/etc/mysql/conf.d/own.cnf`. You only need to change what you want to change; everything else is inherited from the defaults.

::: tip
We will start our listings with the option group, e.g. `[mysqld]`. If you want to change several settings in the same group, it is sufficient to have it only once in your file.

After each change to the configuration, you must restart your database service for the changes to take effect:

```shell
systemctl restart mysql
```

:::

### `max_connections`

One of the most common database error messages is `Too many connections`. This happens when MySQL's `max_connections` is lower than the maximum number of clients your web server can serve at one time. So it would be advisable to set this value higher than that - also to have a little buffer for edge cases (such as some migrations from one software to another, e.g. Drupal to WordPress). So if your web server is allowed to serve 500 clients at once, this setting should be around 550.

You can find the appropriate options in your web server configuration. For Apache using `mpm_event`, this would be in `/etc/apache2/mods-available/mpm_event.conf`, the `MaxRequestWorkers` setting.

```
[mysqld]
max_connections = 550
```

### `innodb_buffer_pool_size`

Nowadays, databases use InnoDB as their data structure, which is much more robust than the old MyISAM but also requires more resources. Unfortunately, the default values that come out of the box are such that it works on a small Raspberry Pi, but on a real server, these values will result in poor performance.

The most important setting for InnoDB tables is `innodb_buffer_pool_size`. The database uses this as a buffer for frequently used data, both for read and write operations. So a pool size that is too small means more disk accesses, which are slower than your RAM.

As a rule of thumb, the pool should be twice as big as the data you store inside it, plus its indexes, or half of your available system RAM (whichever is lower). To find out how much is allocated in InnoDB tables, you can run this query with a privileged MySQL user:

```sql
SELECT SUM(data_length + index_length) / 1024 / 1024 / 1024 AS total_gb FROM information_schema.TABLES WHERE engine = 'InnoDB';
```

Whatever number it returns, double it and use this (max. half of your available memory, though) as your `innodb_buffer_pool_size`.

```
[mysqld]
innodb_buffer_pool_size = 16G
```

### Assorted performance optimizations

There are two more options that are commonly recommended to enable. `innodb_flush_method` tells mysql how to write its data to disk. On an SSD-based system, you should set it to `O_DIRECT` so data gets written directly to the SSD instead of using the operating system's file system cache.

You can also drastically improve transaction speeds by setting `innodb_flush_log_at_trx_commit` to `2`. It will only write transactions every 1 to 2 seconds to disk instead of after each transaction, thus eliminating a major bottleneck. However, please do note that in case of an unexpected power outage or system crash, you may lose the last second worth of data.

```
[mysqld]
innodb_flush_method = O_DIRECT
innodb_flush_log_at_trx_commit = 2
```
