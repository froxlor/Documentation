---
layout: default
title: Home
---

# Overview

Froxlor is the lightweight server management software for your needs.

Developed by experienced server administrators, this open source (GPL) panel simplifies the effort of managing your hosting platform.

## Installation

For detailed install instructions, follow the guide for your operating system.

|            Type            |                   Install                     |                       Update                      |
|:--------------------------:|:---------------------------------------------:|:-------------------------------------------------:|
| Tarball (tar.gz)           | [installation](/general/installation/tarball.html) | [update](/general/updating/manually.html)              |
| Debian (deb)               | [installation](/general/installation/debian.html)  | `apt-get update && apt-get upgrade`               |
| Ubuntu (deb)               | [installation](/general/installation/ubuntu.html)  | `apt-get update && apt-get upgrade`               |
| Gentoo (ebuild)            | [installation](/general/installation/gentoo.html)  | `emerge --sync && emerge -uDN @world`             |
| Git source (testing only!) | [installation](/general/installation/source.html)  | `cd /var/www/froxlor; git pull; composer install` |

## Configuration of services

Currently not documented. 

## Different PHP interfaces (optional)

* [Apache2 / FCGID](/general/configuration/fcgid.html)
* [Apache2 & nginx / PHP-FPM](/general/configuration/php-fpm.html)
