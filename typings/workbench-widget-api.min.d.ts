declare class WorkbenchWidgetApi {
    private readonly widgetId;
    private readonly debug;
    private _promises;
    constructor(widgetId?: string, debug?: boolean);
    /**
     * Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).
     */
    getStateParams(): Promise<{
        taskGraphUri?: string | undefined;
        modelGraphUri?: string | undefined;
        itemUri?: string | undefined;
    }>;
    /**
     * Navigate host application to item.
     * @param item Item can be concept, concept scheme, relationship, class etc. existing in current task.
     */
    navigateToItem(item: string): Promise<void>;
    /**
     * Close right side panel in host application.
     */
    closeWidget(): Promise<void>;
    /**
     * Open different widget in the same model.
     */
    openWidget(targetWidgetId: string): Promise<void>;
    /**
     * Return class data for current item.
     */
    getClasses(taskGraphUri: string): Promise<any>;
    /**
     * Return all Associative Types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getAssociativeUnfilteredTypes(taskGraphUri: string): Promise<any>;
    /**
     * Return Associative Types valid for current item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getAssociativeTypes: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return all Broader Types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getBroaderUnfilteredTypes(taskGraphUri: string): Promise<any>;
    /**
     * Return Broader Types valid for current item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getBroaderTypes: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return all Narrower Types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getNarrowerUnfilteredTypes(taskGraphUri: string): Promise<any>;
    /**
     * Return Narrower Types valid for current item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getNarrowerTypes: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return Semaphore Settings.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getSemaphoreSettings(taskGraphUri: string): Promise<any>;
    /**
     * Return All Alternative Labels Types.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getAltLabelUnfilteredProperties: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return Alternative Labels Types valid for item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getAltLabelProperties: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return Metadata types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getMetadataUnfilteredTypes: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return Metadata types valid for item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getMetadataTypes: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     * Return Item with metadata properties.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getDetailsWithMetadata: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     *  Return both default metadata and metadata specific for given domain.
     * @param {String} taskGraphUri
     * @param {String} domainUri
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getMetadataForDomain: (taskGraphUri: string, domainUri: string) => Promise<any>;
    /**
     *  Return all concept schemes for given task.
     * @param taskGraphUri
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptSchemes(taskGraphUri: string): Promise<any>;
    /**
     *  Return concept details.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptDetails: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     *  Return concept guid data.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptGuid: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     *  Return concept details with preferred labels.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptPrefLabels: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     *  Return concept details with alternative labels.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptAltLabels: (taskGraphUri: string, itemUri: string) => Promise<any>;
    /**
     *  Return concept details with associative concepts grouped by relation type.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @param {Number} limit - optional, default 10.
     * @param {Number} offset - optional, default 0.
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptRelated: (taskGraphUri: string, itemUri: string, limit?: number | undefined, offset?: number | undefined) => Promise<any>;
    /**
     *  Return concept details with narrower concepts grouped by relation type.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @param {Number} limit - optional, default 10.
     * @param {Number} offset - optional, default 0.
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptNarrower: (taskGraphUri: string, itemUri: string, limit?: number | undefined, offset?: number | undefined) => Promise<any>;
    /**
     *  Return concept details with broader concepts grouped by relation type.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @param {Number} limit - optional, default 10.
     * @param {Number} offset - optional, default 0.
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getConceptBroader: (taskGraphUri: string, itemUri: string, limit?: number | undefined, offset?: number | undefined) => Promise<any>;
    /**
     *  Return concept scheme details with top concepts.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @param {Number} limit - optional, default 10.
     * @param {Number} offset - optional, default 0.
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getTopConcepts: (taskGraphUri: string, itemUri: string, limit?: number | undefined, offset?: number | undefined) => Promise<any>;
    /**
     * Actions can be used to use Workbench functionality directly.
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    actions: {
        call: (action: string, data: object) => Promise<unknown>;
        showFormAddPrefLabel: (name: string, langCode: string) => Promise<unknown>;
        showFormAddAltLabel: (name: string, langCode: string, typeUri: string) => Promise<unknown>;
        showFormAddMultipleAltLabel: (names: string, langCode: string, typeUri: string) => Promise<unknown>;
        showFormAddRelated: (typeUri: string, targetUri: string, targetName: string) => Promise<unknown>;
        showFormAddBroader: (typeUri: string, targetUri: string, targetName: string) => Promise<unknown>;
        showFormAddNarrower: (typeUri: string, targetUri: string, targetName: string) => Promise<unknown>;
    };
    private _actionCall;
    private _getBackendData;
    private _dataSourcesWithTaskAndItemUri;
    private _dataSourcesWithTaskAndItemUriAndPaging;
    private _dataSourceWithItemAndDomainUri;
    private _dataSourcesWithTaskUri;
    private withOnlyDefinedValues;
    private _createMessage;
    private _postMessage;
    private _postIndex;
    private _generateTag;
    private _receiveMessage;
    private _logMessage;
    private _logError;
}
/**
 * Make a deep copy of an object or array, assuring that there is at most
 * one instance of each object or array in the resulting structure. The
 * duplicate references (which might be forming cycles) are replaced with
 * an object of the form
 * ```
 * {$ref: PATH}
 * ```
 * where the `PATH` is a JSONPath string that locates the first occurance.
 * So,
 * ```javascript
 *      let a = [];
 *      a[0] = a;
 *      return JSON.stringify(decycle(a));
 * ```
 * produces the string `'[{"$ref":"$"}]'`.
 *
 * JSONPath is used to locate the unique object. $ indicates the top level of
 * the object or array. `[NUMBER]` or `[STRING]` indicates a child member or
 * property.
 */
declare function decycle(object: any): any;
/**
 * Restore an object that was reduced by decycle. Members whose values are
 * objects of the form `{$ref: PATH}` are replaced with references to the
 * value found by the PATH. This will restore cycles. The object will be mutated.
 *
 * The `eval` function is used to locate the values described by a PATH. The
 * root object is kept in a `$` variable. A regular expression is used to
 * assure that the PATH is extremely well formed. The regexp contains nested
 * * quantifiers. That has been known to have extremely bad performance
 * problems on some browsers for very long strings. A PATH is expected to be
 * reasonably short. A PATH is allowed to belong to a very restricted subset of
 * Goessner's JSONPath.
 *
 * So,
 * ```javascript
 *      let s = '[{"$ref":"$"}]';
 *      return retrocycle(JSON.parse(s));
 * ```
 * produces an array containing a single element which is the array itself.
 */
declare function retrocycle($: any): any;
export { WorkbenchWidgetApi, decycle, retrocycle };
