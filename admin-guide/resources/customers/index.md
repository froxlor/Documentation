# Customers

## 1. General

The customer is the end-user of the managed resources, like domains, email-addresses, databases, etc. Each resource
available to the customer can be defined and restricted (see [3.4. Service Data](#_3-4-service-data) below).

## 2. Locked and deactivated states

There are two states a customer can be in that limit/restrict actions available. The main difference is that the 
**locked** state, which occurs e.g. after multiple failed logins, does not affect the customers web-, email- or ftp
availability. A **locked customer** needs to either be unlocked manually by an admin/reseller or wait for the
specified _Deactivation Time_ (in _Settings » Account settings_) for the account to get unlocked automatically.

Admins/Reseller can **deactivate** customers. This state will disable all availability of websites, email-accounts, etc.
for the customer and does not allow any login. It can only be manually reactivated by a corresponding admin/reseller.

## 3. Properties of Customers

<UiBrowser :src="('/img/frx_customers_overview.png')" alt="Customers overview"/>

### 3.1 Account Data

### Username

The username, or loginname, of the customer. If left empty, an auto-generated username will be created using
the `Customer prefix`-setting with an increasing number suffixed.

For example, if you `Customer prefix`-setting is `web` (default) the first customer will be given the username: **web1**

Alternatively you can specify a custom username, e.g. `myuser` or similar. When using custom usernames, they _must not_
start with the set `Customer prefix` from the settings.

There is a **length limit** for usernames which is defined partly by the used MySQL/MariaDB version. This is due to the
fact, that database and database-usernames will be generated using the username and the set `SQL Prefix`-setting. The
limit can vary from **16 up to 80** allowed characters in total.

Keep in mind that this value should be _UNIX username_-compatible to avoid any issues with services used (e.g. database
or ftp).

::: tip NOTE
If you intend to use **-** or **_** in usernames, you might need to adjust the `Use UNIX compatible usernames`-setting
in the `Security options` section of the settings.
:::

### Create standard subdomain

If checked, a subdomain in the form of `[username].[froxlor-system-hostname]` is being generated and assigned to the
customer.

You can also specify a custom domain to be used in the `System settings -> Customer standard subdomain`.

This domain cannot be edited by the customer and does not show in the overview of the customers domains. It will always
point to the customers home-directory.

::: tip NOTE
You can adjust the preselected value of this field in the `Account Settings`.
:::

### Store default index-file to customers docroot

If checked, the default froxlor index.html file be placed into the customers documentroot/home-directory.

::: tip DID YOU KNOW?
You can create/design your own default index file for customers/domains,
see [Email & file templates](../../miscellaneous/#_2-email-file-templates)
:::

### Allow API access

When API usage is enabled in the `System settings` globally, you can decide whether the customer can create/manage API
keys and be able to access data via [API](../../../api-guide/).

### 3.2 Contact Data

Specify the customers first- and lastname or company and e-mail address. Optionally you can add an internal note or make
it available for the new customer by checking the box to display the note on the users dashboard.

### 3.3 Apply plan

In case you have one or more [Hosting plans](../hosting-plans/) you can select the desired hosting-plan here and the
values for the service-data will be **prefilled** with the ones from the selected hosting-plan.

### 3.4 Service Data

The service data regulates the permissions and available resources for the new customer.

| Resource                                                   | Description                                                                                                                                                                                                                                                                                                                                              |
|------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Deactivate user _(edit-mode only)_                         | See [2. Locked and deactivated states](#_2-locked-and-deactivated-states) above.                                                                                                                                                                                                                                                                         |
| Webspace (MiB)                                             | Amount of diskspace in **MiB**. Value `0` to disable or unlimited if checkbox is checked                                                                                                                                                                                                                                                                 |
| Traffic (GiB)                                              | Amount of traffic in **GiB**. Value `0` to disable or unlimited if checkbox is checked. There is no traffic-limiter or similar, it's for displaying purposes only. You can enable customer-notifications if a certain percentage of the given traffic is used, see `Settings » System settings » Enable sending of reports about web- and traffic-usage` |
| E-mail quota (MiB)                                         | Amount of **total** diskspace in **MiB** the customer can assign to email-accounts.                                                                                                                                                                                                                                                                      |
| [PHP Configuration](../../php-versions-and-configuration/) | One or more php configurations the customer is allowed to use.                                                                                                                                                                                                                                                                                           |
| Enable DNS editor                                          | If enabled, the customer will be able to edit the DNS zone (if nameserver and dns-editor are enabled globally in the settings).                                                                                                                                                                                                                          |
| Enable access to access/error-logs                         | If enabled, the customer can view webserver access- and error-logs for assigned domains. PHP's `exec()` function is required for the froxlor-virtualhost for this to work!                                                                                                                                                                               |
| Any other field                                            | Simply the amount (or unlimited) of the resource the customer is allowed to use                                                                                                                                                                                                                                                                          |

### 3.5 Move customer to another admin

If there are two or more admins/reseller in your froxlor system, you will see the possibility to move a customer to
another admin-users when editing a customer.

All the customers resources will also be moved and the selected admin will get the resources assigned. Note that the
receiving admin/reseller needs to have **sufficient** resources available or the move-action will fail.

<UiBrowser :src="('/img/frx_customers_move.png')" alt="Customers - Move to another admin"/>
