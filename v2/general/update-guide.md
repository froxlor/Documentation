# Update Guide

## 1. Backup

Before updating, make sure to backup the froxlor database in case something unexpected happens. By default, the database name is froxlor. If unsure of the details, you can open the `froxlor/lib/userdata.inc.php` file to get all the necessary information.

```shell
mysqldump -u root -p froxlor > /tmp/backup_froxor-YYYYMMDD.sql
```

Also backup your old **userdata.inc.php** from the `froxlor/lib/` folder:

```shell
cp /var/www/html/froxlor/lib/userdata.inc.php /tmp/
```

## 2.1 Update via Webinterface

::: tip NOTE
The web-updater is disabled by default. To enable it, edit `lib/config.inc.php` and set `enable_webupdate` to `true`
:::

Log in as admin and select `System -> Auto-Update` from the left side menu. The update wizard will inform you about the latest version, download and extract the new files and redirect you to the update-process.

## 2.2 Update via CLI

To update via command line, simply run the follow command. It will check for the latest version, download and extract it. To skip confirmation questions for the steps, simply pass the `--yes-to-all` parameter.

```shell
cd /var/www/html/froxlor
bin/froxlor-cli froxlor:update
```

See the [froxlor console scripts](../admin-guide/cli-scripts#froxlor-update) page for detailed information.

## 2.3 Manual Update

The latest version of froxlor is always available via [https://files.froxlor.org/releases/froxlor-latest.tar.gz](https://files.froxlor.org/releases/froxlor-latest.tar.gz)

### 2.3.1 Backup credentials, download and extract

```shell
# change directory
cd /var/www/html
# backup userdata.inc.php (mysql credentials)
cp froxlor/lib/userdata.inc.php /tmp/
# remove old files
rm -rf froxlor/

# download latest froxlor version
wget https://files.froxlor.org/releases/froxlor-latest.tar.gz
# or download specific version
# wget https://files.froxlor.org/releases/froxlor-x.y.z.tar.gz

# note: the archive contains the folder 'froxlor' already!
tar xvfz froxlor-latest.tar.gz
# remove archive
rm froxlor-latest.tar.gz

# put back userdata.inc.php
mv /tmp/userdata.inc.php froxlor/lib/
```

### 2.3.2 Correct ownership

In order for the webserver to be able to server the files, the owner must be set correctly. 

::: tip NOTE
If you’re using FCGID/PHP-FPM for the froxlor-vhost, you have to replace the webserver-user with your local froxlor-user.
:::

```shell
chown -R [webserver-user]:[webserver-user] /var/www/html/froxlor/
```

### 2.3.3 Database updates

Now open froxlor in your browser and login with the admin-account. You will be prompted to run the required database-updates. In case of auto-update, you will be redirected to the corresponding update page.

Keep in mind that customers cannot login to your froxlor and the cronjob won’t regenerate any configfiles until the database is up-to-date with the new version.