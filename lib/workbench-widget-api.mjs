/**
 * @semaphore/workbench-widget-api
 * 
 * @author Smartlogic Semaphore
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
         * Return Associative Types valid for current item.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getAssociativeTypes = this._dataSourcesWithTaskAndItemUri("getAssociativeTypes");
        /**
         * Return Broader Types valid for current item.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getBroaderTypes = this._dataSourcesWithTaskAndItemUri("getBroaderTypes");
        /**
         * Return Narrower Types valid for current item.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getNarrowerTypes = this._dataSourcesWithTaskAndItemUri("getNarrowerTypes");
        /**
         * Return All Alternative Labels Types.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getAltLabelUnfilteredProperties = this._dataSourcesWithTaskAndItemUri("getAltLabelUnfilteredProperties");
        /**
         * Return Alternative Labels Types valid for item.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getAltLabelProperties = this._dataSourcesWithTaskAndItemUri("getAltLabelProperties");
        /**
         * Return Metadata types.
         * @param {String} taskGraphUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getMetadataUnfilteredTypes = this._dataSourcesWithTaskAndItemUri("getMetadataUnfilteredTypes");
        /**
         * Return Metadata types valid for item.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getMetadataTypes = this._dataSourcesWithTaskAndItemUri("getMetadataTypes");
        /**
         * Return Item with metadata properties.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getDetailsWithMetadata = this._dataSourcesWithTaskAndItemUri("getDetailsWithMetadata");
        /**
         *  Return both default metadata and metadata specific for given domain.
         * @param {String} taskGraphUri
         * @param {String} domainUri
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getMetadataForDomain = this._dataSourceWithItemAndDomainUri("getMetadataForDomain");
        /**
         *  Return concept details.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptDetails = this._dataSourcesWithTaskAndItemUri("getConceptDetails");
        /**
         *  Return concept guid data.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptGuid = this._dataSourcesWithTaskAndItemUri("getConceptGuid");
        /**
         *  Return concept details with preferred labels.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptPrefLabels = this._dataSourcesWithTaskAndItemUri("getConceptPrefLabels");
        /**
         *  Return concept details with alternative labels.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptAltLabels = this._dataSourcesWithTaskAndItemUri("getConceptAltLabels");
        /**
         *  Return concept details with associative concepts grouped by relation type.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @param {Number} limit - optional, default 10.
         * @param {Number} offset - optional, default 0.
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptRelated = this._dataSourcesWithTaskAndItemUriAndPaging("getConceptRelated");
        /**
         *  Return concept details with narrower concepts grouped by relation type.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @param {Number} limit - optional, default 10.
         * @param {Number} offset - optional, default 0.
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptNarrower = this._dataSourcesWithTaskAndItemUriAndPaging("getConceptNarrower");
        /**
         *  Return concept details with broader concepts grouped by relation type.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @param {Number} limit - optional, default 10.
         * @param {Number} offset - optional, default 0.
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getConceptBroader = this._dataSourcesWithTaskAndItemUriAndPaging("getConceptBroader");
        /**
         *  Return concept scheme details with top concepts.
         * @param {String} taskGraphUri
         * @param {String} itemUri
         * @param {Number} limit - optional, default 10.
         * @param {Number} offset - optional, default 0.
         * @function
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.getTopConcepts = this._dataSourcesWithTaskAndItemUriAndPaging("getTopConcepts");
        /**
         * Actions can be used to use Workbench functionality directly.
         * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
         */
        this.actions = {
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
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getAssociativeUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getAssociativeUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return all Broader Types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getBroaderUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getBroaderUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return all Narrower Types.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getNarrowerUnfilteredTypes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getNarrowerUnfilteredTypes", taskGraphUri);
    };
    /**
     * Return Semaphore Settings.
     * @param {String} taskGraphUri
     * @function
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getSemaphoreSettings = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getSemaphoreSettings", taskGraphUri);
    };
    /**
     *  Return all concept schemes for given task.
     * @param taskGraphUri
     * @returns {Promise} Promise - for further information see {@link https://github.com/kriskowal/q/wiki/API-Reference}.
     */
    WorkbenchWidgetApi.prototype.getConceptSchemes = function (taskGraphUri) {
        return this._dataSourcesWithTaskUri("getConceptSchemes", taskGraphUri);
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
    WorkbenchWidgetApi.prototype._dataSourcesWithTaskAndItemUri = function (backendFunction) {
        var _this = this;
        return function (taskGraphUri, itemUri) {
            return _this._getBackendData(backendFunction, {
                taskGraphUri: taskGraphUri,
                itemUri: itemUri,
            });
        };
    };
    WorkbenchWidgetApi.prototype._dataSourcesWithTaskAndItemUriAndPaging = function (backendFunction) {
        var _this = this;
        return function (taskGraphUri, itemUri, limit, offset) {
            return _this._getBackendData(backendFunction, {
                taskGraphUri: taskGraphUri,
                itemUri: itemUri,
                limit: limit,
                offset: offset,
            });
        };
    };
    WorkbenchWidgetApi.prototype._dataSourceWithItemAndDomainUri = function (backendFunction) {
        var _this = this;
        return function (taskGraphUri, domainUri) {
            return _this._getBackendData(backendFunction, {
                taskGraphUri: taskGraphUri,
                domainUri: domainUri,
            });
        };
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
    WorkbenchWidgetApi.prototype._postMessage = function (message) {
        var tag = this._generateTag();
        message.data.tag = tag;
        var waitForResponse = {};
        waitForResponse.promise = new Promise(function (resolve, reject) {
            waitForResponse.resolve = resolve;
            waitForResponse.reject = reject;
        });
        this._promises.set(tag, waitForResponse);
        window.parent.postMessage(decycle(message), "*");
        this._logMessage("postMessage", message);
        return waitForResponse.promise;
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
