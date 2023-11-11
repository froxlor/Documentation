# Quick Start Guide

In this tutorial we will create a simple froxlor installation, i.e. a single host installation with everything running on a single Linux machine.

* Apache 2.4 with PHP-FPM and MariaDB
* ProFTPd as FTP server
* Postfix and Dovecot as mail server
* Automatic SSL certificates with Let's Encrypt

If you want to deviate from the default installation, you can customize the installation with the Advanced Options described below.

## Supported platforms

froxlor provides packages from the following Linux distributions and architectures:

| Platform | x86_64 / amd64                                                       |
|----------|----------------------------------------------------------------------|
| Ubuntu   | <span class="text-success"><i class="fa fa-circle-check"></i></span> |
| Debian   | <span class="text-success"><i class="fa fa-circle-check"></i></span> |
| Gentoo   | check our documentation                                              |

## Starting the froxlor installation

Everything you need for froxlor can be installed with one command:

```shell
$ curl -fsSL https://get.froxlor.org | bash
```

Within a few minutes the installation is completed and the passwords for the database and the admin portal are displayed in the CLI.

Please **note** the passwords, as they will not be displayed later.

The installation is now complete and all services are configured.

#### Optional: Advanced options

If you want to install other services than the default installation, you can add more arguments to the above command. Please note that you must do this before the first installation.

| Service    | Flag                           | Default  | Description                                                   |
|------------|--------------------------------|----------|---------------------------------------------------------------|
| Apache 2.4 | --webserver=apache24           | Yes      | This enables Apache as webserver                              |
| Nginx      | --webserver=nginx              |          | This enables Nginx as webserver                               |
| MySQL      | --mysql=default-mysql-server   | Yes      | This will install MySQL as backend                            |
| MariaDB    | --mysql=mariadb                |          | This will install MariaDB as backend                          |
| Hostname   | --hostname=froxlor.example.com | Hostname | This should be set to the Server Hostname (FQDN)              |
| IPv4       | --ipv4=xxx.xxx.xxx.xxx         | DNS      | This should be set the public IPv4                            |
| IPV6       | --ipv6=xxxx:xxxx:xxxx:xxxx::x  | DNS      | This should be set the public IPv6                            |
| Unattended | --unattended                   |          | This should skip all prompts as long as all variables are set |

The command then looks like this, notice the two dashes (--) which are telling bash to not process anything following it as arguments to bash:

```shell
$ curl -fsSL https://get.froxlor.org | bash -s -- --unattended
```

## Further information

On the following pages you will find more information about installation, commissioning and maintenance.

* perform installation manually
* use another operating system

## Need help?
If you run into any problems or have difficulties understanding / setting-up / whatever - don't hesitate to contact us either via e-mail ([team@froxlor.org](mailto:team@froxlor.org)) or the preferred way: on Discord ([https://discord.froxlor.org](https://discord.froxlor.org)) and our forums ([https://forum.froxlor.org/](https://forum.froxlor.org/))
