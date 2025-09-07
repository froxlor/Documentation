# SshKeys

## SshKeys.add

add a new ssh-key

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional id of ftp-user to add the ssh-key for, required if `ftpuser` is empty |
| ftpuser | string | optional loginname of ftp-user to add the ssh-key for, required if `id` is empty |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| ssh_pubkey | string | ssh public key to add for the given user |
| description | string | optional, description for ssh-key |

#### Response

`string` as `json-encoded array`

## SshKeys.get

return a ssh-key entry by id

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | the ssh-key id |

#### Response

`string` as `json-encoded array`

## SshKeys.update

update a given ftp-user by id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | the ssh-key id |
| description | string | optional, description for ssh-key |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## SshKeys.listing

list all ssh-keys, if called from an admin, list all ssh-keys of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select ftp-users of a specific customer by id |
| loginname | string | optional, admin-only, select ftp-users of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |

#### Response

`string` as `json-encoded array count|list`

## SshKeys.listingCount

returns the total number of accessible ssh keys

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select ftp-users of a specific customer by id |
| loginname | string | optional, admin-only, select ftp-users of a specific customer by loginname |

#### Response

`string` as `json-encoded response message`

## SshKeys.delete

delete a ftp-user by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | the ssh-key id |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`