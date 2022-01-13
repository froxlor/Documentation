---
layout: page
title: Gentoo
parent: Installation
---

# Install Froxlor on Gentoo

## 1. Local portage overlay

### 1.1 Using layman >= 1.3.0

In order to install Froxlor on Gentoo we need to add the layman repositories first. Assuming you have *layman* installed already, edit `/etc/layman/layman.cfg` and add the following line to the *overlays* section:

````shell
http://files.froxlor.org/gentoo/repositories.xml
````
Then, let layman fetch (-f) our repository and add (-a) it to your local overlay:

````shell
layman -f && layman -a froxlor
````

### 1.2 Custom local overlay (no layman)

Create directory for your overlay:

````shell
mkdir -p /usr/local/overlays
````

Now clone our gentoo-ebuild overlay with GIT:

````shell
git clone git://git.froxlor.org/froxlor-gentoo.git /usr/local/overlays/froxlor
````

And finally, let your system know about your local overlay by adding the following line to your /etc/portage/make.conf

````shell
PORTDIR_OVERLAY="/usr/local/overlays/froxlor"
````

## USE-flags for Froxlor-ebuild

The ebuild for Froxlor introduces some USE-flags to customize your froxlor-installation:

|    USE-flag   | Default value |                                    Description                                   |
|:-------------:|:-------------:|:--------------------------------------------------------------------------------:|
| aps           | Off           | Enables the Application Packaging Standard                                       |
| autoresponder | Off           | Enables usage of autoresponder                                                   |
| bind          | Off           | Enables support for bind9 nameserver                                             |
| domainkey     | Off           | Enables domain-key entries in domain-zonefiles using opendkim (requires '+bind') |
| dovecot       | Off           | Enables usage of dovecot mailserver instead of courier                           |
| fcgid         | Off           | Enables FCGID usage for apache2                                                  |
| ftpquota      | Off           | Enables +softquota for proftpd and patches config                                |
| fpm           | Off           | Enables PHP-FPM usage for webservers                                             |
| lighttpd      | Off           | Use lighttpd-webserver instead of apache2 (USE-flag 'fcgid' will be ignored)     |
| log           | On            | Enables the froxlor logging feature (syslog, mysql, file)                        |
| mailquota     | Off           | Enables usage of mailquota                                                       |
| nginx         | Off           | Use nginx-webserver instead of apache2 (USE-flag 'fcgid' will be ignored)        |
| perl          | Off           | Enables perl for customers                                                       |
| ssl           | Off           | Enables ssl for the froxlor-vhost and customers                                  |
| tickets       | On            | Enables the froxlor ticket support system                                        |

If you want to use lighttpd and ssl for example, add the following line to your `/etc/portage/packages.use`:

````shell
www-apps/froxlor lighttpd ssl
````

## 3. Emerge Froxlor

To install Froxlor via emerge, just run the following command as root. Emerge will install all the dependencies for you.

````shell
emerge froxlor
````

## 4. Configure services

**PLEASE NOTE:** You have to configure **mysql** if you haven't done that yet **before** configuring froxlor.

To do so, just run:

````shell
emerge --config =dev-db/mysql-5.x.x
````

## 5. Proceed with installation and configuration

Now follow the general installation documentation starting with **step 3**: [Install froxlor from tarball](/general/installation/tarball.html)
