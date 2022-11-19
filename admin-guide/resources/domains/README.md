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
The logfiles viewer is not available for domains with the `email_only`-flag enabled.
:::

### 2.2 DNS editor

If enabled, a domains DNS zone can be edited with the dns-editor. You can open the editor for a specific domain by clicking on the <i class="fa-solid fa-globe"></i> icon on the right side.

<UiBrowser :src="$withBase('/img/frx_domains_dnseditor.png')" alt="Domain - DNS editor"/>

Required resource records, like `A`, `AAAA` or `NS` entries, are being generated automatically based on the values in the settings. To preview the generated zone, you can switch to the `DNS Zone` tab on the top of the page.

<UiBrowser :src="$withBase('/img/frx_domains_dnszone.png')" alt="Domain - DNS zone"/>

### 2.3 SSL editor

For ssl-enabled domains, there are different indicators which show the currently used certificate.

| Indicator                                                                                                                                                                                        | Description                                                                                                                                                                                                               |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <i class="fa-solid fa-shield text-danger"></i>                                                                                                                                                   | The domain is using the global certificate specified in the settings or in [IPs and ports](../ips-and-ports). <br/><br/>_No ssl-certificate has been specified for this domain explicitly._                               |
| <i class="fa-solid fa-shield text-warning"></i> | Domain inherits the certificate from its parentdomain (e.g. for subdomains). <br/><br/>_No ssl-certificate has been specified for this domain explicitly._                                                                |
| <i class="fa-solid fa-shield text-success"></i> | A domain specific certificate is assigned to that domain .                                                                                                                                                                |
| <i class="fa-solid fa-shield"></i> | This domain receives **Let's Encrypt** certificates automatically. <br/><br/>_Using this mode, no ssl-editor is available for the domain. If you want to specify your own certificate, deactivate `Let's Encrypt` first._ |

The certificate data given will be validated, e.g. that the private key matches the public key.

<UiBrowser :src="$withBase('/img/frx_domains_ssleditor.png')" alt="Domain - SSL editor"/>

## 3. Properties of Domains

### 3.1 Domain settings

### 3.2 Mailserver settings

### 3.3 Webserver settings

### 3.4 Webserver SSL settings

### 3.5 PHP Settings

### 3.6 Nameserver settings

## 4. Import domains

Please see separate [Domain import](../../domain-import) site.
