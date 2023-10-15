# DataDump

## DataDump.add

add a new data dump job

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| path | string | path to store the dumped data to |
| pgp_public_key | string | optional pgp public key to encrypt the archive, default is empty |
| dump_dbs | bool | optional whether to include databases, default is 0 (false) |
| dump_mail | bool | optional whether to include mail-data, default is 0 (false) |
| dump_web | bool | optional whether to incoude web-data, default is 0 (false) |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## DataDump.get

You cannot get a planned data export. Try DataDump.listing()

## DataDump.update

You cannot update a planned data export. You need to delete it and re-add it.

## DataDump.listing

list all planned data export jobs, if called from an admin, list all planned data export jobs of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select data export jobs of a specific customer by id |
| loginname | string | optional, admin-only, select data export jobs of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |

#### Response

`string` as `json-encoded array count|list`

## DataDump.listingCount

returns the total number of planned data exports

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select data export jobs of a specific customer by id |
| loginname | string | optional, admin-only, select data export jobs of a specific customer by loginname |

#### Response

`string` as `json-encoded response message`

## DataDump.delete

delete a planned data export jobs by id, if called from an admin you need to specify the customerid/loginname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| job_entry | int | id of data export job |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`bool`