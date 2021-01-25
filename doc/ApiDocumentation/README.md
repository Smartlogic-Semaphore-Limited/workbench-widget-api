**[Semaphore: WorkbenchWidgetApi](README.md)**

> Globals

# Semaphore: WorkbenchWidgetApi

## Index

### Widget Api Classes

* [WorkbenchWidgetApi](classes/workbenchwidgetapi.md)

### KMM Messaging Type aliases

* [EventListener](README.md#eventlistener)
* [KmmEvent](README.md#kmmevent)
* [KmmEventType](README.md#kmmeventtype)

### KMM action parameters Type aliases

* [LabelEditFormData](README.md#labeleditformdata)
* [LabelFormConfig](README.md#labelformconfig)
* [LabelFormValue](README.md#labelformvalue)

### JSON helpers Functions

* [decycle](README.md#decycle)
* [retrocycle](README.md#retrocycle)

## KMM Messaging Type aliases

### EventListener

Ƭ  **EventListener**: (data: [KmmEvent](README.md#kmmevent)) => void

*Defined in [src/workbench-widget-api.ts:60](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L60)*

General type of an event listener.

**`see`** [WorkbenchWidgetApi.addEventListener](classes/workbenchwidgetapi.md#addeventlistener)

___

### KmmEvent

Ƭ  **KmmEvent**: { type: \"CONCEPT\_UPDATED\"  } \| { type: \"CONCEPT\_SCHEME\_UPDATED\"  }

*Defined in [src/workbench-widget-api.ts:41](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L41)*

Type of event that KMM application can broadcast to widgets.

Widgets can register to listen to specyfic event using

___

### KmmEventType

Ƭ  **KmmEventType**: \"CONCEPT\_UPDATED\" \| \"CONCEPT\_SCHEME\_UPDATED\"

*Defined in [src/workbench-widget-api.ts:53](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L53)*

All event types users can listen for.

___

## KMM action parameters Type aliases

### LabelEditFormData

Ƭ  **LabelEditFormData**: { config: [LabelFormConfig](README.md#labelformconfig) ; data: [LabelFormValue](README.md#labelformvalue)  }

*Defined in [src/workbench-widget-api.ts:104](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L104)*

Data transfer type for sending information about editing single label (alt or pref).
Used in [showFormAddMultipleTranslation](classes/workbenchwidgetapi.md#showformaddmultipletranslation)

#### Type declaration:

Name | Type |
------ | ------ |
`config` | [LabelFormConfig](README.md#labelformconfig) |
`data` | [LabelFormValue](README.md#labelformvalue) |

___

### LabelFormConfig

Ƭ  **LabelFormConfig**: { editableLanguage: boolean ; editableType: boolean  }

*Defined in [src/workbench-widget-api.ts:91](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L91)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`editableLanguage` | boolean | `true` value makes the language code editable |
`editableType` | boolean | `true` value makes the type of the label editable. Type is editable by default for all alternative labels and it is always disabled for pref labels. |

___

### LabelFormValue

Ƭ  **LabelFormValue**: { labelLanguage: string ; labelValue: string ; typeUri: string  }

*Defined in [src/workbench-widget-api.ts:79](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/workbench-widget-api.ts#L79)*

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`labelLanguage` | string | The language tag of the label |
`labelValue` | string | The value of the label |
`typeUri` | string | The uri of type of the label |

## JSON helpers Functions

### decycle

▸ **decycle**(`object`: any): any

*Defined in [src/cycle.ts:24](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/cycle.ts#L24)*

Make a deep copy of an object or array, assuring that there is at most
one instance of each object or array in the resulting structure. The
duplicate references (which might be forming cycles) are replaced with
an object of the form
```
{$ref: PATH}
```
where the `PATH` is a JSONPath string that locates the first occurance.
So,
```javascript
     let a = [];
     a[0] = a;
     return JSON.stringify(decycle(a));
```
produces the string `'[{"$ref":"$"}]'`.

JSONPath is used to locate the unique object. $ indicates the top level of
the object or array. `[NUMBER]` or `[STRING]` indicates a child member or
property.

#### Parameters:

Name | Type |
------ | ------ |
`object` | any |

**Returns:** any

___

### retrocycle

▸ **retrocycle**(`$`: any): any

*Defined in [src/cycle.ts:110](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/054b264/src/cycle.ts#L110)*

Restore an object that was reduced by decycle. Members whose values are
objects of the form `{$ref: PATH}` are replaced with references to the
value found by the PATH. This will restore cycles. The object will be mutated.

The `eval` function is used to locate the values described by a PATH. The
root object is kept in a `$` variable. A regular expression is used to
assure that the PATH is extremely well formed. The regexp contains nested
* quantifiers. That has been known to have extremely bad performance
problems on some browsers for very long strings. A PATH is expected to be
reasonably short. A PATH is allowed to belong to a very restricted subset of
Goessner's JSONPath.

So,
```javascript
     let s = '[{"$ref":"$"}]';
     return retrocycle(JSON.parse(s));
```
produces an array containing a single element which is the array itself.

#### Parameters:

Name | Type |
------ | ------ |
`$` | any |

**Returns:** any
