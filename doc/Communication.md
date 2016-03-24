## Low-level communication with OM Application
WorkbenchWidgetApi uses __Window.postMessage__ mechanism 
[(mdn documentation)](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) 
for communication between remote widgets and the OM Application.

### Communication Principals
1. Each transmission starts with _"action message"_ sent by the remote widget.
1. OM Application replies with single _"response message"_. 
1. Each response message contains the results or the reason property, but not both. 

### Example action message:

     {
         "type": "action",
         "key": "getStateParams",
         "data": {
           "widgetId": "widgetID",
           "tag":"1234234234678892334"
         }
     }
+ **type** - widget sends action type messages only
+ **key** - one of public methods exposed in OM Application API
+ **data** - data object require "widgetId" property and can handle any additional 
data expected by particular method, optionally data can have "tag" property witch 
can be used to match action and response message.  

### Example response message on success:

     {
         "type": "response",
         "key": "getStateParams",
         "results": {
            "modelGraphUri":"modelGraphUri", 
            "taskGraphUri":"taskGraphUri", 
            "itemUri":"itemUri"
          },
         "tag":"1234234234678892334"
     }
+ **type** - OM Application sends response type messages only
+ **key** - one of public methods exposed in OM Application API
+ **results** - when method succeeds result property contains requested data   

### Example response message on error:

     {
         "type": "response",
         "key": "getStateParams",
         "reason": [
            {type: "argumentInvalid", argument: "itemUri"}
         ],
         "tag":"1234234234678892334"
     }
  + **type** - OM Application sends response type messages only
  + **key** - one of public methods exposed in OM Application API
  + **reason** - contains list of errors
