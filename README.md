# WorkbenchWidgetApi
  WorkbenchWidgetApi is a library to write and integrate widgets with 
  Smartlogic Semaphore Workbench (OM Application). 
  Widgets are remote html applications delivered by third party developers.

  Widgets are served inside an iframe embedded in the right panel of OM Application. 
  They communicate with OM Application and retrieve information about current 
  model structure.
  
## Writing a widget
1. referencing the library
  
  __remember to use full url, not relative url__
  
  ```html
  <script src="http://full.url/swApiWidget.min.js"></script>
  ```
    
   *alternatively, the whole library can be embedded in the html file head section*

1. widget initialization
   
   ```javascript
   var widget = new WorkbenchWidgetApi();
   ```
   
   This will send to OM Application the confirmation that widget is initialized.
    
1. Example and details

See [(Panoramio widget)](examples_src/widgetPanoramio.html) as an example widget implementation.

Please refer to [(Api Documentation)](doc/ApiDocumentation.md) for more details.

## Proxy mechanism
  To prevent security issues widget html file is proxied from original location to OM Application domain.
  This implies that all linked resources (js, css, fonts) need to be referenced with full url address or included into html file.
   
## Widget configuration and enabling

    
This section describes the following steps to configure and enable a set of 
example widgets for OM Application. Here __examples_src__ is the directory that 
contains simple widgets source files, whereas __examples_dist__ is the directiry 
that contains simple widgets prepared for use.

  In order to enable example widgets:
  
  - copy all files from __examples_dist__ directory on your *http server*.
  - create s new model with uri  __WidgetTest__
  - navigate to SPARQL Editor
  - paste the following SPARQL script
  
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
      myNamespace:WidgetPanoramio semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetPanoramio semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetPanoramio semwidgets:allowedRole teamwork:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetWikipedia.   
      myNamespace:WidgetWikipedia a semwidgets:Widget.
      myNamespace:WidgetWikipedia rdfs:label "Wikipedia Example Widget" .
      myNamespace:WidgetWikipedia semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html" .
      myNamespace:WidgetWikipedia semwidgets:widgetIcon "fa fa-wikipedia-w".
      myNamespace:WidgetWikipedia semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetWikipedia semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetWikipedia semwidgets:allowedRole teamwork:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetApi.   
      myNamespace:WidgetApi a semwidgets:Widget.
      myNamespace:WidgetApi rdfs:label "Api Presentation Example Widget" .
      myNamespace:WidgetApi semwidgets:widgetUrl "http://widget.full.url.address/widgetApiPresentation.html" .
      myNamespace:WidgetApi semwidgets:widgetIcon "fa fa-list".
      myNamespace:WidgetApi semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetApi semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetApi semwidgets:allowedRole teamwork:viewer
    }
    WHERE {}
```
  
  
  - replace http://widget.full.url.address/ with the *http server* with widget files
  - select Mode to SPARQL 1.1 Update
  - click submit query
  - navigate to model's list
  - open __WidgetTest__ model
  - create a new concept scheme
  
  __View menu__ should contain 3 additional positions 
  ("Panoramio Example Widget", "Wikipedia Example Widget", "Api Presentation Example Widget")
 
Please refer to [(Configuration Documentation)](doc/Configuration.md) for further details.
 
## Details

For more details on low-level communication protol used by the library, see [(Low-level communication)](doc/Communication.md)
 
## Build

Build process compresses js src files, compiles API documentation and runs unit tests.
To run the build process checkout git repository and run: 

```
npm install
bower install
grunt
```
