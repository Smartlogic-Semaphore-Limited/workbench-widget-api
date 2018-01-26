
# Configuration
  Widgets can be enabled separately for each model according to the user permissions.  
  
## Enabling widget for a model  
  This is an example SPARQL that defines a widget configuration for the current model. 
  The widget's body is located at __"http://widget.full.url.address/widget.html"__ 
  and the widget will be available for everyone with at least __viewer__ permission 
  to a model or task.
  This SPARQL can be executed from the SPARQL editor for the model in the OE Application.
  
 ```
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
- rdfs:label - widget label displayed in menu
- semwidgets:widgetUrl - url of the widget - this location is accessed by OM Application,
- semwidgets:widgetIcon - icon displayed in menu - can contain class name 
- for example "fa fa-anchor" [(see font awesome)](https://fortawesome.github.io/Font-Awesome/icons/)
- semwidgets:allowedRole - the minimal level of user permissions to access the widget
- semwidgets:timeoutInSeconds - time (in seconds) waited by OM Application for 
"ready" message from widget before trying to send a notification to the widget provider 
- semwidgets:notificationEmail - the widget provider e-mail address where 
OM Application tries to send e-mail notifications about issues with widgets 
- semfun:currentTchGraphUri() - If you are using the SPARQL editor for the model you wish to add 
the widget to then you can use this SPARQL as written.  However, if you wish to add the widget to 
a different model you will need to replace "semfun:currentTchGraphUri()" with the URI of the model 
to which you are adding the widget with .tch appended to it, for example 
"&lt;urn:x-evn-master:WidgetTest.tch&gt;" (without the quotes).
- for more details about Widget Email Notifications please refer to 
[(ProviderNotifications Configuration Details)](ProviderNotifications.md)

## Disabling widget for a model
  This is an example SPARQL that will remove the widget configuration with 
  uri __http://myCompany.com/#Widget1__ from __myExample__ model. 
  This SPARQL can be executed from the SPARQL editor in OM Application.

    WITH <urn:x-evn-master:myExample.tch>
    DELETE {<http://myCompany.com/#Widget1> ?p ?o}
    USING <urn:x-evn-master:myExample.tch>
    WHERE {<http://myCompany.com/#Widget1> ?p ?o}
  
  This statement needs to be adjusted before executing.  

# Widget initialization
  1. user navigates to page with right panel (concept details, concept scheme details)
  1. remote widget iframe is displayed - widget is loaded or retrieved from browser cache
  1. remote widget sends "ready" message to OM Application
  1. OM Application responds for the "ready" message
  1. OM Application waits for messages from the widget
