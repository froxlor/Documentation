---
layout: page
title: SubDomains
parent: 0.10.33
grand_parent: Commands
---

# SubDomains

## SubDomains.add

add a new subdomain

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| subdomain | string | part before domain.tld to create as subdomain |
| domain | string | domainname of main-domain |
| alias | int | optional, domain-id of a domain that the new domain should be an alias of |
| path | string | optional, destination path relative to the customers-homedir, default is customers-homedir |
| url | string | optional, overwrites path value with an URL to generate a redirect, alternatively use the path parameter also for URLs |
| openbasedir_path | int | optional, either 0 for domains-docroot or 1 for customers-homedir |
| phpsettingid | int | optional, php-settings-id, if empty the $domain value is used |
| redirectcode | int | optional, redirect-code-id from TABLE_PANEL_REDIRECTCODES |
| sslenabled | bool | optional, whether or not SSL is enabled for this domain, regardless of the assigned ssl-ips, default 1 (true) |
| ssl_redirect | bool | optional, whether to generate a https-redirect or not, default false; requires SSL to be enabled |
| letsencrypt | bool | optional, whether to generate a Let's Encrypt certificate for this domain, default false; requires SSL to be enabled |
| http2 | bool | optional, whether to enable http/2 for this subdomain (requires to be enabled in the settings), default 0 (false) |
| hsts_maxage | int | optional max-age value for HSTS header, default 0 |
| hsts_sub | bool | optional whether or not to add subdomains to the HSTS header, default 0 |
| hsts_preload | bool | optional whether or not to preload HSTS header value, default 0 |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## SubDomains.get

return a subdomain entry by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |

#### Response

`string` as `json-encoded array`

## SubDomains.update

update subdomain entry by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |
| alias | int | optional, domain-id of a domain that the new domain should be an alias of |
| path | string | optional, destination path relative to the customers-homedir, default is customers-homedir |
| url | string | optional, overwrites path value with an URL to generate a redirect, alternatively use the path parameter also for URLs |
| selectserveralias | int | optional, 0 = wildcard, 1 = www-alias, 2 = none |
| isemaildomain | bool | optional |
| openbasedir_path | int | optional, either 0 for domains-docroot or 1 for customers-homedir |
| phpsettingid | int | optional, php-settings-id, if empty the $domain value is used |
| redirectcode | int | optional, redirect-code-id from TABLE_PANEL_REDIRECTCODES |
| sslenabled | bool | optional, whether or not SSL is enabled for this domain, regardless of the assigned ssl-ips, default 1 (true) |
| ssl_redirect | bool | optional, whether to generate a https-redirect or not, default false; requires SSL to be enabled |
| letsencrypt | bool | optional, whether to generate a Let's Encrypt certificate for this domain, default false; requires SSL to be enabled |
| http2 | bool | optional, whether to enable http/2 for this domain (requires to be enabled in the settings), default 0 (false) |
| hsts_maxage | int | optional max-age value for HSTS header |
| hsts_sub | bool | optional whether or not to add subdomains to the HSTS header |
| hsts_preload | bool | optional whether or not to preload HSTS header value |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`

## SubDomains.listing

lists all subdomain entries

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select (sub)domains of a specific customer by id |
| loginname | string | optional, admin-only, select (sub)domains of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## SubDomains.listingCount

returns the total number of accessible subdomain entries

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select (sub)domains of a specific customer by id |
| loginname | string | optional, admin-only, select (sub)domains of a specific customer by loginname |

#### Response

`string` as `json-encoded array`

## SubDomains.delete

delete a subdomain by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |

#### Response

`string` as `json-encoded array`