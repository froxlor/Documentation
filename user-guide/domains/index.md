# Domains / subdomains

With domains your website is accessible under a certain name. Each customer can have multiple domains, these can only be added by the reseller or admin. After the domain has been added, it can usually be managed by the customer. 

To manage your domains, click on "_**Domains » Domains overview**_" in the sidebar and your domains will be shown.

## 1. Add a main domain

You have to ask your _**Reseller / Admin**_ to add a new Domain.

To connect a domain to froxlor it is best to add an `A` (IPv4) and an `AAAA` (IPv6) record to the DNS, you can find the IP addresses in the froxlor domain edit page or edit the shown columns for the domain overview and select `IPs and ports` for them to be visible.

## 2. Create new subdomain

### 2.1 Domain settings

#### Domain name

Specify the subdomain you want to add. You do not have to enter the full domain as you can select all available domains to add subdomains for in the dropdown right to the text-field.

There is no limit for subdomain-parts regarding depth, so you can also enter something like `my.super.sub` and select `example.com` from your domain list to create the subdomain `my.super.sub.example.com`.

#### Alias for domain

You can optionally set the new subdomain as an alias-domain for another existing domain. This means that the new subdomain will just be added to the aliases list for that domain and will inherit most of the settings from it.

#### Path

The documentroot/target of the subdomain. If left at the default value, depending on the froxlor settings, it will either point to the customer's home-directory or a sub-folder will be created within that home-directory with the subdomain as name.

If you want to **redirect to another domain/url**, you can alternatively specify an URL in this field, starting with `http://` or `https://`.

#### Redirect code

In case you've entered an URL in the `path` field you can select the corresponding HTTP-response code used for that redirect.

#### OpenBasedir-path

OpenBasedir is there to restrict permissions to a specific directory which enhances security. It can be used to `lock` a domain to a given directory. The default value is simply the documentroot of the domain (`path` field above).

You can optionally choose to restrict only to your home-directory or the parent-directory of the domain's documentroot, depending on your needs.

#### PHP Configuration

Select the PHP version/configuration from the list of available entities. Only admins can assign / change php-configurations available for the customer.

### 2.1 Webserver settings

#### Enable usage of SSL

If enabled, the domain will listen on all configured and assigned SSL-enabled IP addresses.

#### SSL redirect

This option creates redirects for non-ssl vhosts so that all requests are redirected to the SSL-vhost.

e.g. a request to <b>http://</b>domain.tld/ will redirect you to <b>https://</b>domain.tld/

#### Use Let's Encrypt

This option enabled the issuing and automatic renewal of free `Let's Encrypt` SSL certificates.

#### HTTP Strict Transport Security (HSTS)

Specify the max-age value for the Strict-Transport-Security header
The value 0 will disable HSTS for the domain.

It is advisable to assign the max-age directive's value to be greater than `10368000` seconds (120 days) and ideally to `31536000` (one year).

#### Include HSTS for any subdomain

The optional `"includeSubDomains"` directive, if present, signals the User-Agent/browser that the HSTS policy applies to this HSTS host as well as any subdomains of the host's domain name.

#### Include domain in HSTS preload list

If you would like this domain to be included in the [HSTS preload list](https://hstspreload.org/) maintained by Chrome (and used by Firefox and Safari), then use/activate this.

Sending the preload directive from your site can have _PERMANENT CONSEQUENCES_ and prevent users from accessing your site and any of its subdomains.
Please read the details at https://hstspreload.org/#removal before sending the header with "preload".

## 2. Update an existing domain

To update the domain settings, you have to choose your domain in your overview list.

<UiBrowser :src="('/img/frx_ug_domains_overview.png')" alt="Domain overview"/>

Click on the <i class="fa fa-edit"></i> icon to edit the domain.

<UiBrowser :src="('/img/frx_ug_domains_edit.png')" alt="Edit domain"/>

After each change, the system needs some time to re-read the configuration (usually 5 minutes).

## 3. Delete an existing (sub)domain

::: warning ATTENTION
Deleting domains also removes existing e-mail addresses for this domain (files won't be deleted).
:::

Any subdomain can be deleted by clicking on the <i class="fa fa-trash"></i> icon on the domain overview. To delete main-domains, you have to ask your _**reseller / admin**_ to remove a specific domain from your account.
