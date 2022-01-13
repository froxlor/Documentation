---
layout: page
title: Ubuntu
parent: Installation
---

# Install Froxlor on Ubuntu

> *Tested on Ubuntu 20.04 LTS (Focal Fossa) with Froxlor 0.10.30*

## 1. Edit apt sources

In order to install Froxlor on Ubuntu we need to add the repositories first and add our GPG key which is used to sign the repository files (key: FD88018B6F2D5390D051343FF6B4A8704F9E9BBC)

````shell
apt-get -y install apt-transport-https lsb-release ca-certificates gnupg
wget -O - https://deb.froxlor.org/froxlor.gpg | apt-key add -
echo "deb https://deb.froxlor.org/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/froxlor.list
````

## 2. Update package list

To update your package list and upgrade your system to latest, enter the following command:

````shell
apt-get update && apt-get upgrade
````

## 3. Install Froxlor

Install Froxlor together with all needed packages (e.g. webserver):

````shell
apt-get install froxlor
````

## 4. Setup MySQL

Secure MySQL installation with mysql_secure_installation:

````
mysql_secure_installation
````

Log in to MySQL to create a new `froxlor` user, we will also set a new password for the `root` user.

````
mysql -u root
````

To create the users, we execute the following commands, **please change the default passwords**:

````
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'CHANGEM3';
CREATE USER 'froxlor'@'localhost' IDENTIFIED BY 'CHANGEM3';
GRANT ALL PRIVILEGES ON froxlor.* TO 'froxlor'@'localhost';
FLUSH PRIVILEGES;
EXIT;
````

## 5. Proceed with installation and configuration

Note: be sure your webserver's webroot is `/var/www/`. If not, just adjust the default-vhost config of the webserver to point to `/var/www/`, restart/reload webserver and keep reading :)

Now follow the general installation documentation starting with **step 3**: [Install froxlor from tarball](/general/installation/tarball.html)
