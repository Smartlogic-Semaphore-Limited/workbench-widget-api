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

## Configuration

The notification service is configurable in a properties file at the location:
``{SEMAPHORE_WORKBENCH_HOME}/workspace/com.smartlogic.workbench.ttl/config``.

There is no need for server boot-up to apply the configuration changes, as the configuration is
re-loaded every 30s if needed.

By default the service is enabled, but it can be switched off by setting
**notificationEmail.enabled=false**.

The interval between notifications is configured in seconds in the
**notificationEmail.intervalInSeconds** property.

The four properties **notificationEmail.account**, **notificationEmail.username**,
**notificationEmail.smtpHost** and **notificationEmail.port** are used to define the
notifications' sender account.

### Password configuration

The recommended way to configure the password for the notifications' sender account
is to store it in secure storage (it will be stored as encrypted). In order to do that:

1. Go to: [PasswordManagerPage](http://localhost:9080/tbl/swp?_viewClass=pwadmin:PasswordManagerPage)
1. Click "Add password"
1. The "User name" field should be filled with a chosen key, for example
**EMAIL\_NOTIFICATIONS\_KEY**; the URL field should be left empty; the password field
should be filled with the actual password to the e-mail account.
1. Click save

Finally, set the **notificationEmail.passwordKey** property to the same value as the
key used to store the actual password in secure storage. In this example:
**notificationEmail.passwordKey=EMAIL\_NOTIFICATIONS\_KEY**.

