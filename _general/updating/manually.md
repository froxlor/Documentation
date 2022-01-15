---
layout: page
title: Updating manually
parent: Updating
---

# Updating froxlor manually

## 1. Backup

Ensure you backup all your data in case something does not work as expected.

(Database would be 'froxlor' in most of the cases)

````shell
mysqldump -u root -p [database] > backup_[database].sql
````

Now backup your old *userdata.inc.php** from the `lib/` folder

````shell
cp /var/www/froxlor/lib/userdata.inc.php /tmp/
````


## 2. Extract new files

Now that we have all important data backed up, we can safely remove the old files, and replace them with the new ones.

Download the latest version of froxlor from [https://files.froxlor.org/releases/](https://files.froxlor.org/releases/)

````shell
rm -rf /var/www/froxlor/*

# change directory
cd /var/www/

# download latest froxlor version
wget https://files.froxlor.org/releases/froxlor-latest.tar.gz

# or download specific version
# wget https://files.froxlor.org/releases/froxlor-0.x.y.tar.gz

# the content should go in to the folder /var/www/froxlor 
# note: the archive contains the folder 'froxlor' already!
tar xvfz froxlor-latest.tar.gz

# remove archive
rm froxlor-latest.tar.gz
````


## 3. Move back userdata.inc.php

````shell
# move back the userdata.inc.php file
mv /tmp/userdata.inc.php /var/www/froxlor/lib/
````

## 4. Correct permissions

In order for the webserver to be able to server the files, the owner must be set correctly.
*Note*: If you're using FCGID/PHP-Fpm for the froxlor-Vhost, you have to replace the webserver-user with your local froxlor-user.

````shell
chown -R [webserver-user]:[webserver-user] /var/www/froxlor/
````

*(the 'webserver-user' on most systems is 'www-data' or 'apache')*

## 5. Login to froxlor

Now open froxlor in your browser and login with the admin-account. You will be prompted to run the database-update.
