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

  Once you have written the widget and installed it on a web server somewhere, you tell Ontology Editor about it by adding triples to the model. For example, to add in the widgetWikepedia.html example you would add the following triples:

    PREFIX myNamespace: <http://myCompany.com/#>[1] 
    PREFIX semwidgets: <http://www.smartlogic.com/2016/02/semaphore-widgets#> 
    WITH <urn:x-evn-master:WidgetTest.tch> [2]
    INSERT {
      <urn:x-evn-master:WidgetTest.tch>[2] semwidgets:hasWidget myNamespace:WidgetWikipedia.   
      myNamespace:WidgetWikipedia 
      a semwidgets:Widget;
      rdfs:label "Wikipedia Example Widget";
      semwidgets:widgetUrl "http://widget.full.url.address/widgetWikipedia.html[3]";
      semwidgets:widgetIcon "fa fa-wikipedia-w";
      semwidgets:notificationEmail "notification@email.address[4]";
      semwidgets:timeoutInSeconds "30";
      semwidgets:allowedRole teamwork:viewer .
    } WHERE {}
      
    
 This will need tuning for your particular installation.
   
1. replace the value of this prefix with some sensible value for your installation
2. this the URI of the model to which you are adding the widget - with .tch appended to it (two locations to amend).
3. this should be the full URL of the widget application
4. replace this with a relevant email address for issue reporting. Please refer to [(Provider notifications)](doc/ProviderNotifications.md) for further details.

Once you have run this SPARQL in the SPARQL editor, you can return to the model editing pane. Once a concept or concept scheme is selected, the "View" menu will appear in the editing panel. From this select this widget - and you will see wikipedia documents appearing as concepts and concept schemes are selected.


Please refer to [(Api Documentation)](doc/ApiDocumentation.md) for more details.

## Proxy mechanism
  To prevent security issues, the widget html file is proxied from its original location to the Ontology Editor Application domain.
  This means that all linked resources (js, css, fonts) must to be referenced with their full URL.
   
Please refer to [(Configuration Documentation)](doc/Configuration.md) for further details.
 
## Details

For more details on low-level communication protol used by the library, see [(Low-level communication)](doc/Communication.md)

