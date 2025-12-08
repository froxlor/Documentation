# Miscellaneous

## 1. Database validation

To ensure the integrity of the database and the stored data, froxlor includes this small database-validation page that let's you quickly check if anything is out of order and run the corresponding fixes for you.

<UiBrowser :src="('/img/frx_dbintegrity.png')" alt="Validate integrity of database"/>

## 2. Email & file templates

You can customize the email templates sent to customers for various actions (like adding a new customer, new database, webspace/traffic notifications, etc.). For the **email-templates** you can even do that on a per-language level.

Additionally, there are a few replacer-variables available, depending on the chosen template that will be replaced accordingly in the final email/file.

<UiBrowser :src="('/img/frx_templates_overview.png')" alt="Create and manage email and file templates"/>

## 3. Write a message

With this simple tool, you can easily send emails to either all your customers or all your admins/reseller. It will be using the SMTP credentials from the settings.

<UiBrowser :src="('/img/frx_send_message.png')" alt="Simple messaging tool"/>

## 4. SMTP test

A helper-tool to test your SMTP credentials and specifications from the settings by sending an e-mail to a given email-address with the shown SMTP-settings.

<UiBrowser :src="('/img/frx_test_smtp.png')" alt="Test your SMTP settings"/>


## 5. Service Ports

Below is an overview of standard ports used in froxlor environments.

::: tip NOTE
This list is not exhaustive, and actual configurations may vary based on specific setups and requirements.
:::

| Service / Protocol  | Port | Transport | Description                                                                                                                      |
|---------------------|------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| **HTTP**            | 80   | TCP       | Standard web traffic for unencrypted access to hosted services.                                                                  |
| **HTTPS**           | 443  | TCP       | Encrypted web traffic using TLS for secure access to froxlor and hosted sites.                                                   |
| **FTP**             | 21   | TCP       | File Transfer Protocol for uploading and managing website files (unencrypted). TLS may be available depending on configuration.. |
| **SSH**             | 22   | TCP       | Secure remote server access for administrative tasks.                                                                            |
| **MySQL**           | 3306 | TCP       | MySQL Port for Database connection.                                                                                              |
| **IMAP**            | 143  | TCP       | Default IMAP port (unencrypted). STARTTLS may be available depending on configuration.                                           |
| **IMAPS**           | 993  | TCP       | IMAP over SSL/TLS for secure mailbox access.                                                                                     |
| **POP3**            | 110  | TCP       | Default POP3 port (unencrypted). STARTTLS may be available depending on configuration.                                           |
| **POP3S**           | 995  | TCP       | POP3 over SSL/TLS for secure mailbox retrieval.                                                                                  |
| **SMTP (Inbound)**  | 25   | TCP       | Incoming mail from external mail servers. Not used for client authentication.                                                    |
| **SMTP Submission** | 587  | TCP       | Authenticated outgoing mail for clients using STARTTLS (recommended submission port).                                            |
| **SMTPS**           | 465  | TCP       | SMTP over SSL/TLS (implicit). Alternative submission port supported by many clients.                                             |

### Example Firewall Rules

To allow standard web traffic and email services, you might configure your firewall with rules similar to the following. Only open the ports that are necessary for your specific use case. Use with caution!

In this example we use `UFW (Uncomplicated Firewall)` to allow the required ports:

```bash
# Allow HTTP and HTTPS traffic (required for websites + froxlor)
sudo ufw allow 80,443/tcp

# Allow SSH access (required for server administration)
sudo ufw allow 22/tcp

# Allow FTP traffic (only if FTP is actually used)
sudo ufw allow 21/tcp

# Allow IMAP and IMAPS (if users connect via mail clients)
sudo ufw allow 143,993/tcp

# Allow POP3 and POP3S (only if POP3 support is needed)
sudo ufw allow 110,995/tcp

# Allow SMTP inbound + submission ports (required for mail servers)
sudo ufw allow 25,465,587/tcp
```