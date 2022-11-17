# Domains

With domains your website is accessible under a certain name. Each customer can have multiple domains, these can only be added by the reseller or admin. After the domain has been added, it can usually be managed by the customer. 

To manage your domains, click on "_**Domains » Domains overview**_" in the sidebar and your domains will be shown.

## 1. Add a new domain

You have to ask your "_**Reseller / Admin**_" to add a new Domain.

To connect a domain to froxlor it is best to add an `A` (IPv4) and an `AAAA` (IPv6) record to the DNS, you can find the IP addresses in the froxlor domain edit page.

## 2. Update an existing domain

To update the domain settings, you have to choose your domain in your overview list.

<UiBrowser :src="$withBase('/img/frx_ug_domains_overview.png')" alt="Domain overview"/>

Click on the <i class="fa fa-edit"></i> icon to edit the domain.

<UiBrowser :src="$withBase('/img/frx_ug_domains_edit.png')" alt="Edit domain"/>

After each change, the system needs some time to re-read the configuration (usually 5 minutes).

## 3. Delete an existing domain

You have to ask your "_**Reseller / Admin**_" to delete your existing domain.
