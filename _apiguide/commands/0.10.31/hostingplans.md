---
layout: page
title: HostingPlans
parent: 0.10.31
grand_parent: Commands
---

# HostingPlans

## HostingPlans.listing

list all available hosting plans

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

## HostingPlans.listingCount

returns the total number of accessible hosting plans

#### Permission

`admin`

#### Response

`string` as `json-encoded array`

## HostingPlans.get

return a hosting-plan entry by either id or plan-name

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional, the hosting-plan-id |
| planname | string | optional, the hosting-plan-name |

#### Response

`string` as `json-encoded array`

## HostingPlans.add

add new hosting-plan

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| name | string | name of the plan |
| description | string | optional, description for hosting-plan |
| diskspace | int | optional disk-space available for customer in MB, default 0 |
| diskspace_ul | bool | optional, whether customer should have unlimited diskspace, default 0 (false) |
| traffic | int | optional traffic available for customer in GB, default 0 |
| traffic_ul | bool | optional, whether customer should have unlimited traffic, default 0 (false) |
| subdomains | int | optional amount of subdomains available for customer, default 0 |
| subdomains_ul | bool | optional, whether customer should have unlimited subdomains, default 0 (false) |
| emails | int | optional amount of emails available for customer, default 0 |
| emails_ul | bool | optional, whether customer should have unlimited emails, default 0 (false) |
| email_accounts | int | optional amount of email-accounts available for customer, default 0 |
| email_accounts_ul | bool | optional, whether customer should have unlimited email-accounts, default 0 (false) |
| email_forwarders | int | optional amount of email-forwarders available for customer, default 0 |
| email_forwarders_ul | bool | optional, whether customer should have unlimited email-forwarders, default 0 (false) |
| email_quota | int | optional size of email-quota available for customer in MB, default is system-setting mail_quota |
| email_quota_ul | bool | optional, whether customer should have unlimited email-quota, default 0 (false) |
| email_imap | bool | optional, whether to allow IMAP access, default 0 (false) |
| email_pop3 | bool | optional, whether to allow POP3 access, default 0 (false) |
| ftps | int | optional amount of ftp-accounts available for customer, default 0 |
| ftps_ul | bool | optional, whether customer should have unlimited ftp-accounts, default 0 (false) |
| mysqls | int | optional amount of mysql-databases available for customer, default 0 |
| mysqls_ul | bool | optional, whether customer should have unlimited mysql-databases, default 0 (false) |
| phpenabled | bool | optional, whether to allow usage of PHP, default 0 (false) |
| allowed_phpconfigs | array | optional, array of IDs of php-config that the customer is allowed to use, default empty (none) |
| perlenabled | bool | optional, whether to allow usage of Perl/CGI, default 0 (false) |
| dnsenabled | bool | optional, whether to allow usage of the DNS editor (requires activated nameserver in settings), default 0 (false) |
| logviewenabled | bool | optional, whether to allow access to webserver access/error-logs, default 0 (false) |

#### Response

`string` as `json-encoded array`

## HostingPlans.update

update hosting-plan by either id or plan-name

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the hosting-plan-id |
| planname | string | optional the hosting-plan-name |
| name | string | optional name of the plan |
| description | string | optional description for hosting-plan |
| diskspace | int | optional disk-space available for customer in MB, default 0 |
| diskspace_ul | bool | optional, whether customer should have unlimited diskspace, default 0 (false) |
| traffic | int | optional traffic available for customer in GB, default 0 |
| traffic_ul | bool | optional, whether customer should have unlimited traffic, default 0 (false) |
| subdomains | int | optional amount of subdomains available for customer, default 0 |
| subdomains_ul | bool | optional, whether customer should have unlimited subdomains, default 0 (false) |
| emails | int | optional amount of emails available for customer, default 0 |
| emails_ul | bool | optional, whether customer should have unlimited emails, default 0 (false) |
| email_accounts | int | optional amount of email-accounts available for customer, default 0 |
| email_accounts_ul | bool | optional, whether customer should have unlimited email-accounts, default 0 (false) |
| email_forwarders | int | optional amount of email-forwarders available for customer, default 0 |
| email_forwarders_ul | bool | optional, whether customer should have unlimited email-forwarders, default 0 (false) |
| email_quota | int | optional size of email-quota available for customer in MB, default is system-setting mail_quota |
| email_quota_ul | bool | optional, whether customer should have unlimited email-quota, default 0 (false) |
| email_imap | bool | optional, whether to allow IMAP access, default 0 (false) |
| email_pop3 | bool | optional, whether to allow POP3 access, default 0 (false) |
| ftps | int | optional amount of ftp-accounts available for customer, default 0 |
| ftps_ul | bool | optional, whether customer should have unlimited ftp-accounts, default 0 (false) |
| mysqls | int | optional amount of mysql-databases available for customer, default 0 |
| mysqls_ul | bool | optional, whether customer should have unlimited mysql-databases, default 0 (false) |
| phpenabled | bool | optional, whether to allow usage of PHP, default 0 (false) |
| allowed_phpconfigs | array | optional, array of IDs of php-config that the customer is allowed to use, default empty (none) |
| perlenabled | bool | optional, whether to allow usage of Perl/CGI, default 0 (false) |
| dnsenabled | bool | optional, either to allow usage of the DNS editor (requires activated nameserver in settings), default 0 (false) |
| logviewenabled | bool | optional, either to allow access to webserver access/error-logs, default 0 (false) |

#### Response

`string` as `json-encoded array`

## HostingPlans.delete

delete hosting-plan by either id or plan-name

#### Permission

`admin`

#### Parameter

| Field | Type | Description |
| :--- | :--- | :--- |
| id | int | optional the hosting-plan-id |
| planname | string | optional the hosting-plan-name |

#### Response

`string` as `json-encoded array`