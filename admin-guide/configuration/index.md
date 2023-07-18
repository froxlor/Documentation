# Configuration

## 1. Introduction

::: warning ATTENTION
It is essential that you verify and adjust the settings prior to configuration as some commands and templates will change according to your settings. See [settings admin-guide](../settings) for more.
:::

To configure the required services that will be running in your server, e.g. webserver and mailserver, froxlor provides simple templates/commands based on the system-default config-files of the used distribution. These steps will also create required directories and users according to your settings.

## 2.1 Automatically from CLI

If you just want to finish up quickly and don’t care about the commands executed and files created (it’s a good way to learn and get the setup to know!) froxlor can automatically execute the required commands for you. For this simply run the following script as root-user in the shell of your server:

```bash
# change to your froxlor installation directory
cd /var/www/html/froxlor
# run the config-services command
bin/froxlor-cli froxlor:config-services --create
```

You will be prompted to select your Distribution/OS, followed by the webserver you want to use, the mail-services and ftp-service and at last, the system-services. If a specific service-category should not be installed/configured, enter x and continue.

For the system services, the cron service will be included whether you select it or not, as it is required for froxlor to work. Selecting logrotate is advisable. If you enabled FCGID or PHP-FPM in the settings, you should of course select the corresponding service here too. See also [PHP-FPM guide](php-fpm) or [FCGID guide](fcgid)

You can always re-run the `froxlor:config-services` command to (re-)configure all or specific services. Just run the command with the --help parameter to see all the possibilities or see [here](../cli-scripts#config-services).

## 2.2 Via webinterface

For a more visually aided configuration, navigate to `Configuration` on the left-side menu when logged in as admin. The server's distribution should be preselected after the installation, if nothing is selected, you will be prompted to select the target distribution.

<UiBrowser :src="('/img/frx_cfg_seldist.png')" alt="Select the distribution of your server"/>


Is your distribution selected, you will see an overview of the available services configuration templates:

<UiBrowser :src="('/img/frx_cfg_services.png')" alt="Available services to configure"/>


Select the services you want to configure or reconfigure. Froxlor also provides  a shortcut to select all recommended/required services based on your current settings. See `Select recommended` button on the bottom right.
You can also review every command and action that will be executed for each service by clicking on the <i class="fa fa-file-code"></i> icon right to the service.

After clicking **Proceed** you will be prompted with a generated command which needs to be executed as root user on your server:

<UiBrowser :src="('/img/frx_cfg_finish.png')" alt="Apply the configuration for services"/>


You can also **Export** the selection to a JSON file which can be used for the `froxlor:config-services` command, see [Froxlor console scripts](../cli-scripts#config-services) for more information.
