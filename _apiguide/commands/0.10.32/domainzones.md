---
layout: page
title: DomainZones
parent: 0.10.32
grand_parent: Commands
---

# DomainZones

## DomainZones.add

add a new dns zone for a given domain by id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional domain id |
| domainname | string | optional domain name |
| record | string | optional, default empty |
| type | string | optional, zone-entry type (A, AAAA, TXT, etc.), default 'A' |
| prio | int | optional, priority, default empty |
| content | string | optional, default empty |
| ttl | int | optional, default 18000 |

#### Response

`string` as `json-encoded array`

## DomainZones.get

return a domain-dns entry by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain id |
| domainname | string | optional, the domain name |

#### Response

`string` as `json-encoded array`

## DomainZones.update

You cannot update a dns zone entry. You need to delete it and re-add it.

## DomainZones.listing

List all entry records of a given domain by either id or domainname

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain id |
| domainname | string | optional, the domain name |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`bool` as `-1`

## DomainZones.listingCount

returns the total number of domainzone-entries for given domain

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the domain id |
| domainname | string | optional, the domain name |

#### Response

`bool` as `-1`

## DomainZones.delete

deletes a domain-dns entry by id

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| entry_id | int |  |
| id | int | optional, the domain id |
| domainname | string | optional, the domain name |

#### Response

`bool` as `-1`