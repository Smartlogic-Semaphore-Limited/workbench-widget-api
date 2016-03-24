# WorkbenchWidgetApi
  WorkbenchWidgetApi is library helper to integrate widgets with Smartlogic Semaphore Workbench.
  It simplify communication between remote widget and OM Application. 
  Instead of send and listen for messages remote widget can simply fetch data 
  with solid api and promises. We use q promise [see Q Promise documentation](https://github.com/kriskowal/q)   

## Quick start
  1. refer to library
  
  __remember to use full url, not relative url__
  
  ```html
  <script src="http://full.url/swApiWidget.min.js"></script>
  ```
  
   *alternatively whole script can be merged in the html file head section*
   
   ```javascript
   var widget = new WorkbenchWidgetApi();
   ```
   
   This will send to OM Application the confirmation that widget is ready. 
   
## Examples
  Directory __examples_src__ contains simple widgets source files.
  Directory __examples_dist__ contains simple widgets prepared for use.
  
  Install example widgets:
  
  - deploy all files from __examples_dist__ directory on your http server.
  - create new model and make sure its uri is  __WidgetTest__ - please use 
  ctrl-c/ctrl-v, additionally you need to make sure that model with this uri 
  not exist yet
  - navigate to SPARQL Editor
  - paste this SPARQL script
  
```
    PREFIX myNamespace: <http://myCompany.com/#> 
    PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#> 
    WITH <urn:x-evn-master:WidgetTest.tch> 
    INSERT {
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetPanoramio.   
      myNamespace:WidgetPanoramio a semwidgets:Widget.
      myNamespace:WidgetPanoramio rdfs:label "Panoramio Example Widget" .
      myNamespace:WidgetPanoramio semwidgets:widgetUrl "http://widget.full.url.address/widgetPanoramio.html" .
      myNamespace:WidgetPanoramio semwidgets:widgetIcon "fa fa-file-text".
      myNamespace:WidgetPanoramio semwidgets:notificationEmail "nottification@email.address".
      myNamespace:WidgetPanoramio semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetPanoramio semwidgets:allowedRole teamwork:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetWikipedia.   
      myNamespace:WidgetWikipedia a semwidgets:Widget.
      myNamespace:WidgetWikipedia rdfs:label "Wikipedia Example Widget" .
      myNamespace:WidgetWikipedia semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html" .
      myNamespace:WidgetWikipedia semwidgets:widgetIcon "fa fa-wikipedia-w".
      myNamespace:WidgetWikipedia semwidgets:notificationEmail "nottification@email.address".
      myNamespace:WidgetWikipedia semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetWikipedia semwidgets:allowedRole teamwork:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetApi.   
      myNamespace:WidgetApi a semwidgets:Widget.
      myNamespace:WidgetApi rdfs:label "Api Presentation Example Widget" .
      myNamespace:WidgetApi semwidgets:widgetUrl "http://widget.full.url.address/widgetApiPresentation.html" .
      myNamespace:WidgetApi semwidgets:widgetIcon "fa fa-list".
      myNamespace:WidgetApi semwidgets:notificationEmail "nottification@email.address".
      myNamespace:WidgetApi semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetApi semwidgets:allowedRole teamwork:viewer
    }
    WHERE {}
```
  
  - change http://widget.full.url.address/ to your http server address
  - select Mode to SPARQL 1.1 Update
  - click submit query
  - navigate to model's list
  - open __WidgetTest__ model
  - open any concept/concept scheme (if you started with empty model you need to 
  import or create new items at first)
  
  __View menu__ should contains 3 additional positions 
  ("Panoramio Example Widget", "Wikipedia Example Widget", "Api Presentation Example Widget")
  
  Please refer to Configuration documentation for further details [(Configuration Documentation)](doc/Configuration.md)
 
 
 ## Details
 
 [(Overview)](doc/Overview.md)
 
 [(Configuration Documentation)](doc/Configuration.md)
  
 [(ProviderNotifications Configuration Details)](doc/ProviderNotifications.md)
 
 [(Communication Documentation)](doc/Communication.md)
 
 [(Api Documentation)](doc/ApiDocumentation.md)
 

  
## Build
Build process compress js src files, build api documentation and run unit tests.

```
npm install
bower install
grunt
```
