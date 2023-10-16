# MysqlServer

## MysqlServer.add

add a new mysql-server

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| mysql_host | string | ip/hostname of mysql-server |
| mysql_port | string | optional, port to connect to |
| mysql_ca | string | optional, path to certificate file |
| mysql_verifycert | string | optional, verify server certificate |
| privileged_user | string | privileged user on the mysql-server (must have GRANT privileges) |
| privileged_password | string | password of privileged user |
| description | string | optional, description for server |
| allow_all_customers | bool | optional add this configuration to the list of every existing customer's allowed-mysqlserver-config list, default is false (no) |
| test_connection | bool | optional, test connection with given credentials, default is true (yes) |

#### Response

`string` as `json-encoded array`

## MysqlServer.delete

remove a mysql-server

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the number of the mysql server (either id or dbserver must be set) |
| dbserver | int | optional the number of the mysql server (either id or dbserver must be set) |

#### Response

`string` as `json-encoded array`

## MysqlServer.listing

list available mysql-server

#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`

## MysqlServer.listingCount

returns the total number of mysql servers

#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded response message`

## MysqlServer.get

Return info about a specific mysql-server

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the number of the mysql server (either id or dbserver must be set) |
| dbserver | int | optional the number of the mysql server (either id or dbserver must be set) |

#### Response

`string` as `json-encoded array`

## MysqlServer.update

update given mysql-server

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the number of the mysql server (either id or dbserver must be set) |
| dbserver | int | optional the number of the mysql server (either id or dbserver must be set) |
| mysql_host | string | ip/hostname of mysql-server |
| mysql_port | string | optional, port to connect to |
| mysql_ca | string | optional, path to certificate file |
| mysql_verifycert | string | optional, verify server certificate |
| privileged_user | string | privileged user on the mysql-server (must have GRANT privileges) |
| privileged_password | string | password of privileged user |
| description | string | optional, description for server |
| allow_all_customers | bool | optional add this configuration to the list of every existing customer's allowed-mysqlserver-config list, default is false (no) |
| test_connection | bool | optional, test connection with given credentials, default is true (yes) |

#### Response

`string` as `json-encoded array`

## MysqlServer.databasesOnServer

check whether a given customer / current user (as customer) has databases on the given dbserver

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| mysql_server | int |  |
| customerid | int | optional, admin-only, select ftp-users of a specific customer by id |
| loginname | string | optional, admin-only, select ftp-users of a specific customer by loginname |

#### Response

`string` as `json-encoded array count`