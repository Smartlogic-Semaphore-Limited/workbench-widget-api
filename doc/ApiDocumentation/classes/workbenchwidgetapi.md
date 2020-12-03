**[Semaphore: WorkbenchWidgetApi](../README.md)**

> [Globals](../README.md) / WorkbenchWidgetApi

# Class: WorkbenchWidgetApi

## Hierarchy

* **WorkbenchWidgetApi**

## Index

### Constructors

* [constructor](workbenchwidgetapi.md#constructor)

### Properties

* [getAltLabelProperties](workbenchwidgetapi.md#getaltlabelproperties)
* [getAltLabelUnfilteredProperties](workbenchwidgetapi.md#getaltlabelunfilteredproperties)
* [getAssociativeTypes](workbenchwidgetapi.md#getassociativetypes)
* [getBroaderTypes](workbenchwidgetapi.md#getbroadertypes)
* [getConceptAltLabels](workbenchwidgetapi.md#getconceptaltlabels)
* [getConceptBroader](workbenchwidgetapi.md#getconceptbroader)
* [getConceptDetails](workbenchwidgetapi.md#getconceptdetails)
* [getConceptGuid](workbenchwidgetapi.md#getconceptguid)
* [getConceptNarrower](workbenchwidgetapi.md#getconceptnarrower)
* [getConceptPrefLabels](workbenchwidgetapi.md#getconceptpreflabels)
* [getConceptRelated](workbenchwidgetapi.md#getconceptrelated)
* [getDetailsWithMetadata](workbenchwidgetapi.md#getdetailswithmetadata)
* [getMetadataForDomain](workbenchwidgetapi.md#getmetadatafordomain)
* [getMetadataTypes](workbenchwidgetapi.md#getmetadatatypes)
* [getMetadataUnfilteredTypes](workbenchwidgetapi.md#getmetadataunfilteredtypes)
* [getNarrowerTypes](workbenchwidgetapi.md#getnarrowertypes)
* [getTopConcepts](workbenchwidgetapi.md#gettopconcepts)

### Methods

* [closeWidget](workbenchwidgetapi.md#closewidget)
* [getAssociativeUnfilteredTypes](workbenchwidgetapi.md#getassociativeunfilteredtypes)
* [getBroaderUnfilteredTypes](workbenchwidgetapi.md#getbroaderunfilteredtypes)
* [getClasses](workbenchwidgetapi.md#getclasses)
* [getConceptSchemes](workbenchwidgetapi.md#getconceptschemes)
* [getNarrowerUnfilteredTypes](workbenchwidgetapi.md#getnarrowerunfilteredtypes)
* [getSemaphoreSettings](workbenchwidgetapi.md#getsemaphoresettings)
* [getStateParams](workbenchwidgetapi.md#getstateparams)
* [navigateToItem](workbenchwidgetapi.md#navigatetoitem)
* [openWidget](workbenchwidgetapi.md#openwidget)

### Object literals

* [actions](workbenchwidgetapi.md#actions)

## Constructors

### constructor

\+ **new WorkbenchWidgetApi**(`widgetId?`: string, `debug?`: boolean): [WorkbenchWidgetApi](workbenchwidgetapi.md)

*Defined in [src/workbench-widget-api.ts:28](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L28)*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`widgetId` | string | DEFAULT\_WIDGET\_ID |
`debug` | boolean | false |

**Returns:** [WorkbenchWidgetApi](workbenchwidgetapi.md)

## Properties

### getAltLabelProperties

•  **getAltLabelProperties**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAltLabelProperties" )

*Defined in [src/workbench-widget-api.ts:181](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L181)*

Return Alternative Labels Types valid for item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getAltLabelUnfilteredProperties

•  **getAltLabelUnfilteredProperties**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAltLabelUnfilteredProperties" )

*Defined in [src/workbench-widget-api.ts:170](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L170)*

Return All Alternative Labels Types.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getAssociativeTypes

•  **getAssociativeTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAssociativeTypes" )

*Defined in [src/workbench-widget-api.ts:105](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L105)*

Return Associative Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getBroaderTypes

•  **getBroaderTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getBroaderTypes")

*Defined in [src/workbench-widget-api.ts:129](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L129)*

Return Broader Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptAltLabels

•  **getConceptAltLabels**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getConceptAltLabels" )

*Defined in [src/workbench-widget-api.ts:270](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L270)*

 Return concept details with alternative labels.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptBroader

•  **getConceptBroader**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptBroader" )

*Defined in [src/workbench-widget-api.ts:309](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L309)*

 Return concept details with broader concepts grouped by relation type.

**`param`** 

**`param`** 

**`param`** optional, default 10.

**`param`** optional, default 0.

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptDetails

•  **getConceptDetails**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getConceptDetails")

*Defined in [src/workbench-widget-api.ts:241](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L241)*

 Return concept details.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptGuid

•  **getConceptGuid**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getConceptGuid")

*Defined in [src/workbench-widget-api.ts:250](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L250)*

 Return concept guid data.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptNarrower

•  **getConceptNarrower**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptNarrower" )

*Defined in [src/workbench-widget-api.ts:296](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L296)*

 Return concept details with narrower concepts grouped by relation type.

**`param`** 

**`param`** 

**`param`** optional, default 10.

**`param`** optional, default 0.

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptPrefLabels

•  **getConceptPrefLabels**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getConceptPrefLabels" )

*Defined in [src/workbench-widget-api.ts:259](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L259)*

 Return concept details with preferred labels.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptRelated

•  **getConceptRelated**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptRelated" )

*Defined in [src/workbench-widget-api.ts:283](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L283)*

 Return concept details with associative concepts grouped by relation type.

**`param`** 

**`param`** 

**`param`** optional, default 10.

**`param`** optional, default 0.

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getDetailsWithMetadata

•  **getDetailsWithMetadata**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getDetailsWithMetadata" )

*Defined in [src/workbench-widget-api.ts:211](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L211)*

Return Item with metadata properties.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataForDomain

•  **getMetadataForDomain**: (Anonymous function) = this.\_dataSourceWithItemAndDomainUri( "getMetadataForDomain" )

*Defined in [src/workbench-widget-api.ts:221](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L221)*

 Return both default metadata and metadata specific for given domain.

**`param`** 

**`param`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataTypes

•  **getMetadataTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getMetadataTypes")

*Defined in [src/workbench-widget-api.ts:202](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L202)*

Return Metadata types valid for item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataUnfilteredTypes

•  **getMetadataUnfilteredTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getMetadataUnfilteredTypes" )

*Defined in [src/workbench-widget-api.ts:191](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L191)*

Return Metadata types.

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getNarrowerTypes

•  **getNarrowerTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getNarrowerTypes")

*Defined in [src/workbench-widget-api.ts:151](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L151)*

Return Narrower Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getTopConcepts

•  **getTopConcepts**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getTopConcepts" )

*Defined in [src/workbench-widget-api.ts:322](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L322)*

 Return concept scheme details with top concepts.

**`param`** 

**`param`** 

**`param`** optional, default 10.

**`param`** optional, default 0.

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

## Methods

### closeWidget

▸ **closeWidget**(): Promise\<void>

*Defined in [src/workbench-widget-api.ts:65](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L65)*

Close right side panel in host application.

**Returns:** Promise\<void>

___

### getAssociativeUnfilteredTypes

▸ **getAssociativeUnfilteredTypes**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:91](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L91)*

Return all Associative Types.

**`function`** 

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getBroaderUnfilteredTypes

▸ **getBroaderUnfilteredTypes**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:115](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L115)*

Return all Broader Types.

**`function`** 

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getClasses

▸ **getClasses**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:81](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L81)*

Return class data for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

___

### getConceptSchemes

▸ **getConceptSchemes**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:230](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L230)*

 Return all concept schemes for given task.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getNarrowerUnfilteredTypes

▸ **getNarrowerUnfilteredTypes**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:137](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L137)*

Return all Narrower Types.

**`function`** 

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getSemaphoreSettings

▸ **getSemaphoreSettings**(`taskGraphUri`: string): Promise\<any>

*Defined in [src/workbench-widget-api.ts:159](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L159)*

Return Semaphore Settings.

**`function`** 

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getStateParams

▸ **getStateParams**(): Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

*Defined in [src/workbench-widget-api.ts:42](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L42)*

Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).

**Returns:** Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

___

### navigateToItem

▸ **navigateToItem**(`item`: string): Promise\<void>

*Defined in [src/workbench-widget-api.ts:55](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L55)*

Navigate host application to item.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | string | Item can be concept, concept scheme, relationship, class etc. existing in current task.  |

**Returns:** Promise\<void>

___

### openWidget

▸ **openWidget**(`targetWidgetId`: string): Promise\<void>

*Defined in [src/workbench-widget-api.ts:73](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L73)*

Open different widget in the same model.

#### Parameters:

Name | Type |
------ | ------ |
`targetWidgetId` | string |

**Returns:** Promise\<void>

## Object literals

### actions

▪  **actions**: object

*Defined in [src/workbench-widget-api.ts:331](https://github.com/Smartlogic-Semaphore-Limited/Smartlogic-Semaphore-side-panel-widget-framework/blob/0e8ac89/src/workbench-widget-api.ts#L331)*

Actions can be used to use Workbench functionality directly.

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

#### Properties:

Name | Type | Value | Description |
------ | ------ | ------ | ------ |
`call` | \_actionCall | this.\_actionCall | Calls action.  **`param`** name of the particular action.  **`param`** data needed for particular action.  **`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  |
`showFormAddAltLabel` | function | (name: string, langCode: string, typeUri: string) => Promise\<unknown> | Shows form for add new Alternative Label.   |
`showFormAddBroader` | function | (typeUri: string, targetUri: string, targetName: string) => Promise\<unknown> | Shows form for add new Broader relation to the target Concept.   |
`showFormAddMultipleAltLabel` | function | (names: string, langCode: string, typeUri: string) => Promise\<unknown> | Shows form for add new Multiple Alternative Labels.   |
`showFormAddNarrower` | function | (typeUri: string, targetUri: string, targetName: string) => Promise\<unknown> | Shows form for add new Narrower relation to the target Concept.   |
`showFormAddPrefLabel` | function | (name: string, langCode: string) => Promise\<unknown> | Shows form for add new Preferred Label.   |
`showFormAddRelated` | function | (typeUri: string, targetUri: string, targetName: string) => Promise\<unknown> | Shows form for add new Related relation to the target Concept.   |
