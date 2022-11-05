---
layout: page
title: DirOptions
parent: 0.10.38.1
grand_parent: Commands
---

# DirOptions

## DirOptions.add

add options for a given directory

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| path | string | path relative to the customer's home-Directory |
| options_indexes | bool | optional, activate directory-listing for this path, default 0 (false) |
| options_cgi | bool | optional, allow Perl/CGI execution, default 0 (false) |
| error404path | string | optional, custom 404 error string/file |
| error403path | string | optional, custom 403 error string/file |
| error500path | string | optional, custom 500 error string/file |

#### Response

`string` as `json-encoded array`

## DirOptions.get

return a directory-protection entry by id

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | id of dir-protection entry |

#### Response

`string` as `json-encoded array`

## DirOptions.update

update options for a given directory by id

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | id of dir-protection entry |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| options_indexes | bool | optional, activate directory-listing for this path, default 0 (false) |
| options_cgi | bool | optional, allow Perl/CGI execution, default 0 (false) |
| error404path | string | optional, custom 404 error string/file |
| error403path | string | optional, custom 403 error string/file |
| error500path | string | optional, custom 500 error string/file |

#### Response

`string` as `json-encoded array`

## DirOptions.listing

list all directory-options, if called from an admin, list all directory-options of all customers you are allowed to view, or specify id or loginname for one specific customer

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

## DirOptions.listingCount

returns the total number of accessible directory options

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select directory-protections of a specific customer by id |
| loginname | string | optional, admin-only, select directory-protections of a specific customer by loginname |

#### Response

`string` as `json-encoded array count|list`

## DirOptions.delete

delete a directory-options by id

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | id of dir-protection entry |

#### Response

`string` as `json-encoded array`