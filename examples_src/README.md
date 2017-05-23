## Widget configuration for the examples

    
This section describes the following steps to configure and enable a set of 
example widgets for OM Application. Here __examples_src__ is the directory that 
contains simple widgets source files, whereas __examples_dist__ is the directly 
that contains simple widgets prepared for use.

  In order to enable example widgets:
  
  - copy all html files from __examples_dist__ directory on your *http server*.
  - create s new model with uri  __WidgetTest__
  - navigate to SPARQL Editor
  - paste the following SPARQL script
  
```
    PREFIX myNamespace: <http://myCompany.com/#> 
    PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#> 
    WITH <urn:x-evn-master:WidgetTest.tch> 
    INSERT {
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetWikipedia.   
      myNamespace:WidgetWikipedia a semwidgets:Widget.
      myNamespace:WidgetWikipedia rdfs:label "Wikipedia Example Widget" .
      myNamespace:WidgetWikipedia semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html" .
      myNamespace:WidgetWikipedia semwidgets:widgetIcon "fa fa-wikipedia-w".
      myNamespace:WidgetWikipedia semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetWikipedia semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetWikipedia semwidgets:allowedRole sempermissions:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetApi.   
      myNamespace:WidgetApi a semwidgets:Widget.
      myNamespace:WidgetApi rdfs:label "Api Presentation Example Widget" .
      myNamespace:WidgetApi semwidgets:widgetUrl "http://widget.full.url.address/widgetApiPresentation.html" .
      myNamespace:WidgetApi semwidgets:widgetIcon "fa fa-list".
      myNamespace:WidgetApi semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetApi semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetApi semwidgets:allowedRole sempermissions:viewer .
      <urn:x-evn-master:WidgetTest.tch> semwidgets:hasWidget myNamespace:WidgetSolr.   
      myNamespace:WidgetSolr a semwidgets:Widget.
      myNamespace:WidgetSolr rdfs:label "Lexical Resources Example Widget" .
      myNamespace:WidgetSolr semwidgets:widgetUrl "http://widget.full.url.address/widgetLexicalResources.html" .
      myNamespace:WidgetSolr semwidgets:widgetIcon "fa fa-puzzle-piece".
      myNamespace:WidgetSolr semwidgets:notificationEmail "notification@email.address".
      myNamespace:WidgetSolr semwidgets:timeoutInSeconds "30".
      myNamespace:WidgetSolr semwidgets:allowedRole sempermissions:viewer
    }
    WHERE {}
```
  
  
 1. replace http://widget.full.url.address/ with the *http server* with widget files
 2. select Mode to SPARQL 1.1 Update
 3. click submit query
 4. navigate to model's list
 5. open __WidgetTest__ model
 6. create a new concept scheme
  
  __View menu__ should contain 2 additional positions 
  ("Wikipedia Example Widget", "Api Presentation Example Widget")
 
Please refer to [(Configuration Documentation)](../doc/Configuration.md) for further details.