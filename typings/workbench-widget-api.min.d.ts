/** @internal */
interface MessageProps {
    [key: string]: any;
}
/** @internal */
type Message = {
    type: "action";
    key: string;
    data: MessageProps;
};
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
    getClasses(taskGraphUri: string): Promise<unknown>;
    /**
     * Return all Associative Types.
     */
    getAssociativeUnfilteredTypes(taskGraphUri: string): Promise<unknown>;
    /**
     * Return Associative Types valid for current item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    getAssociativeTypes(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return all Broader Types.
     */
    getBroaderUnfilteredTypes(taskGraphUri: string): Promise<unknown>;
    /**
     * Return Broader Types valid for current item.
     */
    getBroaderTypes(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return all Narrower Types.
     */
    getNarrowerUnfilteredTypes(taskGraphUri: string): Promise<unknown>;
    /**
     * Return Narrower Types valid for current item.
     */
    getNarrowerTypes(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return Semaphore Settings.
     */
    getSemaphoreSettings(taskGraphUri: string): Promise<unknown>;
    /**
     * Return All Alternative Labels Types.
     */
    getAltLabelUnfilteredProperties(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return Alternative Labels Types valid for item.
     */
    getAltLabelProperties(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return Metadata types.
     */
    getMetadataUnfilteredTypes(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return Metadata types valid for item.
     */
    getMetadataTypes(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     * Return Item with metadata properties.
     */
    getDetailsWithMetadata(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     *  Return both default metadata and metadata specific for given domain.
     */
    getMetadataForDomain(taskGraphUri: string, domainUri: string): Promise<unknown>;
    /**
     *  Return all concept schemes for given task.
     */
    getConceptSchemes(taskGraphUri: string): Promise<unknown>;
    /**
     *  Return concept details.
     */
    getConceptDetails(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     *  Return concept guid data.
     */
    getConceptGuid(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     *  Return concept details with preferred labels.
     */
    getConceptPrefLabels(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     *  Return concept details with alternative labels.
     */
    getConceptAltLabels(taskGraphUri: string, itemUri: string): Promise<unknown>;
    /**
     *  Return concept details with associative concepts grouped by relation type.
     */
    getConceptRelated(taskGraphUri: string, itemUri: string, limit?: number, offset?: number): Promise<unknown>;
    /**
     *  Return concept details with narrower concepts grouped by relation type.
     */
    getConceptNarrower(taskGraphUri: string, itemUri: string, limit?: number, offset?: number): Promise<unknown>;
    /**
     *  Return concept details with broader concepts grouped by relation type.
     */
    getConceptBroader(taskGraphUri: string, itemUri: string, limit?: number, offset?: number): Promise<unknown>;
    /**
     *  Return concept scheme details with top concepts.
     */
    getTopConcepts(taskGraphUri: string, itemUri: string, limit?: number, offset?: number): Promise<unknown>;
    /**
     * Actions can be used to use Workbench functionality directly.
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
    _postMessage: <Result>(message: Message) => Promise<Result>;
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
