---
layout: page
title: Mysqls
parent: 0.10.31
grand_parent: Commands
---

# Mysqls

## Mysqls.add

add a new mysql-database

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| mysql_password | string | password for the created database and database-user |
| mysql_server | int | optional, default is 0 |
| description | string | optional, description for database |
| custom_suffix | string | optional, name for database |
| sendinfomail | bool | optional, send created resource-information to customer, default: false |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## Mysqls.get

return a mysql database entry by either id or dbname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the database-id |
| dbname | string | optional, the databasename |
| mysql_server | int | optional, specify database-server, default is none |

#### Response

`string` as `json-encoded array`

## Mysqls.update

update a mysql database entry by either id or dbname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the database-id |
| dbname | string | optional, the databasename |
| mysql_server | int | optional, specify database-server, default is none |
| mysql_password | string | optional, update password for the database |
| description | string | optional, description for database |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## Mysqls.listing

list all databases, if called from an admin, list all databases of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| mysql_server | int | optional, specify dbserver to select from, else use all available |
| customerid | int | optional, admin-only, select dbs of a specific customer by id |
| loginname | string | optional, admin-only, select dbs of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## Mysqls.listingCount

returns the total number of accessible databases

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select dbs of a specific customer by id |
| loginname | string | optional, admin-only, select dbs of a specific customer by loginname |

#### Response

`string` as `json-encoded array`

## Mysqls.delete

delete a mysql database by either id or dbname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the database-id |
| dbname | string | optional, the databasename |
| mysql_server | int | optional, specify database-server, default is none |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`