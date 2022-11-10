# Databases

To manage your databases or create a new one, click on "_**MySQL » Databases**_" in the sidebar and your databases will be shown.

## Create new database

At the top right on your Databases overview there is a button "_**Create database**_" which opens the from to create a new database.

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-45-01%20Froxlor.png" alt="Database overview"/>

Now you have the possibility to create the database and define a description and a password.

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-52-37%20Froxlor.png" alt="Create new database"/>

## Access a existing database

Databases can usually be managed with phpMyAdmin, your Reseller or Admin should provide a web interface and it appears in the sidebar under "_**MySQL > phpMyAdmin**_".

To connect your software or a forum or CMS to it you have to specify the following for the database connection:

* Port: `3306`
* Hostname: `127.0.0.1`
* Database: `the selected database name` in our example **web1sql1**
* Username: `the selected database name` in our example **web1sql1**
* Password: `the selected database password`

## Update existing database

To update the database password or description, you have to choose your database in your overview list.

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-53-04%20Froxlor.png" alt="Database overview"/>

Click on the [fa icon=fa-edit /] icon to edit the database.

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-53-27%20Froxlor.png" alt="Edit existing database"/>

## Delete existing database

If you want to delete your database, you have to click on the red <span style="color: red">[fa icon=fa-trash /]</span> icon.

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-53-04%20Froxlor.png" alt="Database overview"/>

You will now be asked if you want to delete the database, you must confirm this with "_**Yes**_".

<UiBrowser src="/img/Screenshot%202022-05-23%20at%2010-54-57%20Froxlor.png" alt="Security question"/>
