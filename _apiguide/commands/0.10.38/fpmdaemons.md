---
layout: page
title: FpmDaemons
parent: 0.10.38
grand_parent: Commands
---

# FpmDaemons

## FpmDaemons.listing

lists all fpm-daemon entries

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

## FpmDaemons.listingCount

returns the total number of accessible fpm daemons

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## FpmDaemons.get

return a fpm-daemon entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | fpm-daemon-id |

#### Response

`string` as `json-encoded array`

## FpmDaemons.add

create a new fpm-daemon entry

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| description | string |  |
| reload_cmd | string |  |
| config_dir | string |  |
| pm | string | optional, process-manager, one of 'static', 'dynamic' or 'ondemand', default 'dynamic' |
| max_children | int | optional, default 5 |
| start_servers | int | optional, default 2 |
| min_spare_servers | int | optional, default 1 |
| max_spare_servers | int | optional, default 3 |
| max_requests | int | optional, default 0 |
| idle_timeout | int | optional, default 10 |
| limit_extensions | string | optional, limit execution to the following extensions, default '.php' |
| custom_config | string | optional, custom settings appended to phpfpm pool configuration |

#### Response

`string` as `json-encoded array`

## FpmDaemons.update

update a fpm-daemon entry by given id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | fpm-daemon id |
| description | string | optional |
| reload_cmd | string | optional |
| config_dir | string | optional |
| pm | string | optional, process-manager, one of 'static', 'dynamic' or 'ondemand', default 'dynamic' |
| max_children | int | optional, default 5 |
| start_servers | int | optional, default 2 |
| min_spare_servers | int | optional, default 1 |
| max_spare_servers | int | optional, default 3 |
| max_requests | int | optional, default 0 |
| idle_timeout | int | optional, default 10 |
| limit_extensions | string | optional, limit execution to the following extensions, default '.php' |
| custom_config | string | optional, custom settings appended to phpfpm pool configuration |

#### Response

`string` as `json-encoded array`

## FpmDaemons.delete

delete a fpm-daemon entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | fpm-daemon-id |

#### Response

`string` as `json-encoded array`