---
layout: page
title: Configuration
has_children: true
nav_order: 3
has_toc: false
---

# Configuration

## 1. Introduction

<div class="bg-yellow-200 text-grey-dk-300 p-3 mt-3"><b>Important:</b> It is essential that you verify and adjust the settings prior to configuration as some commands and templates will change according to your settings.</div>

To configure the required services that will be running in your server, e.g. webserver and mailserver, froxlor provides simple templates/commands based on the system-default config-files of the used distribution. These steps will also create required directories and users according to your settings.

## 2.1 Automatically from CLI

If you just want to finish up quickly and don't care about the commands executed and files created (it's a good way to learn and get the setup to know!) froxlor can automatically execute the required commands for you. For this simply run the following script as root-user in the shell of your server:

```shell
php /var/www/froxlor/install/scripts/config-services.php --froxlor-dir=/var/www/froxlor/ --create
```

You will be prompted to select your Distribution/OS, followed by the webserver you want to use, the mail-services and ftp-service and at last, the system-services. If a specific service-category should not be installed/configured, enter `x` and continue.

For the system services, the `cron` service will be included whether you select it or not, as it is required in any way for froxlor to work.
Selecting `logrotate` is advisable. If you enabled FCGID or PHP-FPM in the settings, you should of course select the corresponding service here too.

You can always re-run the `config-services.php` script to (re-)configure all or specific services. Just run the script with the `--help` parameter to see all the possibilites.

## 2.2 Manually via copy'n'paste

To manually configure the services, navigate to `Configuration` on the left side menu as admin-user in froxlor. First, select your distribution/OS from the top selectbox, then select the service you want to configure from the second selectbox. Lastly, select which service-daemon to show the commands for and copy and paste the shown commands one after another in your servers shell as root-user.

For some services it is required to set the **MySQL password** of the unprivileged database user you have specified in the installation process and click _Apply_. If you skip this, you will manually need to replace the placeholder `FROXLOR_MYSQL_PASSWORD` in the configuration-files with the corresponding password.

If this is the first time you are configuring the server, then running the commands for `Other (system) => Cronjob for froxlor` is required in order for froxlor to work (e.g. creating customers etc. when added via webinterface).

## 3. Different PHP interfaces (optional)

* [Apache2 / FCGID](/general/configuration/fcgid.html)
* [Apache2 & nginx / PHP-FPM](/general/configuration/php-fpm.html)

## 4. Need help?
If you run into any problems or have difficulties understanding / setting-up / whatever - don't hesitate to contact us either via e-mail ([team@froxlor.org](mailto:team@froxlor.org)) or the preferred way: on Discord ([https://discord.froxlor.org](https://discord.froxlor.org)) and our forums ([https://forum.froxlor.org/](https://forum.froxlor.org/))
