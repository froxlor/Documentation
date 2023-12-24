# Installation

## 1. Requirements

::: warning NOTE
Due to froxlor relying on configurations to integrate itself to the system (mail-, ftp-, webserver-services) we
recommend installing on one of the supported distributions: __Debian__ or __Ubuntu__.
:::

| Component     |                                                          Info |
|---------------|--------------------------------------------------------------:|
| Webserver     |                                                apache2, nginx |
| PHP           |                                                 7.4 up to 8.2 |
| PHP extension | session, ctype, xml, filter, posix, mbstring, curl, gmp, json |
| Database      |                                    MySQL-5.7+ / MariaDB 10.3+ |

## 2. Installation methods

For detailed install instructions, follow the guide for your operating system.

* [Manual via tarball archive](tarball.html)
* [Debian/Ubuntu using apt](apt-package.html) *(recommended)*
* [From sources using git](source.html)