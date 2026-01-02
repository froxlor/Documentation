# SSL certificates

Here you can see the currently active ssl certificates froxlor manages. For adding / editing certificates please see [Resources -> Domains -> SSL editor](../domains/#_2-3-ssl-editor)

::: tip NOTE
If you do not see an edit/delete button, the certificate is managed by froxlor (e.g. Let's Encrypt). In order to remove it, deactivate `Use Let's Encrypt` for the corresponding domain. The cronjob will handle the rest.
:::

<UiBrowser :src="('/img/frx_ssl_list.png')" alt="SSL certificates overview"/>
