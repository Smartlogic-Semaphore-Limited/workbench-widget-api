import { decycle, retrocycle } from "./cycle";

/** @internal */
type WaitForResponse = {
  promise: Promise<any>;
  resolve: (data: any) => void;
  reject: (data: any) => void;
};

/** @internal */
interface SimpleObject<V = any> {
  [key: string]: V;
}
/** @internal */
interface MessageProps extends SimpleObject {
  widgetId: string;
  tag: string;
}

/** @internal */
type Message = {
  type: "action";
  key: string;
  data: MessageProps;
};

/**
 * Type of event that KMM application can broadcast to widgets.
 *
 * Widgets can register to listen to specyfic event using
 */
type KmmEvent = {
  type: "CONCEPT_UPDATED";
};
/**
 * All event types users can listen for.
 */
type KmmEventType = Pick<KmmEvent, "type">["type"];

/**
 * General type of an event listener.
 * @see {@link WorkbenchWidgetApi.addEventListener}
 */
type EventListener = (data: KmmEvent) => void;

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
  // Host application assumes that this DEFAULT_WIDGET_ID is used, changing it will result in widget unable to communicate with the host application
  private readonly widgetId = DEFAULT_WIDGET_ID;
  private _promises: Map<string, WaitForResponse> = new Map();

  private _eventListeners: Map<string, Set<EventListener>> = new Map();

  /**
   * @param debug If set to true additional debug messages will be logged to console
   */
  constructor(debug?: boolean);
  /**
   * @param _widgetId Not used
   * @param debug If set to true additional debug messages will be logged to console
   */
  constructor(widgetId?: string, debug?: boolean);

  constructor(
    widgetIdOrDebug: string | boolean = "",
    private readonly debug = false
  ) {
    if (typeof widgetIdOrDebug === "boolean") {
      this.debug = widgetIdOrDebug;
    }
    window.addEventListener("message", this._receiveMessage, false);
    this._postMessage(this._createMessage(this.widgetId, "ready"));
  }

  addEventListener(type: KmmEventType, listener: EventListener): () => void {
    if (!this._eventListeners.has(type)) {
      this._eventListeners.set(type, new Set<EventListener>());
    }
    this._eventListeners.get(type)!.add(listener);
    return () => this._eventListeners.get(type)!.delete(listener);
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

  private withOnlyDefinedValues = (obj: SimpleObject<any>) =>
    Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value != null)
    );

  private _postIndex = 0;
  private _generateTag() {
    this._postIndex++;
    return this.widgetId + "_" + this._postIndex;
  }
  private _createMessage(
    widgetId: string,
    key: string,
    additionalData: SimpleObject = {}
  ): Message {
    const tag = this._generateTag();
    return {
      type: "action",
      key,
      data: {
        widgetId,
        tag,
        ...this.withOnlyDefinedValues(additionalData),
      },
    };
  }

  private _postMessage = <Result>(message: Message): Promise<Result> => {
    const waitForResponse: Partial<WaitForResponse> = {};
    waitForResponse.promise = new Promise((resolve, reject) => {
      waitForResponse.resolve = resolve;
      waitForResponse.reject = reject;
    });
    this._promises.set(message.data.tag, waitForResponse as WaitForResponse);
    window.parent.postMessage(decycle(message), "*");
    this._logMessage("postMessage", message);
    return waitForResponse.promise;
  };

  private _handleResponseMessage(eventMessage: {
    type: "response";
    tag: string;
    results?: any;
    reason?: any;
  }) {
    const responseTag = eventMessage?.tag;
    if (responseTag && this._promises.has(responseTag)) {
      const waitForResponse = this._promises.get(responseTag)!;
      if (eventMessage.results !== undefined) {
        waitForResponse.resolve(retrocycle(eventMessage.results));
      } else if (eventMessage.reason !== undefined) {
        waitForResponse.reject(retrocycle(eventMessage.reason));
      } else {
        this._logError("Response message need results or reason in data.");
      }
      this._promises.delete(responseTag);
    }
  }

  private _handleEventMessage({ data }: { type: "event"; data: KmmEvent }) {
    const listeners = this._eventListeners.get(data.type) ?? new Set();
    listeners.forEach((listener) => listener(data));
  }

  private _receiveMessage = (
    event: MessageEvent<
      | {
          type: "response";
          tag: string;
          results?: any;
          reason?: any;
        }
      | {
          type: "event";
          data: KmmEvent;
        }
    >
  ) => {
    this._logMessage("receiveMessage", event);
    switch (event.data.type) {
      case "response": {
        this._handleResponseMessage(event.data);
        break;
      }
      case "event": {
        this._handleEventMessage(event.data);
        break;
      }
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
