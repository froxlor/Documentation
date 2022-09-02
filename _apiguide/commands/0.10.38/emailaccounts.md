---
layout: page
title: EmailAccounts
parent: 0.10.38
grand_parent: Commands
---

# EmailAccounts

## EmailAccounts.add

add a new email account for a given email-address either by id or emailaddr

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional email-address-id of email-address to add the account for |
| emailaddr | string | optional email-address to add the account for |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| email_password | string | password for the account |
| alternative_email | string | optional email address to send account information to, default is the account that is being created |
| email_quota | int | optional quota if enabled in MB, default 0 |
| sendinfomail | bool | optional, sends the welcome message to the new account (needed for creation, without the user won't be able to login before any mail is received), default 1 (true) |

#### Response

`string` as `json-encoded array`

## EmailAccounts.get

You cannot directly get an email account. You need to call Emails.get()

## EmailAccounts.update

update email-account entry for given email-address by either id or email-address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to update |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| email_quota | int | optional, update quota |
| email_password | string | optional, update password |
| deactivated | bool | optional, admin-only |

#### Response

`string` as `json-encoded array`

## EmailAccounts.listing

You cannot directly list email accounts. You need to call Emails.listing()

## EmailAccounts.listingCount

You cannot directly count email accounts. You need to call Emails.listingCount()

## EmailAccounts.delete

delete email-account entry for given email-address by either id or email-address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to delete the account for |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| delete_userfiles | bool | optional, default false |

#### Response

`string` as `json-encoded array`