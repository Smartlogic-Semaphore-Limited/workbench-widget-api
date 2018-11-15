# Widget Email Notifications

This document describes configuration details for sending e-mails notifications about issues with
widgets to the widget provider.

## Triggering notifications

Widget provider notifications are sent in two scenarios:

1. widget under url indicated by the "semwidgets:widgetUrl" property was attempted to be fetched
but the provider didn't respond with the widget content,
1. frontend detects a problem with a widget and makes POST API call to
<host>/api/widgets/{modelUri}/{widgetUri} with the following parameters:
  + action=notify (required)
  + reason (optional, for example "Example reason")
  + details (optional, for example "Example details")

E-mail notifications are sent periodically, grouped by (recipient email address, widget url, reason)
in summarizing messages.

## Notification configuration

The notification service is configurable in the file 
**{SEMAPHORE_WORKBENCH_HOME}/workspace/com.smartlogic.workbench.ttl/config/widgets.properties**

| Setting | Value(s) | Description |
|---------|----------|-------------|
| notificationEmail.enabled | true/false | By default the service is enabled, but it can be switched off by changing this to "false". |
| notificationEmail.intervalInSeconds | integer | The interval between notifications is configured (in seconds). |
| notificationEmail.account | string | Notification email account (for sending) |
| notificationEmail.username | string | Notification email user name (for logging into SMTP server) |
| notificationEmail.smtpHost | string | Notification email SMTP host name |
| notificationEmail.port | integer | Notification email port number |
| notificationEmail.plainPassword | string | Notification email user name password (for logging into SMTP server) in cleartext, alternatively, use the "passwordKey" (below) |
| notificationEmail.passwordKey | string | Notification email account password setting in TBL secure storage (see below) | 

Note that there is no need for server boot-up to apply the configuration changes, as the configuration is
re-loaded every 30s if needed.

### Notification email account password configuration

The recommended way to configure the password for the notifications' sender account
is to store it in secure storage (it will be stored as encrypted). In order to do that:

1. Choose a password key under which the password will be stored. The password key should
contain '@' sign. For example (literally) **EMAIL\_NOTIFICATIONS@PASSWORD\_KEY**.
1. Go to: [PasswordManagerPage](http://localhost:9080/tbl/swp?_viewClass=pwadmin:PasswordManagerPage)
1. Click "Add password"
1. The "User name" field should be filled with the first part of the chosen key; in this example (literally):
**EMAIL\_NOTIFICATIONS**; the URL field should be filled with the second path of the chosen key;
in this example (literally): **PASSWORD\_KEY**. The password field should be filled with the actual password
to the e-mail account.
1. Click "Add password" - a new entry on the list will be created
1. Confirm the password and click "Save"

Finally, set the **notificationEmail.passwordKey** property to the same value as the
key used to store the actual password in secure storage. In this example:
**notificationEmail.passwordKey=EMAIL\_NOTIFICATIONS@PASSWORD\_KEY**.
