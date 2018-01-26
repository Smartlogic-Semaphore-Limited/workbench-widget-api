# WorkbenchWidgetApi
  The WorkbenchWidgetApi is provided by Smartlogic Semaphore to enable any developer to write and integrate widgets with 
  the Smartlogic Semaphore Ontology Editor application.

  The widgets can be written as separate web applications. To make the model aware of its existence triples are added to the model. Once this is done, the widget will be selectable from the "View" menu on the concept/concept scheme editing pane.

  From then on, whenever a different concept scheme or concept is selected, the widget will be re-opened. a message is sent to the widget, this widget can process this message however the developer chooses.

## Writing a widget
  We provide a number of widget examples in this package. The easiest way to create a new widget is to take one of the example and to modify it.

  Looking through the widgetWikipedia.html example we see a !function line that includes the widget. This could be taken out of the html file by referencing the script file:

      <script src="http://full.url/swApiWidget.min.js"></script>
    
  Remember to use the complete URL for this - the relative URL is not sufficient.

  Ignoring the bootstrap styling, the next interesting line is where we define 
   
       var api = new WorkbenchWidgetApi();
    
   When this is executed, the Ontology Editor application is notified that this widget is loaded.

   After this line we see 

      api.getStateParams().then(function (data) {

      	api.getConceptDetails(data.taskGraphUri, data.itemUri).then(function (concept) {

      		var conceptName = concept["meta:displayName"]["@value"];
      		$("#iframe").attr("src", "https://en.wikipedia.org/wiki/" + conceptName);
	   	})
      });

  This is a simple example of what can be done as the widget is initialized - in this case we load into the iframe the wikipedia document with the same name as the concept or concept scheme selected. 

  This is meant as a very naive example of what can be done at this stage - clearly you can write your own more sophisticated code here.
 
## Configuring the widget ##

  Once you have written the widget and installed it on a web server somewhere, you tell Ontology Editor about it by adding triples to the model. For example, to add in the "widgetWikepedia.html" example you would use the following SPARQL:

    PREFIX myNamespace: <http://myCompany.com/#>[1] 
    PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#> 
    PREFIX sempermissions: <http://www.smartlogic.com/2015/11/semaphore-permissions#>
    PREFIX semfun: <http://www.smartlogic.com/2015/02/semaphore-functions#>
    INSERT {
      GRAPH ?tchGraphUri {
        ?tchGraphUri semwidgets:hasWidget myNamespace:WidgetWikipedia.   
        myNamespace:WidgetWikipedia 
          a semwidgets:Widget;
          rdfs:label "Wikipedia Example Widget";
          semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html[2]";
          semwidgets:widgetIcon "fa fa-wikipedia-w";
          semwidgets:notificationEmail "notification@email.address[3]";
          semwidgets:timeoutInSeconds "30";
          semwidgets:allowedRole sempermissions:viewer .
      }
    } WHERE {
      BIND( semfun:currentTchGraphUri()[4] as ?tchGraphUri )
    }
    
 This will need tuning for your particular installation.
   
1. Replace the value of this prefix with some sensible value for your installation
2. This should be the full URL of the widget application
3. Replace this with a relevant email address for issue reporting. Please refer to [(Provider notifications)](doc/ProviderNotifications.md) for further details.
4. If you are using the SPARQL editor for the model you wish to add the widget to then you can use this SPARQL as written.  However, if you wish to add the widget to a different model you will need to replace "semfun:currentTchGraphUri()" with the URI of the model to which you are adding the widget with .tch appended to it, for example "&lt;urn:x-evn-master:WidgetTest.tch&gt;" (without the quotes).

Once you have run this SPARQL in the SPARQL editor, you can return to the model editing pane. Once a concept or concept scheme is selected, the "View" menu will appear in the editing panel. From this select this widget - and you will see wikipedia documents appearing as concepts and concept schemes are selected.  Note that you may need to refresh the browser page before the widget appears.


Please refer to [(Api Documentation)](doc/ApiDocumentation.md) for more details.

## Proxy mechanism
  To prevent security issues, the widget html file is proxied from its original location to the Ontology Editor Application domain.
  This means that all linked resources (js, css, fonts) must to be referenced with their full URL.
   
Please refer to [(Configuration Documentation)](doc/Configuration.md) for further details.
 
## Details

For more details on low-level communication protol used by the library, see [(Low-level communication)](doc/Communication.md)

