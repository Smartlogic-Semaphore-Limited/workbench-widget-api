## Members

<dl>
<dt><a href="#widgetId">widgetId</a></dt>
<dd><p>Current widget id.</p>
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
<dt><a href="#getClasses">getClasses()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return class data for current item.</p>
</dd>
<dt><a href="#getAssociativeUnfilteredTypes">getAssociativeUnfilteredTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Associative Types.</p>
</dd>
<dt><a href="#getAssociativeTypes">getAssociativeTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Associative Types valid for current item.</p>
</dd>
<dt><a href="#getBroaderUnfilteredTypes">getBroaderUnfilteredTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Broader Types.</p>
</dd>
<dt><a href="#getBroaderTypes">getBroaderTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Broader Types valid for current item.</p>
</dd>
<dt><a href="#getNarrowerUnfilteredTypes">getNarrowerUnfilteredTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all Narrower Types.</p>
</dd>
<dt><a href="#getNarrowerTypes">getNarrowerTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Narrower Types valid for current item.</p>
</dd>
<dt><a href="#getSemaphoreSettings">getSemaphoreSettings()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Semaphore Settings.</p>
</dd>
<dt><a href="#getAltLabelUnfilteredProperties">getAltLabelUnfilteredProperties()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return All Alternative Labels Types.</p>
</dd>
<dt><a href="#getAltLabelProperties">getAltLabelProperties()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Alternative Labels Types valid for item.</p>
</dd>
<dt><a href="#getMetadataTypes">getMetadataTypes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Metadata types valid for item.</p>
</dd>
<dt><a href="#getDetailsWithMetadata">getDetailsWithMetadata()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return Item with metadata properties.</p>
</dd>
<dt><a href="#getMetadataForDomain">getMetadataForDomain()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return both default metadata and metadata specific for given domain.</p>
</dd>
<dt><a href="#getConceptSchemes">getConceptSchemes()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return all concept schemes for given task.</p>
</dd>
<dt><a href="#getConceptDetails">getConceptDetails()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details.</p>
</dd>
<dt><a href="#getConceptGuid">getConceptGuid()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept guid data.</p>
</dd>
<dt><a href="#getConceptPrefLabels">getConceptPrefLabels()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with preferred labels.</p>
</dd>
<dt><a href="#getConceptAltLabels">getConceptAltLabels()</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with alternative labels.</p>
</dd>
<dt><a href="#getConceptRelated">getConceptRelated(limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with associative concepts grouped by relation type.</p>
</dd>
<dt><a href="#getConceptNarrower">getConceptNarrower(limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with narrower concepts grouped by relation type.</p>
</dd>
<dt><a href="#getConceptBroader">getConceptBroader(limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept details with broader concepts grouped by relation type.</p>
</dd>
<dt><a href="#getTopConcepts">getTopConcepts(limit, offset)</a> ⇒ <code>Promise</code></dt>
<dd><p>Return concept scheme details with top concepts.</p>
</dd>
</dl>

<a name="widgetId"></a>

## widgetId
Current widget id.

**Kind**: global variable  
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

## getClasses() ⇒ <code>Promise</code>
Return class data for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getAssociativeUnfilteredTypes"></a>

## getAssociativeUnfilteredTypes() ⇒ <code>Promise</code>
Return all Associative Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getAssociativeTypes"></a>

## getAssociativeTypes() ⇒ <code>Promise</code>
Return Associative Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| itemUri. | <code>String</code> | 

<a name="getBroaderUnfilteredTypes"></a>

## getBroaderUnfilteredTypes() ⇒ <code>Promise</code>
Return all Broader Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getBroaderTypes"></a>

## getBroaderTypes() ⇒ <code>Promise</code>
Return Broader Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getNarrowerUnfilteredTypes"></a>

## getNarrowerUnfilteredTypes() ⇒ <code>Promise</code>
Return all Narrower Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getNarrowerTypes"></a>

## getNarrowerTypes() ⇒ <code>Promise</code>
Return Narrower Types valid for current item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getSemaphoreSettings"></a>

## getSemaphoreSettings() ⇒ <code>Promise</code>
Return Semaphore Settings.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  
<a name="getAltLabelUnfilteredProperties"></a>

## getAltLabelUnfilteredProperties() ⇒ <code>Promise</code>
Return All Alternative Labels Types.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| itemUri. | <code>String</code> | 

<a name="getAltLabelProperties"></a>

## getAltLabelProperties() ⇒ <code>Promise</code>
Return Alternative Labels Types valid for item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| itemUri. | <code>String</code> | 

<a name="getMetadataTypes"></a>

## getMetadataTypes() ⇒ <code>Promise</code>
Return Metadata types valid for item.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| itemUri. | <code>String</code> | 

<a name="getDetailsWithMetadata"></a>

## getDetailsWithMetadata() ⇒ <code>Promise</code>
Return Item with metadata properties.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| itemUri. | <code>String</code> | 

<a name="getMetadataForDomain"></a>

## getMetadataForDomain() ⇒ <code>Promise</code>
Return both default metadata and metadata specific for given domain.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| domainUri. | <code>String</code> | 

<a name="getConceptSchemes"></a>

## getConceptSchemes() ⇒ <code>Promise</code>
Return all concept schemes for given task.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 

<a name="getConceptDetails"></a>

## getConceptDetails() ⇒ <code>Promise</code>
Return concept details.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| itemUri. | <code>String</code> | 

<a name="getConceptGuid"></a>

## getConceptGuid() ⇒ <code>Promise</code>
Return concept guid data.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| itemUri. | <code>String</code> | 

<a name="getConceptPrefLabels"></a>

## getConceptPrefLabels() ⇒ <code>Promise</code>
Return concept details with preferred labels.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| itemUri. | <code>String</code> | 

<a name="getConceptAltLabels"></a>

## getConceptAltLabels() ⇒ <code>Promise</code>
Return concept details with alternative labels.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type |
| --- | --- |
| taskGraphUri. | <code>String</code> | 
| itemUri. | <code>String</code> | 

<a name="getConceptRelated"></a>

## getConceptRelated(limit, offset) ⇒ <code>Promise</code>
Return concept details with associative concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri. | <code>String</code> |  |
| itemUri. | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getConceptNarrower"></a>

## getConceptNarrower(limit, offset) ⇒ <code>Promise</code>
Return concept details with narrower concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri. | <code>String</code> |  |
| itemUri. | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getConceptBroader"></a>

## getConceptBroader(limit, offset) ⇒ <code>Promise</code>
Return concept details with broader concepts grouped by relation type.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri. | <code>String</code> |  |
| itemUri. | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

<a name="getTopConcepts"></a>

## getTopConcepts(limit, offset) ⇒ <code>Promise</code>
Return concept scheme details with top concepts.

**Kind**: global function  
**Returns**: <code>Promise</code> - Promise - for further information see [https://github.com/kriskowal/q/wiki/API-Reference](https://github.com/kriskowal/q/wiki/API-Reference).  

| Param | Type | Description |
| --- | --- | --- |
| taskGraphUri. | <code>String</code> |  |
| itemUri. | <code>String</code> |  |
| limit | <code>Number</code> | optional, default 10. |
| offset | <code>Number</code> | optional, default 0. |

