---
layout: page
title: FCGID
parent: Configuration
---

# Configure Apache2 with FCGID

> ***Untested** on Ubuntu 20.04 LTS (Focal Fossa) with Froxlor 0.10.30*

## 1. Introduction

### Why setting up PHP with suexec?

Because you can run PHP with different users according to the vHost, which means its easier to protect each vHost from attacks by another vHost. On the other site there are no more problems between permissions of the FTP- and the Webserver-user or compromised hosts.

### Why FastCGI?

Running PHP as a CGI would require reloading the PHP binary for every request which would lead to a massive overhead. This is why there is FastCGI, it loads the binary only once and hands requests to PHP by redirecting stdin and stdout by pipes/sockets.

### Why mod_fcgid?

The old mod_fastcgi doesn't seem to be in development anymore and wasn't released under the GPL. mod_fcgid is the implementation of the FastCGI protocol under the GPL, its actively developed and has a better process management (Supports MPM and Thread Management).

**Pro:**

* Fast + Secure. PHP is thread safe that way so you can use Apache mpm-worker for better performance.
* Individual php.ini per customer
* No permission problems between the FTP- and Webserver-users

**Cons:**

* Complex to set up
* Wrong installations can cause more security holes than using the original mod_php5 module
* A lot of RAM is used when there are a lot of vHosts (can be limited slightly)

I assume that you have Froxlor already running and the database set up.

## 2. Configure Froxlor Settings

**It is very important that you first adjust all settings** according to your needs before configuring the services. This is because some configuration-templates/commands change dynamically depending on the settings you chose.

To adjust settings, login as admin and click on 'Settings' in the menu on the left side.

```
FCGID
    Enabled: Yes
        Save

Froxlor VirtualHost settings
    Make Froxlor directly accessible by hostname: Yes
    Use FCGID in Froxlor host: Yes
        Save

System settings
    Use libnss-extrausers instead of libnss-mysql: Yes
        Save
```

## 3. Installation

### 3.1. Quick installation

This method is especially useful for freshly installed Froxlor instances.

#### 3.1.1 Run the config-services script

```shell
php /var/www/froxlor/install/scripts/config-services.php --froxlor-dir=/var/www/froxlor/ --create
```

The installer will guide you through the configuration of Froxlor, at least the following options must be selected when configuring the 'SYSTEM':

* `libnssextrausers`
* `fcgid`

Done!

### 3.2. Manual installation

If your system has already been heavily modified, manual installation is recommended.

#### 3.2.1. Setting up the environment

You should ensure that the Froxlor cronjob isn't executed while you set up fcgid. This could produce unwanted results!

```shell
service cron stop
```

#### 3.2.2. Setting up apache2

Please execute the commands from the Froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Webserver (HTTP) » Apache 2.4
```

#### 3.2.3. Setting up libnss-extrausers

Please execute the commands from the Froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Others (System) » libnss-extrausers
```

#### 3.2.4. Setting up FCGID

Please execute the commands from the Froxlor configuration page:

```
Configuration » Ubuntu Focal (20.04) » Others (System) » FCGID
```

#### 3.2.5. Final Steps

Log in to Froxlor and click on 'Rebuild Configuration Files'.

Run Froxlor's global cron job once to immediately produce fcgid configurations for all VirtualHosts:

```shell
php /var/www/froxlor/scripts/froxlor_master_cronjob.php --force
```

```shell
service cron start
```

If you have set up all correctly it should be now possible to open the customer domains in your browser. If there are PHP child processes under the Apache process all is working fine. You can also check that by running phpinfo(); from a file within a customer domain.

## 4. Possible problems you might run into

There are like 1 billion problems you might have to face ;)
* suexec is often a problem. Make sure you configure it right at compile time. For the default distribution packages check `/var/log/apache2/suexec.log` for errors.
* 500 Internal Server Error - Check the logs! Often you can find the solution by the given errors. This may help you further [http://htmlfixit.com/cgi-tutes/tutorial_Common_Web_dev_error_messages_and_what_they_mean.php](http://htmlfixit.com/cgi-tutes/tutorial_Common_Web_dev_error_messages_and_what_they_mean.php)
* Enabled debug logging for apache and restart it. (**LogLevel debug** in `/etc/apache2/apache2.conf`) Be sure to uncomment this line and do a restart of apache after debugging!
* Be sure that `/etc/apache2/logs/fcgidsock` is owned by `www-data`. Otherwise you will get the typical error Premature end of script headers, which says that PHP isn't able to communicate with the apache process.
* Look at the logs!!!
* ps faux and look if there is a PHP process running under the apache process.
* `strace -s 2000 -ff -o /tmp/fastcgi -p <PID of fcgi-pm>` Very useful if you know how to debug!
* If you edit config files, please dont use WinSCP. This adds Windows format and Linux can't work with this.

Got problems?

If you got problems with this howto please let us/me know. But please prefer to use the Forum instead of the Bugtracker or IRC. Thanks!

## 5. Links and references

* [http://httpd.apache.org/docs/2.0/suexec.html](http://httpd.apache.org/docs/2.0/suexec.html)
* [http://www.seaoffire.net/fcgi-faq.html](http://www.seaoffire.net/fcgi-faq.html)
* [http://alain.knaff.lu/howto/PhpSuexec/](http://alain.knaff.lu/howto/PhpSuexec/)
