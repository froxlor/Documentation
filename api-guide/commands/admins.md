# Admins

## Admins.listing

lists all admin entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |

#### Response

`string` as `json-encoded array count|list`

## Admins.listingCount

returns the total number of admins for the given admin

#### Permission

`admin`

#### Response

`string` as `json-encoded response message`

## Admins.add

create a new admin user

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| name | string | required, name of the adminstrator |
| email | string | required, email address of the administrator |
| new_loginname | string | required, loginname/username of the administrator |
| admin_password | string | optional, default auto-generated |
| def_language | string | optional, ISO 639-1 language code (e.g. 'en', 'de', see lng-folder for supported languages),default is system-default language |
| gui_access | bool | optional, allow login via webui, if false ONLY the login via webui is disallowed; default true |
| api_allowed | bool | optional, default is true if system setting api.enabled is true, else false |
| custom_notes | string | optional, default empty |
| custom_notes_show | bool | optional, default false |
| diskspace | int | optional, default 0 |
| diskspace_ul | bool | optional, default false |
| traffic | int | optional, default 0 |
| traffic_ul | bool | optional, default false |
| customers | int | optional, default 0 |
| customers_ul | bool | optional, default false |
| domains | int | optional, default 0 |
| domains_ul | bool | optional, default false |
| subdomains | int | optional, default 0 |
| subdomains_ul | bool | optional, default false |
| emails | int | optional, default 0 |
| emails_ul | bool | optional, default false |
| email_accounts | int | optional, default 0 |
| email_accounts_ul | bool | optional, default false |
| email_forwarders | int | optional, default 0 |
| email_forwarders_ul | bool | optional, default false |
| email_quota | int | optional, default 0 |
| email_quota_ul | bool | optional, default false |
| ftps | int | optional, default 0 |
| ftps_ul | bool | optional, default false |
| mysqls | int | optional, default 0 |
| mysqls_ul | bool | optional, default false |
| customers_see_all | bool | optional, default false |
| caneditphpsettings | bool | optional, default false |
| change_serversettings | bool | optional, default false |
| ipaddress | array | optional, list of ip-address id's; default -1 (all IP's) |

#### Response

`string` as `json-encoded array`

## Admins.get

return an admin entry by either id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the admin-id |
| loginname | string | optional, the loginname |

#### Response

`string` as `json-encoded array`

## Admins.update

update an admin user by given id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the admin-id |
| loginname | string | optional, the loginname |
| name | string | optional |
| email | string | optional |
| admin_password | string | optional, default auto-generated |
| def_language | string | optional, ISO 639-1 language code (e.g. 'en', 'de', see lng-folder for supported languages),default is system-default language |
| gui_access | bool | optional, allow login via webui, if false ONLY the login via webui is disallowed; default true |
| api_allowed | bool | optional, default is true if system setting api.enabled is true, else false |
| custom_notes | string | optional, default empty |
| theme | string | optional |
| deactivated | bool | optional, default false |
| custom_notes_show | bool | optional, default false |
| diskspace | int | optional, default 0 |
| diskspace_ul | bool | optional, default false |
| traffic | int | optional, default 0 |
| traffic_ul | bool | optional, default false |
| customers | int | optional, default 0 |
| customers_ul | bool | optional, default false |
| domains | int | optional, default 0 |
| domains_ul | bool | optional, default false |
| subdomains | int | optional, default 0 |
| subdomains_ul | bool | optional, default false |
| emails | int | optional, default 0 |
| emails_ul | bool | optional, default false |
| email_accounts | int | optional, default 0 |
| email_accounts_ul | bool | optional, default false |
| email_forwarders | int | optional, default 0 |
| email_forwarders_ul | bool | optional, default false |
| email_quota | int | optional, default 0 |
| email_quota_ul | bool | optional, default false |
| ftps | int | optional, default 0 |
| ftps_ul | bool | optional, default false |
| mysqls | int | optional, default 0 |
| mysqls_ul | bool | optional, default false |
| customers_see_all | bool | optional, default false |
| caneditphpsettings | bool | optional, default false |
| change_serversettings | bool | optional, default false |
| ipaddress | array | optional, list of ip-address id's; default -1 (all IP's) |

#### Response

`string` as `json-encoded array`

## Admins.delete

delete a admin entry by either id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the admin-id |
| loginname | string | optional, the loginname |

#### Response

`string` as `json-encoded array`

## Admins.unlock

unlock a locked admin by either id or loginname

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the admin-id |
| loginname | string | optional, the loginname |

#### Response

`string` as `json-encoded array`