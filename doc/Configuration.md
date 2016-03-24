
# Configuration
  Widgets can be enabled separately for each model according to the user permissions.  
  
## Enable widget for a model  
  This is an example sparql that will define a widget in __myExample__ model. 
  The widget's body is located at __"http://widget.full.url.address/widget.html"__ 
  and the widget will be available for everyone with at least __viewer__ permission 
  to a model or task.
  This sparql can be executed from the sparql editor in OM Application.
  
 ```
  PREFIX myNamespace: <http://myCompany.com/#> 
  PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#> 
  WITH <urn:x-evn-master:myExample.tch> 
  INSERT {
    <urn:x-evn-master:myExample.tch> semwidgets:hasWidget myNamespace:Widget1.   
    myNamespace:Widget1 a semwidgets:Widget.
    myNamespace:Widget1 rdfs:label "Example Widget" .
    myNamespace:Widget1 semwidgets:widgetUrl "http://widget.full.url.address/widget.html" .
    myNamespace:Widget1 semwidgets:widgetIcon "fa fa-file-text".
    myNamespace:Widget1 semwidgets:notificationEmail "nottification@email.address".
    myNamespace:Widget1 semwidgets:timeoutInSeconds "30".
    myNamespace:Widget1 semwidgets:allowedRole teamwork:viewer 
  }
  WHERE {}
```
  Before execute this statement it need to be adjusted.  
    
### Configuration properties
- <urn:x-evn-master:myExample.tch> - change "myExampe" to model #ID's part after
 the "model:" phrase - for example if model #ID displayed on __Model list__ page is 
 __"model:newModel"__ this should be __"<urn:x-evn-master:newModel.tch>"__ 
 __(this phrase is doubled so be careful to change all it occurrences)__ 
- rdfs:label - widget label displayed in menu
- semwidgets:widgetUrl - full path to the widget html file - since this file is 
proxy through the OM Application it need to be accessible from Server point of view
- semwidgets:widgetIcon - icon displayed in menu - can contains class name 
according to font awesome documentation - for example "fa fa-anchor" [(see)](https://fortawesome.github.io/Font-Awesome/icons/)
- semwidgets:allowedRole - the level of permissions requested for user to has 
access to this widget
- semwidgets:timeoutInSeconds - the amount of time (in seconds) 
the OM Application will wait for ready message from widget before try to send 
notification to widget provider 
- semwidgets:notificationEmail - the widget provider e-mail address where 
OM Application try to send e-mail notifications about issues with widgets 
-for more details about Widget Email Notifications please refer to [(ProviderNotifications Configuration Details)](ProviderNotifications.md)

## Disable widget for model
  This is an example sparql that will remove the widget with uri __http://myCompany.com/#Widget1__
   from configuration of __myExample__ model. 
  This sparql can be executed from the sparql editor in OM Application.

    WITH <urn:x-evn-master:myExample.tch>
    DELETE {<http://myCompany.com/#Widget1> ?p ?o}
    USING <urn:x-evn-master:myExample.tch>
    WHERE {<http://myCompany.com/#Widget1> ?p ?o}
  
  Before execute this statement it need to be adjusted.  

# Remote widget "life time"
  1. user navigate to page with right panel (concept details, concept scheme details)
  1. remote widget iframe is displayed - widget is loaded or retrieved from browser cache
  1. remote widget send "ready" message to OM Application
  1. OM Application send response for "ready" message
  1. OM Application waiting for messages from widget
 
