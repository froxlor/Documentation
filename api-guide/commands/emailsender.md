# EmailSender

## EmailSender.add

add a new sender email address for a given email-address either by id or emailaddr

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional id of email-address to add the allowed sender for (must have an account) |
| emailaddr | string | optional address of email-address to add the allowed sender for (must have an account) |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| allowed_sender | string | required email-address or @domain.tld notation (wildcard) of allowed sender entry for the given account |

#### Response

`string` as `json-encoded array`

## EmailSender.update

You cannot update an email sender alias. You need to delete the entry and create a new one.

## EmailSender.get

You cannot directly get an email sender alias. Try EmailSender.listing()

## EmailSender.listing

List email senders for a given email address

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the id of the email-address to list allowed senders from |
| emailaddr | string | optional, the email-address to list allowed senders from |
| customerid | int | optional, admin-only, the customer-id |
| loginname | string | optional, admin-only, the loginname |

#### Response

`string` as `json-encoded array count|list`

## EmailSender.listingCount

returns the total number of allowed sender addresses for a given email address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the id of the email-address to list allowed senders from |
| emailaddr | string | optional, the email-address to list allowed senders from |
| customerid | int | optional, admin-only, the customer-id |
| loginname | string | optional, admin-only, the loginname |

#### Response

`string` as `json-encoded response message`

## EmailSender.delete

delete email-sender entry for given email-address by either id or email-address and sender-id

#### Permission

`admin,customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address to delete the forwarder from |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| senderid | int | id of the sender to delete |

#### Response

`string` as `json-encoded array`