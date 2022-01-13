---
layout: page
title: Manual
parent: Installation
nav_order: 1
---

# Install froxlor from Tarball

## 0. Prerequisites

For a manual installation, you need to have a recent webserver (apache2 or nginx) with PHP and MySQL/MariaDB-server running.

## 1. Download the tarball

You can download the latest version of froxlor from [http://files.froxlor.org/releases/](http://files.froxlor.org/releases/)

````shell
# change directory
cd /var/www/

# download latest froxlor version
wget http://files.froxlor.org/releases/froxlor-latest.tar.gz

# the content should go in to the folder /var/www/froxlor
# note: the archive contains the folder 'froxlor' already!
tar xvfz froxlor-latest.tar.gz

# remove archive
rm froxlor-latest.tar.gz
````

## 2. Set Permissions

In order for the webserver to be able to server the files, the owner must be set correctly. Note: If you're using FCGID/PHP-Fpm for the froxlor-Vhost, you have to replace the webserver-user with your local froxlor-user.

````shell
chown -R [webserver-user]:[webserver-user] /var/www/froxlor/
````

(the 'webserver-user' on most systems is 'www-data' or 'apache')

## 3. Installation via Web-Installer

Now that you have extracted all the files you are ready to (re)start the webserver. You should now be able to access froxlor via `http://{your-ip-address}/froxlor` Just follow the installation-process and froxlor will be installed in no time.

The _unprivileged_ MySQL user does not need to exist, it will be created using the provided root-privileged user by the installation process.

## 4. Settings before configuration!

**It is very important that you first adjust all settings** according to your needs before configuring the services. This is because some configuration-templates/commands change dynamically depending on the settings you chose.

To adjust settings, login as admin and click on 'Settings' in the menu on the left side.

If you now chose to use PHP via FCGID or FPM, then you should also read our fcgid/php-fpm handbooks:

* [Apache2 / FCGID](/general/configuration/fcgid.html)
* [Apache2 & nginx / PHP-FPM](/general/configuration/php-fpm.html)

## 5. Configuration of services

### Automatically
After adjusting the settings and activating/deactivating of wanted features you can start the configuration of the services by running the following command:

```shell
php /var/www/froxlor/install/config-services.php --froxlor-dir /var/www/froxlor --create
```

It will install the chosen services and configure them according to your settings with the froxlor configuration templates.

### Manual (copy'n'paste)
On of the most important parts of froxlor's setup-process. Froxlor shows you all needed commands and configuration files in the panel. You just have to copy and paste. Note: Please keep in mind that froxlor just facilitates your work, but it cannot think for itself (yet). Please read carefully (you actually just doing that, thanks) and do things slowly.

To configure the services, login as admin and click on 'Configuration' in the menu on the left side. Then select the distribution you are using from the list. The second select-box shows the different services, you should go through them all, one after another. For each service from the second select-box there will be different possibilities in the third select-box. Froxlor-defaults are marked (e.g. Courier and Dovecot [default]). You do not need all of these entries but as admin you should know which ones you need :)

### Need help?
If you run into any problems or have difficulties understanding / setting-up / whatever - don't hesitate to contact us either via e-mail ([team@froxlor.org](mailto:team@froxlor.org)) or the preferred way: on Discord ([https://discord.froxlor.org](https://discord.froxlor.org)) and our forums ([https://forum.froxlor.org/](https://forum.froxlor.org/))
