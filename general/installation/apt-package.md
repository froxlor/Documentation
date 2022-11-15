# Install froxlor on Debian/Ubuntu using apt

froxlor provides packages for Debian and Ubuntu systems via its own repository.

## 1. Edit apt sources

In order to install froxlor on Debian we need to add the repositories first and add our GPG key which is used to sign the repository files (key: `FD88018B6F2D5390D051343FF6B4A8704F9E9BBC`)

### Debian
````shell
apt-get -y install apt-transport-https lsb-release ca-certificates curl
curl -sSLo /usr/share/keyrings/deb.froxlor.org-froxlor.gpg https://deb.froxlor.org/froxlor.gpg
sh -c 'echo "deb [signed-by=/usr/share/keyrings/deb.froxlor.org-froxlor.gpg] https://deb.froxlor.org/debian $(lsb_release -sc) main" > /etc/apt/sources.list.d/froxlor.list'
````

### Ubuntu
````shell
apt-get -y install apt-transport-https lsb-release ca-certificates gnupg
curl -sSLo /usr/share/keyrings/deb.froxlor.org-froxlor.gpg https://deb.froxlor.org/froxlor.gpg
sh -c 'echo "deb [signed-by=/usr/share/keyrings/deb.froxlor.org-froxlor.gpg] https://deb.froxlor.org/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/froxlor.list'
````

## 2. Update package list

To update your package list and upgrade your system to latest, enter the following command:

````shell
apt-get update && apt-get upgrade
````

## 3. Install froxlor

Install froxlor together with all needed packages (e.g. webserver):

````shell
apt-get install froxlor
````

## 4. Setup MySQL

Log in to MySQL to create a new privileged user (`froxroot`) which is required for froxlor to add/delete mysql users and databases. You need to specify this user as the _MySQL root user_ in the web-installer.

````
mysql -u root
````

To create the users, we execute the following commands, **please change the default passwords**:

````
CREATE USER 'froxroot'@'localhost' IDENTIFIED BY 'CHANGEM3';
GRANT ALL PRIVILEGES ON *.* TO 'froxroot'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
````

## 5. Proceed with installation and configuration

Now follow the general installation documentation starting with **step 3**: [Install froxlor from tarball](tarball.html#3-installation-via-web-installer)
