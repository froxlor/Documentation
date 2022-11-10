# IPs and ports

IP addresses are required so froxlor can generate VirtualHost files for the webserver. You need to add IP addresses for every port you want to serve and specify whether it is an SSL port or not (required `ssl` to be enabled in the `System settings`).

! **Note on SSL:** Certificates are inherited, meaning, if a domain has no certificate specified, it will fallback on the certificate specified for the IP/port. In case this value is also empty, froxlor will fallback to the global certificates specified in the `SSL settings`

If your are **behind a Proxy** and/or your server only has an **internal IP address**, you need to specify the private IP here as the server can only listen on IP addresses it has configured. You should also **disable** the **DNS check** for Let's Encrypt certificates if you intend to use them, as it will prevent you from enabling Let's Encrypt as no public IP address is configured in froxlor and won't find a matching entry from the domains DNS.

## Properties of IPs and ports

<UiBrowser src="/img/frx_ipsports_overview.png" alt="IPs and ports overview"/>

[h3 id="ip-listen-statement"]1. Create Listen statement (_not available/required for nginx_)[/h3]

If using non-standard ports you might need to activate the `Listen` directive for these ports. This is most likely not required for the default standard ports **80** and **443**, depending on your system.

### 2. Create NameVirtualHost statement (_apache-2.2 only_)

For older system using apache-2.2 the `NameVirtualHost` statement will be required in order for the VirtualHosts to be named based instead of IP based. You most likely will not need or even see this setting.

### 3. Create vHost-Container

When selected, froxlor creates a complete virtual-host for this ip/port combination, meaning it will point to a specified directory with corresponding content for PHP and/or SSL etc. If unchecked, only the `Listen` directive will be generated (see [Create Listen statement](#ip-listen-statement).

### 4. Custom docroot

By default (and empty value) the IP/port virtual host will point to your froxlor installation. You can, especially when using multiple ip addresses, also specify a different document root. Keep in mind that depending on your php related settings, you might encounter permission/ownership issues.

### 5. Own vHost-settings

::: tip NOTE
The code won't be checked for any errors. If it contains errors, webserver might not start again!
:::

The content of this field will be included into this ip/port vHost container directly. You can use the following replacers: `{DOMAIN}`, `{DOCROOT}`, `{CUSTOMER}`, `{IP}`, `{PORT}`, `{SCHEME}`, `{FPMSOCKET}` (if applicable).

### 6. Create ServerName statement in vHost-Container

When activated, adds/binds the froxlor system-hostname (specified on the installation) to the virtual host of the ip address.

### 7. Webserver domain config

#### 7.1 Default (SSL) vHost-settings for every domain container

::: tip NOTE
The code won't be checked for any errors. If it contains errors, webserver might not start again!
:::

The content of this field will be included into the **customers domain vHost** container directly (not the ip addresses virtualhost!). You can use the following replacers: `{DOMAIN}`, `{DOCROOT}`, `{CUSTOMER}`, `{IP}`, `{PORT}`, `{SCHEME}`, `{FPMSOCKET}` (if applicable).

#### 7.2 Include non-SSL vHost-settings in SSL-vHost

Activate this if you want to add the contents of the `Default vHost-settings for every domain container` to the **SSL variation** of the virtual host too.

### 8. Webserver SSL config

#### 8.1 Is this an SSL Port

When checked, froxlor will generate corresponding SSL related directives based on settings and with specified certificate files or system-certificate as fallback (if given).

If no ssl-certificate is specified here and the fallback from the system settings does not exist or is invalid, the ssl-virtualhost will only contain a comment that it is disabled due to missing certificates.

#### 8.2 SSL certificate files

Specify the path to the certificate, private key, optionally intermediate and CA files. These files need to be stored on the server manually.

#### 8.3 Own SSL vHost-settings

Same as [5. Own vHost-settings](#5-own-vhost-settings) but for **SSL** virtualhost.

#### 8.4 Include non-SSL vHost-settings in SSL-vHost

Activate this if you want to add the contents of the `Own vHost-settings` to the **SSL variation** of the virtual host too.