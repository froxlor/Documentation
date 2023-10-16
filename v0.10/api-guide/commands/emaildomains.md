# EmailDomains

## EmailDomains.listing

list all domains with email addresses connected to it. If called from an admin, list all domains with email addresses connected to it from all customers you are allowed to view, or specify id or loginname for one specific customer

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

## EmailDomains.listingCount

returns the total number of accessible domains with email addresses connected to

#### Permission

`admin` `customer`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| customerid | int | optional, admin-only, select email addresses of a specific customer by id |
| loginname | string | optional, admin-only, select email addresses of a specific customer by loginname |

#### Response

`string` as `json-encoded response message`

## EmailDomains.get



#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`

## EmailDomains.add



#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`

## EmailDomains.update

toggle catchall flag of given email address either by id or email-address

#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`

## EmailDomains.delete



#### Permission

`admin` `customer`

#### Response

`string` as `json-encoded array`