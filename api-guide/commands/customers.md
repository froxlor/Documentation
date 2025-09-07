# Customers

## Customers.listing

lists all customer entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |
| show_usages | bool | optional, default false |

#### Response

`string` as `json-encoded array count|list`

## Customers.listingCount

returns the total number of customers for the given admin

#### Permission

`admin`

#### Response

`string` as `json-encoded response message`

## Customers.add

create a new customer with default ftp-user and standard-subdomain (if wanted)

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| email | string | required, email address of new customer |
| name | string | optional if company is set, else required |
| firstname | string | optional if company is set, else required |
| company | string | optional but required if name/firstname empty |
| street | string | optional |
| zipcode | string | optional |
| city | string | optional |
| phone | string | optional |
| fax | string | optional |
| customernumber | int | optional |
| def_language | string | optional, ISO 639-1 language code (e.g. 'en', 'de', see lng-folder for supported languages),default is system-default language |
| gui_access | bool | optional, allow login via webui, if false ONLY the login via webui is disallowed; default true |
| api_allowed | bool | optional, default is true if system setting api.enabled is true, else false |
| shell_allowed | bool | optional, default is true if system setting system.allow_customer_shell is true, else false |
| gender | int | optional, 0 = no-gender, 1 = male, 2 = female |
| custom_notes | string | optional notes |
| custom_notes_show | bool | optional, whether to show the content of custom_notes to the customer, default 0(false) |
| new_loginname | string | optional, if empty generated automatically using customer-prefix and increasingnumber |
| new_customer_password | string | optional, if empty generated automatically and send to the customer's email if$sendpassword is 1 |
| sendpassword | bool | optional, whether to send the password to the customer after creation, default 0(false) |
| diskspace | int | optional disk-space available for customer in MB, default 0 |
| diskspace_ul | bool | optional, whether customer should have unlimited diskspace, default 0 (false) |
| traffic | int | optional traffic available for customer in GB, default 0 |
| traffic_ul | bool | optional, whether customer should have unlimited traffic, default 0 (false) |
| subdomains | int | optional amount of subdomains available for customer, default 0 |
| subdomains_ul | bool | optional, whether customer should have unlimited subdomains, default 0 (false) |
| emails | int | optional amount of emails available for customer, default 0 |
| emails_ul | bool | optional, whether customer should have unlimited emails, default 0 (false) |
| email_accounts | int | optional amount of email-accounts available for customer, default 0 |
| email_accounts_ul | bool | optional, whether customer should have unlimited email-accounts, default 0 (false) |
| email_forwarders | int | optional amount of email-forwarders available for customer, default 0 |
| email_forwarders_ul | bool | optional, whether customer should have unlimited email-forwarders, default 0 (false) |
| email_quota | int | optional size of email-quota available for customer in MB, default is system-settingmail_quota |
| email_quota_ul | bool | optional, whether customer should have unlimited email-quota, default 0 (false) |
| email_imap | bool | optional, whether to allow IMAP access, default 0 (false) |
| email_pop3 | bool | optional, whether to allow POP3 access, default 0 (false) |
| ftps | int | optional amount of ftp-accounts available for customer, default 0 |
| ftps_ul | bool | optional, whether customer should have unlimited ftp-accounts, default 0 (false) |
| mysqls | int | optional amount of mysql-databases available for customer, default 0 |
| mysqls_ul | bool | optional, whether customer should have unlimited mysql-databases, default 0 (false) |
| createstdsubdomain | bool | optional, whether to create a standard-subdomain ([loginname].froxlor-hostname.tld),default [system.createstdsubdom_default] |
| phpenabled | bool | optional, whether to allow usage of PHP, default 0 (false) |
| allowed_phpconfigs | array | optional, array of IDs of php-config that the customer is allowed to use, defaultempty (none) |
| perlenabled | bool | optional, whether to allow usage of Perl/CGI, default 0 (false) |
| dnsenabled | bool | optional, whether to allow usage of the DNS editor (requires activated nameserver insettings), default 0 (false) |
| logviewenabled | bool | optional, whether to allow access to webserver access/error-logs, default 0 (false) |
| store_defaultindex | bool | optional, whether to store the default index file to customers homedir |
| hosting_plan_id | int | optional, specify a hosting-plan to set certain resource-values from the planinstead of specifying them |
| allowed_mysqlserver | array | optional, array of IDs of defined mysql-servers the customer is allowed to use,default is to allow the default dbserver (id=0) |

#### Response

`string` as `json-encoded array`

## Customers.get

return a customer entry by either id or loginname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| loginname | string | optional, the loginname |
| show_usages | bool | optional, default false |

#### Response

`string` as `json-encoded array`

## Customers.update

update customer entry by either id or loginname, customer can only change language, password and theme

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| loginname | string | optional, the loginname |
| email | string | optional |
| name | string | optional if company is set, else required |
| firstname | string | optional if company is set, else required |
| company | string | optional but required if name/firstname empty |
| street | string | optional |
| zipcode | string | optional |
| city | string | optional |
| phone | string | optional |
| fax | string | optional |
| customernumber | int | optional |
| def_language | string | optional, ISO 639-1 language code (e.g. 'en', 'de', see lng-folder for supported languages),default is system-default language |
| gui_access | bool | optional, allow login via webui, if false ONLY the login via webui is disallowed; default true |
| api_allowed | bool | optional, default is true if system setting api.enabled is true, else false |
| shell_allowed | bool | optional, default is true if system setting system.allow_customer_shell is true, else false |
| gender | int | optional, 0 = no-gender, 1 = male, 2 = female |
| custom_notes | string | optional notes |
| custom_notes_show | bool | optional, whether to show the content of custom_notes to the customer, default 0(false) |
| new_customer_password | string | optional, set new password |
| sendpassword | bool | optional, whether to send the password to the customer after creation, default 0(false) |
| move_to_admin | int | optional, if valid admin-id is given here, the customer's admin/reseller can bechanged |
| deactivated | bool | optional, if 1 (true) the customer can be deactivated/suspended |
| diskspace | int | optional disk-space available for customer in MB, default 0 |
| diskspace_ul | bool | optional, whether customer should have unlimited diskspace, default 0 (false) |
| traffic | int | optional traffic available for customer in GB, default 0 |
| traffic_ul | bool | optional, whether customer should have unlimited traffic, default 0 (false) |
| subdomains | int | optional amount of subdomains available for customer, default 0 |
| subdomains_ul | bool | optional, whether customer should have unlimited subdomains, default 0 (false) |
| emails | int | optional amount of emails available for customer, default 0 |
| emails_ul | bool | optional, whether customer should have unlimited emails, default 0 (false) |
| email_accounts | int | optional amount of email-accounts available for customer, default 0 |
| email_accounts_ul | bool | optional, whether customer should have unlimited email-accounts, default 0 (false) |
| email_forwarders | int | optional amount of email-forwarders available for customer, default 0 |
| email_forwarders_ul | bool | optional, whether customer should have unlimited email-forwarders, default 0 (false) |
| email_quota | int | optional size of email-quota available for customer in MB, default is system-settingmail_quota |
| email_quota_ul | bool | optional, whether customer should have unlimited email-quota, default 0 (false) |
| email_imap | bool | optional, whether to allow IMAP access, default 0 (false) |
| email_pop3 | bool | optional, whether to allow POP3 access, default 0 (false) |
| ftps | int | optional amount of ftp-accounts available for customer, default 0 |
| ftps_ul | bool | optional, whether customer should have unlimited ftp-accounts, default 0 (false) |
| mysqls | int | optional amount of mysql-databases available for customer, default 0 |
| mysqls_ul | bool | optional, whether customer should have unlimited mysql-databases, default 0 (false) |
| createstdsubdomain | bool | optional, whether to create a standard-subdomain ([loginname].froxlor-hostname.tld),default 1 (if customer has std-subdomain) else 0 (false) |
| phpenabled | bool | optional, whether to allow usage of PHP, default 0 (false) |
| allowed_phpconfigs | array | optional, array of IDs of php-config that the customer is allowed to use, defaultempty (none) |
| perlenabled | bool | optional, whether to allow usage of Perl/CGI, default 0 (false) |
| dnsenabled | bool | optional, whether to allow usage of the DNS editor (requires activated nameserver insettings), default 0 (false) |
| logviewenabled | bool | optional, whether to allow access to webserver access/error-logs, default 0 (false) |
| theme | string | optional, change theme |
| allowed_mysqlserver | array | optional, array of IDs of defined mysql-servers the customer is allowed to use,default is to allow the default dbserver (id=0) |

#### Response

`string` as `json-encoded array`

## Customers.delete

delete a customer entry by either id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| loginname | string | optional, the loginname |
| delete_userfiles | bool | optional, default false |

#### Response

`string` as `json-encoded array`

## Customers.unlock

unlock a locked customer by either id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| loginname | string | optional, the loginname |

#### Response

`string` as `json-encoded array`

## Customers.move

Function to move a given customer to a given admin/reseller and update all its references accordingly

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| loginname | string | optional, the loginname |
| adminid | int | target-admin-id |

#### Response

`string` as `json-encoded array`