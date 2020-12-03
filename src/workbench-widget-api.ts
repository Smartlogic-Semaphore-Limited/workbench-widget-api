import { decycle, retrocycle } from "./cycle";

/** @internal */
type WaitForResponse = {
  promise: Promise<any>;
  resolve: (data: any) => void;
  reject: (data: any) => void;
};

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

/** @internal */
const DEFAULT_WIDGET_ID = decodeURIComponent(
  window.location.hash.substr(1).replace(/^\//, "").replace(/\+/g, " ")
);

export class WorkbenchWidgetApi {
  private _promises: Map<string, WaitForResponse> = new Map();

  constructor(
    private readonly widgetId = DEFAULT_WIDGET_ID,
    private readonly debug = false
  ) {
    window.addEventListener("message", this._receiveMessage, false);

    this._postMessage(this._createMessage(this.widgetId, "ready"));
  }

  /**
   * Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).
   */
  getStateParams() {
    var message = this._createMessage(this.widgetId, "getStateParams");
    return this._postMessage<{
      taskGraphUri?: string;
      modelGraphUri?: string;
      itemUri?: string;
    }>(message);
  }

  /**
   * Navigate host application to item.
   * @param item Item can be concept, concept scheme, relationship, class etc. existing in current task.
   */
  navigateToItem(item: string) {
    var message = this._createMessage(this.widgetId, "navigateToItem", {
      item,
    });
    return this._postMessage<void>(message);
  }

  /**
   * Close right side panel in host application.
   */
  closeWidget() {
    var message = this._createMessage(this.widgetId, "closeWidget");
    return this._postMessage<void>(message);
  }

  /**
   * Open different widget in the same model.
   */
  openWidget(targetWidgetId: string) {
    var message = this._createMessage(targetWidgetId, "openWidget");
    return this._postMessage<void>(message);
  }

  /**
   * Return class data for current item.
   */
  getClasses(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri("getClasses", taskGraphUri);
  }

  /**
   * Return all Associative Types.
   * @param {String} taskGraphUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getAssociativeUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getAssociativeUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Associative Types valid for current item.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getAssociativeTypes = this._dataSourcesWithTaskAndItemUri(
    "getAssociativeTypes"
  );

  /**
   * Return all Broader Types.
   * @param {String} taskGraphUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getBroaderUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getBroaderUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Broader Types valid for current item.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getBroaderTypes = this._dataSourcesWithTaskAndItemUri("getBroaderTypes");

  /**
   * Return all Narrower Types.
   * @param {String} taskGraphUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getNarrowerUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getNarrowerUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Narrower Types valid for current item.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getNarrowerTypes = this._dataSourcesWithTaskAndItemUri("getNarrowerTypes");

  /**
   * Return Semaphore Settings.
   * @param {String} taskGraphUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getSemaphoreSettings(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri("getSemaphoreSettings", taskGraphUri);
  }

  /**
   * Return All Alternative Labels Types.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getAltLabelUnfilteredProperties = this._dataSourcesWithTaskAndItemUri(
    "getAltLabelUnfilteredProperties"
  );

  /**
   * Return Alternative Labels Types valid for item.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getAltLabelProperties = this._dataSourcesWithTaskAndItemUri(
    "getAltLabelProperties"
  );

  /**
   * Return Metadata types.
   * @param {String} taskGraphUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getMetadataUnfilteredTypes = this._dataSourcesWithTaskAndItemUri(
    "getMetadataUnfilteredTypes"
  );

  /**
   * Return Metadata types valid for item.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getMetadataTypes = this._dataSourcesWithTaskAndItemUri("getMetadataTypes");

  /**
   * Return Item with metadata properties.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getDetailsWithMetadata = this._dataSourcesWithTaskAndItemUri(
    "getDetailsWithMetadata"
  );

  /**
   *  Return both default metadata and metadata specific for given domain.
   * @param {String} taskGraphUri
   * @param {String} domainUri
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getMetadataForDomain = this._dataSourceWithItemAndDomainUri(
    "getMetadataForDomain"
  );

  /**
   *  Return all concept schemes for given task.
   * @param taskGraphUri
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptSchemes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri("getConceptSchemes", taskGraphUri);
  }

  /**
   *  Return concept details.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptDetails = this._dataSourcesWithTaskAndItemUri("getConceptDetails");

  /**
   *  Return concept guid data.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptGuid = this._dataSourcesWithTaskAndItemUri("getConceptGuid");

  /**
   *  Return concept details with preferred labels.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptPrefLabels = this._dataSourcesWithTaskAndItemUri(
    "getConceptPrefLabels"
  );

  /**
   *  Return concept details with alternative labels.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptAltLabels = this._dataSourcesWithTaskAndItemUri(
    "getConceptAltLabels"
  );

  /**
   *  Return concept details with associative concepts grouped by relation type.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @param {Number} limit - optional, default 10.
   * @param {Number} offset - optional, default 0.
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptRelated = this._dataSourcesWithTaskAndItemUriAndPaging(
    "getConceptRelated"
  );

  /**
   *  Return concept details with narrower concepts grouped by relation type.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @param {Number} limit - optional, default 10.
   * @param {Number} offset - optional, default 0.
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptNarrower = this._dataSourcesWithTaskAndItemUriAndPaging(
    "getConceptNarrower"
  );

  /**
   *  Return concept details with broader concepts grouped by relation type.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @param {Number} limit - optional, default 10.
   * @param {Number} offset - optional, default 0.
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getConceptBroader = this._dataSourcesWithTaskAndItemUriAndPaging(
    "getConceptBroader"
  );

  /**
   *  Return concept scheme details with top concepts.
   * @param {String} taskGraphUri
   * @param {String} itemUri
   * @param {Number} limit - optional, default 10.
   * @param {Number} offset - optional, default 0.
   * @function
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */
  getTopConcepts = this._dataSourcesWithTaskAndItemUriAndPaging(
    "getTopConcepts"
  );

  /**
   * Actions can be used to use Workbench functionality directly.
   * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
   */

  actions = {
    /**
     * Calls action.
     * @param action name of the particular action.
     * @param data - data needed for particular action.
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    call: this._actionCall,
    /**
     * Shows form for add new Preferred Label.
     * @param name default value for the name field.
     * @param langCode - default language code to be selected - if not exist
     * default code for the system is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddPrefLabel: (name: string, langCode: string) =>
      this._actionCall("showFormAddPrefLabel", {
        name: name,
        langCode: langCode,
      }),
    /**
     * Shows form for add new Alternative Label.
     * @param name - default value for the name field.
     * @param langCode - default language code to be selected - if not exist
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddAltLabel: (name: string, langCode: string, typeUri: string) =>
      this._actionCall("showFormAddAltLabel", {
        name: name,
        langCode: langCode,
        typeUri: typeUri,
      }),
    /**
     * Shows form for add new Multiple Alternative Labels.
     * @param names {Array} - default value for the names field.
     * @param langCode - default language code to be selected - if not exist
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddMultipleAltLabel: (
      names: string,
      langCode: string,
      typeUri: string
    ) =>
      this._actionCall("showFormAddMultipleAltLabel", {
        names: names,
        langCode: langCode,
        typeUri: typeUri,
      }),
    /**
     * Shows form for add new Related relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddRelated: (
      typeUri: string,
      targetUri: string,
      targetName: string
    ) =>
      this._actionCall("showFormAddRelated", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
      }),
    /**
     * Shows form for add new Broader relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddBroader: (
      typeUri: string,
      targetUri: string,
      targetName: string
    ) =>
      this._actionCall("showFormAddBroader", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
      }),

    /**
     * Shows form for add new Narrower relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    showFormAddNarrower: (
      typeUri: string,
      targetUri: string,
      targetName: string
    ) =>
      this._actionCall("showFormAddNarrower", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
      }),
  };

  private _actionCall(action: string, data: object) {
    const message = this._createMessage(this.widgetId, "callAction", {
      action,
      data,
    });
    return this._postMessage(message);
  }

  private _getBackendData<Result>(
    backendFunction: string,
    backendArguments: { [key: string]: string | number | undefined }
  ) {
    const message = this._createMessage(this.widgetId, "getBackendData", {
      backendFunction,
      backendArguments,
    });
    return this._postMessage<Result>(message);
  }

  private _dataSourcesWithTaskAndItemUri<Result = any>(
    backendFunction: string
  ) {
    return (taskGraphUri: string, itemUri: string) =>
      this._getBackendData<Result>(backendFunction, {
        taskGraphUri,
        itemUri,
      });
  }

  private _dataSourcesWithTaskAndItemUriAndPaging<Result = any>(
    backendFunction: string
  ) {
    return (
      taskGraphUri: string,
      itemUri: string,
      limit?: number,
      offset?: number
    ) =>
      this._getBackendData<Result>(backendFunction, {
        taskGraphUri,
        itemUri,
        limit,
        offset,
      });
  }

  private _dataSourceWithItemAndDomainUri<Result = any>(
    backendFunction: string
  ) {
    return (taskGraphUri: string, domainUri: string) =>
      this._getBackendData<Result>(backendFunction, {
        taskGraphUri,
        domainUri,
      });
  }

  private _dataSourcesWithTaskUri<Result = any>(
    backendFunction: string,
    taskGraphUri: string
  ) {
    return this._getBackendData<Result>(backendFunction, { taskGraphUri });
  }

  private withOnlyDefinedValues = (obj: MessageProps) =>
    Object.fromEntries(
      Object.entries(obj).filter(([key, value]) => value != null)
    );

  private _createMessage(
    widgetId: string,
    key: string,
    additionalData: MessageProps = {}
  ): Message {
    return {
      type: "action",
      key,
      data: {
        widgetId,
        ...this.withOnlyDefinedValues(additionalData),
      },
    };
  }

  private _postMessage<Result>(message: Message): Promise<Result> {
    var tag = this._generateTag();
    message.data.tag = tag;
    const waitForResponse: Partial<WaitForResponse> = {};
    waitForResponse.promise = new Promise((resolve, reject) => {
      waitForResponse.resolve = resolve;
      waitForResponse.reject = reject;
    });
    this._promises.set(tag, waitForResponse as WaitForResponse);
    window.parent.postMessage(decycle(message), "*");
    this._logMessage("postMessage", message);
    return waitForResponse.promise;
  }

  private _postIndex = 0;
  private _generateTag() {
    this._postIndex++;
    return this.widgetId + "_" + this._postIndex;
  }

  private _receiveMessage = (
    event: MessageEvent<{
      tag: string;
      type: "response";
      results?: any;
      reason?: any;
    }>
  ) => {
    this._logMessage("receiveMessage", event);
    //var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
    const responseTag = event.data?.tag;
    if (responseTag && this._promises.has(responseTag)) {
      const waitForResponse = this._promises.get(responseTag)!;
      if (event.data.type === "response") {
        if (event.data.results !== undefined) {
          waitForResponse.resolve(retrocycle(event.data.results));
        } else if (event.data.reason !== undefined) {
          waitForResponse.reject(retrocycle(event.data.reason));
        } else {
          this._logError("Response message need results or reason in data.");
        }
      }
      this._promises.delete(responseTag);
    }
  };

  private _logMessage(...args: any[]) {
    if (this.debug) {
      console.log(...args);
    }
  }

  private _logError(...args: any[]) {
    if (this.debug) {
      console.error(...args);
    }
  }
}
