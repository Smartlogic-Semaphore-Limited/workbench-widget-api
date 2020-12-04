## Low-level communication with KMM application

WorkbenchWidgetApi uses **window.postMessage** mechanism
([MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage))
for communication between remote widgets and the KMM application.

### Communication Principals

1. Each transmission starts with _action message_ sent by the remote widget.
1. KMM application replies with single _response message_.
1. Each response message contains `results` or `reason` property, but not both.

### Example action message:

```json
{
  "type": "action",
  "key": "getStateParams",
  "data": {
    "widgetId": "widgetID",
    "tag": "1234234234678892334"
  }
}
```

- **type** - widget sends action type messages only
- **key** - one of public methods exposed in OM Application API
- **data** - data object require `widgetId` property and can handle any additional
  data expected by particular method, optionally data can have `tag` property which
  can be used to match action and response message.

### Example response message on success:

```json
{
  "type": "response",
  "key": "getStateParams",
  "results": {
    "modelGraphUri": "modelGraphUri",
    "taskGraphUri": "taskGraphUri",
    "itemUri": "itemUri"
  },
  "tag": "1234234234678892334"
}
```

- **type** - KMM application sends response type messages only
- **key** - one of public methods exposed in KMM application API
- **results** - when method succeeds result property contains requested data

### Example response message on error:

```json
{
  "type": "response",
  "key": "getStateParams",
  "reason": [{ "type": "argumentInvalid", "argument": "itemUri" }],
  "tag": "1234234234678892334"
}
```

- **type** - KMM application sends response type messages only
- **key** - one of public methods exposed in KMM application API
- **reason** - contains list of errors
