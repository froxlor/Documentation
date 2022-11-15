# CustomerBackups

## CustomerBackups.add

add a new customer backup job

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| path | string | path to store the backup to |
| backup_dbs | bool | optional whether to backup databases, default is 0 (false) |
| backup_mail | bool | optional whether to backup mail-data, default is 0 (false) |
| backup_web | bool | optional whether to backup web-data, default is 0 (false) |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## CustomerBackups.get

You cannot get a planned backup. Try CustomerBackups.listing()

## CustomerBackups.update

You cannot update a planned backup. You need to delete it and re-add it.

## CustomerBackups.listing

list all planned backup-jobs, if called from an admin, list all planned backup-jobs of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select backup-jobs of a specific customer by id |
| loginname | string | optional, admin-only, select backup-jobs of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |

#### Response

`string` as `json-encoded array count|list`

## CustomerBackups.listingCount

returns the total number of planned backups

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select backup-jobs of a specific customer by id |
| loginname | string | optional, admin-only, select backup-jobs of a specific customer by loginname |

#### Response

`string` as `json-encoded response message`

## CustomerBackups.delete

delete a planned backup-jobs by id, if called from an admin you need to specify the customerid/loginname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| backup_job_entry | int | id of backup job |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`bool`
