# Configure Apache2 or Nginx with PHP-FPM

## 1. Introduction

With PHP 5.3.3 a new PHP SAPI handler was added to PHP. It’s called PHP-FPM (FastCGI Process Manager). PHP-FPM is an alternative PHP FastCGI implementation with some additional features useful for sites of any size, especially busier sites.

More Infos can be found here:

* [https://php-fpm.org/](https://php-fpm.org/)
* [https://www.php.net/manual/install.fpm.php](https://www.php.net/manual/install.fpm.php)

**Pros:**

* Fast + Secure.
* No permission problems between the FTP- and Webserver-users
* On Apache2 PHP is thread safe that way, so you can use Apache mpm-worker for better performance and less memory overhead as with apache prefork and mod-php.

**Cons:**

* More difficult to set up.

I assume that you have froxlor already running (using mod_php) and the database set up.

## 2. Configure froxlor Settings

::: danger VERY IMPORTANT
**It is very important that you first adjust all settings** according to your needs before configuring the services. This is because some configuration-templates/commands change dynamically depending on the settings you chose.
:::

To adjust settings, login as admin and click on **Settings** in the menu on the left side.

::: warning NOTE 
Please remember to check that you're using the correct PHP-FPM version in froxlor. You can do it on the **[PHP-FPM versions](../../php-versions-and-configuration/#_2-php-fpm-versions)** page.
:::

```
PHP-FPM
    Enabled: Yes
        Save

froxlor VirtualHost settings
    Make froxlor directly accessible by hostname: Yes
    Use PHP-FPM in froxlor host: Yes
        Save

System settings
    Use libnss-extrausers instead of libnss-mysql: Yes
        Save
```

## 3. Installation

### 3.1. Quick installation

This method is especially useful for freshly installed froxlor instances.

#### 3.1.1 Run the config-services script

```shell
cd /var/www/html/froxlor/
bin/froxlor-cli froxlor:config-services --create
```

The command will guide you through the configuration of froxlor, at least the following options must be selected when configuring the *SYSTEM*:

* `libnssextrausers`
* `php-fpm`

Done!

### 3.2. Manual installation

If your system has already been heavily modified, manual installation is recommended.

#### 3.2.1. Setting up the environment

You should ensure that the froxlor cronjob isn't executed while you set up php-fpm. This could produce unwanted results!

```shell
service cron stop
```

#### 3.2.2. Setting up webserver

Please execute the commands from the froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Webserver (HTTP) » webserver you plan to use
```

#### 3.2.3. Setting up libnss-extrausers

Please execute the commands from the froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Others (System) » libnss-extrausers
```

#### 3.2.4. Setting up php-fpm

Please execute the commands from the froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Others (System) » PHP-FPM
```

#### 3.2.5. Final Steps

Log in to froxlor and click on 'Rebuild Configuration Files'.

Run froxlor's global cron job once to immediately produce php-fpm configurations for all VirtualHosts:

 ```shell
cd /var/www/html/froxlor
bin/froxlor-cli froxlor:cron -f
```

If you have set up all correctly it should be now possible to open the customer domains in your browser. If there are PHP child processes under the Apache process all is working fine. You can also check that by running phpinfo(); from a file within a customer domain.

## 4. Possible Problems you might run into

There are like 1 billion problems you might have to face ;)

* Check if path to init.d script and fpm config are correctly set
* 500 Internal Server Error - Check the logs! Often you can find the solution by the given errors. This may help you further [http://htmlfixit.com/cgi-tutes/tutorial_Common_Web_dev_error_messages_and_what_they_mean.php](http://htmlfixit.com/cgi-tutes/tutorial_Common_Web_dev_error_messages_and_what_they_mean.php)
* Look at the logs!!!
* When editing configuration files, please do not use WinSCP or Windows Notepad. Editing files using these utilities will convert them to Windows format - and Linux will be unable to read those.
* If there are problems with restarting PHP-FPM, try editing the start-script and reduce the timeout from 30 seconds to 5 seconds. Especially with many customers it may take a long time to start PHP-FPM up during boots.

Apache2:

* Enable debug logging for apache and restart it. (**LogLevel debug** in `/etc/apache2/apache2.conf`) Be sure to uncomment this line and do a restart of apache after debugging!
* Run `ps faux` and check whether there is a PHP process running under the apache process.

### Still problems?

If you run into any problems or have difficulties understanding / setting-up / whatever - don't hesitate to contact us either via e-mail ([team@froxlor.org](mailto:team@froxlor.org)) or the preferred way: on Discord ([https://discord.froxlor.org](https://discord.froxlor.org)) and our forums ([https://forum.froxlor.org/](https://forum.froxlor.org/))

