## Widget configuration for the examples

This section describes the following steps to configure and enable a set of
example widgets for OE Application. Here **examples_src** is the directory that
contains simple widgets source files, whereas **examples_dist** is the directory
that contains simple widgets prepared for use.

In order to enable example widgets:

- Copy all html files from **examples_dist** directory on your _http server_.
- Create a new model
- Open this model in KMM
- Navigate to SPARQL Editor
- Paste the following SPARQL script:

```
    PREFIX myNamespace: <http://myCompany.com/#>
    PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#>
    PREFIX semfun: <http://www.smartlogic.com/2015/02/semaphore-functions#>
    INSERT {
      GRAPH ?tchGraphUri {
        ?tchGraphUri semwidgets:hasWidget myNamespace:WidgetWikipedia.
        myNamespace:WidgetWikipedia a semwidgets:Widget.
        myNamespace:WidgetWikipedia rdfs:label "Wikipedia Example Widget" .
        myNamespace:WidgetWikipedia semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html" .
        myNamespace:WidgetWikipedia semwidgets:widgetIcon "fa fa-wikipedia-w".
        myNamespace:WidgetWikipedia semwidgets:notificationEmail "notification@email.address".
        myNamespace:WidgetWikipedia semwidgets:timeoutInSeconds "30".
        myNamespace:WidgetWikipedia semwidgets:allowedRole sempermissions:viewer .
        ?tchGraphUri semwidgets:hasWidget myNamespace:WidgetApi.
        myNamespace:WidgetApi a semwidgets:Widget.
        myNamespace:WidgetApi rdfs:label "Api Presentation Example Widget" .
        myNamespace:WidgetApi semwidgets:widgetUrl "http://widget.full.url.address/widgetApiPresentation.html" .
        myNamespace:WidgetApi semwidgets:widgetIcon "fa fa-list".
        myNamespace:WidgetApi semwidgets:notificationEmail "notification@email.address".
        myNamespace:WidgetApi semwidgets:timeoutInSeconds "30".
        myNamespace:WidgetApi semwidgets:allowedRole sempermissions:viewer .
        ?tchGraphUri semwidgets:hasWidget myNamespace:WidgetSolr.
        myNamespace:WidgetSolr a semwidgets:Widget.
        myNamespace:WidgetSolr rdfs:label "Lexical Resources Example Widget" .
        myNamespace:WidgetSolr semwidgets:widgetUrl "http://widget.full.url.address/widgetLexicalResources.html" .
        myNamespace:WidgetSolr semwidgets:widgetIcon "fa fa-puzzle-piece".
        myNamespace:WidgetSolr semwidgets:notificationEmail "notification@email.address".
        myNamespace:WidgetSolr semwidgets:timeoutInSeconds "30".
        myNamespace:WidgetSolr semwidgets:allowedRole sempermissions:viewer
      }
    }
    WHERE {
      BIND( semfun:currentTchGraphUri() as ?tchGraphUri )
    }
```

- Replace "http://widget.full.url.address/" with the _http server_ with widget files
- Change (SPARQL Editor) "Mode" to "SPARQL 1.1 Update"
- Click "Submit Query" button
- Navigate to model's list
- Re-Open model
- Create a new concept scheme

**View menu** should contain 3 additional positions
("Wikipedia Example Widget", "Api Presentation Example Widget", and "Lexical Resources Example Widget")

Please refer to [(Configuration Documentation)](../doc/Configuration.md) for further details.
