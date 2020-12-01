/** @internal */
declare global {
    interface JSON {
        retrocycle(obj: any): any;
        decycle(obj: any): any;
    }
}
export declare class WorkbenchWidgetApi {
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
    openWidget(targetWidgetId: string): Promise<any>;
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
        /**
         * Calls action.
         * @param action name of the particular action.
         * @param data - data needed for particular action.
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        call: (action: string, data: object) => Promise<unknown>;
        /**
         * Shows form for add new Preferred Label.
         * @param name default value for the name field.
         * @param langCode - default language code to be selected - if not exist
         * default code for the system is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddPrefLabel: (name: string, langCode: string) => Promise<unknown>;
        /**
         * Shows form for add new Alternative Label.
         * @param name - default value for the name field.
         * @param langCode - default language code to be selected - if not exist
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddAltLabel: (name: string, langCode: string, typeUri: string) => Promise<unknown>;
        /**
         * Shows form for add new Multiple Alternative Labels.
         * @param names {Array} - default value for the names field.
         * @param langCode - default language code to be selected - if not exist
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddMultipleAltLabel: (names: string, langCode: string, typeUri: string) => Promise<unknown>;
        /**
         * Shows form for add new Related relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddRelated: (typeUri: string, targetUri: string, targetName: string) => Promise<unknown>;
        /**
         * Shows form for add new Broader relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddBroader: (typeUri: string, targetUri: string, targetName: string) => Promise<unknown>;
        /**
         * Shows form for add new Narrower relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
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
