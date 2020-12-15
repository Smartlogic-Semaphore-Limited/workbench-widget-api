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

/**
 * @category Widget Api
 */
type LabelFormValue = {
  /** The uri of type of the label */
  typeUri: string;
  /** The value of the label */
  labelValue: string;
  /**The language tag of the label */
  labelLanguage: string;
};

/**
 * @category Widget Api
 */
type LabelFormConfig = {
  /** `true` value makes the language code editable */
  editableLanguage: boolean;
  /** `true` value makes the type of the label editable. Type is editable by default for all alternative labels and it is always disabled for pref labels.*/
  editableType: boolean;
};

/**
 * Data transfer type for sending information about editing single label (alt or pref).
 * Used in {@link showFormAddMultipleTranslation}
 *
 * @category Widget Api
 */
type LabelEditFormData = {
  data: LabelFormValue;
  config: LabelFormConfig;
};

/**
 * @category Widget Api
 */
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
   */
  getAssociativeUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getAssociativeUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Associative Types valid for current item.
   * @param taskGraphUri
   * @param itemUri
   */
  getAssociativeTypes(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getAssociativeTypes",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return all Broader Types.
   */
  getBroaderUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getBroaderUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Broader Types valid for current item.
   */
  getBroaderTypes(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getBroaderTypes",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return all Narrower Types.
   */
  getNarrowerUnfilteredTypes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri(
      "getNarrowerUnfilteredTypes",
      taskGraphUri
    );
  }

  /**
   * Return Narrower Types valid for current item.
   */
  getNarrowerTypes(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getNarrowerTypes",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return Languages valid for the model.
   */
  getModelLanguages(modelGraphUri: string) {
    return this._dataSourcesWithModelUri("getModelLanguages", modelGraphUri);
  }

  /**
   * Return Semaphore Settings.
   */
  getSemaphoreSettings(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri("getSemaphoreSettings", taskGraphUri);
  }

  /**
   * Return All Alternative Labels Types.
   */
  getAltLabelUnfilteredProperties(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getAltLabelUnfilteredProperties",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return Alternative Labels Types valid for item.
   */
  getAltLabelProperties(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getAltLabelProperties",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return Metadata types.
   */
  getMetadataUnfilteredTypes(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getMetadataUnfilteredTypes",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return Metadata types valid for item.
   */
  getMetadataTypes(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getMetadataTypes",
      taskGraphUri,
      itemUri
    );
  }

  /**
   * Return Item with metadata properties.
   */
  getDetailsWithMetadata(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getDetailsWithMetadata",
      taskGraphUri,
      itemUri
    );
  }

  /**
   *  Return both default metadata and metadata specific for given domain.
   */
  getMetadataForDomain(taskGraphUri: string, domainUri: string) {
    return this._dataSourceWithItemAndDomainUri(
      "getMetadataForDomain",
      taskGraphUri,
      domainUri
    );
  }

  /**
   *  Return all concept schemes for given task.
   */
  getConceptSchemes(taskGraphUri: string) {
    return this._dataSourcesWithTaskUri("getConceptSchemes", taskGraphUri);
  }

  /**
   *  Return concept details.
   */
  getConceptDetails(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getConceptDetails",
      taskGraphUri,
      itemUri
    );
  }

  /**
   *  Return concept guid data.
   */
  getConceptGuid(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getConceptGuid",
      taskGraphUri,
      itemUri
    );
  }

  /**
   *  Return concept details with preferred labels.
   */
  getConceptPrefLabels(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getConceptPrefLabels",
      taskGraphUri,
      itemUri
    );
  }

  /**
   *  Return concept details with alternative labels.
   */
  getConceptAltLabels(taskGraphUri: string, itemUri: string) {
    return this._dataSourcesWithTaskAndItemUri(
      "getConceptAltLabels",
      taskGraphUri,
      itemUri
    );
  }

  /**
   *  Return concept details with associative concepts grouped by relation type.
   */
  getConceptRelated(
    taskGraphUri: string,
    itemUri: string,
    limit: number = 10,
    offset: number = 0
  ) {
    return this._dataSourcesWithTaskAndItemUriAndPaging(
      "getConceptRelated",
      taskGraphUri,
      itemUri,
      limit,
      offset
    );
  }

  /**
   *  Return concept details with narrower concepts grouped by relation type.
   */
  getConceptNarrower(
    taskGraphUri: string,
    itemUri: string,
    limit: number = 10,
    offset: number = 0
  ) {
    return this._dataSourcesWithTaskAndItemUriAndPaging(
      "getConceptNarrower",
      taskGraphUri,
      itemUri,
      limit,
      offset
    );
  }

  /**
   *  Return concept details with broader concepts grouped by relation type.
   */
  getConceptBroader(
    taskGraphUri: string,
    itemUri: string,
    limit: number = 10,
    offset: number = 0
  ) {
    return this._dataSourcesWithTaskAndItemUriAndPaging(
      "getConceptBroader",
      taskGraphUri,
      itemUri,
      limit,
      offset
    );
  }

  /**
   *  Return concept scheme details with top concepts.
   */
  getTopConcepts(
    taskGraphUri: string,
    itemUri: string,
    limit: number = 10,
    offset: number = 0
  ) {
    return this._dataSourcesWithTaskAndItemUriAndPaging(
      "getTopConcepts",
      taskGraphUri,
      itemUri,
      limit,
      offset
    );
  }

  /**
   * Actions can be used to use Workbench functionality directly.
   */
  actions = {
    /**
     * Calls action.
     * @param action name of the particular action.
     * @param data data needed for particular action.
     */
    call: this._actionCall,
    /**
     * Shows form for add new Preferred Label.
     * @param name default value for the name field.
     * @param langCode - default language code to be selected - if not exist
     *        default code for the system is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddPrefLabel: (
      name: string,
      langCode: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddPrefLabel", {
        name: name,
        langCode: langCode,
        initialSave: Boolean(initialSave),
      }),
    /**
     * Shows form for add new Alternative Label.
     * @param name - default value for the name field.
     * @param langCode - default language code to be selected - if not exist
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddAltLabel: (
      name: string,
      langCode: string,
      typeUri: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddAltLabel", {
        name: name,
        langCode: langCode,
        typeUri: typeUri,
        initialSave: Boolean(initialSave),
      }),
    /**
     * Shows form for add new Multiple Alternative Labels.
     * @param names {Array} - default value for the names field.
     * @param langCode - default language code to be selected - if not exist
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddMultipleAltLabel: (
      names: string,
      langCode: string,
      typeUri: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddMultipleAltLabel", {
        names: names,
        langCode: langCode,
        typeUri: typeUri,
        initialSave: Boolean(initialSave),
      }),
    /**
     * Shows form for add new Multiple Translations Labels.
     * @param rows - Translations that needs to be populated to the form.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddMultipleTranslation: (
      rows: Array<LabelEditFormData>,
      initialSave = false
    ) =>
      this._actionCall("showFormAddMultipleTranslation", {
        rows,
        initialSave: Boolean(initialSave),
      }),
    /**
     * Shows form for add new Related relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddRelated: (
      typeUri: string,
      targetUri: string,
      targetName: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddRelated", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
        initialSave: Boolean(initialSave),
      }),
    /**
     * Shows form for add new Broader relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddBroader: (
      typeUri: string,
      targetUri: string,
      targetName: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddBroader", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
        initialSave: Boolean(initialSave),
      }),

    /**
     * Shows form for add new Narrower relation to the target Concept.
     * @param typeUri - default type uri to be selected - if not exist
     * default type for the system is used.
     * @param targetUri - Target concept uri to be selected - if not exist
     * empty value is used.
     * @param initialSave - If it is true the save action is called and inf it succeed the form will disappear.
     */
    showFormAddNarrower: (
      typeUri: string,
      targetUri: string,
      targetName: string,
      initialSave = false
    ) =>
      this._actionCall("showFormAddNarrower", {
        typeUri: typeUri,
        targetUri: targetUri,
        targetName: targetName,
        initialSave: Boolean(initialSave),
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

  private _dataSourcesWithTaskAndItemUri<Result = unknown>(
    backendFunction: string,
    taskGraphUri: string,
    itemUri: string
  ) {
    return this._getBackendData<Result>(backendFunction, {
      taskGraphUri,
      itemUri,
    });
  }

  private _dataSourcesWithTaskAndItemUriAndPaging<Result = unknown>(
    backendFunction: string,
    taskGraphUri: string,
    itemUri: string,
    limit: number,
    offset: number
  ) {
    return this._getBackendData<Result>(backendFunction, {
      taskGraphUri,
      itemUri,
      limit,
      offset,
    });
  }

  private _dataSourceWithItemAndDomainUri<Result = unknown>(
    backendFunction: string,
    taskGraphUri: string,
    domainUri: string
  ) {
    return this._getBackendData<Result>(backendFunction, {
      taskGraphUri,
      domainUri,
    });
  }

  private _dataSourcesWithTaskUri<Result = unknown>(
    backendFunction: string,
    taskGraphUri: string
  ) {
    return this._getBackendData<Result>(backendFunction, { taskGraphUri });
  }

  private _dataSourcesWithModelUri<Result = unknown>(
    backendFunction: string,
    modelGraphUri: string
  ) {
    return this._getBackendData<Result>(backendFunction, { modelGraphUri });
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

  private _postMessage = <Result>(message: Message): Promise<Result> => {
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
  };

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
