---
layout: page
title: Certificates
parent: 0.10.31
grand_parent: Commands
---

# Certificates

## Certificates.add

add new ssl-certificate entry for given domain by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |
| ssl_cert_file | string |  |
| ssl_key_file | string |  |
| ssl_ca_file | string | optional |
| ssl_cert_chainfile | string | optional |

#### Response

`string` as `json-encoded array`

## Certificates.get

return ssl-certificate entry for given domain by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |

#### Response

`string` as `json-encoded array`

## Certificates.update

update ssl-certificate entry for given domain by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain-id |
| domainname | string | optional, the domainname |
| ssl_cert_file | string |  |
| ssl_key_file | string |  |
| ssl_ca_file | string | optional |
| ssl_cert_chainfile | string | optional |

#### Response

`string` as `json-encoded array`

## Certificates.listing

lists all certificate entries

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## Certificates.listingCount

returns the total number of certificates for the given user

#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`

## Certificates.delete

delete certificates entry by id

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int |  |

#### Response

`string` as `json-encoded array`