# Install froxlor from git source

## 1. Download/install git

In order to use git you have to install git on your target-system. See the official git-scm page for more: [https://git-scm.com/download/linux](https://git-scm.com/download/linux)

## 2. Get the files

Connect to a shell on your server and change the directory to `/var/www/`.

````shell
cd /var/www/
````

Now you can 'clone' the froxlor repository using the following command. It will store the files into the given target-directory froxlor (/var/www/froxlor/).

````shell
git clone https://github.com/Froxlor/Froxlor.git froxlor
````

## 3. Download dependencies

Froxlor 0.10.x is composer based. In order to use the development version you need to install [composer](https://getcomposer.org/download/).

````shell
cd /var/www/froxlor
composer install --no-dev
````

## 4. Proceed with installation and configuration

Now follow the general installation documentation starting with **step 2**: [Install froxlor from tarball](tarball.html#_2-set-permissions)
