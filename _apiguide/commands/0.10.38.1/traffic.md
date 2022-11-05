---
layout: page
title: Traffic
parent: 0.10.38.1
grand_parent: Commands
---

# Traffic

## Traffic.add

You cannot add traffic data

## Traffic.get

to get specific traffic details use year, month and/or day parameter for Traffic.listing()

## Traffic.update

You cannot update traffic data

## Traffic.listing

list traffic information

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| year | int | optional, default empty |
| month | int | optional, default empty |
| day | int | optional, default empty |
| date_from | int | optional timestamp, default empty, if specified, $year, $month and $day will be ignored |
| date_until | int | optional timestamp, default empty, if specified, $year, $month and $day will be ignored |
| customer_traffic | bool | optional, admin-only, whether to output ones own traffic or all of ones customers, default is 0 (false) |
| customerid | int | optional, admin-only, select traffic of a specific customer by id |
| loginname | string | optional, admin-only, select traffic of a specific customer by loginname |

#### Response

`string` as `json-encoded array count|list`

## Traffic.listingCount

You cannot count the traffic data list

## Traffic.delete

You cannot delete traffic data