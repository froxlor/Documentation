---
layout: page
title: Ftps
parent: 0.10.38.1
grand_parent: Commands
---

# Ftps

## Ftps.add

add a new ftp-user

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| ftp_password | string | password for the created database and database-user |
| path | string | destination path relative to the customers-homedir |
| ftp_description | string | optional, description for ftp-user |
| sendinfomail | bool | optional, send created resource-information to customer, default: false |
| shell | string | optional, default /bin/false (not changeable when deactivated) |
| ftp_username | string | optional if customer.ftpatdomain is allowed, specify an username |
| ftp_domain | string | optional if customer.ftpatdomain is allowed, specify a domain (customer must be owner) |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| additional_members | array | optional whether to add additional usernames to the group |
| is_defaultuser | bool | optional whether this is the standard default ftp user which is being added so no usage is decreased |

#### Response

`string` as `json-encoded array`

## Ftps.get

return a ftp-user entry by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the customer-id |
| username | string | optional, the username |

#### Response

`string` as `json-encoded array`

## Ftps.update

update a given ftp-user by id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the ftp-user-id |
| username | string | optional, the username |
| ftp_password | string | optional, update password if specified |
| path | string | destination path relative to the customers-homedir |
| ftp_description | string | optional, description for ftp-user |
| shell | string | optional, default /bin/false (not changeable when deactivated) |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## Ftps.listing

list all ftp-users, if called from an admin, list all ftp-users of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select ftp-users of a specific customer by id |
| loginname | string | optional, admin-only, select ftp-users of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## Ftps.listingCount

returns the total number of accessible ftp accounts

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select ftp-users of a specific customer by id |
| loginname | string | optional, admin-only, select ftp-users of a specific customer by loginname |

#### Response

`string` as `json-encoded array`

## Ftps.delete

delete a ftp-user by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the ftp-user-id |
| username | string | optional, the username |
| delete_userfiles | bool | optional, default false |

#### Response

`string` as `json-encoded array`