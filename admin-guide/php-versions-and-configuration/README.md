# PHP Versions & Configuration

:::tip PLEASE NOTE
Custom configurations and multiple php versions are only supported when using **PHP-FPM** or **FCGID** as php-interface. It is not possible using **mod_php** which should be avoided due to security reasons.
:::

## 1. PHP configurations / php.ini

You can manage multiple php configurations (php.ini) for your customers domains. Besides the _main_ ini-settings, depending on your php interface, you can adjust the process-manager settings, enable slowlog, pass Authorization-header (**FPM**) or the used php-binary and process/requests settings (**FCGID**) and more.


<UiBrowser :src="$withBase('/img/frx_php_configs.png')" alt="PHP configurations"/>


### 1.2 Properties of PHP configuration

#### 1.2.1 PHP-FPM

##### PHP-FPM config

Select the desired php-version from the selectbox. To manage different version, see [2. PHP-FPM versions](#_2-php-fpm-versions) below.

##### Enable slowlog (per domain)

If enabled, a slow-log for each domain with this configuration assigned will be created in the logfile directory (read from settings) with the name `[domain]-php-slow.log`.

##### Add "-pass-header Authorization" / "CGIPassAuth On" to vhosts

::: tip NOTE
This is available for apache only
:::

If enabled, enables passing HTTP authorization headers to scripts as CGI variables.

##### Override FPM-daemon settings

If enabled, the process-manager related settings inherited from the selected php-version will be overwritten. The affected fields are marked with the note <span class="text-error">Only used if "Override FPM-daemon settings" is set to "Yes"</span>

##### php.ini settings

You can set and adjust desired `php.ini` directives and values as needed/required. There are also some **replacer variables** that can be used to further customize the config based on customer/domain values.

<UiBrowser :src="$withBase('/img/frx_phpini_vars.png')" alt="php.ini replacer variables"/>

::: warning ATTENTION
If you add new directives you need to validate that they are added to the list of available directives in `Settings  » PHP-FPM` as the generated fpm-pool configuration files need a mapping of the directive to the corresponding section, e.g. **php_flags**, **php_values**, **php_admin_flags** and **php_admin_values**
:::

#### 1.2.2 FCGID

::: tip NOTE
FCGID is available for apache only
:::

##### PHP Binary

Path including the binary of the corresponding php-cgi version, e.g.`/usr/bin/php-cgi` or `/usr/bin/php8.1-cgi`

##### File extensions

Allowed file-extensions that should be passed to the fcgid-handler, default is `php`.

##### PHP Processes for this domain

Define the value for `PHP_FCGI_CHILDREN` or leave empty for default (see `Settings  » FCGID`)

##### Maximum php requests for this domain

Define the value for `PHP_FCGI_MAX_REQUESTS`. The maximum requests allowed on a per domain base, default can be adjusted in `Settings  » FCGID`

##### Umask

This value sets the desired default permissions for created files by the php-handler, the default value for this can also be globally set in `Settings  » FCGID`.

##### php.ini settings

You can set and adjust desired php.ini directives and values as needed/required. There are also some **replacer variables** that can be used to further customize the config based on customer/domain values.

<UiBrowser :src="$withBase('/img/frx_phpini_vars.png')" alt="php.ini replacer variables"/>

## 2. PHP-FPM versions

Froxlor allows management of multiple php-fpm versions. For Debian/Ubuntu this can easily be achieved by using the deb.sury.org repository, or ppa:ondrej/php on ubuntu respectively. Then simply install the desired version with the required/needed extensions.

<UiBrowser :src="$withBase('/img/frx_fpm_versions.png')" alt="Manage different PHP versions"/>

### 2.1 Properties of PHP-FPM versions

#### php-fpm restart command

Enter the service/systemctl command to restart the specific php-fpm version, e.g. `service php8.1-fpm restart`

#### Configuration directory of php-fpm

This is the target directory where all the domains pool-configs will be generated into. This is a froxlor-managed directory, you should not create custom files in there as they will get deleted by the cronjob.
To find the correct folder, check the `php-fpm.conf` file for something like this (default):`include=/etc/php/8.1/fpm/pool.d/*.conf`. This means the configuration directory should be set to `/etc/php/8.1/fpm/pool.d/`.

#### Process manager control (pm)

Choose how the process manager will control the number of child processes. Possible values: static, ondemand, dynamic. For more information, see [https://www.php.net/manual/en/install.fpm.configuration.php](https://www.php.net/manual/en/install.fpm.configuration.php)

#### Allowed extensions

Limits the extensions of the main script FPM will allow to parse. This can prevent configuration mistakes on the webserver side. You should limit FPM only to the .php extensions to prevent malicious users to use other extensions to execute php code. 

#### Custom configuration

Add custom configuration to each PHP-FPM pool-configuration, for example `pm.status_path = /status` for monitoring. The replacer variables below can be used in this setting. Possible values can be found on [https://www.php.net/manual/en/install.fpm.configuration.php](https://www.php.net/manual/en/install.fpm.configuration.php) (note that froxlor generates the required ones for you automatically).

::: warning ATTENTION
The config won't be checked for any errors. If it contains errors, PHP-FPM might not start again!
:::


<UiBrowser :src="$withBase('/img/frx_fpm_vars.png')" alt="Custom config replacer variables"/>

