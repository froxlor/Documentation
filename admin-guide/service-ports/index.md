# Service Ports

The following overview lists the standard ports commonly used in typical froxlor environments. It serves as a practical reference for web, mail, FTP, DNS, and administrative services on your server.

::: warning NOTE
Keep in mind that actual configurations may differ depending on the system, installed software, and specific requirements.
:::

## Commonly used ports

| Service / Protocol  | Port | Transport | Description                                                                                                                     |
|---------------------|------|-----------|---------------------------------------------------------------------------------------------------------------------------------|
| **HTTP**            | 80   | TCP       | Standard web traffic for unencrypted access to hosted services.                                                                 |
| **HTTPS**           | 443  | TCP       | Encrypted web traffic using TLS for secure access to froxlor and hosted sites.                                                  |
| **FTP**             | 21   | TCP       | File Transfer Protocol for uploading and managing website files (unencrypted). TLS may be available depending on configuration. |
| **DNS**             | 53   | TCP       | Domain Name System for resolving domain names to IP addresses.                                                                  |
| **SSH**             | 22   | TCP       | Secure remote server access for administrative tasks.                                                                           |
| **MySQL**           | 3306 | TCP       | MySQL Port for Database connection.                                                                                             |
| **IMAP**            | 143  | TCP       | Default IMAP port (unencrypted). STARTTLS may be available depending on configuration.                                          |
| **IMAPS**           | 993  | TCP       | IMAP over SSL/TLS for secure mailbox access.                                                                                    |
| **POP3**            | 110  | TCP       | Default POP3 port (unencrypted). STARTTLS may be available depending on configuration.                                          |
| **POP3S**           | 995  | TCP       | POP3 over SSL/TLS for secure mailbox retrieval.                                                                                 |
| **SMTP (Inbound)**  | 25   | TCP       | Incoming mail from external mail servers. Not used for client authentication.                                                   |
| **SMTP Submission** | 587  | TCP       | Authenticated outgoing mail for clients using STARTTLS (recommended submission port).                                           |
| **SMTPS**           | 465  | TCP       | SMTP over SSL/TLS (implicit). Alternative submission port supported by many clients.                                            |

::: warning FTP data ports
FTP uses additional data ports in passive/active mode. Configure a fixed range in your FTP daemon and allow it in the firewall to avoid stalled transfers. Example for ProFTPd `/etc/proftpd/proftpd.conf`:
```bash
# In some cases you have to specify passive ports range to by-pass
# firewall limitations. Ephemeral ports can be used for that, but
# feel free to use a more narrow range.
PassivePorts 49152 65534
```
:::

## Example firewall rules

Most servers ship without a restrictive firewall enabled by default, which means all services may be reachable from the outside unless explicitly blocked. For this reason, you should always enable a firewall and configure it according to your environment.

When using UFW, keep in mind that it is restrictive by design: once activated, it blocks all incoming traffic except for the services you explicitly allow. Therefore, you must open only the ports required for the services you intend to use.

The following example shows how to permit standard Web, DNS, Mail, FTP, and administrative traffic using `UFW (Uncomplicated Firewall)`:

```bash
# Allow HTTP and HTTPS traffic (required for websites + froxlor)
sudo ufw allow 80,443/tcp

# Allow DNS access (required for DNS servers)
sudo ufw allow 53/tcp

# Allow SSH access (required for server administration)
sudo ufw allow 22/tcp

# Allow FTP traffic (only if FTP is actually used)
# The second rule is required for PassivePorts, adjust to your config!
sudo ufw allow 21/tcp
sudo ufw allow 49152:65534/tcp

# Allow IMAP and IMAPS (if users connect via mail clients)
sudo ufw allow 143,993/tcp

# Allow POP3 and POP3S (only if POP3 support is needed)
sudo ufw allow 110,995/tcp

# Allow SMTP inbound + submission ports (required for mail servers)
sudo ufw allow 25,465,587/tcp
```