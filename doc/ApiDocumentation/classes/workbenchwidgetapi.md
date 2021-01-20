**[Semaphore: WorkbenchWidgetApi](../README.md)**

> [Globals](../README.md) / WorkbenchWidgetApi

# Class: WorkbenchWidgetApi

## Hierarchy

* **WorkbenchWidgetApi**

## Index

### Constructors

* [constructor](workbenchwidgetapi.md#constructor)

### Methods

* [addEventListener](workbenchwidgetapi.md#addeventlistener)
* [closeWidget](workbenchwidgetapi.md#closewidget)
* [getAltLabelProperties](workbenchwidgetapi.md#getaltlabelproperties)
* [getAltLabelUnfilteredProperties](workbenchwidgetapi.md#getaltlabelunfilteredproperties)
* [getAssociativeTypes](workbenchwidgetapi.md#getassociativetypes)
* [getAssociativeUnfilteredTypes](workbenchwidgetapi.md#getassociativeunfilteredtypes)
* [getBroaderTypes](workbenchwidgetapi.md#getbroadertypes)
* [getBroaderUnfilteredTypes](workbenchwidgetapi.md#getbroaderunfilteredtypes)
* [getClasses](workbenchwidgetapi.md#getclasses)
* [getConceptAltLabels](workbenchwidgetapi.md#getconceptaltlabels)
* [getConceptBroader](workbenchwidgetapi.md#getconceptbroader)
* [getConceptDetails](workbenchwidgetapi.md#getconceptdetails)
* [getConceptGuid](workbenchwidgetapi.md#getconceptguid)
* [getConceptNarrower](workbenchwidgetapi.md#getconceptnarrower)
* [getConceptPrefLabels](workbenchwidgetapi.md#getconceptpreflabels)
* [getConceptRelated](workbenchwidgetapi.md#getconceptrelated)
* [getConceptSchemes](workbenchwidgetapi.md#getconceptschemes)
* [getDetailsWithMetadata](workbenchwidgetapi.md#getdetailswithmetadata)
* [getMetadataForDomain](workbenchwidgetapi.md#getmetadatafordomain)
* [getMetadataTypes](workbenchwidgetapi.md#getmetadatatypes)
* [getMetadataUnfilteredTypes](workbenchwidgetapi.md#getmetadataunfilteredtypes)
* [getModelLanguages](workbenchwidgetapi.md#getmodellanguages)
* [getNarrowerTypes](workbenchwidgetapi.md#getnarrowertypes)
* [getNarrowerUnfilteredTypes](workbenchwidgetapi.md#getnarrowerunfilteredtypes)
* [getSemaphoreSettings](workbenchwidgetapi.md#getsemaphoresettings)
* [getStateParams](workbenchwidgetapi.md#getstateparams)
* [getTopConcepts](workbenchwidgetapi.md#gettopconcepts)
* [navigateToItem](workbenchwidgetapi.md#navigatetoitem)
* [openWidget](workbenchwidgetapi.md#openwidget)

### Object literals

* [actions](workbenchwidgetapi.md#actions)

## Constructors

### constructor

\+ **new WorkbenchWidgetApi**(`debug?`: undefined \| false \| true): [WorkbenchWidgetApi](workbenchwidgetapi.md)

*Defined in [src/workbench-widget-api.ts:92](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L92)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`debug?` | undefined \| false \| true | If set to true additional debug messages will be logged to console  |

**Returns:** [WorkbenchWidgetApi](workbenchwidgetapi.md)

\+ **new WorkbenchWidgetApi**(`widgetId?`: undefined \| string, `debug?`: undefined \| false \| true): [WorkbenchWidgetApi](workbenchwidgetapi.md)

*Defined in [src/workbench-widget-api.ts:97](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L97)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`widgetId?` | undefined \| string | - |
`debug?` | undefined \| false \| true | If set to true additional debug messages will be logged to console  |

**Returns:** [WorkbenchWidgetApi](workbenchwidgetapi.md)

## Methods

### addEventListener

▸ **addEventListener**(`type`: [KmmEventType](../README.md#kmmeventtype), `listener`: [EventListener](../README.md#eventlistener)): function

*Defined in [src/workbench-widget-api.ts:115](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L115)*

#### Parameters:

Name | Type |
------ | ------ |
`type` | [KmmEventType](../README.md#kmmeventtype) |
`listener` | [EventListener](../README.md#eventlistener) |

**Returns:** function

___

### closeWidget

▸ **closeWidget**(): Promise\<void>

*Defined in [src/workbench-widget-api.ts:149](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L149)*

Close right side panel in host application.

**Returns:** Promise\<void>

___

### getAltLabelProperties

▸ **getAltLabelProperties**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:262](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L262)*

Return Alternative Labels Types valid for item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getAltLabelUnfilteredProperties

▸ **getAltLabelUnfilteredProperties**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:251](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L251)*

Return All Alternative Labels Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getAssociativeTypes

▸ **getAssociativeTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:184](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L184)*

Return Associative Types valid for current item.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`taskGraphUri` | string |  |
`itemUri` | string |   |

**Returns:** Promise\<unknown>

___

### getAssociativeUnfilteredTypes

▸ **getAssociativeUnfilteredTypes**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:172](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L172)*

Return all Associative Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getBroaderTypes

▸ **getBroaderTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:205](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L205)*

Return Broader Types valid for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getBroaderUnfilteredTypes

▸ **getBroaderUnfilteredTypes**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:195](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L195)*

Return all Broader Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getClasses

▸ **getClasses**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:165](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L165)*

Return class data for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptAltLabels

▸ **getConceptAltLabels**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:357](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L357)*

 Return concept details with alternative labels.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptBroader

▸ **getConceptBroader**(`taskGraphUri`: string, `itemUri`: string, `limit?`: number, `offset?`: number): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:404](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L404)*

 Return concept details with broader concepts grouped by relation type.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`taskGraphUri` | string | - |
`itemUri` | string | - |
`limit` | number | 10 |
`offset` | number | 0 |

**Returns:** Promise\<unknown>

___

### getConceptDetails

▸ **getConceptDetails**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:324](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L324)*

 Return concept details.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptGuid

▸ **getConceptGuid**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:335](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L335)*

 Return concept guid data.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptNarrower

▸ **getConceptNarrower**(`taskGraphUri`: string, `itemUri`: string, `limit?`: number, `offset?`: number): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:386](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L386)*

 Return concept details with narrower concepts grouped by relation type.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`taskGraphUri` | string | - |
`itemUri` | string | - |
`limit` | number | 10 |
`offset` | number | 0 |

**Returns:** Promise\<unknown>

___

### getConceptPrefLabels

▸ **getConceptPrefLabels**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:346](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L346)*

 Return concept details with preferred labels.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptRelated

▸ **getConceptRelated**(`taskGraphUri`: string, `itemUri`: string, `limit?`: number, `offset?`: number): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:368](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L368)*

 Return concept details with associative concepts grouped by relation type.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`taskGraphUri` | string | - |
`itemUri` | string | - |
`limit` | number | 10 |
`offset` | number | 0 |

**Returns:** Promise\<unknown>

___

### getConceptSchemes

▸ **getConceptSchemes**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:317](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L317)*

 Return all concept schemes for given task.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getDetailsWithMetadata

▸ **getDetailsWithMetadata**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:295](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L295)*

Return Item with metadata properties.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getMetadataForDomain

▸ **getMetadataForDomain**(`taskGraphUri`: string, `domainUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:306](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L306)*

 Return both default metadata and metadata specific for given domain.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`domainUri` | string |

**Returns:** Promise\<unknown>

___

### getMetadataTypes

▸ **getMetadataTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:284](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L284)*

Return Metadata types valid for item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getMetadataUnfilteredTypes

▸ **getMetadataUnfilteredTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:273](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L273)*

Return Metadata types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getModelLanguages

▸ **getModelLanguages**(`modelGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:237](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L237)*

Return Languages valid for the model.

#### Parameters:

Name | Type |
------ | ------ |
`modelGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getNarrowerTypes

▸ **getNarrowerTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:226](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L226)*

Return Narrower Types valid for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |
`itemUri` | string |

**Returns:** Promise\<unknown>

___

### getNarrowerUnfilteredTypes

▸ **getNarrowerUnfilteredTypes**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:216](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L216)*

Return all Narrower Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getSemaphoreSettings

▸ **getSemaphoreSettings**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:244](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L244)*

Return Semaphore Settings.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getStateParams

▸ **getStateParams**(): Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

*Defined in [src/workbench-widget-api.ts:126](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L126)*

Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).

**Returns:** Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

___

### getTopConcepts

▸ **getTopConcepts**(`taskGraphUri`: string, `itemUri`: string, `limit?`: number, `offset?`: number): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:422](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L422)*

 Return concept scheme details with top concepts.

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`taskGraphUri` | string | - |
`itemUri` | string | - |
`limit` | number | 10 |
`offset` | number | 0 |

**Returns:** Promise\<unknown>

___

### navigateToItem

▸ **navigateToItem**(`item`: string): Promise\<void>

*Defined in [src/workbench-widget-api.ts:139](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L139)*

Navigate host application to item.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | string | Item can be concept, concept scheme, relationship, class etc. existing in current task.  |

**Returns:** Promise\<void>

___

### openWidget

▸ **openWidget**(`targetWidgetId`: string): Promise\<void>

*Defined in [src/workbench-widget-api.ts:157](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L157)*

Open different widget in the same model.

#### Parameters:

Name | Type |
------ | ------ |
`targetWidgetId` | string |

**Returns:** Promise\<void>

## Object literals

### actions

▪  **actions**: object

*Defined in [src/workbench-widget-api.ts:440](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/01d9094/src/workbench-widget-api.ts#L440)*

Actions can be used to use Workbench functionality directly.

#### Properties:

Name | Type | Value | Description |
------ | ------ | ------ | ------ |
`call` | \_actionCall | this.\_actionCall | Calls action.  **`param`** name of the particular action.  **`param`** data needed for particular action.  |
`showFormAddAltLabel` | function | (name: string, langCode: string, typeUri: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Alternative Label.   |
`showFormAddBroader` | function | (typeUri: string, targetUri: string, targetName: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Broader relation to the target Concept.   |
`showFormAddMultipleAltLabel` | function | (names: string, langCode: string, typeUri: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Multiple Alternative Labels.   |
`showFormAddMultipleTranslation` | function | (rows: Array\<[LabelEditFormData](../README.md#labeleditformdata)>, initialSave: boolean) => Promise\<unknown> | Shows form for add new Multiple Translations Labels.   |
`showFormAddNarrower` | function | (typeUri: string, targetUri: string, targetName: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Narrower relation to the target Concept.   |
`showFormAddPrefLabel` | function | (name: string, langCode: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Preferred Label.   |
`showFormAddRelated` | function | (typeUri: string, targetUri: string, targetName: string, initialSave: boolean) => Promise\<unknown> | Shows form for add new Related relation to the target Concept.   |
