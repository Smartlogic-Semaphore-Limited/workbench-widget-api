/**
 * @smartlogic-semaphore/workbench-widget-api
 * 
 * @author Smartlogic Semaphore Ltd
 * @link 
 * @version 2.0.0
 * 
 * Released under MIT License. See LICENSE.txt
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

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
function decycle(object) {
    var objects = []; // Keep a reference to each unique object or array
    var paths = []; // Keep the path to each unique object or array
    return (function derez(value, path) {
        // The derez recurses through the object, producing the deep copy.
        var i, // The loop counter
        name, // Property name
        nu; // The new object or array
        // typeof null === 'object', so go on if this value is really an object but not
        // one of the weird builtin objects.
        if (typeof value === "object" &&
            value !== null &&
            !(value instanceof Boolean) &&
            !(value instanceof Date) &&
            !(value instanceof Number) &&
            !(value instanceof RegExp) &&
            !(value instanceof String)) {
            // If the value is an object or array, look to see if we have already
            // encountered it. If so, return a $ref/path object. This is a hard way,
            // linear search that will get slower as the number of unique objects grows.
            for (i = 0; i < objects.length; i += 1) {
                if (objects[i] === value) {
                    return { $ref: paths[i] };
                }
            }
            // Otherwise, accumulate the unique value and its path.
            objects.push(value);
            paths.push(path);
            // If it is an array, replicate the array.
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                nu = [];
                for (i = 0; i < value.length; i += 1) {
                    nu[i] = derez(value[i], path + "[" + i + "]");
                }
            }
            else {
                // If it is an object, replicate the object.
                nu = {};
                for (name in value) {
                    if (Object.prototype.hasOwnProperty.call(value, name)) {
                        nu[name] = derez(value[name], path + "[" + JSON.stringify(name) + "]");
                    }
                }
            }
            return nu;
        }
        return value;
    })(object, "$");
}
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
function retrocycle($) {
    var px = /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;
    (function rez(value) {
        // The rez function walks recursively through the object looking for $ref
        // properties. When it finds one that has a value that is a path, then it
        // replaces the $ref object with a reference to the value that is found by
        // the path.
        var i, item, name, path;
        if (value && typeof value === "object") {
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                for (i = 0; i < value.length; i += 1) {
                    item = value[i];
                    if (item && typeof item === "object") {
                        path = item.$ref;
                        if (typeof path === "string" && px.test(path)) {
                            value[i] = eval(path);
                        }
                        else {
                            rez(item);
                        }
                    }
                }
            }
            else {
                for (name in value) {
                    if (typeof value[name] === "object") {
                        item = value[name];
                        if (item) {
                            path = item.$ref;
                            if (typeof path === "string" && px.test(path)) {
                                value[name] = eval(path);
                            }
                            else {
                                rez(item);
                            }
                        }
                    }
                }
            }
        }
    })($);
    return $;
}

/** @internal */
var DEFAULT_WIDGET_ID = decodeURIComponent(window.location.hash.substr(1).replace(/^\//, "").replace(/\+/g, " "));
var WorkbenchWidgetApi = /** @class */ (function () {
    function WorkbenchWidgetApi(widgetId, debug) {
        var _this = this;
        if (widgetId === void 0) { widgetId = DEFAULT_WIDGET_ID; }
        if (debug === void 0) { debug = false; }
        this.widgetId = widgetId;
        this.debug = debug;
        this._promises = new Map();
        /**
         * Actions can be used to use Workbench functionality directly.
         */
        this.actions = {
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
             * default code for the system is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddPrefLabel: function (name, langCode) {
                return _this._actionCall("showFormAddPrefLabel", {
                    name: name,
                    langCode: langCode,
                });
            },
            /**
             * Shows form for add new Alternative Label.
             * @param name - default value for the name field.
             * @param langCode - default language code to be selected - if not exist
             * @param typeUri - default type uri to be selected - if not exist
             * default type for the system is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddAltLabel: function (name, langCode, typeUri) {
                return _this._actionCall("showFormAddAltLabel", {
                    name: name,
                    langCode: langCode,
                    typeUri: typeUri,
                });
            },
            /**
             * Shows form for add new Multiple Alternative Labels.
             * @param names {Array} - default value for the names field.
             * @param langCode - default language code to be selected - if not exist
             * @param typeUri - default type uri to be selected - if not exist
             * default type for the system is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddMultipleAltLabel: function (names, langCode, typeUri) {
                return _this._actionCall("showFormAddMultipleAltLabel", {
                    names: names,
                    langCode: langCode,
                    typeUri: typeUri,
                });
            },
            /**
             * Shows form for add new Related relation to the target Concept.
             * @param typeUri - default type uri to be selected - if not exist
             * default type for the system is used.
             * @param targetUri - Target concept uri to be selected - if not exist
             * empty value is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddRelated: function (typeUri, targetUri, targetName) {
                return _this._actionCall("showFormAddRelated", {
                    typeUri: typeUri,
                    targetUri: targetUri,
                    targetName: targetName,
                });
            },
            /**
             * Shows form for add new Broader relation to the target Concept.
             * @param typeUri - default type uri to be selected - if not exist
             * default type for the system is used.
             * @param targetUri - Target concept uri to be selected - if not exist
             * empty value is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddBroader: function (typeUri, targetUri, targetName) {
                return _this._actionCall("showFormAddBroader", {
                    typeUri: typeUri,
                    targetUri: targetUri,
                    targetName: targetName,
                });
            },
            /**
             * Shows form for add new Narrower relation to the target Concept.
             * @param typeUri - default type uri to be selected - if not exist
             * default type for the system is used.
             * @param targetUri - Target concept uri to be selected - if not exist
             * empty value is used.
             * @returns {Promise} - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
             */
            showFormAddNarrower: function (typeUri, targetUri, targetName) {
                return _this._actionCall("showFormAddNarrower", {
                    typeUri: typeUri,
                    targetUri: targetUri,
                    targetName: targetName,
                });
            },
        };
        this.withOnlyDefinedValues = function (obj) {
            return Object.fromEntries(Object.entries(obj).filter(function (_a) {
                var key = _a[0], value = _a[1];
                return value != null;
            }));
        };
        this._postMessage = function (message) {
            var tag = _this._generateTag();
            message.data.tag = tag;
            var waitForResponse = {};
            waitForResponse.promise = new Promise(function (resolve, reject) {
                waitForResponse.resolve = resolve;
                waitForResponse.reject = reject;
            });
            _this._promises.set(tag, waitForResponse);
            window.parent.postMessage(decycle(message), "*");
            _this._logMessage("postMessage", message);
            return waitForResponse.promise;
        };
        this._postIndex = 0;
        this._receiveMessage = function (event) {
            var _a;
            _this._logMessage("receiveMessage", event);
            //var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
            var responseTag = (_a = event.data) === null || _a === void 0 ? void 0 : _a.tag;
            if (responseTag && _this._promises.has(responseTag)) {
                var waitForResponse = _this._promises.get(responseTag);
                if (event.data.type === "response") {
                    if (event.data.results !== undefined) {
                        waitForResponse.resolve(retrocycle(event.data.results));
                    }
                    else if (event.data.reason !== undefined) {
                        waitForResponse.reject(retrocycle(event.data.reason));
                    }
                    else {
                        _this._logError("Response message need results or reason in data.");
                    }
                }
                _this._promises.delete(responseTag);
            }
        };
        window.addEventListener("message", this._receiveMessage, false);
        this._postMessage(this._createMessage(this.widgetId, "ready"));
    }
    /**
     * Fetch current host state params (modelGraphUri, taskGraphUri, itemUri).
     */
    WorkbenchWidgetApi.prototype.getStateParams = function () {
        var message = this._createMessage(this.widgetId, "getStateParams");
        return this._postMessage(message);
    };
    /**
     * Navigate host application to item.
     * @param item Item can be concept, concept scheme, relationship, class etc. existing in current task.
     */
    WorkbenchWidgetApi.prototype.navigateToItem = function (item) {
        var message = this._createMessage(this.widgetId, "navigateToItem", {
            item: item,
        });
        return this._postMessage(message);
    };
    /**
     * Close right side panel in host application.
     */
    WorkbenchWidgetApi.prototype.closeWidget = function () {
        var message = this._createMessage(this.widgetId, "closeWidget");
        return this._postMessage(message);
    };
    /**
     * Open different widget in the same model.
     */
    WorkbenchWidgetApi.prototype.openWidget = function (targetWidgetId) {
        var message = this._createMessage(targetWidgetId, "openWidget");
        return this._postMessage(message);
    };
    /**
     * Return class data for current item.
     */
    WorkbenchWidgetApi.prototype.getClasses = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getClasses", taskGraphUri);
    };
    /**
     * Return all Associative Types.
     */
    WorkbenchWidgetApi.prototype.getAssociativeUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getAssociativeUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return Associative Types valid for current item.
     * @param {String} taskGraphUri
     * @param {String} itemUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getAssociativeTypes = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getAssociativeTypes", taskGraphUri, itemUri);
    };
    /**
     * Return all Broader Types.
     */
    WorkbenchWidgetApi.prototype.getBroaderUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getBroaderUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return Broader Types valid for current item.
     */
    WorkbenchWidgetApi.prototype.getBroaderTypes = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getBroaderTypes", taskGraphUri, itemUri);
    };
    /**
     * Return all Narrower Types.
     */
    WorkbenchWidgetApi.prototype.getNarrowerUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getNarrowerUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return Narrower Types valid for current item.
     */
    WorkbenchWidgetApi.prototype.getNarrowerTypes = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getNarrowerTypes", taskGraphUri, itemUri);
    };
    /**
     * Return Semaphore Settings.
     */
    WorkbenchWidgetApi.prototype.getSemaphoreSettings = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getSemaphoreSettings", taskGraphUri);
    };
    /**
     * Return All Alternative Labels Types.
     */
    WorkbenchWidgetApi.prototype.getAltLabelUnfilteredProperties = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getAltLabelUnfilteredProperties", taskGraphUri, itemUri);
    };
    /**
     * Return Alternative Labels Types valid for item.
     */
    WorkbenchWidgetApi.prototype.getAltLabelProperties = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getAltLabelProperties", taskGraphUri, itemUri);
    };
    /**
     * Return Metadata types.
     */
    WorkbenchWidgetApi.prototype.getMetadataUnfilteredTypes = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getMetadataUnfilteredTypes", taskGraphUri, itemUri);
    };
    /**
     * Return Metadata types valid for item.
     */
    WorkbenchWidgetApi.prototype.getMetadataTypes = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getMetadataTypes", taskGraphUri, itemUri);
    };
    /**
     * Return Item with metadata properties.
     */
    WorkbenchWidgetApi.prototype.getDetailsWithMetadata = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getDetailsWithMetadata", taskGraphUri, itemUri);
    };
    /**
     *  Return both default metadata and metadata specific for given domain.
     */
    WorkbenchWidgetApi.prototype.getMetadataForDomain = function (taskGraphUri, domainUri) {
        return this._dataSourceWithItemAndDomainUri("getMetadataForDomain", taskGraphUri, domainUri);
    };
    /**
     *  Return all concept schemes for given task.
     */
    WorkbenchWidgetApi.prototype.getConceptSchemes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getConceptSchemes", taskGraphUri);
    };
    /**
     *  Return concept details.
     */
    WorkbenchWidgetApi.prototype.getConceptDetails = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getConceptDetails", taskGraphUri, itemUri);
    };
    /**
     *  Return concept guid data.
     */
    WorkbenchWidgetApi.prototype.getConceptGuid = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getConceptGuid", taskGraphUri, itemUri);
    };
    /**
     *  Return concept details with preferred labels.
     */
    WorkbenchWidgetApi.prototype.getConceptPrefLabels = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getConceptPrefLabels", taskGraphUri, itemUri);
    };
    /**
     *  Return concept details with alternative labels.
     */
    WorkbenchWidgetApi.prototype.getConceptAltLabels = function (taskGraphUri, itemUri) {
        return this._dataSourcesWithTaskAndItemUri("getConceptAltLabels", taskGraphUri, itemUri);
    };
    /**
     *  Return concept details with associative concepts grouped by relation type.
     */
    WorkbenchWidgetApi.prototype.getConceptRelated = function (taskGraphUri, itemUri, limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this._dataSourcesWithTaskAndItemUriAndPaging("getConceptRelated", taskGraphUri, itemUri, limit, offset);
    };
    /**
     *  Return concept details with narrower concepts grouped by relation type.
     */
    WorkbenchWidgetApi.prototype.getConceptNarrower = function (taskGraphUri, itemUri, limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this._dataSourcesWithTaskAndItemUriAndPaging("getConceptNarrower", taskGraphUri, itemUri, limit, offset);
    };
    /**
     *  Return concept details with broader concepts grouped by relation type.
     */
    WorkbenchWidgetApi.prototype.getConceptBroader = function (taskGraphUri, itemUri, limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this._dataSourcesWithTaskAndItemUriAndPaging("getConceptBroader", taskGraphUri, itemUri, limit, offset);
    };
    /**
     *  Return concept scheme details with top concepts.
     */
    WorkbenchWidgetApi.prototype.getTopConcepts = function (taskGraphUri, itemUri, limit, offset) {
        if (limit === void 0) { limit = 10; }
        if (offset === void 0) { offset = 0; }
        return this._dataSourcesWithTaskAndItemUriAndPaging("getTopConcepts", taskGraphUri, itemUri, limit, offset);
    };
    WorkbenchWidgetApi.prototype._actionCall = function (action, data) {
        var message = this._createMessage(this.widgetId, "callAction", {
            action: action,
            data: data,
        });
        return this._postMessage(message);
    };
    WorkbenchWidgetApi.prototype._getBackendData = function (backendFunction, backendArguments) {
        var message = this._createMessage(this.widgetId, "getBackendData", {
            backendFunction: backendFunction,
            backendArguments: backendArguments,
        });
        return this._postMessage(message);
    };
    WorkbenchWidgetApi.prototype._dataSourcesWithTaskAndItemUri = function (backendFunction, taskGraphUri, itemUri) {
        return this._getBackendData(backendFunction, {
            taskGraphUri: taskGraphUri,
            itemUri: itemUri,
        });
    };
    WorkbenchWidgetApi.prototype._dataSourcesWithTaskAndItemUriAndPaging = function (backendFunction, taskGraphUri, itemUri, limit, offset) {
        return this._getBackendData(backendFunction, {
            taskGraphUri: taskGraphUri,
            itemUri: itemUri,
            limit: limit,
            offset: offset,
        });
    };
    WorkbenchWidgetApi.prototype._dataSourceWithItemAndDomainUri = function (backendFunction, taskGraphUri, domainUri) {
        return this._getBackendData(backendFunction, {
            taskGraphUri: taskGraphUri,
            domainUri: domainUri,
        });
    };
    WorkbenchWidgetApi.prototype._dataSourcesWithTaskUri = function (backendFunction, taskGraphUri) {
        return this._getBackendData(backendFunction, { taskGraphUri: taskGraphUri });
    };
    WorkbenchWidgetApi.prototype._createMessage = function (widgetId, key, additionalData) {
        if (additionalData === void 0) { additionalData = {}; }
        return {
            type: "action",
            key: key,
            data: __assign({ widgetId: widgetId }, this.withOnlyDefinedValues(additionalData)),
        };
    };
    WorkbenchWidgetApi.prototype._generateTag = function () {
        this._postIndex++;
        return this.widgetId + "_" + this._postIndex;
    };
    WorkbenchWidgetApi.prototype._logMessage = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.debug) {
            console.log.apply(console, args);
        }
    };
    WorkbenchWidgetApi.prototype._logError = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.debug) {
            console.error.apply(console, args);
        }
    };
    return WorkbenchWidgetApi;
}());

export { WorkbenchWidgetApi, decycle, retrocycle };
