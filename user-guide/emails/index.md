# E-Mails

E-mail addresses can be added as soon as the customer has at least one email-enabled domain sufficient resources assigned.

<UiBrowser :src="('/img/frx_ug_emails_overview.png')" alt="Email addresses overview"/>

## 1. Addresses

To create an e-mail address, navigate to `Email -> Adresses` and click on `Create email-address`. Chose your username and select the corresponding domain as well as optionally specify this address as [catchall address](#_1-1-catchall-address). An e-mail address without a forwader or account associated with it will not be able to either send or receive any emails. 

<UiBrowser :src="('/img/frx_ug_emails_create.png')" alt="Create email address"/>

### 1.1 Catchall address

If enabled for an e-email address, all emails sent to unknown usernames of that domain will be delivered to that address. Note that there can only be one catchall-address defined per domain.

### 1.2 Options after adding

After successfully creating the email-address you will automatically be redirected to the edit form for this address. Here you can additionally create an actual [account](#_2-accounts) for the address, toggle the catchall-flag and add [email-forwarders](#_3-forwarders). Creating accounts and forwarders require separate resources assigned to the user by the administrator/reseller.

<UiBrowser :src="('/img/frx_ug_emails_edit.png')" alt="Edit email address"/>

## 2. Accounts

To add an email account, you first need to create an e-mail address or edit an existing one. From there (see [graph above](#_1-2-options-after-adding)) you can click on `Create account`.
Set a password and optionally (if enabled) the desired maximum diskspace allowed for this account ([quota](#_4-quota)).

<UiBrowser :src="('/img/frx_ug_emails_createacc.png')" alt="Create email account"/>

## 3. Forwarders

To add an email forwarder, you first need to create an e-mail address or edit an existing one. From there (see [graph above](#_1-2-options-after-adding)) you can click on `Create forwarder`.
Enter the destination email address to where emails sent to this address shall be forwarded to.

<UiBrowser :src="('/img/frx_ug_emails_createfwd.png')" alt="Create email forwarder"/>

::: tip NOTE
In case the e-mail address has an active account and also forwarders, incoming e-mails will be delivered to **both**, the account and the specified forwarders. 
:::

## 4. Quota

An admin can assign a specific quota for e-email accounts to the customer. Regardless of the amount of resources assigned, the specified quota is the **total** amount of diskspace allowed to be used by any e-mail account of the customer. The customer can set the quota for each individual e-mail account up to the total of the allowed amount.

Quota for e-mail accounts can be set when creating the e-mail account or edited later on in the edit e-mail address form.

<UiBrowser :src="('/img/frx_ug_emails_editquota.png')" alt="Edit email quota"/>
