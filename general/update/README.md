# Update/upgrade froxlor

## 1. Backup your current database

Ensure to backup the froxlor-database in case something does not work as expected. By default, the databse name is `froxlor`. If you are unsure, open the `froxlor/lib/userdata.inc.php` file. It contains the necessary information.

````shell
mysqldump -u root -p froxlor > /tmp/backup_froxor-YYYYMMDD.sql
````

Also backup your old *userdata.inc.php** from the `froxlor/lib/` folder:

````shell
cp /var/www/froxlor/lib/userdata.inc.php /tmp/
````

## 2.1 Using autoupdate from the webinterface

Login as admin-user and navigate to `Auto-Update` on the main navigation.

:::tip NOTE
If there is no <code>Auto-Update</code> menu entry ensure that you have <b>change_serversettings</b> permissions and that the <b>php-zip</b> extension is installed and loaded.
:::

Follow the instructions on the screen. At the end, you will be prompted with the database-update procedure as described in [3. Database update](#_3-database-update)

## 2.2 Manually download and extract new version

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

### 2.2.1 Move back userdata.inc.php

````shell
# move back the userdata.inc.php file
mv /tmp/userdata.inc.php /var/www/froxlor/lib/
````

### 2.2.2 Correct permissions

In order for the webserver to be able to server the files, the owner must be set correctly.
*Note*: If you're using FCGID/PHP-FPM for the froxlor-vhost, you have to replace the webserver-user with your local froxlor-user.

````shell
chown -R [webserver-user]:[webserver-user] /var/www/froxlor/
````

*(the 'webserver-user' on most systems is 'www-data' or 'apache')*

## 3. Database update

Now open froxlor in your browser and login with the admin-account. You will be prompted to run the required database-updates. In case of auto-update, you will be redirected to the corresponding update page.

Keep in mind that customers cannot login to your froxlor and the cronjob won't regenerate any configfiles until the database is up-to-date with the new version.
