# Domains

## 1. General

A domain is an important base for your customers and their websites. They provide the possibility to add and use subdomains as well as create email-addresses and email-accounts.

Domains assigned to a customer by admins cannot be deleted by the customer. These domains will be indicated by the <i class="fa-solid fa-check-to-slot" title="Is assigned domain"></i> icon in the customer domains-overview.

<UiBrowser :src="$withBase('/img/frx_domains_overview.png')" alt="Domain overview"/>

::: warning ATTENTION
When deleting a domain using the <i class="fa-solid fa-trash text-danger"></i> icon, all associated subdomains and email-addresses/accounts **will be removed** too!<br/><br/>The **data** on the filesystem **will not** be removed.
:::

## 2. Overview
### 2.1 Logfiles viewer

To open the logfiles viewer, click on the <i class="fa-solid fa-file"></i> icon for the desired domain on the right side of the listing.

For froxlor to be able to read the log files, the `exec()`-function needs to be enabled/allowed in the [Froxlor Vhost PHP-configuration](../../php-versions-and-configuration).

::: tip NOTE
The logfiles viewer is not available for domains with the `email_only`-flag set.
:::

### 2.2 DNS editor

If enabled, a domains DNS zone can be edited with the dns-editor. You can open the editor for a specific domain by clicking on the <i class="fa-solid fa-globe"></i> icon on the right side.

<UiBrowser :src="$withBase('/img/frx_domains_dnseditor.png')" alt="Domain - DNS editor"/>

Required resource records, like `A`, `AAAA` or `NS` entries, are being generated automatically based on the values in the settings. To preview the generated zone, you can switch to the `DNS Zone` tab on the top of the page.

<UiBrowser :src="$withBase('/img/frx_domains_dnszone.png')" alt="Domain - DNS zone"/>

### 2.3 SSL editor

For ssl-enabled domains, there are different indicators which show the currently used certificate.

| Indicator                                                                                                                                                                                        | Description                                                                                                                                                                                                                 |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <i class="fa-solid fa-shield text-danger"></i>                                                                                                                                                   | The domain is using the global certificate specified in the settings or in [IPs and ports](../ips-and-ports). <br/><br/>_No ssl-certificate has been specified for this domain explicitly._                                 |
| <i class="fa-solid fa-shield text-warning"></i> | Domain **inherits** the certificate from its parentdomain (e.g. for subdomains). <br/><br/>_No ssl-certificate has been specified for this domain explicitly._                                                              |
| <i class="fa-solid fa-shield text-success"></i> | A **domain specific** certificate is assigned to that domain .                                                                                                                                                              |
| <i class="fa-solid fa-shield"></i> | This domain receives a **Let's Encrypt** certificate automatically. <br/><br/>_Using this mode, no ssl-editor is available for the domain. If you want to specify your own certificate, deactivate `Let's Encrypt` first._ |

The certificate data given will be validated, e.g. that the private key matches the public key.

<UiBrowser :src="$withBase('/img/frx_domains_ssleditor.png')" alt="Domain - SSL editor"/>

## 3. Properties of Domains

### 3.1 Domain settings

#### Domain

The domain you want to add to froxlor. Must be a <abbr title="full qualified domain name">FQDN</abbr> e.g. _mydomain.tld_. Adding subdomains is also possible (for example if a customer should not be able to use the complete domain). Just remember to specify the parentdomain correctly in case it is managed via froxlor too, see [This domain is a subdomain of another domain](#this-domain-is-a-subdomain-of-another-domain).

Internationalized domain names (IDN) can also be added, just enter the domain as is (not Punycode/IDNA format). Froxlor will automatically encode the domain correctly for you.

#### Customer & Admin

Select the target customer and admin to assign the new domain to.

#### Alias for domain

Set this domain as _alias of another_ domain. Most of the domain-specific settings will be inherited from the specified domain as the alias-domain will be added to the parent domains virtual-host.

#### This domain is a subdomain of another domain

In case you want to add a subdomain of a domain, select the corresponding main-domain here. This is important for a correct order of virtual-hosts in the webserver.

If the corresponding parent-domain is no managed within your froxlor-installation, you can skip this setting.

#### Allow editing of domain

If checked, the customer can edit/adjust specific settings and values for this domain. If not, no editing will be possible for the customer at all.

### 3.2 Mailserver settings

#### Emaildomain

Enables/disables this domain to be used as email domain. If disabled, the customer will not be able to add email-addresses/accounts with this domain.

#### Only email?

If enabled, this domain will only be available for email-services. No further configuration is necessary or relevant. The customer will not see this domain in the domain-overview, but it will be in the select-box of domains when adding e-mail addresses.

#### Subdomains as email-domains

Allows subdomains of this domain to be used as email domains. If set to anything but _never_, the customer will either be asked to set this flag when adding / editing a subdomain, or if set to _always_ all new subdomains will automatically be email-enabled domains too.

### 3.3 Webserver settings

#### DocumentRoot

Specify the domains documentroot. Default (empty) value will set it to the customers home-directory. The domain-name will be added as path below that, if enabled in the settings (default: yes). 

#### IP address(es)

Select all IP addresses the domain should listen to. Be sure that the domain resolves to at least one of these IP addresses.

#### ServerAlias value for the domain

Choose the form of server-alias directive in the generated webservers virtual-host. If set to _www alias_ or _no alias_ all unspecified subdomains will point to the first known virtual-host (mostly froxlor itself).

::: warning ATTENTION
When Let's Encrypt usage is intended for this domain, you should **not** select the **Wildcard** option, as wildcard-certificates are not (yet) supported by Let's Encrypt via http-validation.
:::

#### Own vHost-settings

::: tip NOTE
The code won't be checked for any errors. If it contains errors, webserver might not start again!
:::

The content of this field will be included into the domains vHost container directly. You can use the following replacers: `{DOMAIN}`, `{DOCROOT}`, `{CUSTOMER}`, `{IP}`, `{PORT}`, `{SCHEME}`, `{FPMSOCKET}` (if applicable).

#### No autogenerated try_files

::: warning ATTENTION
This setting is for **nginx** only
:::

Say yes here if you want to specify a custom try_files directive in your [Own vHost-settings(#own-vhost-settings) (needed for some wordpress plugins for example).

#### Write an access log / error log

Specify whether an access and/or error log should be written for this domain.

#### Separate logfile

Generate separate access- and error-logs for this domain. If not enabled, both logs will be set to customer-based logs.

::: tip NOTE
See also the **Access-log type** setting (apache only) or alternatively the **Access-log format** setting in **Settings  » Webserver settings**
:::

### 3.4 Webserver SSL settings

#### Enable usage of SSL

Enable/disable ssl-usage on that domain. Enabling SSL is _highly recommended_.

#### SSL IP address(es)

Select all _ssl-enabled_ IP addresses the domain should listen to. Be sure that the domain resolves to at least one of these IP addresses.

#### SSL redirect

This option, if enabled, creates a redirect from non-ssl vhost so that all requests are redirected to the SSL-vhost.

e.g. a request to <b>http://</b>domain.tld/ will redirect you to <b>https://</b>domain.tld/

#### Override system TLS settings

If enabled, the specified values from the settings `Configure the TLS protocol version`, `Configure the allowed SSL ciphers` and `Configure explicit TLSv1.3 ciphers if used` (_apache-2.4 only_) will be used instead of the global system settings.

#### Configure the TLS protocol version

_Only used if `Override system TLS settings` is set!_

Specify ssl protocols that you want (or don't want) to use when using SSL. **Notice:** Some older browsers may not support the newest protocol versions.

#### Configure the allowed SSL ciphers

_Only used if `Override system TLS settings` is set!_

Specify the ciphers that you want (or don't want) to use when talking SSL. For a list of ciphers and how to include/exclude them, see sections "CIPHER LIST FORMAT" and "CIPHER STRINGS" on the [openssl man-page](https://www.openssl.org/docs/manmaster/man1/openssl-ciphers.html) for ciphers.

#### Configure explicit TLSv1.3 ciphers if used

::: tip NOTE
Only available for apache-2.4+
:::

_Only used if `Override system TLS settings` is set!_

Specify the ciphers that you want (or don't want) to use when talking TLSv1.3. For a list of ciphers and how to include/exclude them, see [openssl documentation for TLSv1.3](https://wiki.openssl.org/index.php/TLS1.3)

#### Own SSL vHost-settings

::: tip NOTE
The code won't be checked for any errors. If it contains errors, webserver might not start again!
:::

The content of this field will be included into the domains **ssl** vHost container directly. You can use the following replacers: `{DOMAIN}`, `{DOCROOT}`, `{CUSTOMER}`, `{IP}`, `{PORT}`, `{SCHEME}`, `{FPMSOCKET}` (if applicable).

#### Include non-SSL vHost-settings in SSL-vHost

If enabled, the contents of the field `Own vHost-settings` will additionally be added to the corresponding SSL virtual-host configuration.

#### HTTP Strict Transport Security (HSTS)

Specify the max-age value for the Strict-Transport-Security header. The value **0** will disable HSTS for the domain.

It is advisable to assign the max-age directive's value to be greater than **10368000** seconds (120 days) and ideally to **31536000** (one year).

#### Include HSTS for any subdomain

The optional **includeSubDomains** directive, if enabled, signals the _User-Agent_ that the HSTS policy applies to this domain as well as any subdomains of the domain name.

#### Include domain in HSTS preload list

If you would like this domain to be included in the [HSTS preload list](https://hstspreload.org/) maintained by Chrome (and used by Firefox and Safari), then use activate this.
Sending the preload directive from your site can have **PERMANENT CONSEQUENCES** and prevent users from accessing your site and any of its subdomains.

Please read the details at [https://hstspreload.org/#removal](https://hstspreload.org/#removal) before sending the header with "preload".

#### OCSP stapling

See [Wikipedia](https://en.wikipedia.org/wiki/OCSP_stapling) page for a detailed explanation of OCSP stapling to decide whether you want to enable this.

::: warning ATTENTION
Webserver apache-2.4+ or nginx-1.3.7+ is required for OCSP stapling. If your version is older, the webserver will NOT start correctly while OCSP stapling is enabled!
:::

### 3.5 PHP Settings

### 3.6 Nameserver settings

## 4. Import domains

Please see separate [Domain import](../../domain-import) site.
