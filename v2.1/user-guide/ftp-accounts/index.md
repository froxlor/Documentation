# FTP

FTP accounts are used to transfer files on the server, you can also use secured transfer via FTPS.

## 1. Add a new FTP account

<UiBrowser :src="('/img/frx_ug_ftp_overview.png')" alt="FTP users overview"/>

<UiBrowser :src="('/img/frx_ug_ftp_create.png')" alt="Add new FTP user"/>

## 2. Update an existing FTP account

<UiBrowser :src="('/img/frx_ug_ftp_overview.png')" alt="FTP users overview"/>

<UiBrowser :src="('/img/frx_ug_ftp_edit.png')" alt="Edit existing FTP user"/>

## 3. Access with an FTP account

Your storage can usually be managed with a FTP client like FileZilla.

* Port: `21`
* Hostname: `your domain or froxlor hostname`
* Username: `the selected ftp username` in our example **web1**
* Password: `the selected ftp password`

::: tip NOTE
If using tls/ssl for FTP connection, be sure to use the correct hostname to connect (mostly the froxlor hostname) as you
might be notified about a mismatch in the domain name for the certificate and might not be able to connect.

When in doubt, ask your administrator for the correct hostname to use.
:::

## 4. Delete an existing FTP account

<UiBrowser :src="('/img/frx_ug_ftp_delete.png')" alt="Security question"/>
