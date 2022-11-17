# Miscellaneous

## 1. Database validation

To ensure the integrity of the database and the stored data, froxlor includes this small database-validation page that let's you quickly check if anything is out of order and run the corresponding fixes for you.

<UiBrowser :src="$withBase('/img/frx_dbintegrity.png')" alt="Validate integrity of database"/>

## 2. Email & file templates

You can customize the email templates sent to customers for various actions (like adding a new customer, new database, webspace/traffic notifications, etc.). For the **email-templates** you can even do that on a per-language level.

Additionally, there are a few replacer-variables available, depending on the chosen template that will be replaced accordingly in the final email/file.

<UiBrowser :src="$withBase('/img/frx_templates_overview.png')" alt="Create and manage email and file templates"/>

## 3. Write a message

With this simple tool, you can easily send emails to either all your customers or all your admins/reseller. It will be using the SMTP credentials from the settings.

<UiBrowser :src="$withBase('/img/frx_send_message.png')" alt="Simple messaging tool"/>

## 4. SMTP test

A helper-tool to test your SMTP credentials and specifications from the settings by sending an e-mail to a given email-address with the shown SMTP-settings.

<UiBrowser :src="$withBase('/img/frx_test_smtp.png')" alt="Test your SMTP settings"/>
