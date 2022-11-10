# MySQL servers

Every froxlor installation has at least one mysql server specified, the default connection which is used for the froxlor database itself and by default also for the customer databases. You can add multiple (different) database servers to your configuration and specify on a per customer base (or all) who is allowed to use them for adding databases.

<UiBrowser src="/img/frx_mysqlsrv_overview.png" alt="Admin MySQL server overview"/>

If there are multiple MySQL servers configured and assigned to a customer, a selection on which database server the new database shall be created on is visible for the customer (see [User Guide -> Database](/userguide/interface/database))

<UiBrowser src="/img/frx_mysqlsrv_new.png" alt="Add new database with selection of MySQL server"/>

## Properties of MySQL servers

### 1. Hostname / IP and port

Specify the hostname or IP address of the mysql-server you want to add. Note that entries will not be checked for duplicate combinations.

### 2. Privileged user and password

In order for froxlor to be able to add new databases and users, the privileged user needs to have `ALL PRIVILEGES` as well as the `GRANT` permission. See [Create privileged database user](/general/installation/tarball#create-froxroot) from the installation guide.

### 3. Test connection when saving

When checked, the connection to the given database server and credentials will be tested to validate that froxlor can work with it without any issues.

### 4. Use SSL for connection to database-server

If your database server requires ssl or your want the connection to be secure and the corresponding database-server is set up for this correctly, you can specify the file path to the SSL certificate authority as well as the possibility to disable verification of the ssl-certificate.