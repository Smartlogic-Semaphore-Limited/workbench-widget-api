/*global window*/
(function () {

  "use strict";

  var _widgetId, _debug,
    _postIndex = 1,
    _promises = {};
  window.addEventListener("message", _receiveMessage, false);
  window.WorkbenchWidgetApi = WorkbenchWidgetApi;

  /**
   * Library helper to integrate widgets with Smartlogic Semaphore Workbench.
   * @param widgetId - optional parameter to override automatic ID receiver.
   * @returns {{widgetId: *, ready: ready, getStateParams: getStateParams, navigateToItem: navigateToItem, closeWidget: closeWidget, openWidget: openWidget, backendData: {getClasses: *, getAssociativeUnfilteredTypes: *, getBroaderUnfilteredTypes: *, getNarrowerUnfilteredTypes: *, getSemaphoreSettings: *, getAssociativeTypes: *, getAltLabelProperties: *, getAltLabelUnfilteredProperties: *, getBroaderTypes: *, getDetailsWithMetadata: *, getMetadataTypes: *, getNarrowerTypes: *, getConceptMetadata: *, getConceptSchemes: *, getConceptDetails: *, getConceptGuid: *, getConceptGetPrefLabels: *, getConceptAltLabels: *, getConceptRelated: *, getConceptNarrower: *, getConceptBroader: *, getTopConcepts: *}}}
   * @constructor
   */
  function WorkbenchWidgetApi (widgetId, debug) {
    _widgetId = (widgetId || _getIdFromHash());
    _debug = debug;
    _postMessage(_createMessage(_widgetId, "ready"));
    return {
      /**
       * Current widget id.
       */
      widgetId: _widgetId,
      /**
       * Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      getStateParams: function () {
        var message = _createMessage(_widgetId, "getStateParams");
        return _postMessage(message);
      },
      /**
       * Navigate host application to item.
       * @param {Item} item - Item can be concept, concept scheme, relationship, class etc. existing in current task.
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      navigateToItem: function (item) {
        var message = _createMessage(_widgetId, "navigateToItem"),
          needs = [
            {name: "item", type: "Object"}
          ],
          preparedArguments = _prepareArguments(needs, arguments, "navigateToItem");
        if (preparedArguments.valid) {
          message.data.item = preparedArguments.argumentsObj.item;
          return _postMessage(message);
        }
      },

      /**
       * Close right side panel in host application.
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      closeWidget: function () {
        var message = _createMessage(_widgetId, "closeWidget");
        return _postMessage(message);
      },

      /**
       * Open different widget exist in same model.
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      openWidget: function (targetWidgetId) {
        var message = _createMessage(targetWidgetId, "openWidget"),
          needs = [
            {name: "targetWidgetId", type: "String"}
          ],
          preparedArguments = _prepareArguments(needs, arguments, "openWidget");
        if (preparedArguments.valid) {
          return _postMessage(message);
        }
      },

      /**
       * Return class data for current item.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getClasses": _dataSourcesWithTaskUri("getClasses"),


      /**
       * Return all Associative Types.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getAssociativeUnfilteredTypes": _dataSourcesWithTaskUri("getAssociativeUnfilteredTypes"),

      /**
       * Return Associative Types valid for current item.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getAssociativeTypes": _dataSourcesWithTaskAndItemUri("getAssociativeTypes"),


      /**
       * Return all Broader Types.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getBroaderUnfilteredTypes": _dataSourcesWithTaskUri("getBroaderUnfilteredTypes"),

      /**
       * Return Broader Types valid for current item.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getBroaderTypes": _dataSourcesWithTaskAndItemUri("getBroaderTypes"),

      /**
       * Return all Narrower Types.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getNarrowerUnfilteredTypes": _dataSourcesWithTaskUri("getNarrowerUnfilteredTypes"),

      /**
       * Return Narrower Types valid for current item.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getNarrowerTypes": _dataSourcesWithTaskAndItemUri("getNarrowerTypes"),

      /**
       * Return Languages valid for the model.
       * @param {String} modelGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getModelLanguages": _dataSourcesWithModelUri("getModelLanguages"),

      /**
       * Return Semaphore Settings.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getSemaphoreSettings": _dataSourcesWithTaskUri("getSemaphoreSettings"),

      /**
       * Return All Alternative Labels Types.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getAltLabelUnfilteredProperties": _dataSourcesWithTaskAndItemUri("getAltLabelUnfilteredProperties"),

      /**
       * Return Alternative Labels Types valid for item.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getAltLabelProperties": _dataSourcesWithTaskAndItemUri("getAltLabelProperties"),

      /**
       * Return Metadata types.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getMetadataUnfilteredTypes": _dataSourcesWithTaskAndItemUri("getMetadataUnfilteredTypes"),

      /**
       * Return Metadata types valid for item.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getMetadataTypes": _dataSourcesWithTaskAndItemUri("getMetadataTypes"),

      /**
       * Return Item with metadata properties.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getDetailsWithMetadata": _dataSourcesWithTaskAndItemUri("getDetailsWithMetadata"),

      /**
       *  Return both default metadata and metadata specific for given domain.
       * @param {String} taskGraphUri
       * @param {String} domainUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getMetadataForDomain": _dataSourceWithItemAndDomainUri("getMetadataForDomain"),

      /**
       *  Return all concept schemes for given task.
       * @param {String} taskGraphUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptSchemes": _dataSourcesWithTaskUri("getConceptSchemes"),

      /**
       *  Return concept details.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptDetails": _dataSourcesWithTaskAndItemUri("getConceptDetails"),

      /**
       *  Return concept guid data.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptGuid": _dataSourcesWithTaskAndItemUri("getConceptGuid"),

      /**
       *  Return concept details with preferred labels.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptPrefLabels": _dataSourcesWithTaskAndItemUri("getConceptPrefLabels"),

      /**
       *  Return concept details with alternative labels.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptAltLabels": _dataSourcesWithTaskAndItemUri("getConceptAltLabels"),

      /**
       *  Return concept details with associative concepts grouped by relation type.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @param {Number} limit - optional, default 10.
       * @param {Number} offset - optional, default 0.
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptRelated": _dataSourcesWithTaskAndItemUriAndPaging("getConceptRelated"),

      /**
       *  Return concept details with narrower concepts grouped by relation type.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @param {Number} limit - optional, default 10.
       * @param {Number} offset - optional, default 0.
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptNarrower": _dataSourcesWithTaskAndItemUriAndPaging("getConceptNarrower"),

      /**
       *  Return concept details with broader concepts grouped by relation type.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @param {Number} limit - optional, default 10.
       * @param {Number} offset - optional, default 0.
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getConceptBroader": _dataSourcesWithTaskAndItemUriAndPaging("getConceptBroader"),

      /**
       *  Return concept scheme details with top concepts.
       * @param {String} taskGraphUri
       * @param {String} itemUri
       * @param {Number} limit - optional, default 10.
       * @param {Number} offset - optional, default 0.
       * @function
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */
      "getTopConcepts": _dataSourcesWithTaskAndItemUriAndPaging("getTopConcepts"),

      /**
       * Actions can be used to use Workbench functionality directly.
       * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
       */

      actions: {
        /**
         * Calls action.
         * @param {String} action - name of the particular action.
         * @param {Object} data - data needed for particular action.
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        call: _actionCall,
        /**
         * Shows form for add new Preferred Label.
         * @param name - default value for the name field.
         * @param langCode - default language code to be selected - if not exist
         * default code for the system is used.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddPrefLabel: function (name, langCode, initialSave) {
          return _actionCall("showFormAddPrefLabel", {
            name: name,
            langCode: langCode,
            initialSave: Boolean(initialSave)
          });
        },
        /**
         * Shows form for add new Alternative Label.
         * @param name - default value for the name field.
         * @param langCode - default language code to be selected - if not exist
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddAltLabel: function (name, langCode, typeUri, initialSave) {
          return _actionCall("showFormAddAltLabel", {
            name: name,
            langCode: langCode,
            typeUri: typeUri,
            initialSave: Boolean(initialSave)
          });
        },
        /**
         * Shows form for add new Multiple Alternative Labels.
         * @param names {Array} - default value for the names field.
         * @param langCode - default language code to be selected - if not exist
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddMultipleAltLabel: function (names, langCode, typeUri, initialSave) {
          return _actionCall("showFormAddMultipleAltLabel", {
            names: names,
            langCode: langCode,
            typeUri: typeUri,
            initialSave: Boolean(initialSave)
          });
        },
        /**
         * Shows form for add new Multiple Translations Labels.
         * @param {Object[]} rows - Translations that needs to be populated to the form.
         * @param {Object} rows.data - The data of the form.
         * @param {String} rows.data.typeUri - The uri of type of the label.
         * @param {String} rows.data.labelValue - The value of the label
         * @param {String} rows.data.labelLanguage - The language tag of the label
         * @param {Object} rows.config - The configuration of the form
         * @param {Boolean} rows.config.editableLanguage - the true value makes the language code editable in the form
         * @param {Boolean} rows.config.editableType - the false value makes the type of the label not editable.
         * The type is editable by default for all alternative labels and it is always disabled for pref labels.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddMultipleTranslation: function (rows, initialSave) {
          return _actionCall("showFormAddMultipleTranslation", {
            rows: rows,
            initialSave: Boolean(initialSave),
          });
        },
        /**
         * Shows form for add new Related relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @param targetName - Target concept name to be selected - if not exist empty value is used.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddRelated: function (typeUri, targetUri, targetName, initialSave) {
          return _actionCall("showFormAddRelated", {
            typeUri: typeUri,
            targetUri: targetUri,
            targetName: targetName,
            initialSave: Boolean(initialSave)
          });
        },
        /**
         * Shows form for add new Broader relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @param targetName - Target concept name to be selected - if not exist empty value is used.
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddBroader: function (typeUri, targetUri, targetName, initialSave) {
          return _actionCall("showFormAddBroader", {
            typeUri: typeUri,
            targetUri: targetUri,
            targetName: targetName,
            initialSave: Boolean(initialSave)
          });
        },
        /**
         * Shows form for add new Narrower relation to the target Concept.
         * @param typeUri - default type uri to be selected - if not exist
         * default type for the system is used.
         * @param targetUri - Target concept uri to be selected - if not exist
         * empty value is used.
         * @param targetName
         * @param {Boolean} [initialSave = false] - If it is true the save action is called and inf it succeed the form will disappear.
         * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        showFormAddNarrower: function (typeUri, targetUri, targetName, initialSave) {
          return _actionCall("showFormAddNarrower", {
            typeUri: typeUri,
            targetUri: targetUri,
            targetName: targetName,
            initialSave: Boolean(initialSave)
          });
        }
      }

    };


  }

  function _actionCall (action, data) {
    var message = _createMessage(_widgetId, "callAction"),
      needs = [
        {name: "action", type: "String"},
        {name: "data", type: "Object"}
      ],
      preparedArguments = _prepareArguments(needs, arguments, "callAction");
    if (preparedArguments.valid) {
      message.data.action = preparedArguments.argumentsObj.action;
      message.data.data = preparedArguments.argumentsObj.data;
      return _postMessage(message);
    }
  }

  function _addCallee (array, calle) {
    if (_matchType(calle, "Function")) {
      array.push(calle);
    }
  }

  function _getBackendData (widgetID, backendFunction, backendArguments) {
    var message = _createMessage(widgetID, "getBackendData");
    message.data.backendArguments = backendArguments;
    message.data.backendFunction = backendFunction;
    return _postMessage(message);
  }

  function _dataSourcesWithTaskAndItemUri (backendFunction) {
    return function (taskGraphUri, itemUri) {
      var needs = [
          {name: "taskGraphUri", type: "String"},
          {name: "itemUri", type: "String"}
        ],
        preparedArguments = _prepareArguments(needs, arguments, backendFunction);
      if (preparedArguments.valid) {
        return _getBackendData(_widgetId, backendFunction, preparedArguments.argumentsObj);
      }
    };
  }

  function _dataSourcesWithModelUri (backendFunction) {
    return function (modelGraphUri) {
      var needs = [
          {name: "modelGraphUri", type: "String"},
        ],
        preparedArguments = _prepareArguments(needs, arguments, backendFunction);
      if (preparedArguments.valid) {
        return _getBackendData(_widgetId, backendFunction, preparedArguments.argumentsObj);
      }
    };
  }

  function _dataSourcesWithTaskAndItemUriAndPaging (backendFunction) {
    return function (taskGraphUri, itemUri, limit, offset) {
      var needs = [
          {name: "taskGraphUri", type: "String"},
          {name: "itemUri", type: "String"},
          {name: "limit", type: "Number", optional: true},
          {name: "offset", type: "Number", optional: true}
        ],
        preparedArguments = _prepareArguments(needs, arguments, backendFunction);
      if (preparedArguments.valid) {
        return _getBackendData(_widgetId, backendFunction, preparedArguments.argumentsObj);
      }
    };
  }

  function _dataSourceWithItemAndDomainUri (backendFunction) {
    return function (taskGraphUri, domainUri) {
      var needs = [
          {name: "taskGraphUri", type: "String"},
          {name: "domainUri", type: "String"}
        ],
        preparedArguments = _prepareArguments(needs, arguments, backendFunction);
      if (preparedArguments.valid) {
        return _getBackendData(_widgetId, backendFunction, preparedArguments.argumentsObj);
      }
    };
  }

  function _dataSourcesWithTaskUri (backendFunction) {
    return function (taskGraphUri) {
      var needs = [
          {name: "taskGraphUri", type: "String"}
        ],
        preparedArguments = _prepareArguments(needs, arguments, backendFunction);
      if (preparedArguments.valid) {
        return _getBackendData(_widgetId, backendFunction, preparedArguments.argumentsObj);
      }
    };
  }


  function _set (target, key, value, optional) {
    if (!optional || !_isEmpty(value)) {
      target[key] = value;
    }
  }

  function _isEmpty (value) {
    return value === undefined || value === null;
  }

  function _createMessage (widgetID, key) {
    var message = {
      type: "action",
      key: key,
      data: {
        widgetId: widgetID
      }
    };
    return message;
  }

  function _postMessage (message) {
    var tag = _generateTag(message.data.widgetId);
    message.data.tag = tag;
    _promises[tag] = Q.defer();
    window.parent.postMessage(JSON.decycle(message), "*");
    _logMessage("postMessage", message);
    return _promises[tag].promise;
  }

  function _generateTag (widgetId) {
    _postIndex++;
    return widgetId + "_" + _postIndex;
  }


  function _receiveMessage (event) {

    _logMessage("receiveMessage", event);
    //var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.

    if (event.data.tag && _promises[event.data.tag]) {
      if (event.data.type === "response") {
        if (event.data.results !== undefined) {
          _promises[event.data.tag]["resolve"](JSON.retrocycle(event.data.results));
        } else if (event.data.reason !== undefined) {
          _promises[event.data.tag]["reject"](JSON.retrocycle(event.data.reason));
        } else {
          _logError("Response message need results or reason in data.");
        }
      }
      delete _promises[event.data.tag];
    }

  }

  function _getType (obj) {
    return Object.prototype.toString.call(obj);
  }

  function _matchType (value, typeName) {
    return _getType(value) === "[object " + typeName + "]";
  }

  function _prepareArguments (needs, got, functionName) {
    var errors = [], argumentsObj = {};
    if (needs.length) {
      needs.forEach(function (need, index) {
        var gotValue = got[index],
          isValid = need.optional ?
            (_isEmpty(gotValue) || _matchType(gotValue, need.type)) :
            _matchType(gotValue, need.type);
        if (isValid) {
          _set(argumentsObj, need.name, got[index], need.optional);
        } else {
          errors.push("Argument '" + need.name + "' needs to be of '" + need.type + "' type.");
        }

      });
    }
    if (errors.length) {
      errors.unshift("Api function '" + functionName + "' arguments list is invalid.");
      throw new Error(errors.join("\n"));
    }
    return {valid: !(errors.length), argumentsObj: argumentsObj};
  }

  function _getIdFromHash () {
    return decodeURIComponent(window.location.hash.substr(1).replace(/^\//, "").replace(/\+/g, " "));
  }

  function _logMessage () {
    if (_debug) {
      console.log.apply(this, arguments);
    }
  }

  function _logError () {
    if (_debug) {
      console.error.apply(this, arguments);
    }
  }

}());
