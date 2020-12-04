# WorkbenchWidgetApi

The WorkbenchWidgetApi is provided by Smartlogic Semaphore to enable any developer to write and integrate widgets with
the Smartlogic Semaphore Knowledge Model Management (KMM) application.

The widgets can be written as separate web applications. To make the model aware of its existence triples are added to the model. Once this is done, the widget will be selectable from the _Side Panel_ menu on the concept/concept scheme editing pane.

From then on, whenever a different concept scheme or concept is selected, the widget will be re-opened. A message is sent to the widget, this widget can process this message however the developer chooses.

## Writing a widget

### Examples

We provide a number of widget examples in this package. The easiest way to create a new widget is to take one of the examples and to modify it.

Looking through the widgetWikipedia.html example we see a `<script>` tag that declares `Semaphore` global variable.

```javascript
<script>var Semaphore = {/* Implementation... */}</script>
```

This is contents of workbench-widget-api.min.js included directly into the widget. You could also load it externally

```html
<script src="http://full.url/swApiWidget.min.js"></script>
```

but remember to use the complete URL for this - relative URL is not sufficient.

Ignoring the bootstrap styling, the next interesting line is where we define

```javascript
const api = new Semaphore.WorkbenchWidgetApi();
```

When this is executed, the KMM application is notified that this widget is loaded.

After this line widget is ready and can communicate with KMM, e.g.

```javascript
api
  .getStateParams()
  .then((data) => api.getConceptDetails(data.taskGraphUri, data.itemUri))
  .then((concept) => {
    const conceptName = concept["meta:displayName"]["@value"];
    $("#iframe").attr("src", "https://en.wikipedia.org/wiki/" + conceptName);
  });
```

This is a simple example of what can be done as the widget is initialized - in this case we load into the iFrame the Wikipedia document with the same name as the concept or concept scheme selected.

This is meant as a very naive example of what can be done at this stage - clearly you can write your own more sophisticated code here.

### Writing from scratch

You can also install npm package and use _workbench-widget-api_ in any project from scratch.

```bash
npm install --save @smartlogic-semaphore/workbench-widget-api
```

Once package is installed you can use it by importing `WorkbenchWidgetApi` class.

```javascript
import { WorkbenchWidgetApi } from "@smartlogic-semaphore/workbench-widget-api";

const api = new WorkbenchWidgetApi();
```

If you are using [`TypeScript`](https://www.typescriptlang.org/) we do include type declaration file with the package
and TypeScript should be able to pick it up automatically.

Remember that your final `html` file should inline js files. Provided grunt configuration is a good start on how to do that.

## Configuring the widget

Once you have written the widget and installed it on a web server somewhere, you tell KMM about it by adding triples to the model. For example, to add in the "widgetWikipedia.html" example you would use the following SPARQL:

```sparql
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
```

This will need tuning for your particular installation.

1. Replace the value of this prefix with some sensible value for your installation
2. This should be the full URL of the widget application
3. Replace this with a relevant email address for issue reporting. Please refer to [Provider notifications](doc/ProviderNotifications.md) for further details.
4. If you are using the SPARQL editor for the model you wish to add the widget to then you can use this SPARQL as written. However, if you wish to add the widget to a different model you will need to replace "`semfun:currentTchGraphUri()`" with the URI of the model to which you are adding the widget with .tch appended to it, for example "`<urn:x-evn-master:WidgetTest.tch>`" (without the quotes).

Once you have run this SPARQL in the SPARQL editor, you can return to the model editing pane. Once a concept or concept scheme is selected, the "Side Panel" menu will appear in the editing panel. From this select this widget - and you will see wikipedia documents appearing as concepts and concept schemes are selected. Note that you may need to refresh the browser page before the widget appears.

Please refer to [Api Documentation](doc/ApiDocumentation/README.md) for more details.

## Proxy mechanism

To prevent security issues, the widget html file is proxied from its original location to the KMM application domain.
This means that all linked resources (e.g. js, css, fonts, images, etc.) must to be referenced with their full URL.

Please refer to [Configuration Documentation](doc/Configuration.md) for further details.

## Compatibility

Version 2.0.0 of the API is compatible with Semaphore KMM version after the release 4.2.8.

## Details

For more details on low-level communication protocol used by the library, see [Low-level communication](doc/Communication.md)

## Build

To build just run:

```
npm run build
```

Other possible targets are

- `npm run test` - to test produced package after it was built
- `npm run doc` - to regenerate API documentation from sources
