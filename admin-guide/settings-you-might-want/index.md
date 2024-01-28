# Settings you might want

There is a lot you can do with froxlor. However, some defaults may seem not very intuitive to you. This is - for the most part - on purpose. froxlor aims to be as lightweight as possible. It tries to only modify your system where necessary and otherwise tries to get along with the defaults. Things that are changed are for froxlor and its own services to work. **Froxlor is a toolkit. It is not meant to replace the administrator!**

Yet, there are settings you might want to modify yourself This guide will give you a few points you may want to set for yourself as it's common to have them - or for web software to work.

# Apache

## `mod_rewrite`
An awful lot of PHP software these days uses `mod_rewrite` to create so-called clean URLs, e.g. `/my-first-post/` instead of `/index.php?p=69`. In order for this to work, you will need the module `rewrite` which is not enabled by default. To enable it, run these commands as root:
```shell
a2enmod rewrite
service apache2 restart
```

## HTTP/2
You can enable support for HTTP/2 in froxlor on a per-domain basis. But it also has to be enabled in the web server itself. Furthermore, it only works with Apache's Multi-Processing-Module (MPM) `event` whereas the default is `prefork`.

If you want to enable HTTP/2, and thus `mpm_event`, you first have to check, and maybe adjust and reconfigure, your PHP settings. Because `mpm_event` will not work with `mod_php` enabled. You would have to use FCGId or PHP-FPM instead.

If you meet all requirements, you can enter these commands as root in your shell to enable HTTP/2 and mpm_event.
```shell
a2dismod php* mpm_prefork
a2enmod http2 mpm_event
```

Apache will check if there are no other incompatibilities and will tell you if there is something that needs your attention. If not, restart Apache now:
```shell
service apache2 restart
```

After you enabled `mpm_event`, you may want to adjust settings. You will find them in `/etc/apache2/mods-available/mpm_event.conf`. Every time you change something, you would have to restart Apache to apply your changes.

## Hide `ServerSignature` and `ServerTokens`
Apache is a little chatty about itself in error messages and HTTP response headers. It is considered bad practise to have it disclose version numbers, or better yet, also loaded extensions. While you absolutely still should make sure all your packages are up-to-date, we on the other hand don't have to serve an attacker more information than necessary on a silver platter.

To make Apache less chatty about itself, point your favorite editor to the file `/etc/apache2/conf-available/security.conf` and find the lines that start with `ServerTokens` and `ServerSignature` (and that are not comments, starting with a hash (`#`)). Change them accordingly:
```
ServerTokens Prod
ServerSignature Off
```

# HTTPS/SSL

## What settings should I use?
Froxlor allows you to specify settings that are related to SSL. You will find them in System > Settings > SSL settings. The most common usecase is HTTPS. The defaults froxlor comes with are selected with two considerations in mind: What would supported Linux distributions offer out of the box and what would be the best compromise between security and compatibility.

### TLS protocol version
Decision here is fairly easy, TLSv1.2 is fine for most usecases. If your software is recent enough to support it, it won't hurt to **additionally** check TLSv1.3. TLSv1 and TLSv1.1 are considered insecure so only select those if you know you need them. If not, don't.

## SSL ciphers
This is a list of methods on how a client should talk to the server. There are ciphers that are more or less considered broken, and there are those that are considered still fine. However, only relying on modern ciphers means that you'd exclude older browsers or services from getting a connection established. Because the list of what to use may change over time, we recommend you getting [a recent one from Mozilla](https://ssl-config.mozilla.org/).

## Other settings to get you an A+ on SSLLabs
The other settings that would make common SSL testers happy can be found in your domain settings. You should enable the `SSL redirect` so the first order of business is to redirect a user from http to https. The other one is to enable `HTTP Strict Transport Security` and set it to at least one year (min. `31536000` seconds). Also, using `OCSP stapling` is considered best practise, e.g. [from Let's Encrypt](https://letsencrypt.org/docs/integration-guide/#implement-ocsp-stapling).

# MySQL/MariaDB
MySQL, and MariaDB for that matter, come with default settings from the last century (quite literally). They are meant to universally work, but not necessarily work well on modern systems.

If you want to use your own settings, you should create a file in `/etc/mysql/conf.d/` that ends with `.cnf`, e.g. `/etc/mysql/conf.d/own.cnf`. You only need to adjust what you want changed, everything else is inherited from the defaults.

::: tip
We will start our listings with the option group, e.g. `[mysqld]`. If you want to adjust multiple settings in the same group, it is perfectly sufficient to have it only once in your file.

After each modification in configuration, you have to restart your database service in order to apply the changes:
```shell
service mysql restart
```
:::

## `max_connections`
One of the most common database error messages is `Too many connections`. This happens when MySQL's `max_connections` is lower than your web server's maximum clients that are served at any one time. So it would advisable to set this value higher than that - also to have a little buffer for edge-cases (such as some migration from one software to another, e.g. Drupal to WordPress). So if your web server is allowed to serve 500 clients at once, this setting should be around 550.

You will find the relevant options in your web server configuration. For Apache using `mpm_event`, this would be in `/etc/apache2/mods-available/mpm_event.conf`, the setting `MaxRequestWorkers`.
```
[mysqld]
max_connections = 550
```

## `innodb_buffer_pool_size`
Nowadays, databases use InnoDB as their data structure which is a lot more robust than the old MyISAM but also requires more ressources. Unfortunately, default values as supplied out of the box are so that it works on a little Raspberry Pi as well, but on a real server, those values will result in a bad performance.

The most important setting regarding InnoDB tables is `innodb_buffer_pool_size`. The database uses this as a buffer of frequently used data, both for reading and writing operations. So having a pool size that is too small means more disk access which is slower than your RAM.

As a rule of thumb, the pool should be set to half of your available system memory. You definitely should check every once in a while if that works for your system, i.e. if it does not swap too hard, and see if you can make adjustments. So on a host with 64 GB of RAM in total, and 50 GB available, set it to 25 GB:
```
[mysqld]
innodb_buffer_pool_size = 25G
```
