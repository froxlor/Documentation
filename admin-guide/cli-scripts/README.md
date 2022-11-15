# Froxlor console scripts (CLI)

All froxlor cli interactions can be accessed using the **`bin/froxlor-cli`** console command. The possible actions are listed below.

| Action                                        | Description                                            |
|-----------------------------------------------|--------------------------------------------------------|
| [froxlor:api-call](#api-call)                 | Run an API command as given user                       |
| [froxlor:config-services](#config-services)   | Configure system services                              |
| [froxlor:cron](#cron)                         | Regulary perform tasks created by froxlor              |
| [froxlor:install](#install)                   | Installation process to use instead of web-ui          |
| [froxlor:php-sessionclean](#php-sessionclean) | Clean old php-session files from tmp folder            |
| [froxor:switch-server-ip](#switch-server-ip)  | Easily switch IP addresses e.g. after server migration |
| [froxlor:update](#update)                     | Check for newer version and update froxlor             |
| [froxlor:user](#user)                         | Various user actions                                   |

<h2 id="api-call">1. Run an API command as given user</h2>

**Usage:** `bin/froxlor-cli froxlor:api-call [options] [--] <user> <api-command> [<parameters>]`

**Arguments:**

| Argument      | Description                                          |
|---------------|------------------------------------------------------|
| `user`        | Loginname of the user you want to run the command as |
| `api-command` | The command to execute in the form "Module.function" |
| `parameters`  | Paramaters to pass to the command as JSON array      |


**Options:**

| Option              | Description                                                                         |
|---------------------|-------------------------------------------------------------------------------------|
| `-s, --show-params` | Show possible parameters for given api-command (given command will *not* be called) |

<h2 id="config-services">2. Configure system services</h2>

**Usage:** `bin/froxlor-cli froxlor:config-services [options]`

**Options:**

| Option                                  | Description                                                                                                                                    |
|-----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `-c, --create`                          | Create a services list configuration for the --apply option.                                                                                   |
| `-a, --apply=APPLY`                     | Configure your services by given configuration file/string. To create one run the command with the --create option.                            |
| `-l, --list`                            | Output the services that are going to be configured using a given config file (--apply option). No services will be configured.                |
| `-d, --daemon=DAEMON`                   | When used with --apply you can specify one or multiple daemons. These will be the only services that get configured. (multiple values allowed) |
| `-i, --import-settings=IMPORT-SETTINGS` | Import settings from another froxlor installation. This can be done standalone or in addition to --apply.                                      |
| `-A, --yes-to-all`                      | Install packages without asking questions (Debian/Ubuntu only currently)                                                                       |

<h2 id="cron">3. Regulary perform tasks created by froxlor</h2>

**Usage:** `bin/froxlor-cli froxlor:cron [options] [--] [<job>...]`

**Arguments:**

| Argument | Description   |
|----------|---------------|
| `job`    | Job(s) to run |

**Options:**

| Option                    | Description                                                                                                                                        |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `-r, --run-task=RUN-TASK` | Run a specific task [1 = re-generate configs, 4 = re-generate dns zones, 10 = re-set quotas, 99 = re-create cron.d-file] (multiple values allowed) |
| `-f, --force`             | Forces re-generating of config-files (webserver, nameserver, etc.)                                                                                 |
| `-d, --debug`             | Output debug information about what is going on to STDOUT.                                                                                         |
| `-N, --no-fork`           | Do not fork to background (traffic cron only).                                                                                                     |

<h2 id="install">4. Installation process to use instead of web-ui</h2>

**Usage:** `bin/froxlor-cli froxlor:install [options] [--] [<input-file>]`

**Arguments:**

| Argument     | Description                                                  |
|--------------|--------------------------------------------------------------|
| `input-file` | Optional JSON array file to use for unattended installations |

**Options:**

| Option                                                    | Description                                                                  |
|-----------------------------------------------------------|------------------------------------------------------------------------------|
| `-p, --print-example-file`                                | Outputs an example JSON content to be used with the input file parameter     |
| `-c, --create-userdata-from-str=CREATE-USERDATA-FROM-STR` | Creates lib/userdata.inc.php file from string created by web-install process |

<h2 id="php-sessionclean">5. Clean old php-session files from tmp folder</h2>

**Usage:** `bin/froxlor-cli froxlor:php-sessionclean [<max-lifetime>]`

**Arguments:**

| Argument       | Description                                                                                                     |
|----------------|-----------------------------------------------------------------------------------------------------------------|
| `max-lifetime` | The number of seconds after which data will be seen as "garbage" and potentially cleaned up. Defaults to "1440" |

<h2 id="switch-server-ip">6. Easily switch IP addresses e.g. after server migration</h2>

If you ever switch your servers IP address or migrate to another server, you can invoke this script to switch your old IP's with the new IP's in your froxlor installation.

**Usage:** `bin/froxlor-cli froxlor:switch-server-ip [options]`

**Options:**

| Option                | Description                                                                                               |
|-----------------------|-----------------------------------------------------------------------------------------------------------|
| `-s, --switch=SWITCH` | Switch IP-address pair. A pair is separated by comma. For example: --switch=A,B (multiple values allowed) |
| `-l, --list`          | List all IP addresses currently added for this server in froxlor                                          |

**Example usage:**

Let's say your server currently has the IP address `123.10.20.30`. You have migrated to a new provider and get a new IP address assigned, let's say `234.30.20.10`. To switch these for your froxlor installation, run the following command:

```shell
bin/froxlor-cli froxlor:switch-server-ip --switch=123.10.20.30,234.30.20.10
```

<h2 id="update">7. Check for newer version and update froxlor</h2>

**Usage:** `bin/froxlor-cli froxlor:update [options]`

**Options:**

| Option                 | Description                                                                                                   |
|------------------------|---------------------------------------------------------------------------------------------------------------|
| `-c, --check-only`     | Only check for newer version and exit                                                                         |
| `-m, --mail-notify`    | Additionally inform administrator via email if a newer version was found                                      |
| `-A, --yes-to-all`     | Do not ask for download, extract and database-update, just do it (if not --check-only is set)                 |
| `-i, --integer-return` | Return integer whether a new version is available or not (implies --check-only). Useful for programmatic use. |

<h2 id="user">8. Various user actions</h2>

**Usage:** `bin/froxlor-cli froxlor:user [options] [--] <user> [<admin>]`

**Arguments:**

| Argument | Description                                                       |
|----------|-------------------------------------------------------------------|
| `user`   | Loginname of the target user                                      |
| `admin`  | Loginname of the executing admin/reseller user [default: "admin"] |

**Options:**

| Option                | Description                                      |
|-----------------------|--------------------------------------------------|
| `-u, --unlock`        | Unlock user after too many failed login attempts |
| `-p, --change-passwd` | Set new password for given user                  |
| `-s, --show-info`     | Output information details of given user         |
