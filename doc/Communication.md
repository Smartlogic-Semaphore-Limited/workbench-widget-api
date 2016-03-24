## Communication with OM Application
For communication between the remote widget frame and the OM Application frame 
__Window.postMessage__ mechanism 
[(mdn documentation)](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) is used.

### Communication Principals
1. Each transmission starts with _"action message"_ send by the remote widget.
1. OM Application reply with _"response message"_.
1. There is only one response message for each action message. 
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
+ **key** - one of public method exposed in OM Application api
+ **data** - data object require "widgetId" property and can handle any additional data expected by particular method, optionally data can has "tag" property witch can be used to match action and response message.  

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
+ **key** - one of public method exposed in OM Application api
+ **results** - when method succeed result property contains requested data - in edge case it is empty object {}   

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
  + **key** - one of public method exposed in OM Application api
  + **reason** - contains list of errors   