# SSH keys

Customers may add one or more ssh public keys to an existing ftp-user. They are added to the users `~/.ssh/authorized_keys` file in order to allow ssh/scp login via ssh key.

## 1. Add a new SSH key

<UiBrowser :src="('/img/frx_ug_sshkeys_overview.png')" alt="SSH keys overview"/>

<UiBrowser :src="('/img/frx_ug_sshkeys_create.png')" alt="Add new SSH key"/>

## 2. Update an existing SSH key

<UiBrowser :src="('/img/frx_ug_sshkeys_overview.png')" alt="SSH keys overview"/>

<UiBrowser :src="('/img/frx_ug_sshkeys_edit.png')" alt="Edit existing SSH key"/>

## 3. Access with an SSH key

If ssh usage is allowed for the customer and the corresponding ftp-user has a valid shell assigned to it (e.g. `/bin/bash`), connections via SSH or SCP are possible.

* Port: `22`
* Hostname: `your domain or froxlor hostname`
* Username: `the selected ftp username` in our example **kd0001**
* Password: `the selected ftp password` or alternatively of course (and depending on the server-side configuration of sshd) using your ssh-key


## 4. Delete an existing SSH key

<UiBrowser :src="('/img/frx_ug_sshkeys_delete.png')" alt="Security question"/>
