---
layout: page
title: EmailForwarders
parent: 0.10.37
grand_parent: Commands
---

# EmailForwarders

## EmailForwarders.add

add new email-forwarder entry for given email-address by either id or email-address

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to add the forwarder for |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| destination | string | email-address to add as forwarder |

#### Response

`string` as `json-encoded array`

## EmailForwarders.get

You cannot directly get an email forwarder. Try EmailForwarders.listing()

## EmailForwarders.update

You cannot update an email forwarder. You need to delete the entry and create a new one.

## EmailForwarders.listing

List email forwarders for a given email address

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to delete the forwarder from |
| customerid | int | optional, admin-only, the customer-id |
| loginname | string | optional, admin-only, the loginname |

#### Response

`string` as `json-encoded array count|list`

## EmailForwarders.listingCount

count email forwarders for a given email address

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to delete the forwarder from |
| customerid | int | optional, admin-only, the customer-id |
| loginname | string | optional, admin-only, the loginname |

#### Response

`string` as `json-encoded array`

## EmailForwarders.delete

delete email-forwarder entry for given email-address by either id or email-address and forwarder-id

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to delete the forwarder from |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| forwarderid | int | id of the forwarder to delete |

#### Response

`string` as `json-encoded array`