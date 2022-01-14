---
layout: page
title: Domain Import
nav_order: 3
---

# Domain import

## Abstract

*Versions: 0.9.x*
The file structure/layout is strongly based on the structure of the table _panel_domains_. We decided to keep the import very basic, so not every option and possiblity you see in the interface for adding domains is available here.

*Since: 0.10.0*
The file structure/layout is based on the API parameters for [_Domains.add_](https://api.froxlor.org/doc/#v-Domains).

## Procedure/UI explanation

_[0.9.x only]_ First, *choose the customer* that will get the imported domains assigned. It is not possible to assign domains to different customers at once. _[in 0.10.x you simply specify the customerid/loginname parameter in the import file]_

The *separator field* specifies the character which is used in the CSV-file to split the fields, usually this is a semicolon or a comma.

If you have headlines (besides the required first one) in your CSV file or want to specify at what position the import should start, you can use the *offset field* to tell froxlor to start reading the domains at the given position, e.g. set offset to 2 if your second row is not a domain entry but another headline.

The last part is a simple file-select-dialog. Please chose the desired CSV-file here and press *"Save"*

## File structure since 0.10.0

* Note: The string-fields *must not* be enclosed in quotes!
* Note: For boolean values, you should use *0* for false and *1* for true

There is no given order for the fields in the file. The first line of the file *must* be the required parameters names from [_Domains.add_](https://api.froxlor.org/doc/#v-Domains) and of course any optional parameter you need.

## File structure version 0.9.x

* Note: The string-fields *must not* be enclosed in quotes!
* Note: For boolean values, you should use *0* for false and *1* for true

| field# | name | type | description | avail. in version |
| ------ | ---- | ---- | ----------- | ----------------- |
| 1 | domain | string | the domain to add, e.g. *`example.com`* | 0.9.33 |
| 2 | documentroot | string | path relative to the customer-documentroot, e.g. *`/subdir/`* If you specify a URL here (starting with *`http://`* or *`https://`*) froxlor will generate a redirect to that URL. Leave empty to use the customer-documentroot | 0.9.33 |
| 3 | aliasdomain | string | optionally specify a domain here which this domain will be an alias of. The given domain *`must`* exist or - if also in the import file - must be *`above`* this domain | *0.9.34* |
| 4 | isbinddomain | boolean | generate a bind-zonefile for the domain or not, default depends on whether you have dns/bind enabled | 0.9.33 |
| 5 | isemaildomain | boolean | whether or not the customer is allowed to use this domain for e-mail | 0.9.33 |
| 6 | email_only | boolean | whether or not the customer is allowed to use this domain *`only`* for e-mail | 0.9.33 |
| 7 | iswildcarddomain | boolean | whether to generate a wildcard (*`*`*) entry for this domain | 0.9.33 |
| 8 | subcanemaildomain | boolean | whether subdomains of this domain can be used for e-mail | 0.9.33 |
| 9 | caneditdomain | boolean | set this to *`1`* (true) if the customer should be able to edit this domain | 0.9.33 |
| 10 | zonefile | string | optionally specify a zonefile for this domain - the froxlor-cronjob does *`not`* create a domain-zonefile if this is set. | *0.9.34* |
| 11 | wwwserveralias | boolean | in case *`iswildcarddomain`* is set to *`0`* (false), set this to *`1`* (true) to generate an www-alias for your domain, e.g. *www*.yourdomain.tld | 0.9.33 |
| 12 | openbasedir | boolean | whether to use openbasedir for this domain or not, default is *`1`* (true) | *0.9.34* |
| 13 | speciallogfile | boolean | set this to *`1`* (true) if you want a separate webserver-acces/error log for this domain | *0.9.34* |
| 14 | specialsettings | string | optional content that is being added to the domains virtual-host directive | 0.9.33 |
| 15 | ssl_redirect | boolean | set this to *`1`* (true) if you want a http to https redirect for this domain (if ip/port for ssl exists and assigned to this domain), *beware* that you need to manually check this! | 0.9.33 |
| 16 | use_ssl | boolean | whether SSL IP/ports are assigned to this domain or not (if enabled at all). If this is set to *`0`* (false) and *`ssl_redirect`* is set to *`1`* it will automatically be deactivated. | *0.9.34* |
| 17 | registration_date | string | optional date of registration, format: *`yyyy-mm-dd`* | 0.9.33 |
| 18 | ips | string | comma-separated list of ip-addresses (without *`:port`*) this domain is for. If there are two or more entries in _panel_ipsandports_ for this IP (different ports), we will assign *all* of them. If you don't want SSL IP/ports to be assigned to the domain, use the *`use_ssl`* switch (field no. 16). IPv6 addresses can be used too and without the need to specify brackets ([ and ]). IP's that are not set up in froxlor (IP/Port settings) are *ignored* for the domain. *If the field is left empty, the system-default IP is being used* | 0.9.33 |
| 19 | letsencrypt | boolean | whether to enable Let's Encrypt. *Note* this only works with enabled SSL and `iswildcarddomain` = false | **0.9.39** |
| 20 | hsts | number | HSTS max-age value, 0 removes the header | **0.9.39** |
| 21 | hsts_sub | boolean | Include HSTS for any subdomain, default *false* | **0.9.39** |
| 22 | hsts_preload | boolean | Include domain in HSTS preload list, default *false* | **0.9.39** |
| 23 | ocsp_stapling | boolean | Whether to enable OSCP-stapling for this domain, requires SSL | **0.9.39** |
| 24 | phpenabled | boolean | Whether PHP is enabled on this domain or not | **0.9.39** |
| 25 | http2 | boolean | Whether to enable http2 for this domain, requires SSL | **0.9.39** |

## Validation and counters

### Non-fatal errors / skip of domains

The following problems will only ignore the current domain without displaying an error.

* not a valid domain (/^http:\/\/([a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z0-9\-]{2,63}$/i)
* the domain is equal to the system-hostname
* the domain already exists in the froxlor database
* If you do not have unlimited domain contingent, the import will stop at the maximum allowed number of domains and skip the rest
* specified aliasdomain is invalid (see first -> valid domain)
* specified aliasdomain does not exist (be sure to specify a domain that should be used as alias *before* the domain which wants to set the alias!)

### Exceptions / abort of import

The following problems will abort the entire import:

* seperator is empty or more than one character long
* given offset is < 0 or not numeric
* specified customer-id is <= 0
* no file to import given
* file could not be found (very unlikeley due to upload)
* unable to open/read file (also very unlikeley)
* no domains were read from the file

### History

| Date | Developer | Description |
| ---- | --------- | ----------- |
| 31.01.2015 | Michael Kaufmann (d00p) | Initial version of this document for 0.9.33 |
| 06.03.2015 | Michael Kaufmann (d00p) | added fields for version 0.9.34, beware, order of fields has changed! |
| 18.04.2017 | Michael Kaufmann (d00p) | added fields for upcoming version 0.9.39 |
| 24.08.2017 | Michael Kaufmann (d00p) | added http2 field for upcoming version 0.9.39 |
| 03.12.2018 | Michael Kaufmann (d00p) | updated documentation for 0.10.0 API version |
| 14.10.2020 | Michael Kaufmann (d00p) | updated documentation to be more understandable |
| 13.01.2022 | Michael Kaufmann (d00p) | converted/moved to githubpages |
