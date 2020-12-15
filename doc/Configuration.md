# Configuration

Widgets can be enabled separately for each model according to the user permissions.

## Enabling widget for a model

This is an example SPARQL that defines a widget configuration for the current model.
The widget's body is located at **http://widget.full.url.address/widget.html**
and the widget will be available for everyone with at least **viewer** permission
to a model or task.

This SPARQL can be executed from the SPARQL editor for the model in the KMM application.

```sparql
PREFIX myNamespace: <http://myCompany.com/#>
PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#>
PREFIX sempermissions: <http://www.smartlogic.com/2015/11/semaphore-permissions#>
PREFIX semfun: <http://www.smartlogic.com/2015/02/semaphore-functions#>
INSERT {
  GRAPH ?tchGraphUri {
    ?tchGraphUri semwidgets:hasWidget myNamespace:Widget1.
    myNamespace:Widget1 a semwidgets:Widget.
    myNamespace:Widget1 rdfs:label "Example Widget" .
    myNamespace:Widget1 semwidgets:widgetUrl "http://widget.full.url.address/widget.html" .
    myNamespace:Widget1 semwidgets:widgetIcon "fa fa-file-text".
    myNamespace:Widget1 semwidgets:notificationEmail "notification@email.address".
    myNamespace:Widget1 semwidgets:timeoutInSeconds "30".
    myNamespace:Widget1 semwidgets:allowedRole sempermissions:viewer
  }
}
WHERE {
  BIND( semfun:currentTchGraphUri() as ?tchGraphUri )
}
```

This statement needs to be adjusted before executing.

### Configuration properties

- `rdfs:label` - widget label displayed in menu
- `semwidgets:widgetUrl` - url of the widget - this location is accessed by KMM application,
- `semwidgets:widgetIcon` - icon displayed in menu - can contain class name
  - for example "fa fa-anchor" (see [Font Awesome](https://fortawesome.github.io/Font-Awesome/icons/))
- `semwidgets:allowedRole` - the minimal level of user permissions to access the widget
- `semwidgets:timeoutInSeconds` - time (in seconds) waited by KMM application for
  `ready` message from widget before trying to send a notification to the widget provider
- `semwidgets:notificationEmail` - the widget provider e-mail address where
  KMM application tries to send e-mail notifications about issues with widgets
- `semfun:currentTchGraphUri()` - If you are using the SPARQL editor for the model you wish to add
  the widget to then you can use this SPARQL as written. However, if you wish to add the widget to
  a different model you will need to replace `semfun:currentTchGraphUri()` with the URI of the model
  to which you are adding the widget with `.tch` appended to it, for example
  "`<urn:x-evn-master:WidgetTest.tch>`" (without the quotes).
- for more details about Widget Email Notifications please refer to
  [ProviderNotifications Configuration Details](ProviderNotifications.md)

## Disabling widget for a model

This is an example SPARQL that will remove the widget configuration with
uri **http://myCompany.com/#Widget1** from **myExample** model.
This SPARQL can be executed from the SPARQL editor in KMM application.

```sparql
WITH <urn:x-evn-master:myExample.tch>
DELETE { <http://myCompany.com/#Widget1> ?p ?o }
USING <urn:x-evn-master:myExample.tch>
WHERE { <http://myCompany.com/#Widget1> ?p ?o }
```

This statement needs to be adjusted before executing.

# Widget initialization

1. User navigates to a page with side panel (e.g. concept details, concept scheme details)
2. Remote widget iFrame is displayed - widget is loaded into it
3. Remote widget sends `ready` message to KMM application
4. KMM application responds to the `ready` message
5. KMM application waits for messages from the widget
