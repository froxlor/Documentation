---
layout: page
title: Helper scripts
nav_order: 4
---

# Helper scripts

## 1. Services configuration

The script to autmatically configure the services and daemons can be found in `install/scripts/config-services.php` within your froxlor installation directory.

Parameters and what they do:

| Parameter | Description |
| --- | --- |
| `--create` | lets you create a services list configuration for the `--apply` command |
| `--apply` | configure your services by given configuration file. To create one run the `--create` command.<br>Example: `--apply=/path/to/my-config.json` or `--apply=http://domain.tld/my-config.json` |
| `--list-daemons` | Output the services that are going to be configured using a given config file. No services will be configured.<br>Example: `--apply=/path/to/my-config.json --list-daemons` |
| `--daemon` | When running `--apply` you can specify a daemon. This will be the only service that gets configured.<br>Example: `--apply=/path/to/my-config.json --daemon=apache24` |
| `--import-settings` | Import settings from another froxlor installation. This should be done prior to running `--apply` or alternatively in the same command together.<br>Example: `--import-settings=/path/to/Froxlor_settings-[version]-[dbversion]-[date].json` or `--import-settings=http://domain.tld/Froxlor_settings-[version]-[dbversion]-[date].json` |
| `--froxlor-dir` | path to froxlor installation, <b>required</b>.<br>Example: `--froxlor-dir=/var/www/froxlor/` |
| `--help | -h` | show help screen |


### Usage

See [Configuration Guide #2.1](/general/configuration/index.html#21-automatically-from-cli)

## 2. Switch IP addresses after migration / new server

If you ever switch your servers IP address or migrate to another server, you can invoke this script to switch your old IP's with the new IP's in your froxlor installation.

The script to switch ip-addresses can be found in `install/scripts/switch-server-ip.php` within your froxlor installation directory.

Parameters and what they do:

| Parameter | Description |
| --- | --- |
| `--switch` | Lets you switch ip-address A with ip-address B<br>Example: `--switch=A,B`<br>Example: `--switch="A1,B1 A2,B2 A3,B3 ..."` |
| `--list` | Show all currently used ip-addresses in froxlor |
| `--froxlor-dir` | path to froxlor installation, <b>required</b>.<br>Example: `--froxlor-dir=/var/www/froxlor/` |
| `--help | -h` | show help screen |

### Example usage

Let's say your server currently has the IP address `123.10.20.30`. You have migrated to a new provider and get a new IP address assigned, let's say `234.30.20.10`. To switch these for your froxlor installation, run the following command:

```shell
php /var/www/froxlor/install/scripts/switch-server-ip.php --froxlor-dir=/var/www/froxlor/ --switch=123.10.20.30,234.30.20.10
```
