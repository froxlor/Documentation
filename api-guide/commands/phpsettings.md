# PhpSettings

## PhpSettings.listing

lists all php-setting entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| with_subdomains | bool | optional, also include subdomains to the list domains that use the config, default 0 (false) |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## PhpSettings.listingCount

returns the total number of accessible php-setting entries

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## PhpSettings.get

return a php-setting entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | php-settings-id |

#### Response

`string` as `json-encoded array`

## PhpSettings.add

add new php-settings entry

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| description | string | description of the php-config |
| phpsettings | string | the actual ini-settings |
| binary | string | optional the binary to php-cgi if FCGID is used |
| file_extensions | string | optional allowed php-file-extensions if FCGID is used, default is 'php' |
| mod_fcgid_starter | int | optional number of fcgid-starters if FCGID is used, default is -1 |
| mod_fcgid_maxrequests | int | optional number of fcgid-maxrequests if FCGID is used, default is -1 |
| mod_fcgid_umask | string | optional umask if FCGID is used, default is '022' |
| fpmconfig | int | optional id of the fpm-daemon-config if FPM is used |
| phpfpm_enable_slowlog | bool | optional whether to write a slowlog or not if FPM is used, default is 0 (false) |
| phpfpm_reqtermtimeout | string | optional request terminate timeout if FPM is used, default is '60s' |
| phpfpm_reqslowtimeout | string | optional request slowlog timeout if FPM is used, default is '5s' |
| phpfpm_pass_authorizationheader | bool | optional whether to pass authorization header to webserver if FPM is used, default is 0 (false) |
| override_fpmconfig | bool | optional whether to override fpm-daemon-config value for the following settings if FPM is used, default is 0 (false) |
| pm | string | optional process-manager to use if FPM is used (allowed values are 'static', 'dynamic' and 'ondemand'), default is fpm-daemon-value |
| max_children | int | optional number of max children if FPM is used, default is the fpm-daemon-value |
| start_server | int | optional number of servers to start if FPM is used, default is fpm-daemon-value |
| min_spare_servers | int | optional number of minimum spare servers if FPM is used, default is fpm-daemon-value |
| max_spare_servers | int | optional number of maximum spare servers if FPM is used, default is fpm-daemon-value |
| max_requests | int | optional number of maximum requests if FPM is used, default is fpm-daemon-value |
| idle_timeout | int | optional number of seconds for idle-timeout if FPM is used, default is fpm-daemon-value |
| limit_extensions | string | optional limitation of php-file-extensions if FPM is used, default is fpm-daemon-value |
| allow_all_customers | bool | optional add this configuration to the list of every existing customer's allowed-fpm-config list, default is false (no) |

#### Response

`string` as `json-encoded array`

## PhpSettings.update

update a php-setting entry by given id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int |  |
| description | string | description of the php-config |
| phpsettings | string | the actual ini-settings |
| binary | string | optional the binary to php-cgi if FCGID is used |
| file_extensions | string | optional allowed php-file-extensions if FCGID is used, default is 'php' |
| mod_fcgid_starter | int | optional number of fcgid-starters if FCGID is used, default is -1 |
| mod_fcgid_maxrequests | int | optional number of fcgid-maxrequests if FCGID is used, default is -1 |
| mod_fcgid_umask | string | optional umask if FCGID is used, default is '022' |
| fpmconfig | int | optional id of the fpm-daemon-config if FPM is used |
| phpfpm_enable_slowlog | bool | optional whether to write a slowlog or not if FPM is used, default is 0 (false) |
| phpfpm_reqtermtimeout | string | optional request terminate timeout if FPM is used, default is '60s' |
| phpfpm_reqslowtimeout | string | optional request slowlog timeout if FPM is used, default is '5s' |
| phpfpm_pass_authorizationheader | bool | optional whether to pass authorization header to webserver if FPM is used, default is 0 (false) |
| override_fpmconfig | bool | optional whether to override fpm-daemon-config value for the following settings if FPM is used, default is 0 (false) |
| pm | string | optional process-manager to use if FPM is used (allowed values are 'static', 'dynamic' and 'ondemand'), default is fpm-daemon-value |
| max_children | int | optional number of max children if FPM is used, default is the fpm-daemon-value |
| start_server | int | optional number of servers to start if FPM is used, default is fpm-daemon-value |
| min_spare_servers | int | optional number of minimum spare servers if FPM is used, default is fpm-daemon-value |
| max_spare_servers | int | optional number of maximum spare servers if FPM is used, default is fpm-daemon-value |
| max_requests | int | optional number of maximum requests if FPM is used, default is fpm-daemon-value |
| idle_timeout | int | optional number of seconds for idle-timeout if FPM is used, default is fpm-daemon-value |
| limit_extensions | string | optional limitation of php-file-extensions if FPM is used, default is fpm-daemon-value |
| allow_all_customers | bool | optional add this configuration to the list of every existing customer's allowed-fpm-config list, default is false (no) |

#### Response

`string` as `json-encoded array`

## PhpSettings.delete

delete a php-setting entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | php-settings-id |

#### Response

`string` as `json-encoded array`