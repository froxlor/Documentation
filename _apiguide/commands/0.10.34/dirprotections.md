---
layout: page
title: DirProtections
parent: 0.10.34
grand_parent: Commands
---

# DirProtections

## DirProtections.add

add htaccess protection to a given directory

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| path | string |  |
| username | string |  |
| directory_password | string |  |
| directory_authname | string | optional name/description for the protection |

#### Response

`string` as `json-encoded array`

## DirProtections.get

return a directory-protection entry by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the directory-protection-id |
| username | string | optional, the username |

#### Response

`string` as `json-encoded array`

## DirProtections.update

update htaccess protection of a given directory

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the directory-protection-id |
| username | string | optional, the username |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| directory_password | string | optional, leave empty for no change |
| directory_authname | string | optional name/description for the protection |

#### Response

`string` as `json-encoded array`

## DirProtections.listing

list all directory-protections, if called from an admin, list all directory-protections of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select directory-protections of a specific customer by id |
| loginname | string | optional, admin-only, select directory-protections of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## DirProtections.listingCount

returns the total number of accessible directory protections

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select directory-protections of a specific customer by id |
| loginname | string | optional, admin-only, select directory-protections of a specific customer by loginname |

#### Response

`string` as `json-encoded array count|list`

## DirProtections.delete

delete a directory-protection by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the directory-protection-id |
| username | string | optional, the username |

#### Response

`string` as `json-encoded array`