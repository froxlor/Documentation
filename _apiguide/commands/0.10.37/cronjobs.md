---
layout: page
title: Cronjobs
parent: 0.10.37
grand_parent: Commands
---

# Cronjobs

## Cronjobs.add

You cannot add new cronjobs yet.

## Cronjobs.get

return a cronjob entry by id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | cronjob-id |

#### Response

`string` as `json-encoded array`

## Cronjobs.update

update a cronjob entry by given id

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int |  |
| isactive | bool | optional whether the cronjob is active or not |
| interval_value | int | optional number of seconds/minutes/hours/etc. for the interval |
| interval_interval | string | optional interval for the cronjob (MINUTE, HOUR, DAY, WEEK or MONTH) |

#### Response

`string` as `json-encoded array`

## Cronjobs.listing

lists all cronjob entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =), LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or more fields |

#### Response

`string` as `json-encoded array count|list`

## Cronjobs.listingCount

returns the total number of cronjobs

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## Cronjobs.delete

You cannot delete system cronjobs.