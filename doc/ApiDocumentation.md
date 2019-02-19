## Members

<dl>
<dt><a href="#widgetId">widgetId</a></dt>
<dd><p>Current widget id.</p>
</dd>
<dt><a href="#actions">actions</a> ⇒ <code>Promise</code></dt>
<dd><p>Actions can be used to use Workbench functionality directly.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getStateParams">getStateParams()</a> ⇒ <code>Promise</code></dt>
<dd><p>Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).</p>
</dd>
<dt><a href="#navigateToItem">navigateToItem(item)</a> ⇒ <code>Promise</code></dt>
<dd><p>Navigate host application to item.</p>
</dd>
<dt><a href="#closeWidget">closeWidget()</a> ⇒ <code>Promise</code></dt>
<dd><p>Close right side panel in host application.</p>
</dd>
<dt><a href="#openWidget">openWidget()</a> ⇒ <code>Promise</code></dt>
<dd><p>Open different widget exist in same model.</p>
</dd>
<dt><a href="#getClasses">getClasses(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return class data for current item.</p>
</dd>
<dt><a href="#getAssociativeUnfilteredTypes">getAssociativeUnfilteredTypes(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Associative Types.</p>
</dd>
<dt><a href="#getAssociativeTypes">getAssociativeTypes(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Associative Types valid for current item.</p>
</dd>
<dt><a href="#getBroaderUnfilteredTypes">getBroaderUnfilteredTypes(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Broader Types.</p>
</dd>
<dt><a href="#getBroaderTypes">getBroaderTypes(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Broader Types valid for current item.</p>
</dd>
<dt><a href="#getNarrowerUnfilteredTypes">getNarrowerUnfilteredTypes(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Narrower Types.</p>
</dd>
<dt><a href="#getNarrowerTypes">getNarrowerTypes(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Narrower Types valid for current item.</p>
</dd>
<dt><a href="#getSemaphoreSettings">getSemaphoreSettings(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Semaphore Settings.</p>
</dd>
<dt><a href="#getAltLabelUnfilteredProperties">getAltLabelUnfilteredProperties(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return All Alternative Labels Types.</p>
</dd>
<dt><a href="#getAltLabelProperties">getAltLabelProperties(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Alternative Labels Types valid for item.</p>
</dd>
<dt><a href="#getMetadataUnfilteredTypes">getMetadataUnfilteredTypes(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Metadata types.</p>
</dd>
<dt><a href="#getMetadataTypes">getMetadataTypes(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Metadata types valid for item.</p>
</dd>
<dt><a href="#getDetailsWithMetadata">getDetailsWithMetadata(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Item with metadata properties.</p>
</dd>
<dt><a href="#getMetadataForDomain">getMetadataForDomain(taskGraphUri, domainUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return both default metadata and metadata specific for given domain.</p>
</dd>
<dt><a href="#getConceptSchemes">getConceptSchemes(taskGraphUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all concept schemes for given task.</p>
</dd>
<dt><a href="#getConceptDetails">getConceptDetails(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details.</p>
</dd>
<dt><a href="#getConceptGuid">getConceptGuid(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept guid data.</p>
</dd>
<dt><a href="#getConceptPrefLabels">getConceptPrefLabels(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with preferred labels.</p>
</dd>
<dt><a href="#getConceptAltLabels">getConceptAltLabels(taskGraphUri, itemUri)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with alternative labels.</p>
</dd>
<dt><a href="#getConceptRelated">getConceptRelated(taskGraphUri, itemUri, limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with associative concepts grouped by relation type.</p>
</dd>
<dt><a href="#getConceptNarrower">getConceptNarrower(taskGraphUri, itemUri, limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with narrower concepts grouped by relation type.</p>
</dd>
<dt><a href="#getConceptBroader">getConceptBroader(taskGraphUri, itemUri, limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with broader concepts grouped by relation type.</p>
</dd>
<dt><a href="#getTopConcepts">getTopConcepts(taskGraphUri, itemUri, limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept scheme details with top concepts.</p>
</dd>
</dl>

<a name="widgetId"></a>

## widgetId
Current widget id.

**Kind**: global variable  
<a name="actions"></a>

## actions ⇒ <code>Promise</code>
Actions can be used to use Workbench functionality directly.

**Kind**: global variable  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

* [actions](#actions) ⇒ <code>Promise</code>
    * [.call](#actions.call) ⇒ <code>Promise</code>
    * [.showFormAddPrefLabel(name, langCode)](#actions.showFormAddPrefLabel) ⇒ <code>Promise</code>
    * [.showFormAddAltLabel(name, langCode, typeUri)](#actions.showFormAddAltLabel) ⇒ <code>Promise</code>
    * [.showFormAddMultipleAltLabel(names, langCode, typeUri)](#actions.showFormAddMultipleAltLabel) ⇒ <code>Promise</code>
    * [.showFormAddRelated(typeUri, targetUri)](#actions.showFormAddRelated) ⇒ <code>Promise</code>
    * [.showFormAddBroader(typeUri, targetUri)](#actions.showFormAddBroader) ⇒ <code>Promise</code>
    * [.showFormAddNarrower(typeUri, targetUri)](#actions.showFormAddNarrower) ⇒ <code>Promise</code>

<a name="actions.call"></a>

### actions.call ⇒ <code>Promise</code>
Calls action.

**Kind**: static property of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| action | <code>String</code> | name of the particular action. |
| data | <code>Object</code> | data needed for particular action. |

<a name="actions.showFormAddPrefLabel"></a>

### actions.showFormAddPrefLabel(name, langCode) ⇒ <code>Promise</code>
Shows form for add new Preferred Label.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Description |
| --- | --- |
| name | default value for the name field. |
| langCode | default language code to be selected - if not exist default code for the system is used. |

<a name="actions.showFormAddAltLabel"></a>

### actions.showFormAddAltLabel(name, langCode, typeUri) ⇒ <code>Promise</code>
Shows form for add new Alternative Label.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Description |
| --- | --- |
| name | default value for the name field. |
| langCode | default language code to be selected - if not exist |
| typeUri | default type uri to be selected - if not exist default type for the system is used. |

<a name="actions.showFormAddMultipleAltLabel"></a>

### actions.showFormAddMultipleAltLabel(names, langCode, typeUri) ⇒ <code>Promise</code>
Shows form for add new Multiple Alternative Labels.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| names | <code>Array</code> | default value for the names field. |
| langCode |  | default language code to be selected - if not exist |
| typeUri |  | default type uri to be selected - if not exist default type for the system is used. |

<a name="actions.showFormAddRelated"></a>

### actions.showFormAddRelated(typeUri, targetUri) ⇒ <code>Promise</code>
Shows form for add new Related relation to the target Concept.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Description |
| --- | --- |
| typeUri | default type uri to be selected - if not exist default type for the system is used. |
| targetUri | Target concept uri to be selected - if not exist empty value is used. |

<a name="actions.showFormAddBroader"></a>

### actions.showFormAddBroader(typeUri, targetUri) ⇒ <code>Promise</code>
Shows form for add new Broader relation to the target Concept.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Description |
| --- | --- |
| typeUri | default type uri to be selected - if not exist default type for the system is used. |
| targetUri | Target concept uri to be selected - if not exist empty value is used. |

<a name="actions.showFormAddNarrower"></a>

### actions.showFormAddNarrower(typeUri, targetUri) ⇒ <code>Promise</code>
Shows form for add new Narrower relation to the target Concept.

**Kind**: static method of [<code>actions</code>](#actions)  
**Returns**: <code>Promise</code> - - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Description |
| --- | --- |
| typeUri | default type uri to be selected - if not exist default type for the system is used. |
| targetUri | Target concept uri to be selected - if not exist empty value is used. |

<a name="getStateParams"></a>

## getStateParams() ⇒ <code>Promise</code>
Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="navigateToItem"></a>

## navigateToItem(item) ⇒ <code>Promise</code>
Navigate host application to item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| item | <code>Item</code> | Item can be concept, concept scheme, relationship, class etc. existing in current task. |

<a name="closeWidget"></a>

## closeWidget() ⇒ <code>Promise</code>
Close right side panel in host application.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="openWidget"></a>

## openWidget() ⇒ <code>Promise</code>
Open different widget exist in same model.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getClasses"></a>

## getClasses(taskGraphUri) ⇒ <code>Promise</code>
Return class data for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getAssociativeUnfilteredTypes"></a>

## getAssociativeUnfilteredTypes(taskGraphUri) ⇒ <code>Promise</code>
Return all Associative Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getAssociativeTypes"></a>

## getAssociativeTypes(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Associative Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getBroaderUnfilteredTypes"></a>

## getBroaderUnfilteredTypes(taskGraphUri) ⇒ <code>Promise</code>
Return all Broader Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getBroaderTypes"></a>

## getBroaderTypes(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Broader Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getNarrowerUnfilteredTypes"></a>

## getNarrowerUnfilteredTypes(taskGraphUri) ⇒ <code>Promise</code>
Return all Narrower Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getNarrowerTypes"></a>

## getNarrowerTypes(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Narrower Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getSemaphoreSettings"></a>

## getSemaphoreSettings(taskGraphUri) ⇒ <code>Promise</code>
Return Semaphore Settings.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getAltLabelUnfilteredProperties"></a>

## getAltLabelUnfilteredProperties(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return All Alternative Labels Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getAltLabelProperties"></a>

## getAltLabelProperties(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Alternative Labels Types valid for item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getMetadataUnfilteredTypes"></a>

## getMetadataUnfilteredTypes(taskGraphUri) ⇒ <code>Promise</code>
Return Metadata types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getMetadataTypes"></a>

## getMetadataTypes(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Metadata types valid for item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getDetailsWithMetadata"></a>

## getDetailsWithMetadata(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return Item with metadata properties.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getMetadataForDomain"></a>

## getMetadataForDomain(taskGraphUri, domainUri) ⇒ <code>Promise</code>
Return both default metadata and metadata specific for given domain.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| domainUri | <code>String</code> | 

<a name="getConceptSchemes"></a>

## getConceptSchemes(taskGraphUri) ⇒ <code>Promise</code>
Return all concept schemes for given task.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 

<a name="getConceptDetails"></a>

## getConceptDetails(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return concept details.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getConceptGuid"></a>

## getConceptGuid(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return concept guid data.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getConceptPrefLabels"></a>

## getConceptPrefLabels(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return concept details with preferred labels.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getConceptAltLabels"></a>

## getConceptAltLabels(taskGraphUri, itemUri) ⇒ <code>Promise</code>
Return concept details with alternative labels.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri | <code>String</code> | 
| itemUri | <code>String</code> | 

<a name="getConceptRelated"></a>

## getConceptRelated(taskGraphUri, itemUri, limit, offset) ⇒ <code>Promise</code>
Return concept details with associative concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri | <code>String</code> |  |
| itemUri | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getConceptNarrower"></a>

## getConceptNarrower(taskGraphUri, itemUri, limit, offset) ⇒ <code>Promise</code>
Return concept details with narrower concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri | <code>String</code> |  |
| itemUri | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getConceptBroader"></a>

## getConceptBroader(taskGraphUri, itemUri, limit, offset) ⇒ <code>Promise</code>
Return concept details with broader concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri | <code>String</code> |  |
| itemUri | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getTopConcepts"></a>

## getTopConcepts(taskGraphUri, itemUri, limit, offset) ⇒ <code>Promise</code>
Return concept scheme details with top concepts.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri | <code>String</code> |  |
| itemUri | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

