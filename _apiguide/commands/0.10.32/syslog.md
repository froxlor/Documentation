---
layout: page
title: SysLog
parent: 0.10.32
grand_parent: Commands
---

# SysLog

## SysLog.listing

list all log-entries

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

## SysLog.listingCount

returns the total number of log-entries

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## SysLog.get

You cannot get log entries

#### Response

`-1` as `-1`

## SysLog.add

You cannot add log entries

#### Response

`-1` as `-1`

## SysLog.update

You cannot update log entries

#### Response

`-1` as `-1`

## SysLog.delete

delete log entries

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| min_to_keep | int | optional minutes to keep, default is 10 |

#### Response

`string` as `json-encoded array`