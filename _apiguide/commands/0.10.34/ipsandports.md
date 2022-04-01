---
layout: page
title: IpsAndPorts
parent: 0.10.34
grand_parent: Commands
---

# IpsAndPorts

## IpsAndPorts.listing

lists all ip/port entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## IpsAndPorts.listingCount

returns the total number of accessible ip/port entries

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## IpsAndPorts.get

return an ip/port entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | ip-port-id |

#### Response

`string` as `json-encoded array`

## IpsAndPorts.add

create a new ip/port entry

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| ip | string |  |
| port | int | optional, default 80 |
| listen_statement | bool | optional, default 0 (false) |
| namevirtualhost_statement | bool | optional, default 0 (false) |
| vhostcontainer | bool | optional, default 0 (false) |
| specialsettings | string | optional, default empty |
| vhostcontainer_servername_statement | bool | optional, default 0 (false) |
| default_vhostconf_domain | string | optional, defatul empty |
| docroot | string | optional, default empty (point to froxlor) |
| ssl | bool | optional, default 0 (false) |
| ssl_cert_file | string | optional, requires $ssl = 1, default empty |
| ssl_key_file | string | optional, requires $ssl = 1, default empty |
| ssl_ca_file | string | optional, requires $ssl = 1, default empty |
| ssl_cert_chainfile | string | optional, requires $ssl = 1, default empty |
| ssl_specialsettings | string | optional, requires $ssl = 1, default empty |
| include_specialsettings | bool | optional, requires $ssl = 1, whether or not to include non-ssl specialsettings, default false |
| ssl_default_vhostconf_domain | string | optional, requires $ssl = 1, defatul empty |
| include_default_vhostconf_domain | bool | optional, requires $ssl = 1, whether or not to include non-ssl default_vhostconf_domain, default false |

#### Response

`string` as `json-encoded array`

## IpsAndPorts.update

update ip/port entry by given id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int |  |
| ip | string | optional |
| port | int | optional, default 80 |
| listen_statement | bool | optional, default 0 (false) |
| namevirtualhost_statement | bool | optional, default 0 (false) |
| vhostcontainer | bool | optional, default 0 (false) |
| specialsettings | string | optional, default empty |
| vhostcontainer_servername_statement | bool | optional, default 0 (false) |
| default_vhostconf_domain | string | optional, defatul empty |
| docroot | string | optional, default empty (point to froxlor) |
| ssl | bool | optional, default 0 (false) |
| ssl_cert_file | string | optional, requires $ssl = 1, default empty |
| ssl_key_file | string | optional, requires $ssl = 1, default empty |
| ssl_ca_file | string | optional, requires $ssl = 1, default empty |
| ssl_cert_chainfile | string | optional, requires $ssl = 1, default empty |
| ssl_specialsettings | string | optional, requires $ssl = 1, default empty |
| include_specialsettings | bool | optional, requires $ssl = 1, whether or not to include non-ssl specialsettings, default false |
| ssl_default_vhostconf_domain | string | optional, requires $ssl = 1, defatul empty |
| include_default_vhostconf_domain | bool | optional, requires $ssl = 1, whether or not to include non-ssl default_vhostconf_domain, default false |

#### Response

`string` as `json-encoded array`

## IpsAndPorts.delete

delete an ip/port entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | ip-port-id |

#### Response

`string` as `json-encoded array`