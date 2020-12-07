**[Semaphore: WorkbenchWidgetApi](../README.md)**

> [Globals](../README.md) / WorkbenchWidgetApi

# Class: WorkbenchWidgetApi

## Hierarchy

* **WorkbenchWidgetApi**

## Index

### Constructors

* [constructor](workbenchwidgetapi.md#constructor)

### Methods

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

\+ **new WorkbenchWidgetApi**(`widgetId?`: string, `debug?`: boolean): [WorkbenchWidgetApi](workbenchwidgetapi.md)

*Defined in [src/workbench-widget-api.ts:64](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L64)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`widgetId` | string | DEFAULT\_WIDGET\_ID |
`debug` | boolean | false |

**Returns:** [WorkbenchWidgetApi](workbenchwidgetapi.md)

## Methods

### closeWidget

▸ **closeWidget**(): Promise\<void>

*Defined in [src/workbench-widget-api.ts:101](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L101)*

Close right side panel in host application.

**Returns:** Promise\<void>

___

### getAltLabelProperties

▸ **getAltLabelProperties**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:214](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L214)*

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

*Defined in [src/workbench-widget-api.ts:203](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L203)*

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

*Defined in [src/workbench-widget-api.ts:136](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L136)*

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

*Defined in [src/workbench-widget-api.ts:124](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L124)*

Return all Associative Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getBroaderTypes

▸ **getBroaderTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:157](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L157)*

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

*Defined in [src/workbench-widget-api.ts:147](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L147)*

Return all Broader Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getClasses

▸ **getClasses**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:117](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L117)*

Return class data for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getConceptAltLabels

▸ **getConceptAltLabels**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:309](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L309)*

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

*Defined in [src/workbench-widget-api.ts:356](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L356)*

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

*Defined in [src/workbench-widget-api.ts:276](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L276)*

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

*Defined in [src/workbench-widget-api.ts:287](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L287)*

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

*Defined in [src/workbench-widget-api.ts:338](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L338)*

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

*Defined in [src/workbench-widget-api.ts:298](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L298)*

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

*Defined in [src/workbench-widget-api.ts:320](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L320)*

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

*Defined in [src/workbench-widget-api.ts:269](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L269)*

 Return all concept schemes for given task.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getDetailsWithMetadata

▸ **getDetailsWithMetadata**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:247](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L247)*

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

*Defined in [src/workbench-widget-api.ts:258](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L258)*

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

*Defined in [src/workbench-widget-api.ts:236](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L236)*

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

*Defined in [src/workbench-widget-api.ts:225](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L225)*

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

*Defined in [src/workbench-widget-api.ts:189](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L189)*

Return Languages valid for the model.

#### Parameters:

Name | Type |
------ | ------ |
`modelGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getNarrowerTypes

▸ **getNarrowerTypes**(`taskGraphUri`: string, `itemUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:178](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L178)*

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

*Defined in [src/workbench-widget-api.ts:168](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L168)*

Return all Narrower Types.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getSemaphoreSettings

▸ **getSemaphoreSettings**(`taskGraphUri`: string): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:196](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L196)*

Return Semaphore Settings.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<unknown>

___

### getStateParams

▸ **getStateParams**(): Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

*Defined in [src/workbench-widget-api.ts:78](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L78)*

Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).

**Returns:** Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

___

### getTopConcepts

▸ **getTopConcepts**(`taskGraphUri`: string, `itemUri`: string, `limit?`: number, `offset?`: number): Promise\<unknown>

*Defined in [src/workbench-widget-api.ts:374](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L374)*

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

*Defined in [src/workbench-widget-api.ts:91](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L91)*

Navigate host application to item.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | string | Item can be concept, concept scheme, relationship, class etc. existing in current task.  |

**Returns:** Promise\<void>

___

### openWidget

▸ **openWidget**(`targetWidgetId`: string): Promise\<void>

*Defined in [src/workbench-widget-api.ts:109](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L109)*

Open different widget in the same model.

#### Parameters:

Name | Type |
------ | ------ |
`targetWidgetId` | string |

**Returns:** Promise\<void>

## Object literals

### actions

▪  **actions**: object

*Defined in [src/workbench-widget-api.ts:392](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/b6b1358/src/workbench-widget-api.ts#L392)*

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
