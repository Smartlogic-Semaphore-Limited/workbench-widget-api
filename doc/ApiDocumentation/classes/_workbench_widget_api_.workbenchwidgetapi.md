**[WorkbenchWidgetApi](../README.md)**

> [Globals](../README.md) / ["workbench-widget-api"](../modules/_workbench_widget_api_.md) / WorkbenchWidgetApi

# Class: WorkbenchWidgetApi

## Hierarchy

* **WorkbenchWidgetApi**

## Index

### Constructors

* [constructor](_workbench_widget_api_.workbenchwidgetapi.md#constructor)

### Properties

* [getAltLabelProperties](_workbench_widget_api_.workbenchwidgetapi.md#getaltlabelproperties)
* [getAltLabelUnfilteredProperties](_workbench_widget_api_.workbenchwidgetapi.md#getaltlabelunfilteredproperties)
* [getAssociativeTypes](_workbench_widget_api_.workbenchwidgetapi.md#getassociativetypes)
* [getBroaderTypes](_workbench_widget_api_.workbenchwidgetapi.md#getbroadertypes)
* [getConceptAltLabels](_workbench_widget_api_.workbenchwidgetapi.md#getconceptaltlabels)
* [getConceptBroader](_workbench_widget_api_.workbenchwidgetapi.md#getconceptbroader)
* [getConceptDetails](_workbench_widget_api_.workbenchwidgetapi.md#getconceptdetails)
* [getConceptGuid](_workbench_widget_api_.workbenchwidgetapi.md#getconceptguid)
* [getConceptNarrower](_workbench_widget_api_.workbenchwidgetapi.md#getconceptnarrower)
* [getConceptPrefLabels](_workbench_widget_api_.workbenchwidgetapi.md#getconceptpreflabels)
* [getConceptRelated](_workbench_widget_api_.workbenchwidgetapi.md#getconceptrelated)
* [getDetailsWithMetadata](_workbench_widget_api_.workbenchwidgetapi.md#getdetailswithmetadata)
* [getMetadataForDomain](_workbench_widget_api_.workbenchwidgetapi.md#getmetadatafordomain)
* [getMetadataTypes](_workbench_widget_api_.workbenchwidgetapi.md#getmetadatatypes)
* [getMetadataUnfilteredTypes](_workbench_widget_api_.workbenchwidgetapi.md#getmetadataunfilteredtypes)
* [getNarrowerTypes](_workbench_widget_api_.workbenchwidgetapi.md#getnarrowertypes)
* [getTopConcepts](_workbench_widget_api_.workbenchwidgetapi.md#gettopconcepts)

### Methods

* [closeWidget](_workbench_widget_api_.workbenchwidgetapi.md#closewidget)
* [getAssociativeUnfilteredTypes](_workbench_widget_api_.workbenchwidgetapi.md#getassociativeunfilteredtypes)
* [getBroaderUnfilteredTypes](_workbench_widget_api_.workbenchwidgetapi.md#getbroaderunfilteredtypes)
* [getClasses](_workbench_widget_api_.workbenchwidgetapi.md#getclasses)
* [getConceptSchemes](_workbench_widget_api_.workbenchwidgetapi.md#getconceptschemes)
* [getNarrowerUnfilteredTypes](_workbench_widget_api_.workbenchwidgetapi.md#getnarrowerunfilteredtypes)
* [getSemaphoreSettings](_workbench_widget_api_.workbenchwidgetapi.md#getsemaphoresettings)
* [getStateParams](_workbench_widget_api_.workbenchwidgetapi.md#getstateparams)
* [navigateToItem](_workbench_widget_api_.workbenchwidgetapi.md#navigatetoitem)
* [openWidget](_workbench_widget_api_.workbenchwidgetapi.md#openwidget)

### Object literals

* [actions](_workbench_widget_api_.workbenchwidgetapi.md#actions)

## Constructors

### constructor

\+ **new WorkbenchWidgetApi**(`widgetId?`: string, `debug?`: boolean): [WorkbenchWidgetApi](_workbench_widget_api_.workbenchwidgetapi.md)

*Defined in src/workbench-widget-api.ts:34*

#### Parameters:

Name | Type | Default value |
------ | ------ | ------ |
`widgetId` | string | DEFAULT\_WIDGET\_ID |
`debug` | boolean | false |

**Returns:** [WorkbenchWidgetApi](_workbench_widget_api_.workbenchwidgetapi.md)

## Properties

### getAltLabelProperties

•  **getAltLabelProperties**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAltLabelProperties" )

*Defined in src/workbench-widget-api.ts:187*

Return Alternative Labels Types valid for item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getAltLabelUnfilteredProperties

•  **getAltLabelUnfilteredProperties**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAltLabelUnfilteredProperties" )

*Defined in src/workbench-widget-api.ts:176*

Return All Alternative Labels Types.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getAssociativeTypes

•  **getAssociativeTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getAssociativeTypes" )

*Defined in src/workbench-widget-api.ts:111*

Return Associative Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getBroaderTypes

•  **getBroaderTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getBroaderTypes")

*Defined in src/workbench-widget-api.ts:135*

Return Broader Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptAltLabels

•  **getConceptAltLabels**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getConceptAltLabels" )

*Defined in src/workbench-widget-api.ts:276*

 Return concept details with alternative labels.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptBroader

•  **getConceptBroader**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptBroader" )

*Defined in src/workbench-widget-api.ts:315*

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

*Defined in src/workbench-widget-api.ts:247*

 Return concept details.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptGuid

•  **getConceptGuid**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getConceptGuid")

*Defined in src/workbench-widget-api.ts:256*

 Return concept guid data.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptNarrower

•  **getConceptNarrower**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptNarrower" )

*Defined in src/workbench-widget-api.ts:302*

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

*Defined in src/workbench-widget-api.ts:265*

 Return concept details with preferred labels.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getConceptRelated

•  **getConceptRelated**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getConceptRelated" )

*Defined in src/workbench-widget-api.ts:289*

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

*Defined in src/workbench-widget-api.ts:217*

Return Item with metadata properties.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataForDomain

•  **getMetadataForDomain**: (Anonymous function) = this.\_dataSourceWithItemAndDomainUri( "getMetadataForDomain" )

*Defined in src/workbench-widget-api.ts:227*

 Return both default metadata and metadata specific for given domain.

**`param`** 

**`param`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataTypes

•  **getMetadataTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getMetadataTypes")

*Defined in src/workbench-widget-api.ts:208*

Return Metadata types valid for item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getMetadataUnfilteredTypes

•  **getMetadataUnfilteredTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri( "getMetadataUnfilteredTypes" )

*Defined in src/workbench-widget-api.ts:197*

Return Metadata types.

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getNarrowerTypes

•  **getNarrowerTypes**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUri("getNarrowerTypes")

*Defined in src/workbench-widget-api.ts:157*

Return Narrower Types valid for current item.

**`param`** 

**`param`** 

**`function`** 

**`returns`** Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).

___

### getTopConcepts

•  **getTopConcepts**: (Anonymous function) = this.\_dataSourcesWithTaskAndItemUriAndPaging( "getTopConcepts" )

*Defined in src/workbench-widget-api.ts:328*

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

*Defined in src/workbench-widget-api.ts:71*

Close right side panel in host application.

**Returns:** Promise\<void>

___

### getAssociativeUnfilteredTypes

▸ **getAssociativeUnfilteredTypes**(`taskGraphUri`: string): Promise\<any>

*Defined in src/workbench-widget-api.ts:97*

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

*Defined in src/workbench-widget-api.ts:121*

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

*Defined in src/workbench-widget-api.ts:87*

Return class data for current item.

#### Parameters:

Name | Type |
------ | ------ |
`taskGraphUri` | string |

**Returns:** Promise\<any>

___

### getConceptSchemes

▸ **getConceptSchemes**(`taskGraphUri`: string): Promise\<any>

*Defined in src/workbench-widget-api.ts:236*

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

*Defined in src/workbench-widget-api.ts:143*

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

*Defined in src/workbench-widget-api.ts:165*

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

*Defined in src/workbench-widget-api.ts:48*

Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).

**Returns:** Promise\<{ itemUri?: undefined \| string ; modelGraphUri?: undefined \| string ; taskGraphUri?: undefined \| string  }>

___

### navigateToItem

▸ **navigateToItem**(`item`: string): Promise\<void>

*Defined in src/workbench-widget-api.ts:61*

Navigate host application to item.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`item` | string | Item can be concept, concept scheme, relationship, class etc. existing in current task.  |

**Returns:** Promise\<void>

___

### openWidget

▸ **openWidget**(`targetWidgetId`: string): Promise\<any>

*Defined in src/workbench-widget-api.ts:79*

Open different widget in the same model.

#### Parameters:

Name | Type |
------ | ------ |
`targetWidgetId` | string |

**Returns:** Promise\<any>

## Object literals

### actions

▪  **actions**: object

*Defined in src/workbench-widget-api.ts:337*

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
