# Extras

## 1. Directory protection

Use directory-protection to password-protect certain folders within your home-directory. The statistics pages (default _/goaccess/_) will automatically be protected with the customers loginname and password.

<UiBrowser :src="$withBase('/img/frx_ug_dirprotection_overview.png')" alt="Directory protection overview"/>

To protect a new directory, enter the path relativ to your home directory. If the folder does not exist yet, it will automatically be created. Chose a custom username and password and specify a short description/reason (will be displayed) to access the page.

<UiBrowser :src="$withBase('/img/frx_ug_dirprotection_add.png')" alt="Add a new directory protection"/>

## 2. Path options

Special options for certain directories can be added using `Path options`. Options include enabling of directory-browsing (list/show the content of the folder in the browser) and custom error-documents. The latter depend on the used webserver.

<UiBrowser :src="$withBase('/img/frx_ug_diropts_add.png')" alt="Set directory specific options"/>

## 3. System log

View froxlor-interface actions performed by you, depending on the log-level setting by your administrator.

## 4. Backup

If enabled by the administrator, customers can manually schedule a backup of their data.

::: warning ATTENTION
The backup feature for customers is mainly intended to provide the user with a possibility to receive all stored data to be GDPR compliant.

Regular backups and/or snapshots are the responsibility of the admin.
:::

<UiBrowser :src="$withBase('/img/frx_ug_backup_create.png')" alt="Schedule a data backup"/>

Once scheduled, you need to wait until froxlor runs the corresponding job to create your backup. Depending on the amount of data, this can take some time.

The created backup-file will be stored in the given directory within the customers home-directory. **Remember** to [password-protect](#_1-directory-protection) the directory you set as destination in order to keep your data safe. 

<UiBrowser :src="$withBase('/img/frx_ug_backup_planned.png')" alt="Schedule a data backup"/>
