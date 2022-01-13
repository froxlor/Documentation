---
layout: page
title: Gentoo
parent: Installation
nav_order: 3
---

# Install froxlor on Gentoo

## 1. Local portage overlay

### 1.1 Using layman >= 1.3.0

In order to install froxlor on Gentoo we need to add the layman repositories first. Assuming you have *layman* installed already, edit `/etc/layman/layman.cfg` and *add* the following line to the *overlays* section:

    http://files.froxlor.org/gentoo/repositories.xml

Then, let layman fetch (-f) our repository and add (-a) it to your local overlay:

```shell
layman -f && layman -a froxlor
```

### 1.2 Custom local overlay (no layman)

Create directory for your overlay:

```shell
mkdir -p /usr/local/overlays
```

Now clone our gentoo-ebuild overlay with GIT:

```shell
git clone https://github.com/froxlor/Gentoo-Ebuild.git /usr/local/overlays/froxlor
```

And finally, let your system know about your local overlay by adding the following line to your `/etc/portage/make.conf`

    PORTDIR_OVERLAY="/usr/local/overlays/froxlor"

## USE-flags for froxlor-ebuild

The ebuild for froxlor introduces some USE-flags to customize your froxlor-installation:

| USE-flag | Default value | Description |
| -------- | ------------- | ----------- |
|**awstats**|Off|Use awstats for traffic-statistics instead of webalizer|
|**bind**|Off|Enables support for bind9 nameserver|
|**dovecot**|***On***|Enables usage of dovecot mailserver instead of courier|
|**fcgid**|Off|Enables FCGID usage for apache2|
|**ftpquota**|Off|Enables +softquota for proftpd and patches config|
|**fpm**|Off|Enables PHP-FPM usage for webservers|
|**lighttpd**|Off|Use lighttpd-webserver instead of apache2 (USE-flag 'fcgid' will be ignored)|
|**log**|***On***|Enables the froxlor logging feature (syslog, mysql, file)|
|**mailquota** |Off|Enables usage of mailquota|
|**nginx** |Off|Use nginx-webserver instead of apache2 (USE-flag 'fcgid' will be ignored)|
|**pdns**|Off|Enables powerdns instead of bind as nameserver|
|**pureftpd**|Off|Use pureftpd instead of proftpd as ftp-server|
|**quota**|Off|Install quotatool if you intend to use quota|
|**ssl**|Off|Enables ssl for the froxlor-vhost and customers|

If you want to use **nginx** and **ssl** for example, add the following line to your `/etc/portage/packages.use`:

    www-apps/froxlor nginx ssl

## 3. Emerge froxlor

To install froxlor via emerge, just run the following command as root. Emerge will install all the dependencies for you.

```shell
emerge froxlor
```

## 4. Configure services

**PLEASE NOTE** You have to configure **mysql** if you haven't done that yet **before** configuring froxlor

To do so, just run:

```shell
emerge --config dev-db/mariadb
```

## 5. Proceed with installation and configuration

Now follow the general installation documentation starting with **step 3**: [Install froxlor from tarball](/general/installation/tarball.html#3-installation-via-web-installer)
