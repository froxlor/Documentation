# Emails

## Emails.add

add a new email address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| email_part | string | name of the address before @ |
| domain | string | domain-name for the email-address |
| spam_tag_level | float | optional, score which is required to tag emails as spam, default: 7.0 |
| rewrite_subject | bool | optional, whether to add ***SPAM*** to the email's subject if applicable, default: [antispam.default_spam_rewrite_subject] |
| spam_kill_level | float | optional, score which is required to discard emails, default: 14.0 |
| bypass_spam | boolean | optional, disable spam-filter entirely, default: [antispam.default_bypass_spam] |
| policy_greylist | boolean | optional, enable grey-listing, default: [antispam.default_policy_greylist] |
| iscatchall | boolean | optional, make this address a catchall address, default: no |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| description | string | optional custom description (currently not used/shown in the frontend), default empty |

#### Response

`string` as `json-encoded array`

## Emails.get

return a email-address entry by either id or email-address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address |

#### Response

`string` as `json-encoded array`

## Emails.update

toggle catchall flag of given email address either by id or email-address

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| spam_tag_level | float | optional, score which is required to tag emails as spam, default: 7.0 |
| rewrite_subject | bool | optional, whether to add ***SPAM*** to the email's subject if applicable, default: [antispam.default_spam_rewrite_subject] |
| spam_kill_level | float | optional, score which is required to discard emails, default: 14.0 |
| bypass_spam | boolean | optional, disable spam-filter entirely, default: [antispam.default_bypass_spam] |
| policy_greylist | boolean | optional, enable grey-listing, default: [antispam.default_policy_greylist] |
| iscatchall | boolean | optional |
| description | string | optional custom description (currently not used/shown in the frontend), default empty |

#### Response

`string` as `json-encoded array`

## Emails.listing

list all email addresses, if called from an admin, list all email addresses of all customers you are allowed to view, or specify id or loginname for one specific customer

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select email addresses of a specific customer by id |
| loginname | string | optional, admin-only, select email addresses of a specific customer by loginname |
| sql_search | array | optional array with index = fieldname, and value = array with 'op' => operator (one of <, > or =),LIKE is used if left empty and 'value' => searchvalue |
| sql_limit | int | optional specify number of results to be returned |
| sql_offset | int | optional specify offset for resultset |
| sql_orderby | array | optional array with index = fieldname and value = ASC\|DESC to order the resultset by one or morefields |

#### Response

`string` as `json-encoded array count|list`

## Emails.listingCount

returns the total number of accessible email addresses

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select email addresses of a specific customer by id |
| loginname | string | optional, admin-only, select email addresses of a specific customer by loginname |

#### Response

`string` as `json-encoded response message`

## Emails.delete

delete an email address by either id or username

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the email-address-id |
| emailaddr | string | optional, the email-address |
| customerid | int | optional, required when called as admin (if $loginname is not specified) |
| loginname | string | optional, required when called as admin (if $customerid is not specified) |
| delete_userfiles | boolean | optional, delete email data from filesystem, default: 0 (false) |

#### Response

`string` as `json-encoded array`