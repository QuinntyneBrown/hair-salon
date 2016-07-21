/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(1);
	__webpack_require__(81);
	__webpack_require__(192);
	__webpack_require__(215);
	__webpack_require__(238);
	__webpack_require__(261);
	__webpack_require__(284);
	__webpack_require__(318);
	__webpack_require__(349);
	__webpack_require__(372);
	__webpack_require__(395);
	__webpack_require__(410);
	var reducers = __webpack_require__(433);
	var contacts_1 = __webpack_require__(1);
	var content_aggregation_1 = __webpack_require__(81);
	var customers_1 = __webpack_require__(192);
	var galleries_1 = __webpack_require__(215);
	var menu_items_1 = __webpack_require__(238);
	var menus_1 = __webpack_require__(261);
	var pages_1 = __webpack_require__(284);
	var photos_1 = __webpack_require__(318);
	var professional_services_1 = __webpack_require__(349);
	var service_providers_1 = __webpack_require__(372);
	var social_share_items_1 = __webpack_require__(410);
	var core_1 = __webpack_require__(2);
	var authorization_guard_1 = __webpack_require__(435);
	var app_guard_1 = __webpack_require__(436);
	var route_change_success_is_admin_reducer_1 = __webpack_require__(437);
	var app_component_1 = __webpack_require__(438);
	var admin_app_component_1 = __webpack_require__(442);
	var appModule = angular.module("app", [
	    "components",
	    "ui.tinymce",
	    "app.contacts",
	    "app.contentAggregation",
	    "app.customers",
	    "app.galleries",
	    "app.menuItems",
	    "app.menus",
	    "app.pages",
	    "app.photos",
	    "app.professionalServices",
	    "app.shared",
	    "app.serviceProviders",
	    "app.socialShareItems"
	]);
	core_1.bootstrap(appModule, {
	    api: "api",
	    components: [app_component_1.AppComponent, admin_app_component_1.AdminAppComponent],
	    loginRedirectUrl: "/",
	    html5Mode: true,
	    guards: [authorization_guard_1.authorizationGuard, app_guard_1.appGuard],
	    run: [route_change_success_is_admin_reducer_1.routeChangeSuccessIsAdminReducer],
	    reducers: reducers,
	    routes: contacts_1.ContactsRoutes.concat(content_aggregation_1.ContentAggregationRoutes, customers_1.CustomersRoutes, galleries_1.GalleriesRoutes, menu_items_1.MenuItemsRoutes, menus_1.MenusRoutes, pages_1.PagesRoutes, photos_1.PhotosRoutes, professional_services_1.ProfessionalServicesRoutes, service_providers_1.ServiceProvidersRoutes, social_share_items_1.SocialShareItemsRoutes)
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var contact_editor_component_1 = __webpack_require__(55);
	var contact_list_component_1 = __webpack_require__(61);
	var contact_component_1 = __webpack_require__(65);
	var contacts_container_component_1 = __webpack_require__(69);
	var contact_action_creator_1 = __webpack_require__(71);
	var contact_service_1 = __webpack_require__(78);
	var reducers = __webpack_require__(79);
	var actions = __webpack_require__(70);
	var appContactsModule = angular.module("app.contacts", []);
	core_1.bootstrap(appContactsModule, {
	    components: [contact_component_1.ContactComponent, contact_editor_component_1.ContactEditorComponent, contacts_container_component_1.ContactsContainerComponent, contact_list_component_1.ContactListComponent],
	    providers: [contact_action_creator_1.ContactActionCreator, contact_service_1.ContactService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(80));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(3));
	__export(__webpack_require__(4));
	__export(__webpack_require__(5));
	__export(__webpack_require__(6));
	__export(__webpack_require__(7));
	__export(__webpack_require__(9));
	__export(__webpack_require__(10));
	__export(__webpack_require__(11));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));
	__export(__webpack_require__(14));
	__export(__webpack_require__(15));
	__export(__webpack_require__(17));
	__export(__webpack_require__(18));
	__export(__webpack_require__(19));
	__export(__webpack_require__(20));
	__export(__webpack_require__(21));
	__export(__webpack_require__(22));
	__export(__webpack_require__(23));
	__export(__webpack_require__(24));
	__export(__webpack_require__(25));
	__export(__webpack_require__(26));
	__export(__webpack_require__(27));
	__export(__webpack_require__(28));
	__export(__webpack_require__(29));
	__export(__webpack_require__(30));
	__export(__webpack_require__(31));
	__export(__webpack_require__(32));
	__export(__webpack_require__(33));
	__export(__webpack_require__(34));
	exports.Observable = Rx.Observable;
	__webpack_require__(35);
	__webpack_require__(8);
	__webpack_require__(22);
	__webpack_require__(7);
	__webpack_require__(17);
	__webpack_require__(36);
	__webpack_require__(37);
	__webpack_require__(13);
	__webpack_require__(38);
	__webpack_require__(39);
	__webpack_require__(40);
	__webpack_require__(30);
	__webpack_require__(21);
	__webpack_require__(26);
	__webpack_require__(41);
	__webpack_require__(42);
	__webpack_require__(43);
	__webpack_require__(44);
	__webpack_require__(45);
	__webpack_require__(46);
	__webpack_require__(47);
	__webpack_require__(31);
	__webpack_require__(48);
	__webpack_require__(49);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(50);
	__webpack_require__(51);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	var coreApp = angular.module("app.core", [
	    "ngSanitize",
	    "apiEndpoint",
	    "authInterceptor",
	    "localStorageManager",
	    "store",
	    "addOrUpdate",
	    "appendToBodyAsync",
	    "convertUnixTimestampToDate",
	    "debounce",
	    "extendCssAsync",
	    "getFromUrlSync",
	    "getHtml",
	    "getX",
	    "invokeAsync",
	    "fetch",
	    "formEncode",
	    "loginRedirect",
	    "position",
	    "removeElement",
	    "routeResolver",
	    "routeWhenExtension",
	    "rectangle",
	    "renderer",
	    "ruler",
	    "safeDigest",
	    "setElementBackgroundImage",
	    "setElementDimension",
	    "setElementDimensions",
	    "setOpacityAsync",
	    "space",
	    "rectangle",
	    "translateX",
	    "translateXY",
	    "translateXAsync",
	    "template"
	]);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	exports.bootstrap = function (app, options) {
	    if (options.api)
	        app.config(["apiEndpointProvider", function (apiEndpointProvider) {
	                apiEndpointProvider.configure(options.api);
	            }]);
	    if (options.loginRedirectUrl)
	        app.config(["loginRedirectProvider", function (loginRedirectProvider) {
	                loginRedirectProvider.setDefaultUrl(options.loginRedirectUrl);
	            }]);
	    if (options.html5Mode)
	        app.config(["$locationProvider", function ($locationProvider) {
	                $locationProvider.html5Mode(options.html5Mode);
	            }]);
	    if (options.reducers && !angular.isArray(options.reducers)) {
	        app.config(["reducersProvider", function (reducersProvider) {
	                for (var reducer in options.reducers) {
	                    reducersProvider.configure(options.reducers[reducer]);
	                }
	            }]);
	    }
	    if (options.reducers && angular.isArray(options.reducers)) {
	        options.reducers.forEach(function (x) {
	            app.config(["reducersProvider", function (reducersProvider) {
	                    for (var reducer in x) {
	                        reducersProvider.configure(x[reducer]);
	                    }
	                }]);
	        });
	    }
	    if (options.actions)
	        for (var action in options.actions) {
	            core_1.provideAction(app, options.actions[action]);
	        }
	    if (options.components) {
	        for (var i = 0; i < options.components.length; i++) {
	            app.component(options.components[i]);
	        }
	    }
	    if (options.guards)
	        for (var i = 0; i < options.guards.length; i++) {
	            core_1.provideRoutePromise(app, options.guards[i]);
	        }
	    if (options.run)
	        for (var i = 0; i < options.run.length; i++) {
	            app.run(options.run[i]);
	        }
	    if (options.providers) {
	        for (var i = 0; i < options.providers.length; i++) {
	            core_1.provide(app, options.providers[i]);
	        }
	    }
	    if (options.routes) {
	        app.config(["$routeProvider", function ($routeProvider) {
	                for (var i_1 = 0; i_1 < options.routes.length; i_1++) {
	                    var path = options.routes[i_1].path;
	                    var selector = options.routes[i_1].component.prototype.constructor.config.selector;
	                    var template = "<" + selector + "></" + selector + ">";
	                    var authorizationRequired = options.routes[i_1].authorizationRequired;
	                    $routeProvider.when(path, { template: template, authorizationRequired: authorizationRequired });
	                }
	            }]);
	    }
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Base Service for CRUD: Expects a resultful endpoint available
	 */
	var BaseService = (function () {
	    function BaseService($q, apiEndpoint, fetch) {
	        this.$q = $q;
	        this.apiEndpoint = apiEndpoint;
	        this.fetch = fetch;
	    }
	    BaseService.prototype.get = function () {
	        var deferred = this.$q.defer();
	        this.fetch.fromCacheOrService({ method: "GET", url: this.baseUri + "/get" })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.getById = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "GET", url: this.baseUri + "/getById", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.add = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "POST", url: this.baseUri + "/add", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.update = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "PUT", url: this.baseUri + "/update", data: options.data })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    BaseService.prototype.remove = function (options) {
	        var deferred = this.$q.defer();
	        this.fetch.fromService({ method: "DELETE", url: this.baseUri + "/remove", params: { id: options.id } })
	            .then(function (results) { return deferred.resolve(results.data); });
	        return deferred.promise;
	    };
	    ;
	    Object.defineProperty(BaseService.prototype, "baseUri", {
	        get: function () { throw new Error("Not Implemented"); },
	        enumerable: true,
	        configurable: true
	    });
	    return BaseService;
	}());
	exports.BaseService = BaseService;


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	function Injectable(noop) {
	    if (noop === void 0) { noop = null; }
	    return function (cls) {
	    };
	}
	exports.Injectable = Injectable;


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	function Inject() {
	    return function (target, name, descriptor) {
	    };
	}
	exports.Inject = Inject;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(8));
	var InitialStateProvider = (function () {
	    function InitialStateProvider() {
	        var _this = this;
	        this.configure = function (value) { return _this.initialState = value; };
	        this.$get = function () { return _this.initialState; };
	    }
	    return InitialStateProvider;
	}());
	exports.InitialStateProvider = InitialStateProvider;
	var ReducersProvider = (function () {
	    function ReducersProvider() {
	        var _this = this;
	        this.reducers = [];
	        this.configure = function (value) { return _this.reducers.push(value); };
	        this.$get = function () { return _this.reducers; };
	    }
	    return ReducersProvider;
	}());
	exports.ReducersProvider = ReducersProvider;
	exports.functionName = function (fun) {
	    var ret = fun.toString();
	    ret = ret.substr('function '.length);
	    ret = ret.substr(0, ret.indexOf('('));
	    return ret;
	};
	var Store = (function (_super) {
	    __extends(Store, _super);
	    function Store(dispatcher, initialState, localStorageManager, reducers) {
	        var _this = this;
	        _super.call(this, initialState || {});
	        this.dispatcher = dispatcher;
	        this.localStorageManager = localStorageManager;
	        this.reducers = reducers;
	        this.onDispatcherNext = function (action) {
	            _this.state = _this.state || {};
	            _this.state = _this.setLastTriggeredByActionId(_this.state, action);
	            for (var i = 0; i < _this.reducers.length; i++) {
	                _this.state = _this.reducers[i](_this.state, action);
	            }
	            _this.localStorageManager.put({ name: "initialState", value: _this.state });
	            _this.onNext(_this.state);
	        };
	        this.setLastTriggeredByActionId = function (state, action) {
	            state.lastTriggeredByActionId = action.id;
	            state.lastTriggeredByAction = action;
	            state.lastTriggeredByActionType = action.constructor.type;
	            return state;
	        };
	        this.functionToString = function (fn) {
	            return fn.toString();
	        };
	        this.dispatch = this.dispatcher.dispatch;
	        this.state = initialState || {};
	        dispatcher.subscribe(function (action) { return _this.onDispatcherNext(action); });
	    }
	    return Store;
	}(Rx.BehaviorSubject));
	exports.Store = Store;
	function guid() {
	    function s4() {
	        return Math.floor((1 + Math.random()) * 0x10000)
	            .toString(16)
	            .substring(1);
	    }
	    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
	        s4() + '-' + s4() + s4() + s4();
	}
	exports.guid = guid;
	var Dispatcher = (function (_super) {
	    __extends(Dispatcher, _super);
	    function Dispatcher() {
	        var _this = this;
	        _super.call(this);
	        this.dispatch = function (action) { return _this.onNext(action); };
	    }
	    return Dispatcher;
	}(Rx.Subject));
	exports.Dispatcher = Dispatcher;
	angular.module("store", [])
	    .service("store", ["dispatcher", "initialState", "localStorageManager", "reducers", Store])
	    .service("dispatcher", [Dispatcher])
	    .provider("reducers", ReducersProvider)
	    .provider("initialState", InitialStateProvider)
	    .value("guid", guid)
	    .run(["store", function (store) { }]);


/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";
	var LocalStorageManagerProvider = (function () {
	    function LocalStorageManagerProvider() {
	        var _this = this;
	        this.id = "2fcfe918-dc2c-42db-9e88-ee62417651de";
	        this._items = null;
	        this.get = function (options) {
	            var storageItem = null;
	            for (var i = 0; i < _this.items.length; i++) {
	                if (options.name === _this.items[i].name)
	                    storageItem = _this.items[i].value;
	            }
	            return storageItem;
	        };
	        this.put = function (options) {
	            var itemExists = false;
	            _this.items.forEach(function (item) {
	                if (options.name === item.name) {
	                    itemExists = true;
	                    item.value = options.value;
	                }
	            });
	            if (!itemExists) {
	                var items = _this.items;
	                items.push({ name: options.name, value: options.value });
	                _this.items = items;
	                items = null;
	            }
	        };
	        this.clear = function () {
	            _this._items = [];
	        };
	        this.$get = function () { return _this; };
	        try {
	            window.onbeforeunload = function () { return localStorage.setItem(_this.id, JSON.stringify(_this.items)); };
	        }
	        catch (e) {
	        }
	    }
	    Object.defineProperty(LocalStorageManagerProvider.prototype, "items", {
	        get: function () {
	            if (this._items === null) {
	                var storageItems = localStorage.getItem(this.id);
	                if (storageItems === "null") {
	                    storageItems = null;
	                }
	                this._items = JSON.parse(storageItems || "[]");
	            }
	            return this._items;
	        },
	        set: function (value) {
	            this._items = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return LocalStorageManagerProvider;
	}());
	exports.LocalStorageManagerProvider = LocalStorageManagerProvider;
	angular.module("localStorageManager", []).provider("localStorageManager", LocalStorageManagerProvider);


/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	function Action(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.type = config.type;
	    };
	}
	exports.Action = Action;


/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	exports.pluckOut = function (options) {
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            options.items.splice(i, 1);
	        }
	    }
	    return options.items;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Describes within the change detector which strategy will be used the next time change
	 * detection is triggered.
	 */
	(function (ChangeDetectionStrategy) {
	    /**
	     * `CheckedOnce` means that after calling detectChanges the mode of the change detector
	     * will become `Checked`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckOnce"] = 0] = "CheckOnce";
	    /**
	     * `Checked` means that the change detector should be skipped until its mode changes to
	     * `CheckOnce`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Checked"] = 1] = "Checked";
	    /**
	     * `CheckAlways` means that after calling detectChanges the mode of the change detector
	     * will remain `CheckAlways`.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["CheckAlways"] = 2] = "CheckAlways";
	    /**
	     * `Detached` means that the change detector sub tree is not a part of the main tree and
	     * should be skipped.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Detached"] = 3] = "Detached";
	    /**
	     * `OnPush` means that the change detector's mode will be set to `CheckOnce` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["OnPush"] = 4] = "OnPush";
	    /**
	     * `Default` means that the change detector's mode will be set to `CheckAlways` during hydration.
	     */
	    ChangeDetectionStrategy[ChangeDetectionStrategy["Default"] = 5] = "Default";
	})(exports.ChangeDetectionStrategy || (exports.ChangeDetectionStrategy = {}));
	var ChangeDetectionStrategy = exports.ChangeDetectionStrategy;


/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	exports.Component = function (config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        config.component = cls;
	        cls.config = config;
	    };
	};
	exports.CanActivate = function (fnDefinition) {
	    return function (cls) { cls.prototype.canActivate = function () { return fnDefinition; }; };
	};


/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";
	exports.convertUnixTimestampToDate = function (timestamp) { return new Date(timestamp * 1000); };
	angular.module("convertUnixTimestampToDate", []).value("convertUnixTimestampToDate", exports.convertUnixTimestampToDate);


/***/ },
/* 14 */
/***/ function(module, exports) {

	"use strict";
	function Service(config) {
	    if (config === void 0) { config = {}; }
	    return function (cls) {
	        cls.serviceName = config.serviceName;
	        cls.$inject = config.viewProviders;
	    };
	}
	exports.Service = Service;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var ends_with_1 = __webpack_require__(16);
	var cachedData = {};
	/**
	 * Caches the returned Observable.
	 * The cache key used is either a property with the name ${propertyKey} from the first arg to the function.
	 * If propertyKey isn't specified or not there, then if the first arg is string, it's used as the key
	 * else we stringify the whole object.
	 *
	 * If there are no args passed to the function, then the function name is the key.
	 */
	function Cache(propertyKey) {
	    return function (target, functionName, descriptor) {
	        var originalMethod = descriptor.value;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            var key = getCacheKey(functionName, propertyKey, args);
	            var cache = cachedData[key];
	            if (cache && cache.data) {
	                return Rx.Observable.of(cache.data);
	            }
	            else if (cache && cache.observable) {
	                return cache.observable;
	            }
	            else {
	                cache = {
	                    observable: originalMethod.apply(this, args)
	                        .map(function (r) {
	                        delete cache.observable;
	                        cache.data = r;
	                        return cache.data;
	                    }).share()
	                };
	                cachedData[key] = cache;
	                return cache.observable;
	            }
	        };
	        return descriptor;
	    };
	}
	exports.Cache = Cache;
	/**
	 * This function clears the cache by @Cache based on the same key and functionName logic.
	 * This function requires the name of the function that would have generated the cache that needs to be cleared.
	 * Also if the function called is 'clearAllCachedData()' then all data is cleared.
	 */
	function ClearCache(functionName, propertyKey) {
	    return function (target, propertyName, descriptor) {
	        var originalMethod = descriptor.value;
	        descriptor.value = function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i - 0] = arguments[_i];
	            }
	            if (functionName === 'clearAllCachedData') {
	                cachedData = {};
	            }
	            else {
	                var key = getCacheKey(functionName, propertyKey, args);
	                delete cachedData[key];
	            }
	            return originalMethod.apply(this, args);
	        };
	        return descriptor;
	    };
	}
	exports.ClearCache = ClearCache;
	function ClearAllFunctionCache(functionInfo) {
	    for (var e in cachedData) {
	        var normalizedKey = e.toLocaleLowerCase();
	        var normalizedFunctionName = functionInfo.name.toLocaleLowerCase();
	        if (normalizedKey.indexOf("/" + normalizedFunctionName + "/") !== -1 ||
	            ends_with_1.endsWith(normalizedKey, normalizedFunctionName) ||
	            normalizedKey.indexOf("/" + normalizedFunctionName + ".") !== -1) {
	            delete cachedData[e];
	        }
	    }
	}
	exports.ClearAllFunctionCache = ClearAllFunctionCache;
	function getCacheKey(functionName, propertyName, args) {
	    var key = functionName + "+";
	    if (propertyName && args && args.length > 0 && args[0][propertyName]) {
	        key += args[0][propertyName];
	    }
	    else if (args && args.length > 0 && typeof args[0] === 'string') {
	        key += args[0];
	    }
	    else if (args && args.length > 1) {
	        key += JSON.stringify(args);
	    }
	    return key;
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	exports.endsWith = function (value1, value2) {
	    return value1.toLowerCase().indexOf(value2.toLowerCase()) === value1.length - value2.length;
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	exports.addOrUpdate = function (options) {
	    var exists = false;
	    options.items = options.items || [];
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.items[i].id === options.item.id) {
	            options.items[i] = options.item;
	            exists = true;
	        }
	    }
	    if (!exists) {
	        options.items.push(options.item);
	    }
	};
	angular.module("addOrUpdate", []).value("addOrUpdate", exports.addOrUpdate);


/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	var BaseActionCreator = (function () {
	    function BaseActionCreator($location, service, dispatcher, guid, addOrUpdateAction, allAction, removeAction, setCurrentAction) {
	        var _this = this;
	        this.$location = $location;
	        this.service = service;
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	        this.addOrUpdateAction = addOrUpdateAction;
	        this.allAction = allAction;
	        this.removeAction = removeAction;
	        this.setCurrentAction = setCurrentAction;
	        this.getById = function (options) {
	            var newId = _this.guid();
	            _this.service.getById({ id: options.id }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.all = function () {
	            var newId = _this.guid();
	            _this.service.get().then(function (results) {
	                var action = new _this.allAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.addOrUpdate = function (options) {
	            var newId = _this.guid();
	            _this.service.add({ data: options.data }).then(function (results) {
	                var action = new _this.addOrUpdateAction(newId, results);
	                _this.dispatcher.dispatch(action);
	            });
	            return newId;
	        };
	        this.remove = function (options) {
	            var newId = _this.guid();
	            _this.service.remove({
	                id: options.entity.id
	            }).then(function (results) {
	                _this.dispatcher.dispatch(new _this.removeAction(newId, options.entity));
	            });
	            return newId;
	        };
	        this.edit = function (options) { return _this.dispatcher.dispatch(new _this.setCurrentAction(options.entity)); };
	        this.create = function () { return _this.dispatcher.dispatch(new _this.setCurrentAction(null)); };
	    }
	    return BaseActionCreator;
	}());
	exports.BaseActionCreator = BaseActionCreator;


/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	exports.pluck = function (options) {
	    var item = {};
	    for (var i = 0; i < options.items.length; i++) {
	        if (options.value == options.items[i][options.key || "id"]) {
	            item = angular.copy(options.items[i]);
	        }
	    }
	    return item;
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	/**
	 * Defines template and style encapsulation options available for Component's {@link View}.
	 *
	 * See {@link ViewMetadata#encapsulation}.
	 */
	(function (ViewEncapsulation) {
	    /**
	     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
	     * Element and pre-processing the style rules provided via
	     * {@link ViewMetadata#styles} or {@link ViewMetadata#stylesUrls}, and adding the new Host Element
	     * attribute to all selectors.
	     *
	     * This is the default option.
	     */
	    ViewEncapsulation[ViewEncapsulation["Emulated"] = 0] = "Emulated";
	    /**
	     * Use the native encapsulation mechanism of the renderer.
	     *
	     * For the DOM this means using [Shadow DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
	     * creating a ShadowRoot for Component's Host Element.
	     */
	    ViewEncapsulation[ViewEncapsulation["Native"] = 1] = "Native";
	    /**
	     * Don't provide any template or style encapsulation.
	     */
	    ViewEncapsulation[ViewEncapsulation["None"] = 2] = "None";
	})(exports.ViewEncapsulation || (exports.ViewEncapsulation = {}));
	var ViewEncapsulation = exports.ViewEncapsulation;


/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	var Fetch = (function () {
	    function Fetch($http, $q, localStorageManager) {
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.localStorageManager = localStorageManager;
	        this.fromService = function (options) {
	            var deferred = _this.$q.defer();
	            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
	                deferred.resolve(results);
	            }).catch(function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };
	        this.fromCacheOrService = function (options) {
	            var deferred = _this.$q.defer();
	            var cachedData = _this.localStorageManager.get({ name: options.url });
	            if (!cachedData) {
	                _this.fromService(options).then(function (results) {
	                    deferred.resolve(results);
	                }).catch(function (error) {
	                    deferred.reject(error);
	                });
	            }
	            else {
	                deferred.resolve(cachedData.value);
	            }
	            return deferred.promise;
	        };
	        this.fromService$ = function (options) {
	            var deferred = _this.$q.defer();
	            _this.$http({ method: options.method, url: options.url, data: options.data, params: options.params, headers: options.headers }).then(function (results) {
	                deferred.resolve(results);
	            }).catch(function (error) {
	                deferred.reject(error);
	            });
	            return deferred.promise;
	        };
	    }
	    return Fetch;
	}());
	exports.Fetch = Fetch;
	angular.module("fetch", ["localStorageManager"]).service("fetch", ["$http", "$q", "localStorageManager", Fetch]);


/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	var LoginRedirectProvider = (function () {
	    function LoginRedirectProvider() {
	        var _this = this;
	        this.loginUrl = "/login";
	        this.defaultPath = "/";
	        this.setLoginUrl = function (value) { return _this.loginUrl = value; };
	        this.setDefaultUrl = function (value) { return _this.defaultPath = value; };
	        this.$get = ["$q", "$location", function ($q, $location) {
	                var _this = this;
	                return {
	                    responseError: function (response) {
	                        if (response.status == 401) {
	                            _this.lastPath = $location.path();
	                            $location.path(_this.loginUrl);
	                        }
	                        return $q.reject(response);
	                    },
	                    redirectToLogin: function () {
	                        _this.lastPath = $location.path();
	                        $location.path(_this.loginUrl);
	                    },
	                    redirectPreLogin: function () {
	                        if (_this.lastPath && _this.lastPath != _this.loginUrl) {
	                            $location.path(_this.lastPath);
	                            _this.lastPath = "";
	                        }
	                        else {
	                            $location.path(_this.defaultPath);
	                        }
	                    }
	                };
	            }];
	    }
	    return LoginRedirectProvider;
	}());
	exports.LoginRedirectProvider = LoginRedirectProvider;
	angular.module("loginRedirect", []).provider("loginRedirect", [LoginRedirectProvider])
	    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("loginRedirect"); }]);


/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	exports.provide = function (app, service) {
	    if (service.$inject) {
	        app.service(service.serviceName, service.$inject.concat([service]));
	    }
	    else {
	        app.service(service.serviceName, [service]);
	    }
	};


/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	exports.provideAction = function (app, value) {
	    app.value(value.type, value);
	};


/***/ },
/* 25 */
/***/ function(module, exports) {

	"use strict";
	exports.provideRoutePromise = function (app, routePromise) {
	    app.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	            routeResolverServiceProvider.configure({
	                route: routePromise.route,
	                routes: routePromise.routes,
	                key: routePromise.key,
	                promise: routePromise.promise
	            });
	        }]);
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	exports.getX = function (element) {
	    var transform = angular.element(element).css("transform");
	    if (transform === "none")
	        return 0;
	    var result = JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"));
	    return JSON.parse(transform.replace(/^\w+\(/, "[").replace(/\)$/, "]"))[4];
	};
	angular.module("getX", []).value("getX", exports.getX);


/***/ },
/* 27 */
/***/ function(module, exports) {

	"use strict";
	exports.isBetween = function (value, lowerLimit, upperLimit) {
	    if (upperLimit === void 0) { upperLimit = null; }
	    return false;
	};


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	exports.translateX = function (element, value) {
	    angular.element(element).css({
	        "-moz-transform": "translateX(" + value + "px)",
	        "-webkit-transform": "translateX(" + value + "px)",
	        "-ms-transform": "translateX(" + value + "px)",
	        "-transform": "translateX(" + value + "px)"
	    });
	    return element;
	};
	angular.module("translateX", []).value("translateX", exports.translateX);


/***/ },
/* 29 */
/***/ function(module, exports) {

	"use strict";
	exports.translateXY = function (element, x, y) {
	    angular.element(element).css({
	        "-moz-transform": "translate(" + x + "px, " + y + "px)",
	        "-webkit-transform": "translate(" + x + "px, " + y + "px)",
	        "-ms-transform": "translate(" + x + "px, " + y + "px)",
	        "-transform": "translate(" + x + "px, " + y + "px)"
	    });
	    return element;
	};
	angular.module("translateXY", []).value("translateXY", exports.translateXY);


/***/ },
/* 30 */
/***/ function(module, exports) {

	"use strict";
	exports.getHtml = function (who, deep) {
	    if (!who || !who.tagName)
	        return '';
	    var txt, ax, el = document.createElement("div");
	    el.appendChild(who.cloneNode(false));
	    txt = el.innerHTML;
	    if (deep) {
	        ax = txt.indexOf('>') + 1;
	        txt = txt.substring(0, ax) + who.innerHTML + txt.substring(ax);
	    }
	    el = null;
	    return txt;
	};
	angular.module("getHtml", []).value("getHtml", exports.getHtml);


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var provide_1 = __webpack_require__(23);
	var service_decorator_1 = __webpack_require__(14);
	(function (scopeType) {
	    scopeType[scopeType["isolated"] = 0] = "isolated";
	    scopeType[scopeType["global"] = 1] = "global";
	})(exports.scopeType || (exports.scopeType = {}));
	var scopeType = exports.scopeType;
	(function (renderOutputType) {
	    renderOutputType[renderOutputType["Html"] = 0] = "Html";
	    renderOutputType[renderOutputType["AugmentedJquery"] = 1] = "AugmentedJquery";
	    renderOutputType[renderOutputType["NativeElement"] = 2] = "NativeElement";
	})(exports.renderOutputType || (exports.renderOutputType = {}));
	var renderOutputType = exports.renderOutputType;
	var Renderer = (function () {
	    function Renderer($compile, $rootScope, getHtml) {
	        var _this = this;
	        this.$compile = $compile;
	        this.$rootScope = $rootScope;
	        this.getHtml = getHtml;
	        this.options = {
	            html: "",
	            outputType: renderOutputType.AugmentedJquery,
	            parentScope: this.$rootScope,
	            isScopeIsolated: true,
	            style: {}
	        };
	        this.render = function (options) {
	            angular.extend(_this.options, options);
	            var augmentedJquery = _this.$compile(options.html)(_this.options.parentScope.$new(_this.options.isScopeIsolated));
	            angular.extend(augmentedJquery[0].style, _this.options.style);
	            if (_this.options.outputType === renderOutputType.NativeElement)
	                return augmentedJquery[0];
	            if (_this.options.outputType === renderOutputType.Html)
	                return _this.getHtml(augmentedJquery[0], false);
	            return augmentedJquery;
	        };
	    }
	    Renderer = __decorate([
	        service_decorator_1.Service({
	            serviceName: "renderer",
	            viewProviders: ["$compile", "$rootScope", "getHtml"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], Renderer);
	    return Renderer;
	}());
	exports.Renderer = Renderer;
	var app = angular.module("renderer", ["getHtml"]);
	provide_1.provide(app, Renderer);


/***/ },
/* 32 */
/***/ function(module, exports) {

	"use strict";
	exports.setElementBackgroundImage = function (augmentedJQuery, backgroundImageUrl) {
	    if (backgroundImageUrl) {
	        augmentedJQuery[0].style.backgroundImage = "url('" + backgroundImageUrl + "')";
	        augmentedJQuery[0].style.backgroundSize = "cover";
	        augmentedJQuery[0].style.backgroundRepeat = "no-repeat";
	        augmentedJQuery[0].style.backgroundPosition = "center top";
	    }
	};
	angular.module("setElementBackgroundImage", [])
	    .value("setElementBackgroundImage", exports.setElementBackgroundImage);


/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	exports.setElementDimension = function (dimension, augmentedJQuery, value) {
	    if (value && (value.indexOf("%") > -1 || value.indexOf("px") > -1)) {
	        augmentedJQuery[0].style[dimension] = "" + value;
	    }
	    else {
	        augmentedJQuery[0].style[dimension] = value + "px";
	    }
	};
	angular.module("setElementDimension", [])
	    .value("setElementDimension", exports.setElementDimension);


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var set_element_dimension_1 = __webpack_require__(33);
	exports.setElementDimensions = function (augmentedJQuery, height, width) {
	    set_element_dimension_1.setElementDimension("height", augmentedJQuery, height);
	    set_element_dimension_1.setElementDimension("width", augmentedJQuery, width);
	};
	angular.module("setElementDimensions", [])
	    .value("setElementDimensions", exports.setElementDimensions);


/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	var ApiEndpointProvider = (function () {
	    function ApiEndpointProvider() {
	        var _this = this;
	        this.config = {
	            getBaseUrl: function (name) {
	                var baseUrl = "";
	                if (name) {
	                    _this.config.baseUrls.forEach(function (endpointDefinition) {
	                        if (name === endpointDefinition.name) {
	                            baseUrl = endpointDefinition.url;
	                        }
	                    });
	                }
	                if (!name || baseUrl === "") {
	                    _this.config.baseUrls.forEach(function (endpointDefinition) {
	                        if (!endpointDefinition.name && baseUrl === "") {
	                            baseUrl = endpointDefinition.url;
	                        }
	                    });
	                }
	                return baseUrl;
	            },
	            baseUrls: [],
	            configure: function (baseUrl, name) {
	                var self = this;
	                self.baseUrls.push({ url: baseUrl, name: name });
	            }
	        };
	    }
	    ApiEndpointProvider.prototype.configure = function (baseUrl, name) {
	        this.config.baseUrls.push({ url: baseUrl, name: name });
	    };
	    ApiEndpointProvider.prototype.$get = function () {
	        return this.config;
	    };
	    return ApiEndpointProvider;
	}());
	exports.ApiEndpointProvider = ApiEndpointProvider;
	angular.module("apiEndpoint", []).provider("apiEndpoint", ApiEndpointProvider);


/***/ },
/* 36 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	/**
	 * @description Append To Body Asynchrously
	 * @param options
	 */
	exports.appendToBodyAsync = function (options) {
	    var deferred = $q.defer();
	    document.body.appendChild(options.nativeElement);
	    setTimeout(function () { deferred.resolve(); }, options.wait || 100);
	    return deferred.promise;
	};
	angular.module("appendToBodyAsync", []).value("appendToBodyAsync", exports.appendToBodyAsync);


/***/ },
/* 37 */
/***/ function(module, exports) {

	var AuthInterceptor = (function () {
	    function AuthInterceptor(store) {
	        var _this = this;
	        this.store = store;
	        this.storeOnChange = function (state) { _this.token = state.token; };
	        this.request = function (config) {
	            if (_this.token)
	                config.headers.Authorization = "Bearer " + _this.token;
	            return config;
	        };
	        this.token = null;
	        store.subscribe(this.storeOnChange);
	    }
	    AuthInterceptor.createInstance = function (store) { return new AuthInterceptor(store); };
	    return AuthInterceptor;
	}());
	angular.module("authInterceptor", ["store"])
	    .factory("authInterceptor", ["store", function (store) { return new AuthInterceptor(store); }])
	    .config(["$httpProvider", function ($httpProvider) { return $httpProvider.interceptors.push("authInterceptor"); }]);


/***/ },
/* 38 */
/***/ function(module, exports) {

	// Extracted from Underscore.js 1.5.2
	function debounce(func, wait, immediate) {
	    var timeout, args, context, timestamp, result;
	    return function () {
	        context = this;
	        args = arguments;
	        timestamp = new Date();
	        var later = function () {
	            var last = (new Date()) - timestamp;
	            if (last < wait) {
	                timeout = setTimeout(later, wait - last);
	            }
	            else {
	                timeout = null;
	                if (!immediate) {
	                    result = func.apply(context, args);
	                }
	            }
	        };
	        var callNow = immediate && !timeout;
	        if (!timeout) {
	            timeout = setTimeout(later, wait);
	        }
	        if (callNow) {
	            result = func.apply(context, args);
	        }
	        return result;
	    };
	}
	angular.module("debounce", []).value("debounce", debounce);


/***/ },
/* 39 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.extendCssAsync = function (options) {
	    return $q.when(angular.extend(options.nativeHTMLElement.style, options.cssObject));
	};
	angular.module("extendCssAsync", []).value("extendCssAsync", exports.extendCssAsync);


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	exports.getFromUrlSync = function (options) {
	    var responseText = "";
	    var xhr = new XMLHttpRequest();
	    xhr.open("GET", options.url, false);
	    xhr.onload = function (e) {
	        if (xhr.readyState === 4) {
	            if (xhr.status === 200) {
	                responseText = xhr.responseText;
	            }
	            else {
	                console.error(xhr.statusText);
	            }
	        }
	    };
	    xhr.send(null);
	    return responseText;
	};
	angular.module("getFromUrlSync", []).value("getFromUrlSync", exports.getFromUrlSync);


/***/ },
/* 41 */
/***/ function(module, exports) {

	"use strict";
	angular.module("invokeAsync", []).value("invokeAsync", function (options) {
	    var store = angular.element(document.body).injector().get("store");
	    var $q = angular.element(document.body).injector().get("$q");
	    if (angular.isFunction(options)) {
	        options = { action: options };
	    }
	    ;
	    var deferred = $q.defer();
	    var actionId = options.params ? options.action(options.params) : options.action();
	    var subscription = store.subscribe(function (state) {
	        if (state.lastTriggeredByActionId == actionId) {
	            if (subscription)
	                subscription.dispose();
	            deferred.resolve();
	        }
	    });
	    return deferred.promise;
	});


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var originalAngularModule = angular.module;
	var componentStyles = {};
	var get_html_1 = __webpack_require__(30);
	angular.module = function () {
	    var m = originalAngularModule.apply(this, arguments);
	    m.component = function (component) {
	        var options = component.config;
	        var componentNameCamelCase = options.selector.replace(/-([a-z])/g, function (g) {
	            return g[1].toUpperCase();
	        });
	        var componentName = componentNameCamelCase + "Component";
	        if (options.component.canActivate) {
	            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	                    routeResolverServiceProvider.configure({
	                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
	                        route: options.route,
	                        routes: options.routes,
	                        key: options.key,
	                        promise: options.component.canActivate()
	                    });
	                }
	            ]);
	        }
	        if (options.component.prototype.canActivate) {
	            m.config(["routeResolverServiceProvider", function (routeResolverServiceProvider) {
	                    routeResolverServiceProvider.configure({
	                        routeTemplate: "<" + options.selector + "></" + options.selector + ">",
	                        route: options.route,
	                        routes: options.routes,
	                        key: options.key,
	                        promise: options.component.prototype.canActivate()
	                    });
	                }
	            ]);
	        }
	        var directiveDefinitionObject = {
	            restrict: options.restrict || "E",
	            template: angular.isArray(options.template) ? options.template.join(" \n ") : options.template,
	            templateUrl: options.templateUrl,
	            replace: options.replace || true,
	            scope: angular.isUndefined(options.scope) ? {} : options.scope,
	            bindToController: options.bindToController || {},
	            transclude: options.transclude,
	            controllerAs: "vm",
	            require: options.require,
	            controller: componentName
	        };
	        options.component.$inject = options.viewProviders;
	        if (options.inputs && options.inputs.length > 0) {
	            for (var i = 0; i < options.inputs.length; i++) {
	                if (options.inputs[i].substring(0, 2) === "on") {
	                    directiveDefinitionObject.bindToController[options.inputs[i]] = "&";
	                }
	                else if (options.inputs[i].substring(0, 1) === "@"
	                    || options.inputs[i].substring(0, 1) === "&"
	                    || options.inputs[i].substring(0, 1) === "=") {
	                    directiveDefinitionObject.bindToController[options.inputs[i].substr(1)] = options.inputs[i].substring(0, 1);
	                }
	                else {
	                    directiveDefinitionObject.bindToController[options.inputs[i]] = "=";
	                }
	            }
	        }
	        directiveDefinitionObject.compile = function (template) {
	            return {
	                pre: function (scope, element, attributes, controller, transcludeFn) {
	                    if (options.transclude)
	                        transcludeFn(scope, function (clone) {
	                        });
	                    if (document.body && angular.element(document.body.childNodes[0]) && angular.element(document.body.childNodes[0]).injector()) {
	                        var $injector = angular.element(document.body.childNodes[0]).injector();
	                        var store = $injector.get("store");
	                        var safeDigest = $injector.get("safeDigest");
	                        if (scope.vm && scope.vm.storeOnChange) {
	                            var subscription = store.subscribe(function (state) {
	                                scope.vm.storeOnChange(state);
	                                safeDigest(scope);
	                            });
	                            scope.$on("$destroy", function () { return subscription.dispose(); });
	                        }
	                    }
	                },
	                post: function (scope, element, attributes, controller) {
	                    if (options.require) {
	                        var requiredComponentName = options.require.replace("^", "");
	                        scope.vm[requiredComponentName] = controller;
	                    }
	                    if (options.transclude && scope.vm.$transclude)
	                        scope.vm.$transclude(scope.$new(), function (clone) {
	                            if (scope.vm.hasOwnProperty("template"))
	                                scope.vm.template = template;
	                            if (template[0].nodeType === 1)
	                                var documentFragment = angular.element("<div></div>");
	                            for (var i = 0; i < clone[0].children[0].children.length; i++) {
	                                documentFragment.append(clone[0].children[0].children[i]);
	                            }
	                            scope.vm.clone = get_html_1.getHtml(documentFragment[0], true);
	                        });
	                    if (scope.vm && scope.vm.ngOnInit)
	                        scope.vm.ngOnInit();
	                    if (scope.vm.ngOnDestroy)
	                        scope.$on("$destroy", function () {
	                            scope.vm.dispose();
	                        });
	                }
	            };
	        };
	        m.directive(componentNameCamelCase, [function () { return directiveDefinitionObject; }]);
	        m.controller(componentName, options.component);
	    };
	    return m;
	};


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Position = (function () {
	    function Position(ruler, space, translateXY) {
	        var _this = this;
	        this.ruler = ruler;
	        this.space = space;
	        this.translateXY = translateXY;
	        this.somewhere = function (a, b, space, directionPriorityList) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                var aRectangle = resultsArray[0];
	                var bRectangle = resultsArray[1];
	                var widthNeeded = bRectangle.width + space;
	                var heightNeeded = bRectangle.height + space;
	                var resolved = false;
	                for (var i = 0; i < directionPriorityList.length; i++) {
	                    switch (directionPriorityList[i]) {
	                        case "top":
	                            if (aRectangle.top > heightNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "above");
	                                resolved = true;
	                            }
	                            break;
	                        case "bottom":
	                            if (window.innerHeight - aRectangle.bottom > heightNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "below");
	                                resolved = true;
	                            }
	                            break;
	                        case "left":
	                            if (aRectangle.left > widthNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "left");
	                                resolved = true;
	                            }
	                            break;
	                        case "right":
	                            if (window.innerWidth - aRectangle.bottom > widthNeeded && !resolved) {
	                                _this.translate(b, aRectangle, bRectangle, space, "right");
	                                resolved = true;
	                            }
	                            break;
	                    }
	                }
	            });
	        };
	        this.above = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "above");
	            });
	        };
	        this.below = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "below");
	            });
	        };
	        this.left = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "left");
	            });
	        };
	        this.right = function (a, b, space) {
	            return _this.ruler.measure({ elements: [a, b] })
	                .then(function (resultsArray) {
	                _this.translate(b, resultsArray[0], resultsArray[1], space, "right");
	            });
	        };
	        this.translate = function (htmlElement, aRectangle, bRectangle, space, side) {
	            if (side === "above")
	                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.top - space - bRectangle.height);
	            if (side === "below")
	                _this.translateXY(htmlElement, aRectangle.centerX - bRectangle.radiusX, aRectangle.bottom + space);
	            if (side === "left")
	                _this.translateXY(htmlElement, aRectangle.left - space - bRectangle.width, aRectangle.centerY - bRectangle.radiusY);
	            if (side === "right")
	                _this.translateXY(htmlElement, aRectangle.right + space, aRectangle.centerY - bRectangle.radiusY);
	        };
	    }
	    Position = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "position",
	            viewProviders: ["ruler", "space", "translateXY"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Function])
	    ], Position);
	    return Position;
	}());
	exports.Position = Position;
	var app = angular.module("position", [
	    "ruler",
	    "space",
	    "translateXY"
	]);
	core_1.provide(app, Position);


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";
	exports.removeElement = function (options) {
	    if (options.nativeHTMLElement) {
	        var $target = angular.element(options.nativeHTMLElement);
	        options.nativeHTMLElement.parentNode.removeChild(options.nativeHTMLElement);
	        $target.remove();
	        delete options.nativeHTMLElement;
	    }
	};
	angular.module("removeElement", []).value("removeElement", exports.removeElement);


/***/ },
/* 45 */
/***/ function(module, exports) {

	"use strict";
	var RouteResolverServiceProvider = (function () {
	    function RouteResolverServiceProvider() {
	        var _this = this;
	        this.configure = function (routePromise) { _this._routePromises.push(routePromise); };
	        this.$get = ["$injector", "$q", function ($injector, $q) {
	                return {
	                    resolve: function (options) {
	                        _this._routeParams = options.routeParams;
	                        var deferred = $q.defer();
	                        var resolvedRouteData = {};
	                        var routePromises = _this.getRoutePromises({ routeName: options.routeName, routeTemplate: options.routeTemplate });
	                        if (routePromises.length < 1)
	                            return $q.when(true);
	                        var prioritizedGroups = _this.reduceRoutePromisesByPriority(routePromises);
	                        _this.invoke($injector, $q, prioritizedGroups, 0, function () {
	                            deferred.resolve(resolvedRouteData);
	                        }, resolvedRouteData);
	                        return deferred.promise;
	                    }
	                };
	            }
	        ];
	        this._routePromises = [];
	        /**
	        * @name getRoutePromises
	        * @description the route promises that will be resolved on an route
	        * if the value of the route key matches the route definition '/foo/{id}' or '/foos'
	        * include that routePromises
	        * if the route promise has route value of '*' the promise will be resolve on every route
	        * if the selector in template form ie <selector></selector>, matches the template of the route,
	        * the components canActivate route promise will be resolved
	        */
	        this.getRoutePromises = function (options) {
	            return _this._routePromises.filter(function (routePromise) {
	                if (routePromise.route && routePromise.route === "*")
	                    return true;
	                if (routePromise.route)
	                    return routePromise.route === options.routeName;
	                if (routePromise.routes)
	                    return routePromise.routes.indexOf(options.routeName) > -1;
	                if (routePromise.routeTemplate)
	                    return routePromise.routeTemplate === options.routeTemplate;
	                return false;
	            });
	        };
	        /**
	         * Reduce RoutePromises into prioritized groups
	         * Put the route promises with the same priority in the same group
	         * Eventually will be resolve together asynchronously with $q.all
	         */
	        this.reduceRoutePromisesByPriority = function (routePromises) {
	            var priorities = [];
	            var routePromisesPrioritizedGroups = [];
	            routePromises.forEach(function (promise) {
	                if (priorities.indexOf(promise.priority) < 0)
	                    priorities.push(promise.priority);
	            });
	            priorities.forEach(function (priority, index) {
	                routePromisesPrioritizedGroups.push({
	                    promises: routePromises.filter(function (promise) { return promise.priority == priority; }),
	                    priority: priority,
	                    isLast: index == priorities.length - 1
	                });
	            });
	            return routePromisesPrioritizedGroups;
	        };
	        /**
	         * Invoke the grouped promises. Reducing the results into the resolvedRouteData object
	         * If the route promise inside the group has a key defined, the result will be attached to the
	         * resolved object (routeData) using that key
	         * After you reach the last group, call the callback that will resolve the object that
	         * will have a key value dictionary with the results of any promises with a key defined
	         */
	        this.invoke = function ($injector, $q, groups, currentGroupIndex, callback, resolvedRouteData) {
	            var excutedPromises = [];
	            var currentGroup = groups[currentGroupIndex];
	            currentGroup.promises.forEach(function (statePromise) {
	                excutedPromises.push($injector.invoke(statePromise.promise));
	            });
	            $q.all(excutedPromises).then(function (results) {
	                results.forEach(function (result, index) {
	                    if (currentGroup.promises[index].key)
	                        resolvedRouteData[currentGroup.promises[index].key] = results[index];
	                });
	                currentGroup.isLast ? callback() : _this.invoke($injector, $q, groups, currentGroupIndex + 1, callback, resolvedRouteData);
	            });
	        };
	    }
	    Object.defineProperty(RouteResolverServiceProvider.prototype, "routePromises", {
	        /**
	         * get route promises ordered by priority (ASC)
	         * priority 1 runs before priority 10
	         */
	        get: function () {
	            return this._routePromises.sort(function (a, b) {
	                return a.priority - b.priority;
	            });
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return RouteResolverServiceProvider;
	}());
	angular.module("routeResolver", [])
	    .provider("routeResolverService", [RouteResolverServiceProvider]);


/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	var routeConfigs = [];
	angular.module("routeWhenExtension", ["ngRoute"])
	    .config(["$routeProvider", function ($routeProvider) {
	        var whenFn = $routeProvider.when;
	        function getTemplateUrlFromComponentName(options) {
	            if (options.componentName.length > 9) {
	                if (options.componentName.substr(options.componentName.length - 9) === "Component") {
	                    var componentTemplateFileName = options.componentName.substr(0, options.componentName.length - 9) + ".html";
	                    return "/wwwroot/components/" + componentTemplateFileName;
	                }
	            }
	            return "";
	        }
	        $routeProvider.when = function () {
	            if (arguments[1] && arguments[0]) {
	                var routeName_1 = arguments[0];
	                var routeTemplate_1 = arguments[1].template;
	                arguments[1].caseInsensitiveMatch = true;
	                arguments[1].templateUrl = arguments[1].componentTemplateUrl || arguments[1].templateUrl;
	                arguments[1].controller = arguments[1].componentName || arguments[1].controller;
	                arguments[1].controllerAs = "vm";
	                arguments[1].reloadOnSearch = arguments[1].reloadOnSearch || false;
	                if (arguments[1].componentName && !arguments[1].templateUrl)
	                    arguments[1].templateUrl = getTemplateUrlFromComponentName({
	                        moduleName: arguments[1].moduleName,
	                        componentName: arguments[1].componentName
	                    });
	                arguments[1].resolve = arguments[1].resolve || {};
	                angular.extend(arguments[1].resolve, {
	                    routeData: [
	                        "routeResolverService", function (routeResolverService) { return routeResolverService.resolve({ routeName: routeName_1, routeTemplate: routeTemplate_1 }); }
	                    ]
	                });
	            }
	            routeConfigs.push({
	                when: arguments[0],
	                config: arguments[1]
	            });
	            whenFn.apply($routeProvider, arguments);
	            return $routeProvider;
	        };
	    }]);


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Rectangle = (function () {
	    function Rectangle() {
	        this.createInstance = function (options) {
	            var instance = new Rectangle();
	            if (options.clientRect) {
	                instance.left = options.clientRect.left;
	                instance.top = options.clientRect.top;
	                instance.height = options.clientRect.height;
	                instance.width = options.clientRect.width;
	            }
	            else {
	                instance.left = options.left;
	                instance.top = options.top;
	                instance.height = options.height;
	                instance.width = options.width;
	            }
	            return instance;
	        };
	    }
	    Object.defineProperty(Rectangle.prototype, "right", {
	        get: function () { return this.left + this.width; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "bottom", {
	        get: function () { return this.top + this.height; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "centerX", {
	        get: function () { return this.left + (this.width / 2); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "centerY", {
	        get: function () { return this.top + (this.height / 2); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "radiusX", {
	        get: function () { return this.width / 2; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "radiusY", {
	        get: function () { return this.height / 2; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Rectangle.prototype, "middle", {
	        get: function () { return { x: this.centerX, y: this.centerY }; },
	        enumerable: true,
	        configurable: true
	    });
	    Rectangle = __decorate([
	        core_1.Service({
	            serviceName: "rectangle"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Rectangle);
	    return Rectangle;
	}());
	exports.Rectangle = Rectangle;
	var app = angular.module("rectangle", []);
	core_1.provide(app, Rectangle);


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Ruler = (function () {
	    function Ruler($document, $q, $timeout, rectangle) {
	        var _this = this;
	        this.$document = $document;
	        this.$q = $q;
	        this.$timeout = $timeout;
	        this.rectangle = rectangle;
	        this.measure = function (options) {
	            if (options.element)
	                return _this.measureHtmlElement(options.element);
	            return _this.$q.all(options.elements.map(function (x) { return _this.measureHtmlElement(x); }));
	        };
	        this.measureHtmlElement = function (element) {
	            var deferred = _this.$q.defer();
	            var documentRef = angular.element(_this.$document)[0];
	            if (documentRef.body.contains(element)) {
	                deferred.resolve(_this.rectangle.createInstance({ clientRect: element.getBoundingClientRect() }));
	            }
	            else {
	                _this.$timeout(function () {
	                    documentRef.body.appendChild(element);
	                    var clientRect = element.getBoundingClientRect();
	                    element.parentNode.removeChild(element);
	                    deferred.resolve(_this.rectangle.createInstance({ clientRect: clientRect }));
	                }, 0, false);
	            }
	            return deferred.promise;
	        };
	    }
	    Ruler = __decorate([
	        core_1.Service({
	            serviceName: "ruler",
	            viewProviders: ["$document", "$q", "$timeout", "rectangle"]
	        }), 
	        __metadata('design:paramtypes', [Object, Function, Function, Object])
	    ], Ruler);
	    return Ruler;
	}());
	exports.Ruler = Ruler;
	var app = angular.module("ruler", [
	    "rectangle",
	]);
	core_1.provide(app, Ruler);


/***/ },
/* 49 */
/***/ function(module, exports) {

	angular.module("safeDigest", []).value("safeDigest", function (scope) {
	    if (!scope.$$phase && (scope.$root && !scope.$root.$$phase))
	        scope.$digest();
	});


/***/ },
/* 50 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.setOpacityAsync = function (options) {
	    var deferred = $q.defer();
	    if (options.nativeHtmlElement) {
	        options.nativeHtmlElement.style.opacity = options.opacity;
	        options.nativeHtmlElement.addEventListener('transitionend', resolve, false);
	    }
	    function resolve() {
	        options.nativeHtmlElement.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("setOpacityAsync", []).value("setOpacityAsync", exports.setOpacityAsync);


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Space = (function () {
	    function Space() {
	        this.above = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.below = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.left = function (spaceNeed, rectangle) {
	            return false;
	        };
	        this.right = function (spaceNeed, rectangle) {
	            return false;
	        };
	    }
	    Space = __decorate([
	        core_1.Service({
	            serviceName: "space"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Space);
	    return Space;
	}());
	exports.Space = Space;
	var app = angular.module("space", []);
	core_1.provide(app, Space);


/***/ },
/* 52 */
/***/ function(module, exports) {

	"use strict";
	var $q = angular.injector(['ng']).get("$q");
	exports.translateXAsync = function (options) {
	    var deferred = $q.defer();
	    angular.element(options.element).css({
	        "-moz-transform": "translateX(" + options.x + "px)",
	        "-webkit-transform": "translateX(" + options.x + "px)",
	        "-ms-transform": "translateX(" + options.x + "px)",
	        "-transform": "translateX(" + options.x + "px)"
	    });
	    options.element.addEventListener('transitionend', resolve, false);
	    function resolve() {
	        options.element.removeEventListener('transitionend', resolve);
	        deferred.resolve();
	    }
	    return deferred.promise;
	};
	angular.module("translateXAsync", []).value("translateXAsync", exports.translateXAsync);


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var Template = (function () {
	    function Template($http, $q, $templateCache) {
	        var _this = this;
	        this.$http = $http;
	        this.$q = $q;
	        this.$templateCache = $templateCache;
	        this.get = function (options) {
	            var deferred = _this.$q.defer();
	            var cacheResult = _this.$templateCache.get(options.templateUrl);
	            if (cacheResult) {
	                if (Array.isArray(cacheResult))
	                    deferred.resolve(cacheResult[1]);
	                deferred.resolve(cacheResult);
	                return deferred.promise;
	            }
	            _this.$http.get(options.templateUrl, { cache: _this.$templateCache }).then(function (response) {
	                deferred.resolve(response.data);
	            });
	            return deferred.promise;
	        };
	    }
	    Template = __decorate([
	        core_1.Service({
	            serviceName: "template",
	            viewProviders: ["$http", "$q", "$templateCache"]
	        }), 
	        __metadata('design:paramtypes', [Function, Function, Object])
	    ], Template);
	    return Template;
	}());
	exports.Template = Template;
	var app = angular.module("template", []);
	core_1.provide(app, Template);


/***/ },
/* 54 */
/***/ function(module, exports) {

	angular.module("formEncode", []).value("formEncode", function (data) {
	    var pairs = [];
	    for (var name in data) {
	        pairs.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));
	    }
	    return pairs.join('&').replace(/%20/g, '+');
	});


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ContactEditorComponent = (function () {
	    function ContactEditorComponent() {
	    }
	    ContactEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(56),
	            styles: [__webpack_require__(57)],
	            selector: "contact-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactEditorComponent);
	    return ContactEditorComponent;
	}());
	exports.ContactEditorComponent = ContactEditorComponent;


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contactEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Contact <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Contact: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"contact-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Contact Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"'Create'\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 59 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ContactListComponent = (function () {
	    function ContactListComponent() {
	    }
	    ContactListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(62),
	            styles: [__webpack_require__(63)],
	            selector: "contact-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactListComponent);
	    return ContactListComponent;
	}());
	exports.ContactListComponent = ContactListComponent;


/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contactList\">\r\n    <div class=\"contactList-header\">\r\n        <h1>Contacts</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"contactList-item\">\r\n        <div class=\"contactList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"contactList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".contactList-name,\n.contactList-actions {\n  position: relative;\n  float: left; }\n\n.contactList-name {\n  min-width: 200px; }\n\n.contactList-item {\n  height: 50px; }\n\n.contactList-actions span {\n  cursor: pointer; }\n\n.contactList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ContactComponent = (function () {
	    function ContactComponent() {
	    }
	    ContactComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(66),
	            styles: [__webpack_require__(67)],
	            selector: "contact",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactComponent);
	    return ContactComponent;
	}());
	exports.ContactComponent = ContactComponent;


/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact\">\r\n\r\n</div>\r\n"

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(68);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(70);
	var contact_action_creator_1 = __webpack_require__(71);
	var contact_model_1 = __webpack_require__(74);
	var ContactsContainerComponent = (function () {
	    function ContactsContainerComponent($location, $routeParams, contactActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.contactActionCreator = contactActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.contacts;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/contacts");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentContactAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/contact/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateContactAction)
	                _this.entity = new contact_model_1.Contact();
	            if (state.lastTriggeredByAction instanceof actions.RemoveContactAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["contactId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/contacts");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["contactId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["contactId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new contact_model_1.Contact();
	            }
	        };
	        this.edit = function (entity) { return _this.contactActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.contactActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.contactActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.contactActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/contacts") {
	                    _this.entity = new contact_model_1.Contact();
	                }
	                else {
	                    _this.$location.path("/admin/contacts");
	                }
	            });
	        };
	    }
	    ContactsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/contacts", "/admin/contact/edit/:contactId"],
	            template: __webpack_require__(75),
	            styles: [__webpack_require__(76)],
	            selector: "contacts-container",
	            viewProviders: ["$location", "$routeParams", "contactActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "contactActionCreator", function ($q, $route, invokeAsync, contactActionCreator) {
	                var contactId = $route.current.params.contactId;
	                var promises = [invokeAsync(contactActionCreator.all)];
	                if (contactId) {
	                    promises.push(invokeAsync({ action: contactActionCreator.getById, params: { id: contactId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, contact_action_creator_1.ContactActionCreator, Object])
	    ], ContactsContainerComponent);
	    return ContactsContainerComponent;
	}());
	exports.ContactsContainerComponent = ContactsContainerComponent;


/***/ },
/* 70 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateContactAction = (function () {
	    function AddOrUpdateContactAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateContactAction;
	}());
	exports.AddOrUpdateContactAction = AddOrUpdateContactAction;
	var AllContactsAction = (function () {
	    function AllContactsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllContactsAction;
	}());
	exports.AllContactsAction = AllContactsAction;
	var RemoveContactAction = (function () {
	    function RemoveContactAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveContactAction;
	}());
	exports.RemoveContactAction = RemoveContactAction;
	var ContactsFilterAction = (function () {
	    function ContactsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return ContactsFilterAction;
	}());
	exports.ContactsFilterAction = ContactsFilterAction;
	var SetCurrentContactAction = (function () {
	    function SetCurrentContactAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentContactAction;
	}());
	exports.SetCurrentContactAction = SetCurrentContactAction;
	var AddOrUpdateContactSuccessAction = (function () {
	    function AddOrUpdateContactSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateContactSuccessAction;
	}());
	exports.AddOrUpdateContactSuccessAction = AddOrUpdateContactSuccessAction;
	var CurrentContactRemovedAction = (function () {
	    function CurrentContactRemovedAction() {
	    }
	    return CurrentContactRemovedAction;
	}());
	exports.CurrentContactRemovedAction = CurrentContactRemovedAction;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var contact_actions_1 = __webpack_require__(70);
	var ContactActionCreator = (function (_super) {
	    __extends(ContactActionCreator, _super);
	    function ContactActionCreator($location, dispatcher, contactService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, contactService, dispatcher, guid, contact_actions_1.AddOrUpdateContactAction, contact_actions_1.AllContactsAction, contact_actions_1.RemoveContactAction, contact_actions_1.SetCurrentContactAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new contact_actions_1.AddOrUpdateContactSuccessAction(options.entity)); };
	        this.currentContactRemoved = function () { return _this.dispatcher.dispatch(new contact_actions_1.CurrentContactRemovedAction()); };
	        this.openAllContactsModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-contact-modal></all-contact-modal>" });
	            });
	        };
	    }
	    ContactActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "contactActionCreator",
	            viewProviders: ["$location", "dispatcher", "contactService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ContactActionCreator);
	    return ContactActionCreator;
	}(core_1.BaseActionCreator));
	exports.ContactActionCreator = ContactActionCreator;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var modal_actions_1 = __webpack_require__(73);
	var core_1 = __webpack_require__(2);
	var ModalActionCreator = (function () {
	    function ModalActionCreator($rootScope, dispatcher) {
	        var _this = this;
	        this.$rootScope = $rootScope;
	        this.dispatcher = dispatcher;
	        this.open = function (options) { return _this.dispatcher.dispatch(new modal_actions_1.OpenModalAction(options.html)); };
	        this.close = function () { return _this.dispatcher.dispatch(new modal_actions_1.CloseModalAction()); };
	        $rootScope.$on("$routeChangeSuccess", this.close);
	    }
	    ModalActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "modalActionCreator",
	            viewProviders: ["$rootScope", "dispatcher"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], ModalActionCreator);
	    return ModalActionCreator;
	}());
	exports.ModalActionCreator = ModalActionCreator;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var OpenModalAction = (function () {
	    function OpenModalAction(html) {
	        this.html = html;
	    }
	    OpenModalAction = __decorate([
	        core_1.Action({
	            type: "modal.openModalAction"
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], OpenModalAction);
	    return OpenModalAction;
	}());
	exports.OpenModalAction = OpenModalAction;
	var CloseModalAction = (function () {
	    function CloseModalAction() {
	    }
	    CloseModalAction = __decorate([
	        core_1.Action({
	            type: "modal.closeModalAction"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CloseModalAction);
	    return CloseModalAction;
	}());
	exports.CloseModalAction = CloseModalAction;


/***/ },
/* 74 */
/***/ function(module, exports) {

	"use strict";
	var Contact = (function () {
	    function Contact() {
	    }
	    return Contact;
	}());
	exports.Contact = Contact;


/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <contact-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></contact-editor>\r\n    <contact-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></contact-list>\r\n</div>\r\n"

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contacts-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contacts-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ContactService = (function (_super) {
	    __extends(ContactService, _super);
	    function ContactService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(ContactService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/contact"; },
	        enumerable: true,
	        configurable: true
	    });
	    ContactService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "contactService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], ContactService);
	    return ContactService;
	}(core_1.BaseService));
	exports.ContactService = ContactService;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(70);
	var core_1 = __webpack_require__(2);
	exports.removeContactReducer = function (state, action) {
	    if (action instanceof actions.RemoveContactAction)
	        core_1.pluckOut({ items: state.contacts, value: action.entity.id });
	    return state;
	};
	exports.addContactReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateContactAction) {
	        core_1.addOrUpdate({ items: state.contacts, item: action.entity });
	    }
	    return state;
	};
	exports.allContactsReducer = function (state, action) {
	    if (action instanceof actions.AllContactsAction) {
	        state.contacts = action.entities;
	    }
	    return state;
	};
	exports.setCurrentContactReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentContactAction) {
	        state.currentContactId = action.id;
	    }
	    return state;
	};


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var contacts_container_component_1 = __webpack_require__(69);
	exports.ContactsRoutes = [
	    {
	        path: "/admin/contacts",
	        component: contacts_container_component_1.ContactsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/contact/edit/:contactId",
	        component: contacts_container_component_1.ContactsContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(82);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(159);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(186);
	var app = angular.module("app.contentAggregation", [
	    "components",
	    "app.contentAggregation.action-creators",
	    "app.contentAggregation.actions",
	    "app.contentAggregation.components",
	    "app.contentAggregation.containers",
	    "app.contentAggregation.action-creators",
	    "app.contentAggregation.reducers",
	    "app.contentAggregation.services"
	]);
	__export(__webpack_require__(191));


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var app_action_creator_1 = __webpack_require__(83);
	var property_action_creator_1 = __webpack_require__(85);
	var section_action_creator_1 = __webpack_require__(87);
	var ui_action_creator_1 = __webpack_require__(89);
	var contentAggregationActionCreatorsModule = angular.module("app.contentAggregation.action-creators", []);
	core_1.bootstrap(contentAggregationActionCreatorsModule, {
	    providers: [app_action_creator_1.AppActionCreator, property_action_creator_1.PropertyActionCreator, section_action_creator_1.SectionActionCreator, ui_action_creator_1.UIActionCreator]
	});


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var app_actions_1 = __webpack_require__(84);
	var AppActionCreator = (function (_super) {
	    __extends(AppActionCreator, _super);
	    function AppActionCreator($location, dispatcher, appService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, appService, dispatcher, guid, app_actions_1.AddOrUpdateAppAction, app_actions_1.AllAppsAction, app_actions_1.RemoveAppAction, app_actions_1.SetCurrentAppAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new app_actions_1.AddOrUpdateAppSuccessAction(options.entity)); };
	        this.currentAppRemoved = function () { return _this.dispatcher.dispatch(new app_actions_1.CurrentAppRemovedAction()); };
	        this.openAllAppsModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-app-modal></all-app-modal>" });
	            });
	        };
	    }
	    AppActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "appActionCreator",
	            viewProviders: ["$location", "dispatcher", "appService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], AppActionCreator);
	    return AppActionCreator;
	}(core_1.BaseActionCreator));
	exports.AppActionCreator = AppActionCreator;


/***/ },
/* 84 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateAppAction = (function () {
	    function AddOrUpdateAppAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateAppAction;
	}());
	exports.AddOrUpdateAppAction = AddOrUpdateAppAction;
	var AllAppsAction = (function () {
	    function AllAppsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllAppsAction;
	}());
	exports.AllAppsAction = AllAppsAction;
	var RemoveAppAction = (function () {
	    function RemoveAppAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveAppAction;
	}());
	exports.RemoveAppAction = RemoveAppAction;
	var AppsFilterAction = (function () {
	    function AppsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return AppsFilterAction;
	}());
	exports.AppsFilterAction = AppsFilterAction;
	var SetCurrentAppAction = (function () {
	    function SetCurrentAppAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentAppAction;
	}());
	exports.SetCurrentAppAction = SetCurrentAppAction;
	var AddOrUpdateAppSuccessAction = (function () {
	    function AddOrUpdateAppSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateAppSuccessAction;
	}());
	exports.AddOrUpdateAppSuccessAction = AddOrUpdateAppSuccessAction;
	var CurrentAppRemovedAction = (function () {
	    function CurrentAppRemovedAction() {
	    }
	    return CurrentAppRemovedAction;
	}());
	exports.CurrentAppRemovedAction = CurrentAppRemovedAction;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var property_actions_1 = __webpack_require__(86);
	var PropertyActionCreator = (function (_super) {
	    __extends(PropertyActionCreator, _super);
	    function PropertyActionCreator($location, dispatcher, propertyService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, propertyService, dispatcher, guid, property_actions_1.AddOrUpdatePropertyAction, property_actions_1.AllPropertiesAction, property_actions_1.RemovePropertyAction, property_actions_1.SetCurrentPropertyAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new property_actions_1.AddOrUpdatePropertySuccessAction(options.entity)); };
	        this.currentPropertyRemoved = function () { return _this.dispatcher.dispatch(new property_actions_1.CurrentPropertyRemovedAction()); };
	        this.openAllPropertysModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-property-modal></all-property-modal>" });
	            });
	        };
	        this.openPropertyPickerModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<property-picker-modal></property-picker-modal>" });
	            });
	        };
	        this.pick = function (entity) { return _this.dispatcher.dispatch(new property_actions_1.PropertyPickedAction(entity)); };
	        this.openEditPropertyModal = function (options) {
	            if (options === void 0) { options = { property: null }; }
	            _this.modalActionCreator.open({ html: "<edit-property-modal property='" + JSON.stringify(options.property) + "'></edit-property-modal>" });
	        };
	    }
	    PropertyActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "propertyActionCreator",
	            viewProviders: ["$location", "dispatcher", "propertyService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], PropertyActionCreator);
	    return PropertyActionCreator;
	}(core_1.BaseActionCreator));
	exports.PropertyActionCreator = PropertyActionCreator;


/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdatePropertyAction = (function () {
	    function AddOrUpdatePropertyAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdatePropertyAction;
	}());
	exports.AddOrUpdatePropertyAction = AddOrUpdatePropertyAction;
	var AllPropertiesAction = (function () {
	    function AllPropertiesAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllPropertiesAction;
	}());
	exports.AllPropertiesAction = AllPropertiesAction;
	var RemovePropertyAction = (function () {
	    function RemovePropertyAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemovePropertyAction;
	}());
	exports.RemovePropertyAction = RemovePropertyAction;
	var PropertysFilterAction = (function () {
	    function PropertysFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return PropertysFilterAction;
	}());
	exports.PropertysFilterAction = PropertysFilterAction;
	var SetCurrentPropertyAction = (function () {
	    function SetCurrentPropertyAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentPropertyAction;
	}());
	exports.SetCurrentPropertyAction = SetCurrentPropertyAction;
	var AddOrUpdatePropertySuccessAction = (function () {
	    function AddOrUpdatePropertySuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdatePropertySuccessAction;
	}());
	exports.AddOrUpdatePropertySuccessAction = AddOrUpdatePropertySuccessAction;
	var CurrentPropertyRemovedAction = (function () {
	    function CurrentPropertyRemovedAction() {
	    }
	    return CurrentPropertyRemovedAction;
	}());
	exports.CurrentPropertyRemovedAction = CurrentPropertyRemovedAction;
	var PropertyPickedAction = (function () {
	    function PropertyPickedAction(entity) {
	        this.entity = entity;
	    }
	    return PropertyPickedAction;
	}());
	exports.PropertyPickedAction = PropertyPickedAction;


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var section_actions_1 = __webpack_require__(88);
	var SectionActionCreator = (function (_super) {
	    __extends(SectionActionCreator, _super);
	    function SectionActionCreator($location, dispatcher, sectionService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, sectionService, dispatcher, guid, section_actions_1.AddOrUpdateSectionAction, section_actions_1.AllSectionsAction, section_actions_1.RemoveSectionAction, section_actions_1.SetCurrentSectionAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new section_actions_1.AddOrUpdateSectionSuccessAction(options.entity)); };
	        this.currentSectionRemoved = function () { return _this.dispatcher.dispatch(new section_actions_1.CurrentSectionRemovedAction()); };
	        this.openAllSectionsModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-section-modal></all-section-modal>" });
	            });
	        };
	    }
	    SectionActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "sectionActionCreator",
	            viewProviders: ["$location", "dispatcher", "sectionService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], SectionActionCreator);
	    return SectionActionCreator;
	}(core_1.BaseActionCreator));
	exports.SectionActionCreator = SectionActionCreator;


/***/ },
/* 88 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateSectionAction = (function () {
	    function AddOrUpdateSectionAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateSectionAction;
	}());
	exports.AddOrUpdateSectionAction = AddOrUpdateSectionAction;
	var AllSectionsAction = (function () {
	    function AllSectionsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllSectionsAction;
	}());
	exports.AllSectionsAction = AllSectionsAction;
	var RemoveSectionAction = (function () {
	    function RemoveSectionAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveSectionAction;
	}());
	exports.RemoveSectionAction = RemoveSectionAction;
	var SectionsFilterAction = (function () {
	    function SectionsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return SectionsFilterAction;
	}());
	exports.SectionsFilterAction = SectionsFilterAction;
	var SetCurrentSectionAction = (function () {
	    function SetCurrentSectionAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentSectionAction;
	}());
	exports.SetCurrentSectionAction = SetCurrentSectionAction;
	var AddOrUpdateSectionSuccessAction = (function () {
	    function AddOrUpdateSectionSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateSectionSuccessAction;
	}());
	exports.AddOrUpdateSectionSuccessAction = AddOrUpdateSectionSuccessAction;
	var CurrentSectionRemovedAction = (function () {
	    function CurrentSectionRemovedAction() {
	    }
	    return CurrentSectionRemovedAction;
	}());
	exports.CurrentSectionRemovedAction = CurrentSectionRemovedAction;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var ui_actions_1 = __webpack_require__(90);
	var UIActionCreator = (function (_super) {
	    __extends(UIActionCreator, _super);
	    function UIActionCreator($location, dispatcher, uiService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, uiService, dispatcher, guid, ui_actions_1.AddOrUpdateUIAction, ui_actions_1.AllUIsAction, ui_actions_1.RemoveUIAction, ui_actions_1.SetCurrentUIAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new ui_actions_1.AddOrUpdateUISuccessAction(options.entity)); };
	        this.currentUiRemoved = function () { return _this.dispatcher.dispatch(new ui_actions_1.CurrentUIRemovedAction()); };
	        this.openAllUisModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-ui-modal></all-ui-modal>" });
	            });
	        };
	    }
	    UIActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "uiActionCreator",
	            viewProviders: ["$location", "dispatcher", "uiService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], UIActionCreator);
	    return UIActionCreator;
	}(core_1.BaseActionCreator));
	exports.UIActionCreator = UIActionCreator;


/***/ },
/* 90 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateUIAction = (function () {
	    function AddOrUpdateUIAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateUIAction;
	}());
	exports.AddOrUpdateUIAction = AddOrUpdateUIAction;
	var AllUIsAction = (function () {
	    function AllUIsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllUIsAction;
	}());
	exports.AllUIsAction = AllUIsAction;
	var RemoveUIAction = (function () {
	    function RemoveUIAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveUIAction;
	}());
	exports.RemoveUIAction = RemoveUIAction;
	var UIsFilterAction = (function () {
	    function UIsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return UIsFilterAction;
	}());
	exports.UIsFilterAction = UIsFilterAction;
	var SetCurrentUIAction = (function () {
	    function SetCurrentUIAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentUIAction;
	}());
	exports.SetCurrentUIAction = SetCurrentUIAction;
	var AddOrUpdateUISuccessAction = (function () {
	    function AddOrUpdateUISuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateUISuccessAction;
	}());
	exports.AddOrUpdateUISuccessAction = AddOrUpdateUISuccessAction;
	var CurrentUIRemovedAction = (function () {
	    function CurrentUIRemovedAction() {
	    }
	    return CurrentUIRemovedAction;
	}());
	exports.CurrentUIRemovedAction = CurrentUIRemovedAction;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var appActions = __webpack_require__(84);
	var propertyActions = __webpack_require__(86);
	var sectionActions = __webpack_require__(88);
	var uiActions = __webpack_require__(90);
	var contentAggregationActionsModule = angular.module("app.contentAggregation.actions", []);
	core_1.bootstrap(contentAggregationActionsModule, {
	    actions: [appActions, propertyActions, sectionActions, uiActions]
	});


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var app_editor_component_1 = __webpack_require__(93);
	var app_list_component_1 = __webpack_require__(97);
	var app_component_1 = __webpack_require__(101);
	var property_editor_component_1 = __webpack_require__(105);
	var property_list_component_1 = __webpack_require__(109);
	var property_component_1 = __webpack_require__(113);
	var property_paged_list_component_1 = __webpack_require__(117);
	var property_picker_modal_component_1 = __webpack_require__(131);
	var section_editor_component_1 = __webpack_require__(135);
	var section_list_component_1 = __webpack_require__(139);
	var section_component_1 = __webpack_require__(143);
	var ui_editor_component_1 = __webpack_require__(147);
	var ui_list_component_1 = __webpack_require__(151);
	var ui_component_1 = __webpack_require__(155);
	var contentAggregationComponentsModule = angular.module("app.contentAggregation.components", []);
	core_1.bootstrap(contentAggregationComponentsModule, {
	    components: [
	        app_editor_component_1.AppEditorComponent,
	        app_list_component_1.AppListComponent,
	        app_component_1.AppComponent,
	        property_component_1.PropertyComponent,
	        property_editor_component_1.PropertyEditorComponent,
	        property_list_component_1.PropertyListComponent,
	        property_paged_list_component_1.PropertyPagedListComponent,
	        property_picker_modal_component_1.PropertyPickerModalComponent,
	        section_editor_component_1.SectionEditorComponent,
	        section_list_component_1.SectionListComponent,
	        section_component_1.SectionComponent,
	        ui_editor_component_1.UIEditorComponent,
	        ui_list_component_1.UIListComponent,
	        ui_component_1.UIComponent
	    ]
	});


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppEditorComponent = (function () {
	    function AppEditorComponent() {
	        var _this = this;
	        this.removeProperty = function (options) { return core_1.pluckOut({ items: _this.entity.properties, value: options.property.id }); };
	        this.removeUI = function (options) { return core_1.pluckOut({ items: _this.entity.uis, value: options.ui.id }); };
	    }
	    AppEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(94),
	            styles: [__webpack_require__(95)],
	            selector: "app-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppEditorComponent);
	    return AppEditorComponent;
	}());
	exports.AppEditorComponent = AppEditorComponent;


/***/ },
/* 94 */
/***/ function(module, exports) {

	module.exports = "<div class=\"appEditor\">\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create App <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit App: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"app-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"App Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n        <tab-title>Properties<span data-ng-if=\"vm.entity.id\"> ({{vm.entity.properties.length }})</span></tab-title>\r\n\r\n        <tab-content>\r\n            <div data-ng-repeat=\"property in vm.entity.properties\">\r\n                <span>{{ property.name }}</span>\r\n                <span class=\"app-editor-remove-child-link\" data-ng-click=\"vm.removeProperty({ property: property })\">REMOVE</span>\r\n            </div>\r\n        </tab-content>\r\n\r\n        <tab-title>UIs<span data-ng-if=\"vm.entity.id\"> ({{vm.entity.uis.length }})</span></tab-title>\r\n\r\n        <tab-content>\r\n            <div data-ng-repeat=\"ui in vm.entity.uis\">\r\n                <span>{{ ui.name }}</span>\r\n                <span class=\"app-editor-remove-child-link\" data-ng-click=\"vm.removeUI({ ui: ui })\">REMOVE</span>\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-editor.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".app-editor-remove-child-link {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppListComponent = (function () {
	    function AppListComponent() {
	    }
	    AppListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(98),
	            styles: [__webpack_require__(99)],
	            selector: "app-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppListComponent);
	    return AppListComponent;
	}());
	exports.AppListComponent = AppListComponent;


/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports = "<div class=\"appList\">\r\n    <div class=\"appList-header\">\r\n        <h1>Apps</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"appList-item\">\r\n        <div class=\"appList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"appList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-list.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".appList-name,\n.appList-actions {\n  position: relative;\n  float: left; }\n\n.appList-name {\n  min-width: 200px; }\n\n.appList-item {\n  height: 50px; }\n\n.appList-actions span {\n  cursor: pointer; }\n\n.appList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(102),
	            styles: [__webpack_require__(103)],
	            selector: "app",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = "<div class=\"app\">\r\n\r\n</div>\r\n"

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PropertyEditorComponent = (function () {
	    function PropertyEditorComponent() {
	    }
	    PropertyEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(106),
	            styles: [__webpack_require__(107)],
	            selector: "property-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PropertyEditorComponent);
	    return PropertyEditorComponent;
	}());
	exports.PropertyEditorComponent = PropertyEditorComponent;


/***/ },
/* 106 */
/***/ function(module, exports) {

	module.exports = "<div class=\"propertyEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Property <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Property: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"property-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Key\" data-ng-model=\"vm.entity.key\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Value\" data-ng-model=\"vm.entity.value\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Base Uri\" data-ng-model=\"vm.entity.baseUri\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Uri\" data-ng-model=\"vm.entity.uri\" />\r\n            </div>\r\n            <div>\r\n                <textarea ui-tinymce ng-model=\"vm.entity.htmlBody\"></textarea>\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(108);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-editor.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PropertyListComponent = (function () {
	    function PropertyListComponent() {
	    }
	    PropertyListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(110),
	            styles: [__webpack_require__(111)],
	            selector: "property-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PropertyListComponent);
	    return PropertyListComponent;
	}());
	exports.PropertyListComponent = PropertyListComponent;


/***/ },
/* 110 */
/***/ function(module, exports) {

	module.exports = "<div class=\"propertyList\">\r\n    <div class=\"propertyList-header\">\r\n        <h1>Properties</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"propertyList-item\">\r\n        <div class=\"propertyList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"propertyList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(112);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-list.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".propertyList-name,\n.propertyList-actions {\n  position: relative;\n  float: left; }\n\n.propertyList-name {\n  min-width: 200px; }\n\n.propertyList-item {\n  height: 50px; }\n\n.propertyList-actions span {\n  cursor: pointer; }\n\n.propertyList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PropertyComponent = (function () {
	    function PropertyComponent() {
	    }
	    PropertyComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(114),
	            styles: [__webpack_require__(115)],
	            selector: "property",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PropertyComponent);
	    return PropertyComponent;
	}());
	exports.PropertyComponent = PropertyComponent;


/***/ },
/* 114 */
/***/ function(module, exports) {

	module.exports = "<div class=\"property\">\r\n\r\n</div>\r\n"

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(116);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var paged_list_1 = __webpack_require__(118);
	var PropertyPagedListComponent = (function () {
	    function PropertyPagedListComponent() {
	        var _this = this;
	        this.ngOnInit = function () {
	            _this.pagedList = paged_list_1.toPageListFromInMemory(_this.entities, _this.pageNumber, _this.pageSize);
	        };
	        this.next = function () {
	            if (_this.pageNumber == _this.pagedList.totalPages) {
	                _this.pageNumber = 1;
	            }
	            else {
	                _this.pageNumber = _this.pageNumber + 1;
	            }
	            _this.ngOnInit();
	        };
	        this.previous = function () {
	            if (_this.pageNumber == 1) {
	                _this.pageNumber = _this.pagedList.totalPages;
	            }
	            else {
	                _this.pageNumber = _this.pageNumber - 1;
	            }
	            _this.ngOnInit();
	        };
	    }
	    PropertyPagedListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(128),
	            styles: [__webpack_require__(129)],
	            selector: "property-paged-list",
	            inputs: ['entities', 'edit', 'remove', 'pageNumber', 'pageSize', 'select'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PropertyPagedListComponent);
	    return PropertyPagedListComponent;
	}());
	exports.PropertyPagedListComponent = PropertyPagedListComponent;


/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__webpack_require__(2);
	__webpack_require__(119);
	var core_1 = __webpack_require__(2);
	var paged_list_actions_1 = __webpack_require__(121);
	var paging_config_provider_1 = __webpack_require__(122);
	var reducers = __webpack_require__(124);
	__export(__webpack_require__(125));
	__export(__webpack_require__(126));
	var app = angular.module("app.pagedList", [
	    "app.core"
	]);
	app.provider("pagingConfigProvider", paging_config_provider_1.PagingConfigProvider);
	core_1.provide(app, paged_list_actions_1.PagedListActionCreator);
	app.config(["reducersProvider", function (reducersProvider) {
	        for (var reducer in reducers) {
	            reducersProvider.configure(reducers[reducer]);
	        }
	    }]);


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(120);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../css-loader/index.js!./../../../../sass-loader/index.js!./paged-list.scss", function() {
				var newContent = require("!!./../../../../css-loader/index.js!./../../../../sass-loader/index.js!./paged-list.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".previous, .next {\n  cursor: pointer; }\n\n.paged-list-navigation {\n  margin-bottom: 30px; }\n", ""]);

	// exports


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PagedListActionCreator = (function () {
	    function PagedListActionCreator(dispatcher, guid) {
	        this.dispatcher = dispatcher;
	        this.guid = guid;
	    }
	    PagedListActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "pagedListActionCreator",
	            viewProviders: ["dispatcher", "guid"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object])
	    ], PagedListActionCreator);
	    return PagedListActionCreator;
	}());
	exports.PagedListActionCreator = PagedListActionCreator;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var paging_config_model_1 = __webpack_require__(123);
	var PagingConfigProvider = (function () {
	    function PagingConfigProvider() {
	        var _this = this;
	        this.$get = function () { return new paging_config_model_1.PagingConfig(_this.page, _this.pageSize); };
	    }
	    return PagingConfigProvider;
	}());
	exports.PagingConfigProvider = PagingConfigProvider;


/***/ },
/* 123 */
/***/ function(module, exports) {

	"use strict";
	var PagingConfig = (function () {
	    function PagingConfig(page, pageSize) {
	        this.page = page;
	        this.pageSize = pageSize;
	    }
	    return PagingConfig;
	}());
	exports.PagingConfig = PagingConfig;


/***/ },
/* 124 */
/***/ function(module, exports) {

	"use strict";


/***/ },
/* 125 */
/***/ function(module, exports) {

	"use strict";
	var PagedList = (function () {
	    function PagedList(_data, _page, _pageSize, _totalCount) {
	        this._data = _data;
	        this._page = _page;
	        this._pageSize = _pageSize;
	        this._totalCount = _totalCount;
	    }
	    Object.defineProperty(PagedList.prototype, "data", {
	        get: function () { return this._data; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "page", {
	        get: function () { return this._page; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "pageSize", {
	        get: function () { return this._pageSize; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalCount", {
	        get: function () { return this._totalCount; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(PagedList.prototype, "totalPages", {
	        get: function () { return Math.ceil(this._totalCount / this._pageSize); },
	        enumerable: true,
	        configurable: true
	    });
	    return PagedList;
	}());
	exports.PagedList = PagedList;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var validate_page_properties_and_get_skip_count_1 = __webpack_require__(127);
	var paging_config_model_1 = __webpack_require__(123);
	var paged_list_model_1 = __webpack_require__(125);
	function toPageListFromInMemory(entities, page, pageSize) {
	    if (entities == null)
	        throw new Error("entities");
	    var pagingConfig = new paging_config_model_1.PagingConfig(page, pageSize);
	    var skipCount = validate_page_properties_and_get_skip_count_1.validatePagePropertiesAndGetSkipCount(pagingConfig);
	    var data = entities.slice(skipCount, pageSize + skipCount);
	    return new paged_list_model_1.PagedList(data, page, pageSize, entities.length);
	}
	exports.toPageListFromInMemory = toPageListFromInMemory;


/***/ },
/* 127 */
/***/ function(module, exports) {

	"use strict";
	function validatePagePropertiesAndGetSkipCount(pagingConfig) {
	    if (pagingConfig.page < 1) {
	        pagingConfig.page = 1;
	    }
	    if (pagingConfig.pageSize < 1) {
	        pagingConfig.pageSize = 1;
	    }
	    if (pagingConfig.pageSize > 100) {
	        pagingConfig.pageSize = 100;
	    }
	    return pagingConfig.pageSize * (pagingConfig.page - 1);
	}
	exports.validatePagePropertiesAndGetSkipCount = validatePagePropertiesAndGetSkipCount;


/***/ },
/* 128 */
/***/ function(module, exports) {

	module.exports = "<div class=\"property-paged-list\">\r\n    <div class=\"property-paged-list-header\">\r\n        <h1>Properties</h1>\r\n    </div>\r\n\r\n    <div class=\"paged-list-navigation\">\r\n        <span>{{ vm.pageNumber }}</span>\r\n        <span>of</span>\r\n        <span>{{ vm.pagedList.totalPages }}</span>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;\r\n        <span data-ng-click=\"vm.previous()\" class=\"previous\">previous</span>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <span data-ng-click=\"vm.next()\" class=\"next\">next</span>\r\n    </div>\r\n\r\n    <div data-ng-repeat=\"entity in vm.pagedList.data\" class=\"property-paged-list-item\">\r\n        <div class=\"property-paged-list-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"property-paged-list-actions\">\r\n            <span data-ng-click=\"vm.select({ entity: this.entity })\">select</span>&nbsp;&nbsp;|&nbsp;&nbsp;\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;\r\n            <span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n\r\n\r\n</div>\r\n"

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(130);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-paged-list.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-paged-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".property-paged-list-name,\n.property-paged-list-actions {\n  position: relative;\n  float: left; }\n\n.property-paged-list-name {\n  min-width: 200px; }\n\n.property-paged-list-item {\n  height: 50px; }\n\n.property-paged-list-actions {\n  text-transform: uppercase; }\n\n.property-paged-list-actions span {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var property_action_creator_1 = __webpack_require__(85);
	var PropertyPickerModalComponent = (function () {
	    function PropertyPickerModalComponent(modalActionCreator, propertyActionCreator) {
	        var _this = this;
	        this.modalActionCreator = modalActionCreator;
	        this.propertyActionCreator = propertyActionCreator;
	        this.storeOnChange = function (state) { return _this.entities = state.properties; };
	        this.pageNumber = 1;
	        this.pageSize = 4;
	        this.select = function (options) {
	            _this.propertyActionCreator.pick(options.entity);
	            _this.modalActionCreator.close();
	        };
	    }
	    PropertyPickerModalComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(132),
	            styles: [__webpack_require__(133)],
	            selector: "property-picker-modal",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            viewProviders: ["modalActionCreator", "propertyActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [modal_action_creator_1.ModalActionCreator, property_action_creator_1.PropertyActionCreator])
	    ], PropertyPickerModalComponent);
	    return PropertyPickerModalComponent;
	}());
	exports.PropertyPickerModalComponent = PropertyPickerModalComponent;


/***/ },
/* 132 */
/***/ function(module, exports) {

	module.exports = "<div class=\"property-picker-modal\">\r\n    <modal>\r\n\r\n        <modal-title>Property Picker</modal-title>\r\n\r\n        <modal-content>\r\n\r\n            <property-paged-list entities=\"vm.entities\" select=\"vm.select\" edit=\"vm.edit\" remove=\"vm.remove\" page-size=\"vm.pageSize\" page-number=\"vm.pageNumber\">\r\n\r\n            </property-paged-list>\r\n\r\n        </modal-content>\r\n\r\n    </modal>\r\n\r\n</div>"

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-picker-modal.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./property-picker-modal.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SectionEditorComponent = (function () {
	    function SectionEditorComponent() {
	    }
	    SectionEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(136),
	            styles: [__webpack_require__(137)],
	            selector: "section-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SectionEditorComponent);
	    return SectionEditorComponent;
	}());
	exports.SectionEditorComponent = SectionEditorComponent;


/***/ },
/* 136 */
/***/ function(module, exports) {

	module.exports = "<div class=\"sectionEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Section <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Section: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"section-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Section Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section-editor.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SectionListComponent = (function () {
	    function SectionListComponent() {
	    }
	    SectionListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(140),
	            styles: [__webpack_require__(141)],
	            selector: "section-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SectionListComponent);
	    return SectionListComponent;
	}());
	exports.SectionListComponent = SectionListComponent;


/***/ },
/* 140 */
/***/ function(module, exports) {

	module.exports = "<div class=\"sectionList\">\r\n    <div class=\"sectionList-header\">\r\n        <h1>Sections</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"sectionList-item\">\r\n        <div class=\"sectionList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"sectionList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(142);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section-list.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".sectionList-name,\n.sectionList-actions {\n  position: relative;\n  float: left; }\n\n.sectionList-name {\n  min-width: 200px; }\n\n.sectionList-item {\n  height: 50px; }\n\n.sectionList-actions span {\n  cursor: pointer; }\n\n.sectionList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SectionComponent = (function () {
	    function SectionComponent() {
	    }
	    SectionComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(144),
	            styles: [__webpack_require__(145)],
	            selector: "section",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SectionComponent);
	    return SectionComponent;
	}());
	exports.SectionComponent = SectionComponent;


/***/ },
/* 144 */
/***/ function(module, exports) {

	module.exports = "<div class=\"section\">\r\n\r\n</div>\r\n"

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(146);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./section.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var UIEditorComponent = (function () {
	    function UIEditorComponent() {
	    }
	    UIEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(148),
	            styles: [__webpack_require__(149)],
	            selector: "ui-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UIEditorComponent);
	    return UIEditorComponent;
	}());
	exports.UIEditorComponent = UIEditorComponent;


/***/ },
/* 148 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uiEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create UI <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit UI: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"ui-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"UI Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(150);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui-editor.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var UIListComponent = (function () {
	    function UIListComponent() {
	    }
	    UIListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(152),
	            styles: [__webpack_require__(153)],
	            selector: "ui-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UIListComponent);
	    return UIListComponent;
	}());
	exports.UIListComponent = UIListComponent;


/***/ },
/* 152 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uiList\">\r\n    <div class=\"uiList-header\">\r\n        <h1>Uis</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"uiList-item\">\r\n        <div class=\"uiList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"uiList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(154);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui-list.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".uiList-name,\n.uiList-actions {\n  position: relative;\n  float: left; }\n\n.uiList-name {\n  min-width: 200px; }\n\n.uiList-item {\n  height: 50px; }\n\n.uiList-actions span {\n  cursor: pointer; }\n\n.uiList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var UIComponent = (function () {
	    function UIComponent() {
	    }
	    UIComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(156),
	            styles: [__webpack_require__(157)],
	            selector: "ui",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], UIComponent);
	    return UIComponent;
	}());
	exports.UIComponent = UIComponent;


/***/ },
/* 156 */
/***/ function(module, exports) {

	module.exports = "<div class=\"ui\">\r\n\r\n</div>\r\n"

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(158);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./ui.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var apps_container_component_1 = __webpack_require__(160);
	var properties_container_component_1 = __webpack_require__(165);
	var sections_container_component_1 = __webpack_require__(170);
	var uis_container_component_1 = __webpack_require__(175);
	var contentAggregationContainersModule = angular.module("app.contentAggregation.containers", []);
	core_1.bootstrap(contentAggregationContainersModule, {
	    components: [
	        apps_container_component_1.AppsContainerComponent,
	        properties_container_component_1.PropertiesContainerComponent,
	        sections_container_component_1.SectionsContainerComponent,
	        uis_container_component_1.UIsContainerComponent
	    ]
	});
	__export(__webpack_require__(160));
	__export(__webpack_require__(165));
	__export(__webpack_require__(170));
	__export(__webpack_require__(175));


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(84);
	var property_actions_1 = __webpack_require__(86);
	var app_action_creator_1 = __webpack_require__(83);
	var app_model_1 = __webpack_require__(161);
	var property_action_creator_1 = __webpack_require__(85);
	var AppsContainerComponent = (function () {
	    function AppsContainerComponent($location, $routeParams, appActionCreator, _invokeAsync, propertyActionCreator) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.appActionCreator = appActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.propertyActionCreator = propertyActionCreator;
	        this.storeOnChange = function (state) {
	            _this.entities = state.apps;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentAppAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/apps");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentAppAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/app/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateAppAction)
	                _this.entity = new app_model_1.App();
	            if (state.lastTriggeredByAction instanceof actions.RemoveAppAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["appId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/apps");
	                }
	            }
	            if (state.lastTriggeredByAction instanceof property_actions_1.PropertyPickedAction && _this.entity && _this.entity.id) {
	                _this.entity.properties.push(state.lastTriggeredByAction.entity);
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["appId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["appId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new app_model_1.App();
	            }
	        };
	        this.edit = function (entity) { return _this.appActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.appActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.appActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.appActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/apps") {
	                    _this.entity = new app_model_1.App();
	                }
	                else {
	                    _this.$location.path("/admin/apps");
	                }
	            });
	        };
	        this.addOrUpdateProperty = function () { return _this.propertyActionCreator.openPropertyPickerModal(); };
	        this.addOrUpdateUI = function () { return alert("add or update ui"); };
	    }
	    AppsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/apps", "/admin/app/edit/:appId"],
	            template: __webpack_require__(162),
	            styles: [__webpack_require__(163)],
	            selector: "apps-container",
	            viewProviders: ["$location", "$routeParams", "appActionCreator", "invokeAsync", "propertyActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "appActionCreator", function ($q, $route, invokeAsync, appActionCreator) {
	                var appId = $route.current.params.appId;
	                var promises = [invokeAsync(appActionCreator.all)];
	                if (appId) {
	                    promises.push(invokeAsync({ action: appActionCreator.getById, params: { id: appId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, app_action_creator_1.AppActionCreator, Object, property_action_creator_1.PropertyActionCreator])
	    ], AppsContainerComponent);
	    return AppsContainerComponent;
	}());
	exports.AppsContainerComponent = AppsContainerComponent;


/***/ },
/* 161 */
/***/ function(module, exports) {

	"use strict";
	var App = (function () {
	    function App() {
	        this.properties = [];
	        this.uis = [];
	    }
	    return App;
	}());
	exports.App = App;


/***/ },
/* 162 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <a class=\"apps-container-add-or-update-property\" data-ng-click=\"vm.addOrUpdateProperty()\">Add Or Update Property</a>\r\n    <a class=\"apps-container-add-or-update-ui\" data-ng-click=\"vm.addOrUpdateUI()\">Add Or Update UI</a>\r\n    <app-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></app-editor>\r\n    <app-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></app-list>\r\n</div>\r\n"

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(164);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./apps-container.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./apps-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".apps-container-add-or-update-property,\n.apps-container-add-or-update-ui {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(86);
	var property_action_creator_1 = __webpack_require__(85);
	var pluck_1 = __webpack_require__(19);
	var property_model_1 = __webpack_require__(166);
	var PropertiesContainerComponent = (function () {
	    function PropertiesContainerComponent($location, $routeParams, propertyActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.propertyActionCreator = propertyActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.properties;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentPropertyAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/properties");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentPropertyAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/property/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdatePropertyAction)
	                _this.entity = new property_model_1.Property();
	            if (state.lastTriggeredByAction instanceof actions.RemovePropertyAction && _this.entity && _this.entity.id) {
	                _this.entity = pluck_1.pluck({ value: Number(_this.$routeParams["propertyId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/properties");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["propertyId"]) {
	                _this.entity = pluck_1.pluck({ value: Number(_this.$routeParams["propertyId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new property_model_1.Property();
	            }
	        };
	        this.edit = function (entity) { return _this.propertyActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.propertyActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.propertyActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.propertyActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/properties") {
	                    _this.entity = new property_model_1.Property();
	                }
	                else {
	                    _this.$location.path("/admin/properties");
	                }
	            });
	        };
	    }
	    PropertiesContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/properties", "/admin/property/edit/:propertyId"],
	            template: __webpack_require__(167),
	            styles: [__webpack_require__(168)],
	            selector: "properties-container",
	            viewProviders: ["$location", "$routeParams", "propertyActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "propertyActionCreator", function ($q, $route, invokeAsync, propertyActionCreator) {
	                var propertyId = $route.current.params.propertyId;
	                var promises = [invokeAsync(propertyActionCreator.all)];
	                if (propertyId) {
	                    promises.push(invokeAsync({ action: propertyActionCreator.getById, params: { id: propertyId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, property_action_creator_1.PropertyActionCreator, Object])
	    ], PropertiesContainerComponent);
	    return PropertiesContainerComponent;
	}());
	exports.PropertiesContainerComponent = PropertiesContainerComponent;


/***/ },
/* 166 */
/***/ function(module, exports) {

	"use strict";
	var Property = (function () {
	    function Property() {
	    }
	    return Property;
	}());
	exports.Property = Property;


/***/ },
/* 167 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <property-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></property-editor>\r\n    <property-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></property-list>\r\n</div>\r\n"

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(169);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./properties-container.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./properties-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(88);
	var section_action_creator_1 = __webpack_require__(87);
	var section_model_1 = __webpack_require__(171);
	var SectionsContainerComponent = (function () {
	    function SectionsContainerComponent($location, $routeParams, sectionActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.sectionActionCreator = sectionActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.sections;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentSectionAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/sections");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentSectionAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/section/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateSectionAction)
	                _this.entity = new section_model_1.Section();
	            if (state.lastTriggeredByAction instanceof actions.RemoveSectionAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["sectionId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/sections");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["sectionId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["sectionId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new section_model_1.Section();
	            }
	        };
	        this.edit = function (entity) { return _this.sectionActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.sectionActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.sectionActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.sectionActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/sections") {
	                    _this.entity = new section_model_1.Section();
	                }
	                else {
	                    _this.$location.path("/admin/sections");
	                }
	            });
	        };
	    }
	    SectionsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/sections", "/admin/section/edit/:sectionId"],
	            template: __webpack_require__(172),
	            styles: [__webpack_require__(173)],
	            selector: "sections-container",
	            viewProviders: ["$location", "$routeParams", "sectionActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "sectionActionCreator", function ($q, $route, invokeAsync, sectionActionCreator) {
	                var sectionId = $route.current.params.sectionId;
	                var promises = [invokeAsync(sectionActionCreator.all)];
	                if (sectionId) {
	                    promises.push(invokeAsync({ action: sectionActionCreator.getById, params: { id: sectionId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, section_action_creator_1.SectionActionCreator, Object])
	    ], SectionsContainerComponent);
	    return SectionsContainerComponent;
	}());
	exports.SectionsContainerComponent = SectionsContainerComponent;


/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";
	var Section = (function () {
	    function Section() {
	    }
	    return Section;
	}());
	exports.Section = Section;


/***/ },
/* 172 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <section-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></section-editor>\r\n    <section-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></section-list>\r\n</div>\r\n"

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(174);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./sections-container.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./sections-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(90);
	var ui_action_creator_1 = __webpack_require__(89);
	var ui_model_1 = __webpack_require__(176);
	var UIsContainerComponent = (function () {
	    function UIsContainerComponent($location, $routeParams, uiActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.uiActionCreator = uiActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.uis;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentUIAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/uis");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentUIAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/ui/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateUIAction)
	                _this.entity = new ui_model_1.UI();
	            if (state.lastTriggeredByAction instanceof actions.RemoveUIAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["uiId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/uis");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["uiId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["uiId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new ui_model_1.UI();
	            }
	        };
	        this.edit = function (entity) { return _this.uiActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.uiActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.uiActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.uiActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/uis") {
	                    _this.entity = new ui_model_1.UI();
	                }
	                else {
	                    _this.$location.path("/admin/uis");
	                }
	            });
	        };
	    }
	    UIsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/uis", "/admin/ui/edit/:uiId"],
	            template: __webpack_require__(177),
	            styles: [__webpack_require__(178)],
	            selector: "uis-container",
	            viewProviders: ["$location", "$routeParams", "uiActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "uiActionCreator", function ($q, $route, invokeAsync, uiActionCreator) {
	                var uiId = $route.current.params.uiId;
	                var promises = [invokeAsync(uiActionCreator.all)];
	                if (uiId) {
	                    promises.push(invokeAsync({ action: uiActionCreator.getById, params: { id: uiId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, ui_action_creator_1.UIActionCreator, Object])
	    ], UIsContainerComponent);
	    return UIsContainerComponent;
	}());
	exports.UIsContainerComponent = UIsContainerComponent;


/***/ },
/* 176 */
/***/ function(module, exports) {

	"use strict";
	var UI = (function () {
	    function UI() {
	    }
	    return UI;
	}());
	exports.UI = UI;


/***/ },
/* 177 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <ui-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></ui-editor>\r\n    <ui-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></ui-list>\r\n</div>\r\n"

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(179);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./uis-container.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./uis-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 180 */
/***/ function(module, exports) {

	

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(2);
	var AppReducers = __webpack_require__(182);
	var PropertyReducers = __webpack_require__(183);
	var SectionReducers = __webpack_require__(184);
	var UIReducers = __webpack_require__(185);
	var contentAggregationReducersModule = angular.module("app.contentAggregation.reducers", []);
	core_1.bootstrap(contentAggregationReducersModule, {
	    reducers: [AppReducers, PropertyReducers, SectionReducers, UIReducers]
	});


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(84);
	var core_1 = __webpack_require__(2);
	exports.removeAppReducer = function (state, action) {
	    if (action instanceof actions.RemoveAppAction)
	        core_1.pluckOut({ items: state.apps, value: action.entity.id });
	    return state;
	};
	exports.addAppReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateAppAction) {
	        core_1.addOrUpdate({ items: state.apps, item: action.entity });
	    }
	    return state;
	};
	exports.allAppsReducer = function (state, action) {
	    if (action instanceof actions.AllAppsAction) {
	        state.apps = action.entities;
	    }
	    return state;
	};
	exports.setCurrentAppReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentAppAction) {
	        state.currentAppId = action.id;
	    }
	    return state;
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(86);
	var core_1 = __webpack_require__(2);
	exports.removePropertyReducer = function (state, action) {
	    if (action instanceof actions.RemovePropertyAction)
	        core_1.pluckOut({ items: state.properties, value: action.entity.id });
	    return state;
	};
	exports.addPropertyReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdatePropertyAction) {
	        core_1.addOrUpdate({ items: state.properties, item: action.entity });
	    }
	    return state;
	};
	exports.allPropertiesReducer = function (state, action) {
	    if (action instanceof actions.AllPropertiesAction) {
	        state.properties = action.entities;
	    }
	    return state;
	};
	exports.setCurrentPropertyReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentPropertyAction) {
	        state.currentPropertyId = action.id;
	    }
	    return state;
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(88);
	var core_1 = __webpack_require__(2);
	exports.removeSectionReducer = function (state, action) {
	    if (action instanceof actions.RemoveSectionAction)
	        core_1.pluckOut({ items: state.sections, value: action.entity.id });
	    return state;
	};
	exports.addSectionReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateSectionAction) {
	        core_1.addOrUpdate({ items: state.sections, item: action.entity });
	    }
	    return state;
	};
	exports.allSectionsReducer = function (state, action) {
	    if (action instanceof actions.AllSectionsAction) {
	        state.sections = action.entities;
	    }
	    return state;
	};
	exports.setCurrentSectionReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentSectionAction) {
	        state.currentSectionId = action.id;
	    }
	    return state;
	};


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(90);
	var core_1 = __webpack_require__(2);
	exports.removeUIReducer = function (state, action) {
	    if (action instanceof actions.RemoveUIAction)
	        core_1.pluckOut({ items: state.uis, value: action.entity.id });
	    return state;
	};
	exports.addUIReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateUIAction) {
	        core_1.addOrUpdate({ items: state.uis, item: action.entity });
	    }
	    return state;
	};
	exports.allUIsReducer = function (state, action) {
	    if (action instanceof actions.AllUIsAction) {
	        state.uis = action.entities;
	    }
	    return state;
	};
	exports.setCurrentUIReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentUIAction) {
	        state.currentUiId = action.id;
	    }
	    return state;
	};


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var app_service_1 = __webpack_require__(187);
	var property_service_1 = __webpack_require__(188);
	var section_service_1 = __webpack_require__(189);
	var ui_service_1 = __webpack_require__(190);
	var contentAggregationServicesModule = angular.module("app.contentAggregation.services", []);
	core_1.bootstrap(contentAggregationServicesModule, {
	    providers: [app_service_1.AppService, property_service_1.PropertyService, section_service_1.SectionService, ui_service_1.UIService]
	});
	__export(__webpack_require__(187));
	__export(__webpack_require__(188));
	__export(__webpack_require__(189));
	__export(__webpack_require__(190));


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppService = (function (_super) {
	    __extends(AppService, _super);
	    function AppService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(AppService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/app"; },
	        enumerable: true,
	        configurable: true
	    });
	    AppService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "appService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], AppService);
	    return AppService;
	}(core_1.BaseService));
	exports.AppService = AppService;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PropertyService = (function (_super) {
	    __extends(PropertyService, _super);
	    function PropertyService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(PropertyService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/property"; },
	        enumerable: true,
	        configurable: true
	    });
	    PropertyService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "propertyService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], PropertyService);
	    return PropertyService;
	}(core_1.BaseService));
	exports.PropertyService = PropertyService;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SectionService = (function (_super) {
	    __extends(SectionService, _super);
	    function SectionService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(SectionService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/section"; },
	        enumerable: true,
	        configurable: true
	    });
	    SectionService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "sectionService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], SectionService);
	    return SectionService;
	}(core_1.BaseService));
	exports.SectionService = SectionService;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var UIService = (function (_super) {
	    __extends(UIService, _super);
	    function UIService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(UIService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/ui"; },
	        enumerable: true,
	        configurable: true
	    });
	    UIService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "uiService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], UIService);
	    return UIService;
	}(core_1.BaseService));
	exports.UIService = UIService;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var containers_1 = __webpack_require__(159);
	exports.ContentAggregationRoutes = [
	    {
	        path: "/admin/apps",
	        component: containers_1.AppsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/app/edit/:appId",
	        component: containers_1.AppsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/properties",
	        component: containers_1.PropertiesContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/property/edit/:propertyId",
	        component: containers_1.PropertiesContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/sections",
	        component: containers_1.SectionsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/section/edit/:sectionid",
	        component: containers_1.SectionsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/uis",
	        component: containers_1.UIsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/ui/edit/:uiid",
	        component: containers_1.UIsContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var customer_editor_component_1 = __webpack_require__(193);
	var customer_list_component_1 = __webpack_require__(197);
	var customer_component_1 = __webpack_require__(201);
	var customers_container_component_1 = __webpack_require__(205);
	var customer_action_creator_1 = __webpack_require__(207);
	var customer_service_1 = __webpack_require__(212);
	var reducers = __webpack_require__(213);
	var actions = __webpack_require__(206);
	var appCustomersModule = angular.module("app.customers", []);
	core_1.bootstrap(appCustomersModule, {
	    components: [customer_component_1.CustomerComponent, customer_editor_component_1.CustomerEditorComponent, customers_container_component_1.CustomersContainerComponent, customer_list_component_1.CustomerListComponent],
	    providers: [customer_action_creator_1.CustomerActionCreator, customer_service_1.CustomerService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(214));


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CustomerEditorComponent = (function () {
	    function CustomerEditorComponent() {
	    }
	    CustomerEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(194),
	            styles: [__webpack_require__(195)],
	            selector: "customer-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CustomerEditorComponent);
	    return CustomerEditorComponent;
	}());
	exports.CustomerEditorComponent = CustomerEditorComponent;


/***/ },
/* 194 */
/***/ function(module, exports) {

	module.exports = "<div class=\"customerEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Customer <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Customer: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"customer-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Customer Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"'Create'\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(196);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CustomerListComponent = (function () {
	    function CustomerListComponent() {
	    }
	    CustomerListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(198),
	            styles: [__webpack_require__(199)],
	            selector: "customer-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CustomerListComponent);
	    return CustomerListComponent;
	}());
	exports.CustomerListComponent = CustomerListComponent;


/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = "<div class=\"customerList\">\r\n    <div class=\"customerList-header\">\r\n        <h1>Customers</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"customerList-item\">\r\n        <div class=\"customerList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"customerList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(200);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".customerList-name,\n.customerList-actions {\n  position: relative;\n  float: left; }\n\n.customerList-name {\n  min-width: 200px; }\n\n.customerList-item {\n  height: 50px; }\n\n.customerList-actions span {\n  cursor: pointer; }\n\n.customerList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CustomerComponent = (function () {
	    function CustomerComponent() {
	    }
	    CustomerComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(202),
	            styles: [__webpack_require__(203)],
	            selector: "customer",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CustomerComponent);
	    return CustomerComponent;
	}());
	exports.CustomerComponent = CustomerComponent;


/***/ },
/* 202 */
/***/ function(module, exports) {

	module.exports = "<div class=\"customer\">\r\n\r\n</div>\r\n"

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(204);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customer.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(206);
	var customer_action_creator_1 = __webpack_require__(207);
	var customer_model_1 = __webpack_require__(208);
	var CustomersContainerComponent = (function () {
	    function CustomersContainerComponent($location, $routeParams, customerActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.customerActionCreator = customerActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.customers;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/customers");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentCustomerAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/customer/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateCustomerAction)
	                _this.entity = new customer_model_1.Customer();
	            if (state.lastTriggeredByAction instanceof actions.RemoveCustomerAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["customerId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/customers");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["customerId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["customerId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new customer_model_1.Customer();
	            }
	        };
	        this.edit = function (entity) { return _this.customerActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.customerActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.customerActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.customerActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/customers") {
	                    _this.entity = new customer_model_1.Customer();
	                }
	                else {
	                    _this.$location.path("/admin/customers");
	                }
	            });
	        };
	    }
	    CustomersContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/customers", "/admin/customer/edit/:customerId"],
	            template: __webpack_require__(209),
	            styles: [__webpack_require__(210)],
	            selector: "customers-container",
	            viewProviders: ["$location", "$routeParams", "customerActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "customerActionCreator", function ($q, $route, invokeAsync, customerActionCreator) {
	                var customerId = $route.current.params.customerId;
	                var promises = [invokeAsync(customerActionCreator.all)];
	                if (customerId) {
	                    promises.push(invokeAsync({ action: customerActionCreator.getById, params: { id: customerId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, customer_action_creator_1.CustomerActionCreator, Object])
	    ], CustomersContainerComponent);
	    return CustomersContainerComponent;
	}());
	exports.CustomersContainerComponent = CustomersContainerComponent;


/***/ },
/* 206 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateCustomerAction = (function () {
	    function AddOrUpdateCustomerAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateCustomerAction;
	}());
	exports.AddOrUpdateCustomerAction = AddOrUpdateCustomerAction;
	var AllCustomersAction = (function () {
	    function AllCustomersAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllCustomersAction;
	}());
	exports.AllCustomersAction = AllCustomersAction;
	var RemoveCustomerAction = (function () {
	    function RemoveCustomerAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveCustomerAction;
	}());
	exports.RemoveCustomerAction = RemoveCustomerAction;
	var CustomersFilterAction = (function () {
	    function CustomersFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return CustomersFilterAction;
	}());
	exports.CustomersFilterAction = CustomersFilterAction;
	var SetCurrentCustomerAction = (function () {
	    function SetCurrentCustomerAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentCustomerAction;
	}());
	exports.SetCurrentCustomerAction = SetCurrentCustomerAction;
	var AddOrUpdateCustomerSuccessAction = (function () {
	    function AddOrUpdateCustomerSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateCustomerSuccessAction;
	}());
	exports.AddOrUpdateCustomerSuccessAction = AddOrUpdateCustomerSuccessAction;
	var CurrentCustomerRemovedAction = (function () {
	    function CurrentCustomerRemovedAction() {
	    }
	    return CurrentCustomerRemovedAction;
	}());
	exports.CurrentCustomerRemovedAction = CurrentCustomerRemovedAction;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var customer_actions_1 = __webpack_require__(206);
	var CustomerActionCreator = (function (_super) {
	    __extends(CustomerActionCreator, _super);
	    function CustomerActionCreator($location, dispatcher, customerService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, customerService, dispatcher, guid, customer_actions_1.AddOrUpdateCustomerAction, customer_actions_1.AllCustomersAction, customer_actions_1.RemoveCustomerAction, customer_actions_1.SetCurrentCustomerAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new customer_actions_1.AddOrUpdateCustomerSuccessAction(options.entity)); };
	        this.currentCustomerRemoved = function () { return _this.dispatcher.dispatch(new customer_actions_1.CurrentCustomerRemovedAction()); };
	        this.openAllCustomersModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-customer-modal></all-customer-modal>" });
	            });
	        };
	    }
	    CustomerActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "customerActionCreator",
	            viewProviders: ["$location", "dispatcher", "customerService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], CustomerActionCreator);
	    return CustomerActionCreator;
	}(core_1.BaseActionCreator));
	exports.CustomerActionCreator = CustomerActionCreator;


/***/ },
/* 208 */
/***/ function(module, exports) {

	"use strict";
	var Customer = (function () {
	    function Customer() {
	    }
	    return Customer;
	}());
	exports.Customer = Customer;


/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <customer-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></customer-editor>\r\n    <customer-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></customer-list>\r\n</div>\r\n"

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(211);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customers-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./customers-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var CustomerService = (function (_super) {
	    __extends(CustomerService, _super);
	    function CustomerService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(CustomerService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/customer"; },
	        enumerable: true,
	        configurable: true
	    });
	    CustomerService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "customerService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], CustomerService);
	    return CustomerService;
	}(core_1.BaseService));
	exports.CustomerService = CustomerService;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(206);
	var core_1 = __webpack_require__(2);
	exports.removeCustomerReducer = function (state, action) {
	    if (action instanceof actions.RemoveCustomerAction)
	        core_1.pluckOut({ items: state.customers, value: action.entity.id });
	    return state;
	};
	exports.addCustomerReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateCustomerAction) {
	        core_1.addOrUpdate({ items: state.customers, item: action.entity });
	    }
	    return state;
	};
	exports.allCustomersReducer = function (state, action) {
	    if (action instanceof actions.AllCustomersAction) {
	        state.customers = action.entities;
	    }
	    return state;
	};
	exports.setCurrentCustomerReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentCustomerAction) {
	        state.currentCustomerId = action.id;
	    }
	    return state;
	};


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var customers_container_component_1 = __webpack_require__(205);
	exports.CustomersRoutes = [
	    {
	        path: "/admin/customers",
	        component: customers_container_component_1.CustomersContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/customer/:customerId",
	        component: customers_container_component_1.CustomersContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var gallery_editor_component_1 = __webpack_require__(216);
	var gallery_list_component_1 = __webpack_require__(220);
	var gallery_component_1 = __webpack_require__(224);
	var galleries_container_component_1 = __webpack_require__(228);
	var gallery_action_creator_1 = __webpack_require__(230);
	var gallery_service_1 = __webpack_require__(235);
	var reducers = __webpack_require__(236);
	var actions = __webpack_require__(229);
	var appGallerysModule = angular.module("app.galleries", []);
	core_1.bootstrap(appGallerysModule, {
	    components: [gallery_component_1.GalleryComponent, gallery_editor_component_1.GalleryEditorComponent, galleries_container_component_1.GalleriesContainerComponent, gallery_list_component_1.GalleryListComponent],
	    providers: [gallery_action_creator_1.GalleryActionCreator, gallery_service_1.GalleryService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(237));


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleryEditorComponent = (function () {
	    function GalleryEditorComponent() {
	    }
	    GalleryEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(217),
	            styles: [__webpack_require__(218)],
	            selector: "gallery-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GalleryEditorComponent);
	    return GalleryEditorComponent;
	}());
	exports.GalleryEditorComponent = GalleryEditorComponent;


/***/ },
/* 217 */
/***/ function(module, exports) {

	module.exports = "<div class=\"galleryEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Gallery <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Gallery: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"gallery-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Gallery Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(219);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleryListComponent = (function () {
	    function GalleryListComponent() {
	    }
	    GalleryListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(221),
	            styles: [__webpack_require__(222)],
	            selector: "gallery-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GalleryListComponent);
	    return GalleryListComponent;
	}());
	exports.GalleryListComponent = GalleryListComponent;


/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = "<div class=\"galleryList\">\r\n    <div class=\"galleryList-header\">\r\n        <h1>Galleries</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"galleryList-item\">\r\n        <div class=\"galleryList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"galleryList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(223);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".galleryList-name,\n.galleryList-actions {\n  position: relative;\n  float: left; }\n\n.galleryList-name {\n  min-width: 200px; }\n\n.galleryList-item {\n  height: 50px; }\n\n.galleryList-actions span {\n  cursor: pointer; }\n\n.galleryList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleryComponent = (function () {
	    function GalleryComponent() {
	    }
	    GalleryComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(225),
	            styles: [__webpack_require__(226)],
	            selector: "gallery",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GalleryComponent);
	    return GalleryComponent;
	}());
	exports.GalleryComponent = GalleryComponent;


/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery\">\r\n\r\n</div>\r\n"

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(227);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(229);
	var gallery_action_creator_1 = __webpack_require__(230);
	var gallery_model_1 = __webpack_require__(231);
	var GalleriesContainerComponent = (function () {
	    function GalleriesContainerComponent($location, $routeParams, galleryActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.galleryActionCreator = galleryActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.gallerys;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/galleries");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentGalleryAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/gallery/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateGalleryAction)
	                _this.entity = new gallery_model_1.Gallery();
	            if (state.lastTriggeredByAction instanceof actions.RemoveGalleryAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["galleryId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/galleries");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["galleryId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["galleryId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new gallery_model_1.Gallery();
	            }
	        };
	        this.edit = function (entity) { return _this.galleryActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.galleryActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.galleryActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.galleryActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/galleries") {
	                    _this.entity = new gallery_model_1.Gallery();
	                }
	                else {
	                    _this.$location.path("/admin/galleries");
	                }
	            });
	        };
	    }
	    GalleriesContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/galleries", "/admin/gallery/edit/:galleryId"],
	            template: __webpack_require__(232),
	            styles: [__webpack_require__(233)],
	            selector: "galleries-container",
	            viewProviders: ["$location", "$routeParams", "galleryActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "galleryActionCreator", function ($q, $route, invokeAsync, galleryActionCreator) {
	                var galleryId = $route.current.params.galleryId;
	                var promises = [invokeAsync(galleryActionCreator.all)];
	                if (galleryId) {
	                    promises.push(invokeAsync({ action: galleryActionCreator.getById, params: { id: galleryId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, gallery_action_creator_1.GalleryActionCreator, Object])
	    ], GalleriesContainerComponent);
	    return GalleriesContainerComponent;
	}());
	exports.GalleriesContainerComponent = GalleriesContainerComponent;


/***/ },
/* 229 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateGalleryAction = (function () {
	    function AddOrUpdateGalleryAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateGalleryAction;
	}());
	exports.AddOrUpdateGalleryAction = AddOrUpdateGalleryAction;
	var AllGallerysAction = (function () {
	    function AllGallerysAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllGallerysAction;
	}());
	exports.AllGallerysAction = AllGallerysAction;
	var RemoveGalleryAction = (function () {
	    function RemoveGalleryAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveGalleryAction;
	}());
	exports.RemoveGalleryAction = RemoveGalleryAction;
	var GallerysFilterAction = (function () {
	    function GallerysFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return GallerysFilterAction;
	}());
	exports.GallerysFilterAction = GallerysFilterAction;
	var SetCurrentGalleryAction = (function () {
	    function SetCurrentGalleryAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentGalleryAction;
	}());
	exports.SetCurrentGalleryAction = SetCurrentGalleryAction;
	var AddOrUpdateGallerySuccessAction = (function () {
	    function AddOrUpdateGallerySuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateGallerySuccessAction;
	}());
	exports.AddOrUpdateGallerySuccessAction = AddOrUpdateGallerySuccessAction;
	var CurrentGalleryRemovedAction = (function () {
	    function CurrentGalleryRemovedAction() {
	    }
	    return CurrentGalleryRemovedAction;
	}());
	exports.CurrentGalleryRemovedAction = CurrentGalleryRemovedAction;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var gallery_actions_1 = __webpack_require__(229);
	var GalleryActionCreator = (function (_super) {
	    __extends(GalleryActionCreator, _super);
	    function GalleryActionCreator($location, dispatcher, galleryService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, galleryService, dispatcher, guid, gallery_actions_1.AddOrUpdateGalleryAction, gallery_actions_1.AllGallerysAction, gallery_actions_1.RemoveGalleryAction, gallery_actions_1.SetCurrentGalleryAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new gallery_actions_1.AddOrUpdateGallerySuccessAction(options.entity)); };
	        this.currentGalleryRemoved = function () { return _this.dispatcher.dispatch(new gallery_actions_1.CurrentGalleryRemovedAction()); };
	        this.openAllGallerysModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-gallery-modal></all-gallery-modal>" });
	            });
	        };
	    }
	    GalleryActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "galleryActionCreator",
	            viewProviders: ["$location", "dispatcher", "galleryService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], GalleryActionCreator);
	    return GalleryActionCreator;
	}(core_1.BaseActionCreator));
	exports.GalleryActionCreator = GalleryActionCreator;


/***/ },
/* 231 */
/***/ function(module, exports) {

	"use strict";
	var Gallery = (function () {
	    function Gallery() {
	    }
	    return Gallery;
	}());
	exports.Gallery = Gallery;


/***/ },
/* 232 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <gallery-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></gallery-editor>\r\n    <gallery-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></gallery-list>\r\n</div>\r\n"

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(234);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./galleries-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./galleries-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleryService = (function (_super) {
	    __extends(GalleryService, _super);
	    function GalleryService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(GalleryService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/gallery"; },
	        enumerable: true,
	        configurable: true
	    });
	    GalleryService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "galleryService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], GalleryService);
	    return GalleryService;
	}(core_1.BaseService));
	exports.GalleryService = GalleryService;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(229);
	var core_1 = __webpack_require__(2);
	exports.removeGalleryReducer = function (state, action) {
	    if (action instanceof actions.RemoveGalleryAction)
	        core_1.pluckOut({ items: state.gallerys, value: action.entity.id });
	    return state;
	};
	exports.addGalleryReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateGalleryAction) {
	        core_1.addOrUpdate({ items: state.gallerys, item: action.entity });
	    }
	    return state;
	};
	exports.allGallerysReducer = function (state, action) {
	    if (action instanceof actions.AllGallerysAction) {
	        state.gallerys = action.entities;
	    }
	    return state;
	};
	exports.setCurrentGalleryReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentGalleryAction) {
	        state.currentGalleryId = action.id;
	    }
	    return state;
	};


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var galleries_container_component_1 = __webpack_require__(228);
	exports.GalleriesRoutes = [
	    {
	        path: "/admin/galleries",
	        component: galleries_container_component_1.GalleriesContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/gallery/edit/:galleryId",
	        component: galleries_container_component_1.GalleriesContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var menu_item_editor_component_1 = __webpack_require__(239);
	var menu_item_list_component_1 = __webpack_require__(243);
	var menu_item_component_1 = __webpack_require__(247);
	var menu_items_container_component_1 = __webpack_require__(251);
	var menu_item_action_creator_1 = __webpack_require__(253);
	var menu_item_service_1 = __webpack_require__(258);
	var reducers = __webpack_require__(259);
	var actions = __webpack_require__(252);
	var appMenuItemsModule = angular.module("app.menuItems", []);
	core_1.bootstrap(appMenuItemsModule, {
	    components: [menu_item_component_1.MenuItemComponent, menu_item_editor_component_1.MenuItemEditorComponent, menu_items_container_component_1.MenuItemsContainerComponent, menu_item_list_component_1.MenuItemListComponent],
	    providers: [menu_item_action_creator_1.MenuItemActionCreator, menu_item_service_1.MenuItemService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(260));


/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuItemEditorComponent = (function () {
	    function MenuItemEditorComponent() {
	    }
	    MenuItemEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(240),
	            styles: [__webpack_require__(241)],
	            selector: "menu-item-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuItemEditorComponent);
	    return MenuItemEditorComponent;
	}());
	exports.MenuItemEditorComponent = MenuItemEditorComponent;


/***/ },
/* 240 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menuItemEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Menu Item <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Menu Item: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"menu-item-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Menu Item Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"'Create'\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(242);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuItemListComponent = (function () {
	    function MenuItemListComponent() {
	    }
	    MenuItemListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(244),
	            styles: [__webpack_require__(245)],
	            selector: "menu-item-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuItemListComponent);
	    return MenuItemListComponent;
	}());
	exports.MenuItemListComponent = MenuItemListComponent;


/***/ },
/* 244 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menuItemList\">\r\n    <div class=\"menuItemList-header\">\r\n        <h1>MenuItems</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"menuItemList-item\">\r\n        <div class=\"menuItemList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"menuItemList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(246);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".menuItemList-name,\n.menuItemList-actions {\n  position: relative;\n  float: left; }\n\n.menuItemList-name {\n  min-width: 200px; }\n\n.menuItemList-item {\n  height: 50px; }\n\n.menuItemList-actions span {\n  cursor: pointer; }\n\n.menuItemList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuItemComponent = (function () {
	    function MenuItemComponent() {
	    }
	    MenuItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(248),
	            styles: [__webpack_require__(249)],
	            selector: "menu-item",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuItemComponent);
	    return MenuItemComponent;
	}());
	exports.MenuItemComponent = MenuItemComponent;


/***/ },
/* 248 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menu-item\">\r\n\r\n</div>\r\n"

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(250);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(252);
	var menu_item_action_creator_1 = __webpack_require__(253);
	var menu_item_model_1 = __webpack_require__(254);
	var MenuItemsContainerComponent = (function () {
	    function MenuItemsContainerComponent($location, $routeParams, menuItemActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.menuItemActionCreator = menuItemActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.menuItems;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentMenuItemAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/menuitems");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentMenuItemAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/menuitem/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateMenuItemAction)
	                _this.entity = new menu_item_model_1.MenuItem();
	            if (state.lastTriggeredByAction instanceof actions.RemoveMenuItemAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["menuItemId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/menuitems");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["menuItemId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["menuItemId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new menu_item_model_1.MenuItem();
	            }
	        };
	        this.edit = function (entity) { return _this.menuItemActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.menuItemActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.menuItemActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.menuItemActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/menuitems") {
	                    _this.entity = new menu_item_model_1.MenuItem();
	                }
	                else {
	                    _this.$location.path("/admin/menuitems");
	                }
	            });
	        };
	    }
	    MenuItemsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/menuitems", "/admin/menuitem/edit/:menuItemId"],
	            template: __webpack_require__(255),
	            styles: [__webpack_require__(256)],
	            selector: "menu-items-container",
	            viewProviders: ["$location", "$routeParams", "menuItemActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "menuItemActionCreator", function ($q, $route, invokeAsync, menuItemActionCreator) {
	                var menuItemId = $route.current.params.menuItemId;
	                var promises = [invokeAsync(menuItemActionCreator.all)];
	                if (menuItemId) {
	                    promises.push(invokeAsync({ action: menuItemActionCreator.getById, params: { id: menuItemId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, menu_item_action_creator_1.MenuItemActionCreator, Object])
	    ], MenuItemsContainerComponent);
	    return MenuItemsContainerComponent;
	}());
	exports.MenuItemsContainerComponent = MenuItemsContainerComponent;


/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateMenuItemAction = (function () {
	    function AddOrUpdateMenuItemAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateMenuItemAction;
	}());
	exports.AddOrUpdateMenuItemAction = AddOrUpdateMenuItemAction;
	var AllMenuItemsAction = (function () {
	    function AllMenuItemsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllMenuItemsAction;
	}());
	exports.AllMenuItemsAction = AllMenuItemsAction;
	var RemoveMenuItemAction = (function () {
	    function RemoveMenuItemAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveMenuItemAction;
	}());
	exports.RemoveMenuItemAction = RemoveMenuItemAction;
	var MenuItemsFilterAction = (function () {
	    function MenuItemsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return MenuItemsFilterAction;
	}());
	exports.MenuItemsFilterAction = MenuItemsFilterAction;
	var SetCurrentMenuItemAction = (function () {
	    function SetCurrentMenuItemAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentMenuItemAction;
	}());
	exports.SetCurrentMenuItemAction = SetCurrentMenuItemAction;
	var AddOrUpdateMenuItemSuccessAction = (function () {
	    function AddOrUpdateMenuItemSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateMenuItemSuccessAction;
	}());
	exports.AddOrUpdateMenuItemSuccessAction = AddOrUpdateMenuItemSuccessAction;
	var CurrentMenuItemRemovedAction = (function () {
	    function CurrentMenuItemRemovedAction() {
	    }
	    return CurrentMenuItemRemovedAction;
	}());
	exports.CurrentMenuItemRemovedAction = CurrentMenuItemRemovedAction;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var menu_item_actions_1 = __webpack_require__(252);
	var MenuItemActionCreator = (function (_super) {
	    __extends(MenuItemActionCreator, _super);
	    function MenuItemActionCreator($location, dispatcher, menuItemService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, menuItemService, dispatcher, guid, menu_item_actions_1.AddOrUpdateMenuItemAction, menu_item_actions_1.AllMenuItemsAction, menu_item_actions_1.RemoveMenuItemAction, menu_item_actions_1.SetCurrentMenuItemAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new menu_item_actions_1.AddOrUpdateMenuItemSuccessAction(options.entity)); };
	        this.currentMenuItemRemoved = function () { return _this.dispatcher.dispatch(new menu_item_actions_1.CurrentMenuItemRemovedAction()); };
	        this.openAllMenuItemsModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-menu-item-modal></all-menu-item-modal>" });
	            });
	        };
	    }
	    MenuItemActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "menuItemActionCreator",
	            viewProviders: ["$location", "dispatcher", "menuItemService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], MenuItemActionCreator);
	    return MenuItemActionCreator;
	}(core_1.BaseActionCreator));
	exports.MenuItemActionCreator = MenuItemActionCreator;


/***/ },
/* 254 */
/***/ function(module, exports) {

	"use strict";
	var MenuItem = (function () {
	    function MenuItem() {
	    }
	    return MenuItem;
	}());
	exports.MenuItem = MenuItem;


/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <menu-item-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></menu-item-editor>\r\n    <menu-item-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></menu-item-list>\r\n</div>\r\n"

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(257);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-items-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-items-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuItemService = (function (_super) {
	    __extends(MenuItemService, _super);
	    function MenuItemService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(MenuItemService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/menuItem"; },
	        enumerable: true,
	        configurable: true
	    });
	    MenuItemService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "menuItemService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], MenuItemService);
	    return MenuItemService;
	}(core_1.BaseService));
	exports.MenuItemService = MenuItemService;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(252);
	var core_1 = __webpack_require__(2);
	exports.removeMenuItemReducer = function (state, action) {
	    if (action instanceof actions.RemoveMenuItemAction)
	        core_1.pluckOut({ items: state.menuItems, value: action.entity.id });
	    return state;
	};
	exports.addMenuItemReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateMenuItemAction) {
	        core_1.addOrUpdate({ items: state.menuItems, item: action.entity });
	    }
	    return state;
	};
	exports.allMenuItemsReducer = function (state, action) {
	    if (action instanceof actions.AllMenuItemsAction) {
	        state.menuItems = action.entities;
	    }
	    return state;
	};
	exports.setCurrentMenuItemReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentMenuItemAction) {
	        state.currentMenuItemId = action.id;
	    }
	    return state;
	};


/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var menu_items_container_component_1 = __webpack_require__(251);
	exports.MenuItemsRoutes = [
	    {
	        path: "/admin/menuitems",
	        component: menu_items_container_component_1.MenuItemsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/menuitem/:menuitemid",
	        component: menu_items_container_component_1.MenuItemsContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var menu_editor_component_1 = __webpack_require__(262);
	var menu_list_component_1 = __webpack_require__(266);
	var menu_component_1 = __webpack_require__(270);
	var menus_container_component_1 = __webpack_require__(274);
	var menu_action_creator_1 = __webpack_require__(276);
	var menu_service_1 = __webpack_require__(281);
	var reducers = __webpack_require__(282);
	var actions = __webpack_require__(275);
	var appMenusModule = angular.module("app.menus", []);
	core_1.bootstrap(appMenusModule, {
	    components: [menu_component_1.MenuComponent, menu_editor_component_1.MenuEditorComponent, menus_container_component_1.MenusContainerComponent, menu_list_component_1.MenuListComponent],
	    providers: [menu_action_creator_1.MenuActionCreator, menu_service_1.MenuService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(283));


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuEditorComponent = (function () {
	    function MenuEditorComponent() {
	    }
	    MenuEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(263),
	            styles: [__webpack_require__(264)],
	            selector: "menu-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuEditorComponent);
	    return MenuEditorComponent;
	}());
	exports.MenuEditorComponent = MenuEditorComponent;


/***/ },
/* 263 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menuEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Menu <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Menu: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"menu-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Menu Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"'Create'\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(265);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuListComponent = (function () {
	    function MenuListComponent() {
	    }
	    MenuListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(267),
	            styles: [__webpack_require__(268)],
	            selector: "menu-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuListComponent);
	    return MenuListComponent;
	}());
	exports.MenuListComponent = MenuListComponent;


/***/ },
/* 267 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menuList\">\r\n    <div class=\"menuList-header\">\r\n        <h1>Menus</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"menuList-item\">\r\n        <div class=\"menuList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"menuList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(269);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".menuList-name,\n.menuList-actions {\n  position: relative;\n  float: left; }\n\n.menuList-name {\n  min-width: 200px; }\n\n.menuList-item {\n  height: 50px; }\n\n.menuList-actions span {\n  cursor: pointer; }\n\n.menuList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuComponent = (function () {
	    function MenuComponent() {
	    }
	    MenuComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(271),
	            styles: [__webpack_require__(272)],
	            selector: "menu",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], MenuComponent);
	    return MenuComponent;
	}());
	exports.MenuComponent = MenuComponent;


/***/ },
/* 271 */
/***/ function(module, exports) {

	module.exports = "<div class=\"menu\">\r\n\r\n</div>\r\n"

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(273);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menu.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(275);
	var menu_action_creator_1 = __webpack_require__(276);
	var menu_model_1 = __webpack_require__(277);
	var MenusContainerComponent = (function () {
	    function MenusContainerComponent($location, $routeParams, menuActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.menuActionCreator = menuActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.menus;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentMenuAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/menus");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentMenuAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/menu/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateMenuAction)
	                _this.entity = new menu_model_1.Menu();
	            if (state.lastTriggeredByAction instanceof actions.RemoveMenuAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["menuId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/menus");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["menuId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["menuId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new menu_model_1.Menu();
	            }
	        };
	        this.edit = function (entity) { return _this.menuActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.menuActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.menuActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.menuActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/menus") {
	                    _this.entity = new menu_model_1.Menu();
	                }
	                else {
	                    _this.$location.path("/admin/menus");
	                }
	            });
	        };
	    }
	    MenusContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/menus", "/admin/menu/edit/:menuId"],
	            template: __webpack_require__(278),
	            styles: [__webpack_require__(279)],
	            selector: "menus-container",
	            viewProviders: ["$location", "$routeParams", "menuActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "menuActionCreator", function ($q, $route, invokeAsync, menuActionCreator) {
	                var menuId = $route.current.params.menuId;
	                var promises = [invokeAsync(menuActionCreator.all)];
	                if (menuId) {
	                    promises.push(invokeAsync({ action: menuActionCreator.getById, params: { id: menuId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, menu_action_creator_1.MenuActionCreator, Object])
	    ], MenusContainerComponent);
	    return MenusContainerComponent;
	}());
	exports.MenusContainerComponent = MenusContainerComponent;


/***/ },
/* 275 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateMenuAction = (function () {
	    function AddOrUpdateMenuAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateMenuAction;
	}());
	exports.AddOrUpdateMenuAction = AddOrUpdateMenuAction;
	var AllMenusAction = (function () {
	    function AllMenusAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllMenusAction;
	}());
	exports.AllMenusAction = AllMenusAction;
	var RemoveMenuAction = (function () {
	    function RemoveMenuAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveMenuAction;
	}());
	exports.RemoveMenuAction = RemoveMenuAction;
	var MenusFilterAction = (function () {
	    function MenusFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return MenusFilterAction;
	}());
	exports.MenusFilterAction = MenusFilterAction;
	var SetCurrentMenuAction = (function () {
	    function SetCurrentMenuAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentMenuAction;
	}());
	exports.SetCurrentMenuAction = SetCurrentMenuAction;
	var AddOrUpdateMenuSuccessAction = (function () {
	    function AddOrUpdateMenuSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateMenuSuccessAction;
	}());
	exports.AddOrUpdateMenuSuccessAction = AddOrUpdateMenuSuccessAction;
	var CurrentMenuRemovedAction = (function () {
	    function CurrentMenuRemovedAction() {
	    }
	    return CurrentMenuRemovedAction;
	}());
	exports.CurrentMenuRemovedAction = CurrentMenuRemovedAction;


/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var menu_actions_1 = __webpack_require__(275);
	var MenuActionCreator = (function (_super) {
	    __extends(MenuActionCreator, _super);
	    function MenuActionCreator($location, dispatcher, menuService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, menuService, dispatcher, guid, menu_actions_1.AddOrUpdateMenuAction, menu_actions_1.AllMenusAction, menu_actions_1.RemoveMenuAction, menu_actions_1.SetCurrentMenuAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new menu_actions_1.AddOrUpdateMenuSuccessAction(options.entity)); };
	        this.currentMenuRemoved = function () { return _this.dispatcher.dispatch(new menu_actions_1.CurrentMenuRemovedAction()); };
	        this.openAllMenusModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-menu-modal></all-menu-modal>" });
	            });
	        };
	    }
	    MenuActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "menuActionCreator",
	            viewProviders: ["$location", "dispatcher", "menuService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], MenuActionCreator);
	    return MenuActionCreator;
	}(core_1.BaseActionCreator));
	exports.MenuActionCreator = MenuActionCreator;


/***/ },
/* 277 */
/***/ function(module, exports) {

	"use strict";
	var Menu = (function () {
	    function Menu() {
	    }
	    return Menu;
	}());
	exports.Menu = Menu;


/***/ },
/* 278 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <menu-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></menu-editor>\r\n    <menu-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></menu-list>\r\n</div>\r\n"

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(280);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menus-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./menus-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var MenuService = (function (_super) {
	    __extends(MenuService, _super);
	    function MenuService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(MenuService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/menu"; },
	        enumerable: true,
	        configurable: true
	    });
	    MenuService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "menuService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], MenuService);
	    return MenuService;
	}(core_1.BaseService));
	exports.MenuService = MenuService;


/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(275);
	var core_1 = __webpack_require__(2);
	exports.removeMenuReducer = function (state, action) {
	    if (action instanceof actions.RemoveMenuAction)
	        core_1.pluckOut({ items: state.menus, value: action.entity.id });
	    return state;
	};
	exports.addMenuReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateMenuAction) {
	        core_1.addOrUpdate({ items: state.menus, item: action.entity });
	    }
	    return state;
	};
	exports.allMenusReducer = function (state, action) {
	    if (action instanceof actions.AllMenusAction) {
	        state.menus = action.entities;
	    }
	    return state;
	};
	exports.setCurrentMenuReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentMenuAction) {
	        state.currentMenuId = action.id;
	    }
	    return state;
	};


/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var menus_container_component_1 = __webpack_require__(274);
	exports.MenusRoutes = [
	    {
	        path: "/admin/menus",
	        component: menus_container_component_1.MenusContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/menu/edit/:photoId",
	        component: menus_container_component_1.MenusContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var biography_page_component_1 = __webpack_require__(285);
	var contact_page_component_1 = __webpack_require__(289);
	var home_page_component_1 = __webpack_require__(293);
	var galleries_page_component_1 = __webpack_require__(297);
	var gallery_page_component_1 = __webpack_require__(301);
	var login_page_component_1 = __webpack_require__(305);
	var professional_services_page_component_1 = __webpack_require__(309);
	var whats_new_page_component_1 = __webpack_require__(313);
	var pagesModule = angular.module("app.pages", []);
	core_1.bootstrap(pagesModule, {
	    components: [
	        biography_page_component_1.BiographyPageComponent,
	        contact_page_component_1.ContactPageComponent,
	        galleries_page_component_1.GalleriesPageComponent,
	        gallery_page_component_1.GalleryPageComponent,
	        home_page_component_1.HomePageComponent,
	        login_page_component_1.LoginPageComponent,
	        professional_services_page_component_1.ProfessionalServicesPageComponent,
	        whats_new_page_component_1.WhatsNewPageComponent
	    ]
	});
	__export(__webpack_require__(317));


/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var BiographyPageComponent = (function () {
	    function BiographyPageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.biographyPageHeroImageUrl = state.app.biographyPageHeroImageUrl;
	        };
	    }
	    BiographyPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(286),
	            styles: [__webpack_require__(287)],
	            selector: "biography-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BiographyPageComponent);
	    return BiographyPageComponent;
	}());
	exports.BiographyPageComponent = BiographyPageComponent;


/***/ },
/* 286 */
/***/ function(module, exports) {

	module.exports = "<div class=\"biography-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(288);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./biography-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./biography-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ContactPageComponent = (function () {
	    function ContactPageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.contactPageHeroImageUrl = state.app.contactPageHeroImageUrl;
	        };
	    }
	    ContactPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(290),
	            styles: [__webpack_require__(291)],
	            selector: "contact-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ContactPageComponent);
	    return ContactPageComponent;
	}());
	exports.ContactPageComponent = ContactPageComponent;


/***/ },
/* 290 */
/***/ function(module, exports) {

	module.exports = "<div class=\"contact-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(292);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./contact-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var HomePageComponent = (function () {
	    function HomePageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.homePageHeroImageUrl = state.app.homePageHeroImageUrl;
	        };
	    }
	    HomePageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(294),
	            styles: [__webpack_require__(295)],
	            selector: "home-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomePageComponent);
	    return HomePageComponent;
	}());
	exports.HomePageComponent = HomePageComponent;


/***/ },
/* 294 */
/***/ function(module, exports) {

	module.exports = "<div class=\"home-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(296);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./home-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleriesPageComponent = (function () {
	    function GalleriesPageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.galleriesPageHeroImageUrl = state.app.galleriesPageHeroImageUrl;
	        };
	    }
	    GalleriesPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(298),
	            styles: [__webpack_require__(299)],
	            selector: "galleries-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GalleriesPageComponent);
	    return GalleriesPageComponent;
	}());
	exports.GalleriesPageComponent = GalleriesPageComponent;


/***/ },
/* 298 */
/***/ function(module, exports) {

	module.exports = "<div class=\"galleries-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(300);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./galleries-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./galleries-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var GalleryPageComponent = (function () {
	    function GalleryPageComponent() {
	        this.storeOnChange = function (state) {
	        };
	    }
	    GalleryPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(302),
	            styles: [__webpack_require__(303)],
	            selector: "gallery-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GalleryPageComponent);
	    return GalleryPageComponent;
	}());
	exports.GalleryPageComponent = GalleryPageComponent;


/***/ },
/* 302 */
/***/ function(module, exports) {

	module.exports = "<div class=\"gallery-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(304);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./gallery-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var LoginPageComponent = (function () {
	    function LoginPageComponent(loginRedirect) {
	        var _this = this;
	        this.loginRedirect = loginRedirect;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByActionType == "login.userLoggedInAction")
	                _this.loginRedirect.redirectPreLogin();
	        };
	    }
	    LoginPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(306),
	            styles: [__webpack_require__(307)],
	            selector: "login-page",
	            viewProviders: ["loginRedirect"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], LoginPageComponent);
	    return LoginPageComponent;
	}());
	exports.LoginPageComponent = LoginPageComponent;


/***/ },
/* 306 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login-page\">\r\n    <login></login>\r\n</div>\r\n"

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(308);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./login-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProfessionalServicesPageComponent = (function () {
	    function ProfessionalServicesPageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.servicesPageHeroImageUrl = state.app.servicesPageHeroImageUrl;
	        };
	    }
	    ProfessionalServicesPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(310),
	            styles: [__webpack_require__(311)],
	            selector: "professional-services-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProfessionalServicesPageComponent);
	    return ProfessionalServicesPageComponent;
	}());
	exports.ProfessionalServicesPageComponent = ProfessionalServicesPageComponent;


/***/ },
/* 310 */
/***/ function(module, exports) {

	module.exports = "<div class=\"professional-services-page\">\r\n\r\n</div>\r\n"

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(312);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-services-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-services-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var WhatsNewPageComponent = (function () {
	    function WhatsNewPageComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.whatsNewPageHeroImageUrl = state.app.whatsNewPageHeroImageUrl;
	        };
	    }
	    WhatsNewPageComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(314),
	            styles: [__webpack_require__(315)],
	            selector: "whats-new-page",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WhatsNewPageComponent);
	    return WhatsNewPageComponent;
	}());
	exports.WhatsNewPageComponent = WhatsNewPageComponent;


/***/ },
/* 314 */
/***/ function(module, exports) {

	module.exports = "<div class=\"whats-new-page\">    \r\n    <hero hero-image-url=\"{{ ::vm.whatsNewPageHeroImageUrl }}\" width=\"100%\" height=\"400px\"></hero>\r\n</div>\r\n"

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(316);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./whats-new-page.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./whats-new-page.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var biography_page_component_1 = __webpack_require__(285);
	var contact_page_component_1 = __webpack_require__(289);
	var home_page_component_1 = __webpack_require__(293);
	var galleries_page_component_1 = __webpack_require__(297);
	var gallery_page_component_1 = __webpack_require__(301);
	var login_page_component_1 = __webpack_require__(305);
	var professional_services_page_component_1 = __webpack_require__(309);
	var whats_new_page_component_1 = __webpack_require__(313);
	exports.PagesRoutes = [
	    {
	        path: "/",
	        component: home_page_component_1.HomePageComponent
	    },
	    {
	        path: "/biography",
	        component: biography_page_component_1.BiographyPageComponent
	    },
	    {
	        path: "/contact",
	        component: contact_page_component_1.ContactPageComponent
	    },
	    {
	        path: "/login",
	        component: login_page_component_1.LoginPageComponent
	    },
	    {
	        path: "/services",
	        component: professional_services_page_component_1.ProfessionalServicesPageComponent
	    },
	    {
	        path: "/galleries",
	        component: galleries_page_component_1.GalleriesPageComponent
	    },
	    {
	        path: "/gallery/:slug",
	        component: gallery_page_component_1.GalleryPageComponent
	    },
	    {
	        path: "/whats-new",
	        component: whats_new_page_component_1.WhatsNewPageComponent
	    }
	];


/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var photo_editor_component_1 = __webpack_require__(319);
	var photo_list_component_1 = __webpack_require__(323);
	var photo_component_1 = __webpack_require__(327);
	var photos_container_component_1 = __webpack_require__(331);
	var photo_upload_modal_component_1 = __webpack_require__(338);
	var photo_upload_component_1 = __webpack_require__(342);
	var photo_action_creator_1 = __webpack_require__(333);
	var photo_service_1 = __webpack_require__(346);
	var reducers = __webpack_require__(347);
	var actions = __webpack_require__(332);
	var appPhotosModule = angular.module("app.photos", []);
	core_1.bootstrap(appPhotosModule, {
	    components: [photo_component_1.PhotoComponent, photo_editor_component_1.PhotoEditorComponent, photos_container_component_1.PhotosContainerComponent, photo_list_component_1.PhotoListComponent, photo_upload_component_1.PhotoUploadComponent, photo_upload_modal_component_1.PhotoUploadModalComponent],
	    providers: [photo_action_creator_1.PhotoActionCreator, photo_service_1.PhotoService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(348));


/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PhotoEditorComponent = (function () {
	    function PhotoEditorComponent() {
	    }
	    PhotoEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(320),
	            styles: [__webpack_require__(321)],
	            selector: "photo-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create', 'upload'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PhotoEditorComponent);
	    return PhotoEditorComponent;
	}());
	exports.PhotoEditorComponent = PhotoEditorComponent;


/***/ },
/* 320 */
/***/ function(module, exports) {

	module.exports = "<div class=\"photoEditor\">\r\n\r\n    <h1 data-ng-if=\"!vm.entity.id\">Create Photo <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Photo: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"photo-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <a data-ng-click=\"vm.upload()\" style=\"line-height:3em;cursor:pointer;\">Upload</a>\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"File Name\" data-ng-model=\"vm.entity.fileName\" />\r\n            </div>\r\n            <div>\r\n                <textarea data-ng-model=\"vm.entity.description\"></textarea>\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(322);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PhotoListComponent = (function () {
	    function PhotoListComponent() {
	    }
	    PhotoListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(324),
	            styles: [__webpack_require__(325)],
	            selector: "photo-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PhotoListComponent);
	    return PhotoListComponent;
	}());
	exports.PhotoListComponent = PhotoListComponent;


/***/ },
/* 324 */
/***/ function(module, exports) {

	module.exports = "<div class=\"photoList\">\r\n    <div class=\"photoList-header\">\r\n        <h1>Photos</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"photoList-item\">\r\n        <div class=\"photoList-name\">\r\n            {{ entity.fileName }}\r\n        </div>\r\n        <div class=\"photoList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(326);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".photoList-name,\n.photoList-actions {\n  position: relative;\n  float: left; }\n\n.photoList-name {\n  min-width: 200px; }\n\n.photoList-item {\n  height: 50px; }\n\n.photoList-actions span {\n  cursor: pointer; }\n\n.photoList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PhotoComponent = (function () {
	    function PhotoComponent() {
	    }
	    PhotoComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(328),
	            styles: [__webpack_require__(329)],
	            selector: "photo",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PhotoComponent);
	    return PhotoComponent;
	}());
	exports.PhotoComponent = PhotoComponent;


/***/ },
/* 328 */
/***/ function(module, exports) {

	module.exports = "<div class=\"photo\">\r\n\r\n</div>\r\n"

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(330);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(332);
	var photo_action_creator_1 = __webpack_require__(333);
	var photo_model_1 = __webpack_require__(334);
	var PhotosContainerComponent = (function () {
	    function PhotosContainerComponent($location, $routeParams, photoActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.photoActionCreator = photoActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.photos;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/photos");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentPhotoAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/photo/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdatePhotoAction)
	                _this.entity = new photo_model_1.Photo();
	            if (state.lastTriggeredByAction instanceof actions.RemovePhotoAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["photoId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/photos");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["photoId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["photoId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new photo_model_1.Photo();
	            }
	        };
	        this.upload = function () { return _this.photoActionCreator.openPhotoUploadModal(); };
	        this.edit = function (entity) { return _this.photoActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.photoActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.photoActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.photoActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/photos") {
	                    _this.entity = new photo_model_1.Photo();
	                }
	                else {
	                    _this.$location.path("/admin/photos");
	                }
	            });
	        };
	    }
	    PhotosContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/photos", "/admin/photo/edit/:photoId"],
	            template: __webpack_require__(335),
	            styles: [__webpack_require__(336)],
	            selector: "photos-container",
	            viewProviders: ["$location", "$routeParams", "photoActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "photoActionCreator", function ($q, $route, invokeAsync, photoActionCreator) {
	                var photoId = $route.current.params.photoId;
	                var promises = [invokeAsync(photoActionCreator.all)];
	                if (photoId) {
	                    promises.push(invokeAsync({ action: photoActionCreator.getById, params: { id: photoId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, photo_action_creator_1.PhotoActionCreator, Object])
	    ], PhotosContainerComponent);
	    return PhotosContainerComponent;
	}());
	exports.PhotosContainerComponent = PhotosContainerComponent;


/***/ },
/* 332 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdatePhotoAction = (function () {
	    function AddOrUpdatePhotoAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdatePhotoAction;
	}());
	exports.AddOrUpdatePhotoAction = AddOrUpdatePhotoAction;
	var AllPhotosAction = (function () {
	    function AllPhotosAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllPhotosAction;
	}());
	exports.AllPhotosAction = AllPhotosAction;
	var RemovePhotoAction = (function () {
	    function RemovePhotoAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemovePhotoAction;
	}());
	exports.RemovePhotoAction = RemovePhotoAction;
	var PhotosFilterAction = (function () {
	    function PhotosFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return PhotosFilterAction;
	}());
	exports.PhotosFilterAction = PhotosFilterAction;
	var SetCurrentPhotoAction = (function () {
	    function SetCurrentPhotoAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentPhotoAction;
	}());
	exports.SetCurrentPhotoAction = SetCurrentPhotoAction;
	var AddOrUpdatePhotoSuccessAction = (function () {
	    function AddOrUpdatePhotoSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdatePhotoSuccessAction;
	}());
	exports.AddOrUpdatePhotoSuccessAction = AddOrUpdatePhotoSuccessAction;
	var CurrentPhotoRemovedAction = (function () {
	    function CurrentPhotoRemovedAction() {
	    }
	    return CurrentPhotoRemovedAction;
	}());
	exports.CurrentPhotoRemovedAction = CurrentPhotoRemovedAction;
	var PhotoUploadAction = (function () {
	    function PhotoUploadAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return PhotoUploadAction;
	}());
	exports.PhotoUploadAction = PhotoUploadAction;


/***/ },
/* 333 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var photo_actions_1 = __webpack_require__(332);
	var PhotoActionCreator = (function (_super) {
	    __extends(PhotoActionCreator, _super);
	    function PhotoActionCreator($location, dispatcher, photoService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, photoService, dispatcher, guid, photo_actions_1.AddOrUpdatePhotoAction, photo_actions_1.AllPhotosAction, photo_actions_1.RemovePhotoAction, photo_actions_1.SetCurrentPhotoAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new photo_actions_1.AddOrUpdatePhotoSuccessAction(options.entity)); };
	        this.currentPhotoRemoved = function () { return _this.dispatcher.dispatch(new photo_actions_1.CurrentPhotoRemovedAction()); };
	        this.upload = function (dragEvent) {
	            dragEvent.stopPropagation();
	            dragEvent.preventDefault();
	            var newId = _this.guid();
	            if (dragEvent.dataTransfer && dragEvent.dataTransfer.files) {
	                var packageFiles = function (fileList) {
	                    var formData = new FormData();
	                    for (var i = 0; i < fileList.length; i++) {
	                        formData.append(fileList[i].name, fileList[i]);
	                    }
	                    return formData;
	                };
	                _this.service
	                    .tryToUpload({ data: packageFiles(dragEvent.dataTransfer.files) })
	                    .then(function (response) {
	                    _this.dispatcher.dispatch(new photo_actions_1.PhotoUploadAction(newId, response.files));
	                });
	            }
	            return newId;
	        };
	        this.openPhotoUploadModal = function () {
	            _this.modalActionCreator.open({ html: "<photo-upload-modal></photo-upload-modal>" });
	        };
	        this.openPhotoPickerModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<photo-picker-modal></photo-picker-modal>" });
	            });
	        };
	    }
	    PhotoActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "photoActionCreator",
	            viewProviders: [
	                "$location", "dispatcher", "photoService", "guid", "invokeAsync", "modalActionCreator"
	            ]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], PhotoActionCreator);
	    return PhotoActionCreator;
	}(core_1.BaseActionCreator));
	exports.PhotoActionCreator = PhotoActionCreator;


/***/ },
/* 334 */
/***/ function(module, exports) {

	"use strict";
	var Photo = (function () {
	    function Photo() {
	    }
	    return Photo;
	}());
	exports.Photo = Photo;


/***/ },
/* 335 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <photo-editor entity=\"vm.entity\"\r\n                  edit=\"vm.edit\"\r\n                  remove=\"vm.remove\"\r\n                  add-or-update=\"vm.addOrUpdate\"\r\n                  create=\"vm.create\"\r\n                  upload=\"vm.upload\"></photo-editor>\r\n    <photo-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></photo-list>\r\n</div>\r\n"

/***/ },
/* 336 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(337);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photos-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photos-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 338 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var photo_actions_1 = __webpack_require__(332);
	var modal_action_creator_1 = __webpack_require__(72);
	var PhotoUploadModalComponent = (function () {
	    function PhotoUploadModalComponent(modalActionCreator) {
	        var _this = this;
	        this.modalActionCreator = modalActionCreator;
	        this.storeOnChange = function (state) {
	            if (state.lastTriggeredByAction instanceof photo_actions_1.PhotoUploadAction) {
	                _this.close();
	            }
	        };
	        this.close = function () { return _this.modalActionCreator.close(); };
	    }
	    PhotoUploadModalComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(339),
	            styles: __webpack_require__(340),
	            selector: "photo-upload-modal",
	            viewProviders: ["modalActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [modal_action_creator_1.ModalActionCreator])
	    ], PhotoUploadModalComponent);
	    return PhotoUploadModalComponent;
	}());
	exports.PhotoUploadModalComponent = PhotoUploadModalComponent;


/***/ },
/* 339 */
/***/ function(module, exports) {

	module.exports = "<div class=\"photo-upload-modal\">\r\n    \r\n    <modal>\r\n\r\n        <modal-title>Photo Upload</modal-title>\r\n\r\n        <modal-content>\r\n\r\n            <photo-upload></photo-upload>\r\n        \r\n        </modal-content>\r\n\r\n    </modal>\r\n\r\n</div>"

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(341);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-upload-modal.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-upload-modal.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 342 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var photo_action_creator_1 = __webpack_require__(333);
	var PhotoUploadComponent = (function () {
	    function PhotoUploadComponent($element, photoActionCreator) {
	        var _this = this;
	        this.$element = $element;
	        this.photoActionCreator = photoActionCreator;
	        this.ngOnInit = function () {
	            _this.drop.addEventListener("dragover", function (dragEvent) {
	                dragEvent.stopPropagation();
	                dragEvent.preventDefault();
	            }, false);
	            _this.drop.addEventListener("drop", _this.photoActionCreator.upload, false);
	        };
	        this.ngOnDestroy = function () { return _this.drop.removeEventListener("drop", _this.photoActionCreator.upload, false); };
	    }
	    Object.defineProperty(PhotoUploadComponent.prototype, "drop", {
	        get: function () {
	            return this.$element.find(".drop-zone")[0];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    PhotoUploadComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(343),
	            styles: __webpack_require__(344),
	            selector: "photo-upload",
	            viewProviders: ["$element", "photoActionCreator"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [Object, photo_action_creator_1.PhotoActionCreator])
	    ], PhotoUploadComponent);
	    return PhotoUploadComponent;
	}());
	exports.PhotoUploadComponent = PhotoUploadComponent;


/***/ },
/* 343 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <div class=\"drop-zone\">DROP FILES HERE TO BE UPLOADED...</div>\r\n</div>"

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(345);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-upload.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./photo-upload.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 345 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var PhotoService = (function (_super) {
	    __extends(PhotoService, _super);
	    function PhotoService($q, apiEndpoint, fetch, store) {
	        var _this = this;
	        _super.call(this, $q, apiEndpoint, fetch);
	        this.store = store;
	        this.tryToUpload = function (options) {
	            var deferred = _this.$q.defer();
	            var xhr = new XMLHttpRequest();
	            var token = _this.store.getValue().token;
	            xhr.open("POST", _this.baseUri + "/upload", true);
	            xhr.setRequestHeader('Authorization', "Bearer " + token);
	            xhr.onload = function (e) {
	                if (xhr.readyState === 4) {
	                    if (xhr.status === 200) {
	                        deferred.resolve(JSON.parse(xhr.response));
	                    }
	                    else {
	                        deferred.resolve(xhr.statusText);
	                    }
	                }
	            };
	            xhr.send(options.data);
	            return deferred.promise;
	        };
	    }
	    Object.defineProperty(PhotoService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/photo"; },
	        enumerable: true,
	        configurable: true
	    });
	    PhotoService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "photoService",
	            viewProviders: ["$q", "apiEndpoint", "fetch", "store"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object, Object])
	    ], PhotoService);
	    return PhotoService;
	}(core_1.BaseService));
	exports.PhotoService = PhotoService;


/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(332);
	var core_1 = __webpack_require__(2);
	exports.removePhotoReducer = function (state, action) {
	    if (action instanceof actions.RemovePhotoAction)
	        core_1.pluckOut({ items: state.photos, value: action.entity.id });
	    return state;
	};
	exports.addPhotoReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdatePhotoAction) {
	        core_1.addOrUpdate({ items: state.photos, item: action.entity });
	    }
	    return state;
	};
	exports.allPhotosReducer = function (state, action) {
	    if (action instanceof actions.AllPhotosAction) {
	        state.photos = action.entities;
	    }
	    return state;
	};
	exports.setCurrentPhotoReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentPhotoAction) {
	        state.currentPhotoId = action.id;
	    }
	    return state;
	};
	exports.photoUploadReducer = function (state, action) {
	    if (action instanceof actions.PhotoUploadAction) {
	        state.currentPhotoId = action.id;
	        for (var i = 0; i < action.entities.length; i++) {
	            core_1.addOrUpdate({ items: state.photos, item: action.entities[i] });
	        }
	    }
	    return state;
	};


/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var photos_container_component_1 = __webpack_require__(331);
	exports.PhotosRoutes = [
	    {
	        path: "/admin/photos",
	        component: photos_container_component_1.PhotosContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/photo/edit/:photoId",
	        component: photos_container_component_1.PhotosContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var professional_service_editor_component_1 = __webpack_require__(350);
	var professional_service_list_component_1 = __webpack_require__(354);
	var professional_service_component_1 = __webpack_require__(358);
	var professional_services_container_component_1 = __webpack_require__(362);
	var professional_service_action_creator_1 = __webpack_require__(364);
	var professional_service_service_1 = __webpack_require__(369);
	var reducers = __webpack_require__(370);
	var actions = __webpack_require__(363);
	var appProfessionalServicesModule = angular.module("app.professionalServices", []);
	core_1.bootstrap(appProfessionalServicesModule, {
	    components: [professional_service_component_1.ProfessionalServiceComponent, professional_service_editor_component_1.ProfessionalServiceEditorComponent, professional_services_container_component_1.ProfessionalServicesContainerComponent, professional_service_list_component_1.ProfessionalServiceListComponent],
	    providers: [professional_service_action_creator_1.ProfessionalServiceActionCreator, professional_service_service_1.ProfessionalServiceService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(371));


/***/ },
/* 350 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProfessionalServiceEditorComponent = (function () {
	    function ProfessionalServiceEditorComponent() {
	    }
	    ProfessionalServiceEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(351),
	            styles: [__webpack_require__(352)],
	            selector: "professional-service-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProfessionalServiceEditorComponent);
	    return ProfessionalServiceEditorComponent;
	}());
	exports.ProfessionalServiceEditorComponent = ProfessionalServiceEditorComponent;


/***/ },
/* 351 */
/***/ function(module, exports) {

	module.exports = "<div class=\"professionalServiceEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Service <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Service: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"professional-service-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Service Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 352 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(353);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 353 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProfessionalServiceListComponent = (function () {
	    function ProfessionalServiceListComponent() {
	    }
	    ProfessionalServiceListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(355),
	            styles: [__webpack_require__(356)],
	            selector: "professional-service-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProfessionalServiceListComponent);
	    return ProfessionalServiceListComponent;
	}());
	exports.ProfessionalServiceListComponent = ProfessionalServiceListComponent;


/***/ },
/* 355 */
/***/ function(module, exports) {

	module.exports = "<div class=\"professionalServiceList\">\r\n    <div class=\"professionalServiceList-header\">\r\n        <h1>Services</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"professionalServiceList-item\">\r\n        <div class=\"professionalServiceList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"professionalServiceList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(357);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".professionalServiceList-name,\n.professionalServiceList-actions {\n  position: relative;\n  float: left; }\n\n.professionalServiceList-name {\n  min-width: 200px; }\n\n.professionalServiceList-item {\n  height: 50px; }\n\n.professionalServiceList-actions span {\n  cursor: pointer; }\n\n.professionalServiceList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProfessionalServiceComponent = (function () {
	    function ProfessionalServiceComponent() {
	    }
	    ProfessionalServiceComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(359),
	            styles: [__webpack_require__(360)],
	            selector: "professional-service",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProfessionalServiceComponent);
	    return ProfessionalServiceComponent;
	}());
	exports.ProfessionalServiceComponent = ProfessionalServiceComponent;


/***/ },
/* 359 */
/***/ function(module, exports) {

	module.exports = "<div class=\"professional-service\">\r\n\r\n</div>\r\n"

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(361);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-service.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(363);
	var professional_service_action_creator_1 = __webpack_require__(364);
	var professional_service_model_1 = __webpack_require__(365);
	var ProfessionalServicesContainerComponent = (function () {
	    function ProfessionalServicesContainerComponent($location, $routeParams, professionalServiceActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.professionalServiceActionCreator = professionalServiceActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.professionalServices;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentProfessionalServiceAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/professionalservices");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentProfessionalServiceAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/professionalservice/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateProfessionalServiceAction)
	                _this.entity = new professional_service_model_1.ProfessionalService();
	            if (state.lastTriggeredByAction instanceof actions.RemoveProfessionalServiceAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["professionalServiceId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/professionalservices");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["professionalServiceId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["professionalServiceId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new professional_service_model_1.ProfessionalService();
	            }
	        };
	        this.edit = function (entity) { return _this.professionalServiceActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.professionalServiceActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.professionalServiceActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.professionalServiceActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/professionalservices") {
	                    _this.entity = new professional_service_model_1.ProfessionalService();
	                }
	                else {
	                    _this.$location.path("/admin/professionalservices");
	                }
	            });
	        };
	    }
	    ProfessionalServicesContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/professionalservices", "/admin/professionalservice/edit/:professionalServiceId"],
	            template: __webpack_require__(366),
	            styles: [__webpack_require__(367)],
	            selector: "professional-services-container",
	            viewProviders: ["$location", "$routeParams", "professionalServiceActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "professionalServiceActionCreator", function ($q, $route, invokeAsync, professionalServiceActionCreator) {
	                var professionalServiceId = $route.current.params.professionalServiceId;
	                var promises = [invokeAsync(professionalServiceActionCreator.all)];
	                if (professionalServiceId) {
	                    promises.push(invokeAsync({ action: professionalServiceActionCreator.getById, params: { id: professionalServiceId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, professional_service_action_creator_1.ProfessionalServiceActionCreator, Object])
	    ], ProfessionalServicesContainerComponent);
	    return ProfessionalServicesContainerComponent;
	}());
	exports.ProfessionalServicesContainerComponent = ProfessionalServicesContainerComponent;


/***/ },
/* 363 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateProfessionalServiceAction = (function () {
	    function AddOrUpdateProfessionalServiceAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateProfessionalServiceAction;
	}());
	exports.AddOrUpdateProfessionalServiceAction = AddOrUpdateProfessionalServiceAction;
	var AllProfessionalServicesAction = (function () {
	    function AllProfessionalServicesAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllProfessionalServicesAction;
	}());
	exports.AllProfessionalServicesAction = AllProfessionalServicesAction;
	var RemoveProfessionalServiceAction = (function () {
	    function RemoveProfessionalServiceAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveProfessionalServiceAction;
	}());
	exports.RemoveProfessionalServiceAction = RemoveProfessionalServiceAction;
	var ProfessionalServicesFilterAction = (function () {
	    function ProfessionalServicesFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return ProfessionalServicesFilterAction;
	}());
	exports.ProfessionalServicesFilterAction = ProfessionalServicesFilterAction;
	var SetCurrentProfessionalServiceAction = (function () {
	    function SetCurrentProfessionalServiceAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentProfessionalServiceAction;
	}());
	exports.SetCurrentProfessionalServiceAction = SetCurrentProfessionalServiceAction;
	var AddOrUpdateProfessionalServiceSuccessAction = (function () {
	    function AddOrUpdateProfessionalServiceSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateProfessionalServiceSuccessAction;
	}());
	exports.AddOrUpdateProfessionalServiceSuccessAction = AddOrUpdateProfessionalServiceSuccessAction;
	var CurrentProfessionalServiceRemovedAction = (function () {
	    function CurrentProfessionalServiceRemovedAction() {
	    }
	    return CurrentProfessionalServiceRemovedAction;
	}());
	exports.CurrentProfessionalServiceRemovedAction = CurrentProfessionalServiceRemovedAction;


/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var professional_service_actions_1 = __webpack_require__(363);
	var ProfessionalServiceActionCreator = (function (_super) {
	    __extends(ProfessionalServiceActionCreator, _super);
	    function ProfessionalServiceActionCreator($location, dispatcher, professionalServiceService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, professionalServiceService, dispatcher, guid, professional_service_actions_1.AddOrUpdateProfessionalServiceAction, professional_service_actions_1.AllProfessionalServicesAction, professional_service_actions_1.RemoveProfessionalServiceAction, professional_service_actions_1.SetCurrentProfessionalServiceAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new professional_service_actions_1.AddOrUpdateProfessionalServiceSuccessAction(options.entity)); };
	        this.currentProfessionalServiceRemoved = function () { return _this.dispatcher.dispatch(new professional_service_actions_1.CurrentProfessionalServiceRemovedAction()); };
	        this.openAllProfessionalServicesModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-professional-service-modal></all-professional-service-modal>" });
	            });
	        };
	    }
	    ProfessionalServiceActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "professionalServiceActionCreator",
	            viewProviders: ["$location", "dispatcher", "professionalServiceService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ProfessionalServiceActionCreator);
	    return ProfessionalServiceActionCreator;
	}(core_1.BaseActionCreator));
	exports.ProfessionalServiceActionCreator = ProfessionalServiceActionCreator;


/***/ },
/* 365 */
/***/ function(module, exports) {

	"use strict";
	var ProfessionalService = (function () {
	    function ProfessionalService() {
	    }
	    return ProfessionalService;
	}());
	exports.ProfessionalService = ProfessionalService;


/***/ },
/* 366 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <professional-service-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></professional-service-editor>\r\n    <professional-service-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></professional-service-list>\r\n</div>\r\n"

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(368);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-services-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./professional-services-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ProfessionalServiceService = (function (_super) {
	    __extends(ProfessionalServiceService, _super);
	    function ProfessionalServiceService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(ProfessionalServiceService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/professionalService"; },
	        enumerable: true,
	        configurable: true
	    });
	    ProfessionalServiceService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "professionalServiceService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], ProfessionalServiceService);
	    return ProfessionalServiceService;
	}(core_1.BaseService));
	exports.ProfessionalServiceService = ProfessionalServiceService;


/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(363);
	var core_1 = __webpack_require__(2);
	exports.removeProfessionalServiceReducer = function (state, action) {
	    if (action instanceof actions.RemoveProfessionalServiceAction)
	        core_1.pluckOut({ items: state.professionalServices, value: action.entity.id });
	    return state;
	};
	exports.addProfessionalServiceReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateProfessionalServiceAction) {
	        core_1.addOrUpdate({ items: state.professionalServices, item: action.entity });
	    }
	    return state;
	};
	exports.allProfessionalServicesReducer = function (state, action) {
	    if (action instanceof actions.AllProfessionalServicesAction) {
	        state.professionalServices = action.entities;
	    }
	    return state;
	};
	exports.setCurrentProfessionalServiceReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentProfessionalServiceAction) {
	        state.currentProfessionalServiceId = action.id;
	    }
	    return state;
	};


/***/ },
/* 371 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var professional_services_container_component_1 = __webpack_require__(362);
	exports.ProfessionalServicesRoutes = [
	    {
	        path: "/admin/professionalservices",
	        component: professional_services_container_component_1.ProfessionalServicesContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/professionalservice/edit/:photoId",
	        component: professional_services_container_component_1.ProfessionalServicesContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 372 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var service_provider_editor_component_1 = __webpack_require__(373);
	var service_provider_list_component_1 = __webpack_require__(377);
	var service_provider_component_1 = __webpack_require__(381);
	var service_providers_container_component_1 = __webpack_require__(385);
	var service_provider_action_creator_1 = __webpack_require__(387);
	var service_provider_service_1 = __webpack_require__(392);
	var reducers = __webpack_require__(393);
	var actions = __webpack_require__(386);
	var appServiceProvidersModule = angular.module("app.serviceProviders", []);
	core_1.bootstrap(appServiceProvidersModule, {
	    components: [service_provider_component_1.ServiceProviderComponent, service_provider_editor_component_1.ServiceProviderEditorComponent, service_providers_container_component_1.ServiceProvidersContainerComponent, service_provider_list_component_1.ServiceProviderListComponent],
	    providers: [service_provider_action_creator_1.ServiceProviderActionCreator, service_provider_service_1.ServiceProviderService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(394));


/***/ },
/* 373 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ServiceProviderEditorComponent = (function () {
	    function ServiceProviderEditorComponent() {
	    }
	    ServiceProviderEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(374),
	            styles: [__webpack_require__(375)],
	            selector: "service-provider-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ServiceProviderEditorComponent);
	    return ServiceProviderEditorComponent;
	}());
	exports.ServiceProviderEditorComponent = ServiceProviderEditorComponent;


/***/ },
/* 374 */
/***/ function(module, exports) {

	module.exports = "<div class=\"serviceProviderEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Service Provider <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Service Provider: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"service-provider-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Service Provider Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"'Save'\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"'Create'\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(376);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ServiceProviderListComponent = (function () {
	    function ServiceProviderListComponent() {
	    }
	    ServiceProviderListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(378),
	            styles: [__webpack_require__(379)],
	            selector: "service-provider-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ServiceProviderListComponent);
	    return ServiceProviderListComponent;
	}());
	exports.ServiceProviderListComponent = ServiceProviderListComponent;


/***/ },
/* 378 */
/***/ function(module, exports) {

	module.exports = "<div class=\"serviceProviderList\">\r\n    <div class=\"serviceProviderList-header\">\r\n        <h1>ServiceProviders</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"serviceProviderList-item\">\r\n        <div class=\"serviceProviderList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"serviceProviderList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(380);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".serviceProviderList-name,\n.serviceProviderList-actions {\n  position: relative;\n  float: left; }\n\n.serviceProviderList-name {\n  min-width: 200px; }\n\n.serviceProviderList-item {\n  height: 50px; }\n\n.serviceProviderList-actions span {\n  cursor: pointer; }\n\n.serviceProviderList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 381 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ServiceProviderComponent = (function () {
	    function ServiceProviderComponent() {
	    }
	    ServiceProviderComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(382),
	            styles: [__webpack_require__(383)],
	            selector: "service-provider",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ServiceProviderComponent);
	    return ServiceProviderComponent;
	}());
	exports.ServiceProviderComponent = ServiceProviderComponent;


/***/ },
/* 382 */
/***/ function(module, exports) {

	module.exports = "<div class=\"service-provider\">\r\n\r\n</div>\r\n"

/***/ },
/* 383 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(384);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-provider.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(386);
	var service_provider_action_creator_1 = __webpack_require__(387);
	var service_provider_model_1 = __webpack_require__(388);
	var ServiceProvidersContainerComponent = (function () {
	    function ServiceProvidersContainerComponent($location, $routeParams, serviceProviderActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.serviceProviderActionCreator = serviceProviderActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.serviceProviders;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentServiceProviderAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/serviceproviders");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentServiceProviderAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/serviceprovider/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateServiceProviderAction)
	                _this.entity = new service_provider_model_1.ServiceProvider();
	            if (state.lastTriggeredByAction instanceof actions.RemoveServiceProviderAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["serviceProviderId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/serviceproviders");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["serviceProviderId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["serviceProviderId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new service_provider_model_1.ServiceProvider();
	            }
	        };
	        this.edit = function (entity) { return _this.serviceProviderActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.serviceProviderActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.serviceProviderActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.serviceProviderActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/serviceproviders") {
	                    _this.entity = new service_provider_model_1.ServiceProvider();
	                }
	                else {
	                    _this.$location.path("/admin/serviceproviders");
	                }
	            });
	        };
	    }
	    ServiceProvidersContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/serviceproviders", "/admin/serviceprovider/edit/:serviceProviderId"],
	            template: __webpack_require__(389),
	            styles: [__webpack_require__(390)],
	            selector: "service-providers-container",
	            viewProviders: ["$location", "$routeParams", "serviceProviderActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "serviceProviderActionCreator", function ($q, $route, invokeAsync, serviceProviderActionCreator) {
	                var serviceProviderId = $route.current.params.serviceProviderId;
	                var promises = [invokeAsync(serviceProviderActionCreator.all)];
	                if (serviceProviderId) {
	                    promises.push(invokeAsync({ action: serviceProviderActionCreator.getById, params: { id: serviceProviderId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, service_provider_action_creator_1.ServiceProviderActionCreator, Object])
	    ], ServiceProvidersContainerComponent);
	    return ServiceProvidersContainerComponent;
	}());
	exports.ServiceProvidersContainerComponent = ServiceProvidersContainerComponent;


/***/ },
/* 386 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateServiceProviderAction = (function () {
	    function AddOrUpdateServiceProviderAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateServiceProviderAction;
	}());
	exports.AddOrUpdateServiceProviderAction = AddOrUpdateServiceProviderAction;
	var AllServiceProvidersAction = (function () {
	    function AllServiceProvidersAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllServiceProvidersAction;
	}());
	exports.AllServiceProvidersAction = AllServiceProvidersAction;
	var RemoveServiceProviderAction = (function () {
	    function RemoveServiceProviderAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveServiceProviderAction;
	}());
	exports.RemoveServiceProviderAction = RemoveServiceProviderAction;
	var ServiceProvidersFilterAction = (function () {
	    function ServiceProvidersFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return ServiceProvidersFilterAction;
	}());
	exports.ServiceProvidersFilterAction = ServiceProvidersFilterAction;
	var SetCurrentServiceProviderAction = (function () {
	    function SetCurrentServiceProviderAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentServiceProviderAction;
	}());
	exports.SetCurrentServiceProviderAction = SetCurrentServiceProviderAction;
	var AddOrUpdateServiceProviderSuccessAction = (function () {
	    function AddOrUpdateServiceProviderSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateServiceProviderSuccessAction;
	}());
	exports.AddOrUpdateServiceProviderSuccessAction = AddOrUpdateServiceProviderSuccessAction;
	var CurrentServiceProviderRemovedAction = (function () {
	    function CurrentServiceProviderRemovedAction() {
	    }
	    return CurrentServiceProviderRemovedAction;
	}());
	exports.CurrentServiceProviderRemovedAction = CurrentServiceProviderRemovedAction;


/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var service_provider_actions_1 = __webpack_require__(386);
	var ServiceProviderActionCreator = (function (_super) {
	    __extends(ServiceProviderActionCreator, _super);
	    function ServiceProviderActionCreator($location, dispatcher, serviceProviderService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, serviceProviderService, dispatcher, guid, service_provider_actions_1.AddOrUpdateServiceProviderAction, service_provider_actions_1.AllServiceProvidersAction, service_provider_actions_1.RemoveServiceProviderAction, service_provider_actions_1.SetCurrentServiceProviderAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new service_provider_actions_1.AddOrUpdateServiceProviderSuccessAction(options.entity)); };
	        this.currentServiceProviderRemoved = function () { return _this.dispatcher.dispatch(new service_provider_actions_1.CurrentServiceProviderRemovedAction()); };
	        this.openAllServiceProvidersModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-service-provider-modal></all-service-provider-modal>" });
	            });
	        };
	    }
	    ServiceProviderActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "serviceProviderActionCreator",
	            viewProviders: ["$location", "dispatcher", "serviceProviderService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], ServiceProviderActionCreator);
	    return ServiceProviderActionCreator;
	}(core_1.BaseActionCreator));
	exports.ServiceProviderActionCreator = ServiceProviderActionCreator;


/***/ },
/* 388 */
/***/ function(module, exports) {

	"use strict";
	var ServiceProvider = (function () {
	    function ServiceProvider() {
	    }
	    return ServiceProvider;
	}());
	exports.ServiceProvider = ServiceProvider;


/***/ },
/* 389 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <service-provider-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></service-provider-editor>\r\n    <service-provider-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></service-provider-list>\r\n</div>\r\n"

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(391);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-providers-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./service-providers-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var ServiceProviderService = (function (_super) {
	    __extends(ServiceProviderService, _super);
	    function ServiceProviderService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(ServiceProviderService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/serviceProvider"; },
	        enumerable: true,
	        configurable: true
	    });
	    ServiceProviderService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "serviceProviderService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], ServiceProviderService);
	    return ServiceProviderService;
	}(core_1.BaseService));
	exports.ServiceProviderService = ServiceProviderService;


/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(386);
	var core_1 = __webpack_require__(2);
	exports.removeServiceProviderReducer = function (state, action) {
	    if (action instanceof actions.RemoveServiceProviderAction)
	        core_1.pluckOut({ items: state.serviceProviders, value: action.entity.id });
	    return state;
	};
	exports.addServiceProviderReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateServiceProviderAction) {
	        core_1.addOrUpdate({ items: state.serviceProviders, item: action.entity });
	    }
	    return state;
	};
	exports.allServiceProvidersReducer = function (state, action) {
	    if (action instanceof actions.AllServiceProvidersAction) {
	        state.serviceProviders = action.entities;
	    }
	    return state;
	};
	exports.setCurrentServiceProviderReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentServiceProviderAction) {
	        state.currentServiceProviderId = action.id;
	    }
	    return state;
	};


/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var service_providers_container_component_1 = __webpack_require__(385);
	exports.ServiceProvidersRoutes = [
	    {
	        path: "/admin/serviceproviders",
	        component: service_providers_container_component_1.ServiceProvidersContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/serviceprovider/edit/:photoId",
	        component: service_providers_container_component_1.ServiceProvidersContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 395 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	__webpack_require__(396);
	var core_1 = __webpack_require__(2);
	var app_footer_component_1 = __webpack_require__(398);
	var app_header_component_1 = __webpack_require__(402);
	var admin_header_component_1 = __webpack_require__(406);
	var sharedModule = angular.module("app.shared", []);
	core_1.bootstrap(sharedModule, {
	    components: [app_footer_component_1.AppFooterComponent, app_header_component_1.AppHeaderComponent, admin_header_component_1.AdminHeaderComponent],
	});


/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(397);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./shared.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./shared.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppFooterComponent = (function () {
	    function AppFooterComponent() {
	    }
	    AppFooterComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(399),
	            styles: [__webpack_require__(400)],
	            selector: "app-footer",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppFooterComponent);
	    return AppFooterComponent;
	}());
	exports.AppFooterComponent = AppFooterComponent;


/***/ },
/* 399 */
/***/ function(module, exports) {

	module.exports = "<div class=\"app-footer\">\r\n\r\n</div>\r\n"

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(401);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-footer.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-footer.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppHeaderComponent = (function () {
	    function AppHeaderComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) {
	            if (state.app)
	                _this.logo = state.app.logo;
	        };
	    }
	    AppHeaderComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(403),
	            styles: [__webpack_require__(404)],
	            selector: "app-header",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppHeaderComponent);
	    return AppHeaderComponent;
	}());
	exports.AppHeaderComponent = AppHeaderComponent;


/***/ },
/* 403 */
/***/ function(module, exports) {

	module.exports = "<div class=\"app-header\">\r\n    <div class=\"app-header-inner\">\r\n        <img data-ng-src=\"{{::vm.logo}}\" />\r\n    </div>   \r\n    <div class=\"app-header-sub-nav\">\r\n        <a href=\"/\">Home</a>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <a href=\"/galleries\">Galleries</a>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <a href=\"whats-new\">What's New</a>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <a href=\"/about\">About</a>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <a href=\"/services\">Services</a>\r\n        &nbsp;&nbsp;|&nbsp;&nbsp;\r\n        <a href=\"/contact\">Contact</a>\r\n    </div>     \r\n</div>\r\n"

/***/ },
/* 404 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(405);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-header.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./app-header.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 405 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".app-header {\n  width: 100%; }\n\n.app-header-inner {\n  max-width: 1280px;\n  height: 150px;\n  margin: 50px auto 0px auto; }\n\n.app-header-inner img {\n  display: block;\n  height: 100px;\n  width: 152.5px;\n  margin: 0 auto; }\n\n.app-header-sub-nav {\n  max-width: 1280px;\n  margin: 0 auto;\n  text-align: center; }\n\n.app-header-sub-nav a {\n  text-decoration: none;\n  color: #272727; }\n", ""]);

	// exports


/***/ },
/* 406 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AdminHeaderComponent = (function () {
	    function AdminHeaderComponent($location) {
	        var _this = this;
	        this.$location = $location;
	        this.onTitleClick = function () { return _this.$location.path("/"); };
	    }
	    AdminHeaderComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(407),
	            styles: [__webpack_require__(408)],
	            selector: "admin-header",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
	            viewProviders: ["$location"]
	        }), 
	        __metadata('design:paramtypes', [Object])
	    ], AdminHeaderComponent);
	    return AdminHeaderComponent;
	}());
	exports.AdminHeaderComponent = AdminHeaderComponent;


/***/ },
/* 407 */
/***/ function(module, exports) {

	module.exports = "<div class=\"admin-header\">\r\n    <div class=\"admin-header-inner\">\r\n        <h1 class=\"admin-header-title\" data-ng-click=\"vm.onTitleClick()\">\r\n            Admin\r\n        </h1>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(409);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./admin-header.component.scss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js!./../../../../node_modules/sass-loader/index.js!./admin-header.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".admin-header-title {\n  cursor: pointer; }\n", ""]);

	// exports


/***/ },
/* 410 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var social_share_item_editor_component_1 = __webpack_require__(411);
	var social_share_item_list_component_1 = __webpack_require__(415);
	var social_share_item_component_1 = __webpack_require__(419);
	var social_share_items_container_component_1 = __webpack_require__(423);
	var social_share_item_action_creator_1 = __webpack_require__(425);
	var social_share_item_service_1 = __webpack_require__(430);
	var reducers = __webpack_require__(431);
	var actions = __webpack_require__(424);
	var appSocialShareItemsModule = angular.module("app.socialShareItems", []);
	core_1.bootstrap(appSocialShareItemsModule, {
	    components: [social_share_item_component_1.SocialShareItemComponent, social_share_item_editor_component_1.SocialShareItemEditorComponent, social_share_items_container_component_1.SocialShareItemsContainerComponent, social_share_item_list_component_1.SocialShareItemListComponent],
	    providers: [social_share_item_action_creator_1.SocialShareItemActionCreator, social_share_item_service_1.SocialShareItemService],
	    reducers: reducers,
	    actions: actions
	});
	__export(__webpack_require__(432));


/***/ },
/* 411 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SocialShareItemEditorComponent = (function () {
	    function SocialShareItemEditorComponent() {
	    }
	    SocialShareItemEditorComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(412),
	            styles: [__webpack_require__(413)],
	            selector: "social-share-item-editor",
	            inputs: ['entity', 'addOrUpdate', 'remove', 'create'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareItemEditorComponent);
	    return SocialShareItemEditorComponent;
	}());
	exports.SocialShareItemEditorComponent = SocialShareItemEditorComponent;


/***/ },
/* 412 */
/***/ function(module, exports) {

	module.exports = "<div class=\"socialShareItemEditor\">\r\n\r\n    <h1  data-ng-if=\"!vm.entity.id\">Create Social Share Item <span data-ng-if=\"vm.entity.name.length > 0\">: {{ vm.entity.name }}</span></h1>\r\n\r\n    <h1 data-ng-if=\"vm.entity.id\">Edit Social Share Item: {{ vm.entity.name }}</h1>\r\n\r\n    <tabs tabs-name=\"social-share-item-editor\">\r\n\r\n        <tab-title>General</tab-title>\r\n\r\n        <tab-content>\r\n            <div>\r\n                <input class=\"inputField\" type=\"text\" placeholder=\"Social Share Item Name\" data-ng-model=\"vm.entity.name\" />\r\n            </div>\r\n        </tab-content>\r\n\r\n    </tabs>\r\n\r\n    <div>\r\n        <calypso-button on-click=\"vm.addOrUpdate({ data: vm.entity })\" caption=\"Save\"></calypso-button>\r\n\r\n        <calypso-button on-click=\"vm.create()\" caption=\"Create\"></calypso-button>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(414);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item-editor.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item-editor.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SocialShareItemListComponent = (function () {
	    function SocialShareItemListComponent() {
	    }
	    SocialShareItemListComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(416),
	            styles: [__webpack_require__(417)],
	            selector: "social-share-item-list",
	            inputs: ['entities', 'edit', 'remove'],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareItemListComponent);
	    return SocialShareItemListComponent;
	}());
	exports.SocialShareItemListComponent = SocialShareItemListComponent;


/***/ },
/* 416 */
/***/ function(module, exports) {

	module.exports = "<div class=\"socialShareItemList\">\r\n    <div class=\"socialShareItemList-header\">\r\n        <h1>SocialShareItems</h1>\r\n    </div>\r\n    \r\n    <div data-ng-repeat=\"entity in vm.entities\" class=\"socialShareItemList-item\">\r\n        <div class=\"socialShareItemList-name\">\r\n            {{ entity.name }}\r\n        </div>\r\n        <div class=\"socialShareItemList-actions\">\r\n            <span data-ng-click=\"vm.edit({ entity: this.entity })\">edit</span>&nbsp;&nbsp;|&nbsp;&nbsp;<span data-ng-click=\"vm.remove({ entity: this.entity })\">remove</span>\r\n        </div>\r\n        <div style=\"clear:both;\"></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(418);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item-list.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item-list.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 418 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".socialShareItemList-name,\n.socialShareItemList-actions {\n  position: relative;\n  float: left; }\n\n.socialShareItemList-name {\n  min-width: 200px; }\n\n.socialShareItemList-item {\n  height: 50px; }\n\n.socialShareItemList-actions span {\n  cursor: pointer; }\n\n.socialShareItemList-actions {\n  text-transform: uppercase; }\n", ""]);

	// exports


/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SocialShareItemComponent = (function () {
	    function SocialShareItemComponent() {
	    }
	    SocialShareItemComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(420),
	            styles: [__webpack_require__(421)],
	            selector: "social-share-item",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SocialShareItemComponent);
	    return SocialShareItemComponent;
	}());
	exports.SocialShareItemComponent = SocialShareItemComponent;


/***/ },
/* 420 */
/***/ function(module, exports) {

	module.exports = "<div class=\"social-share-item\">\r\n\r\n</div>\r\n"

/***/ },
/* 421 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(422);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-item.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 423 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var actions = __webpack_require__(424);
	var social_share_item_action_creator_1 = __webpack_require__(425);
	var social_share_item_model_1 = __webpack_require__(426);
	var SocialShareItemsContainerComponent = (function () {
	    function SocialShareItemsContainerComponent($location, $routeParams, socialShareItemActionCreator, _invokeAsync) {
	        var _this = this;
	        this.$location = $location;
	        this.$routeParams = $routeParams;
	        this.socialShareItemActionCreator = socialShareItemActionCreator;
	        this._invokeAsync = _invokeAsync;
	        this.storeOnChange = function (state) {
	            _this.entities = state.socialShareItems;
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentSocialShareItemAction && !state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/socialshareitems");
	            if (state.lastTriggeredByAction instanceof actions.SetCurrentSocialShareItemAction && state.lastTriggeredByAction.entity)
	                _this.$location.path("/admin/socialshareitem/edit/" + state.lastTriggeredByAction.entity.id);
	            if (state.lastTriggeredByAction instanceof actions.AddOrUpdateSocialShareItemAction)
	                _this.entity = new social_share_item_model_1.SocialShareItem();
	            if (state.lastTriggeredByAction instanceof actions.RemoveSocialShareItemAction && _this.entity && _this.entity.id) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["socialShareItemId"]), items: _this.entities });
	                if (Object.keys(_this.entity).length === 0) {
	                    _this.$location.path("/admin/socialshareitems");
	                }
	            }
	        };
	        this.ngOnInit = function () {
	            if (_this.$routeParams["socialShareItemId"]) {
	                _this.entity = core_1.pluck({ value: Number(_this.$routeParams["socialShareItemId"]), items: _this.entities });
	            }
	            else {
	                _this.entity = new social_share_item_model_1.SocialShareItem();
	            }
	        };
	        this.edit = function (entity) { return _this.socialShareItemActionCreator.edit(entity); };
	        this.remove = function (entity) { return _this.socialShareItemActionCreator.remove(entity); };
	        this.create = function (entity) { return _this.socialShareItemActionCreator.create(); };
	        this.addOrUpdate = function (options) {
	            _this._invokeAsync({
	                action: _this.socialShareItemActionCreator.addOrUpdate,
	                params: { data: options.data }
	            }).then(function () {
	                if (_this.$location.path() === "/admin/socialshareitems") {
	                    _this.entity = new social_share_item_model_1.SocialShareItem();
	                }
	                else {
	                    _this.$location.path("/admin/socialshareitems");
	                }
	            });
	        };
	    }
	    SocialShareItemsContainerComponent = __decorate([
	        core_1.Component({
	            routes: ["/admin/socialshareitems", "/admin/socialshareitem/edit/:socialShareItemId"],
	            template: __webpack_require__(427),
	            styles: [__webpack_require__(428)],
	            selector: "social-share-items-container",
	            viewProviders: ["$location", "$routeParams", "socialShareItemActionCreator", "invokeAsync"],
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }),
	        core_1.CanActivate(["$q", "$route", "invokeAsync", "socialShareItemActionCreator", function ($q, $route, invokeAsync, socialShareItemActionCreator) {
	                var socialShareItemId = $route.current.params.socialShareItemId;
	                var promises = [invokeAsync(socialShareItemActionCreator.all)];
	                if (socialShareItemId) {
	                    promises.push(invokeAsync({ action: socialShareItemActionCreator.getById, params: { id: socialShareItemId } }));
	                }
	                ;
	                return $q.all(promises);
	            }]), 
	        __metadata('design:paramtypes', [Object, Object, social_share_item_action_creator_1.SocialShareItemActionCreator, Object])
	    ], SocialShareItemsContainerComponent);
	    return SocialShareItemsContainerComponent;
	}());
	exports.SocialShareItemsContainerComponent = SocialShareItemsContainerComponent;


/***/ },
/* 424 */
/***/ function(module, exports) {

	"use strict";
	var AddOrUpdateSocialShareItemAction = (function () {
	    function AddOrUpdateSocialShareItemAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return AddOrUpdateSocialShareItemAction;
	}());
	exports.AddOrUpdateSocialShareItemAction = AddOrUpdateSocialShareItemAction;
	var AllSocialShareItemsAction = (function () {
	    function AllSocialShareItemsAction(id, entities) {
	        this.id = id;
	        this.entities = entities;
	    }
	    return AllSocialShareItemsAction;
	}());
	exports.AllSocialShareItemsAction = AllSocialShareItemsAction;
	var RemoveSocialShareItemAction = (function () {
	    function RemoveSocialShareItemAction(id, entity) {
	        this.id = id;
	        this.entity = entity;
	    }
	    return RemoveSocialShareItemAction;
	}());
	exports.RemoveSocialShareItemAction = RemoveSocialShareItemAction;
	var SocialShareItemsFilterAction = (function () {
	    function SocialShareItemsFilterAction(id, term) {
	        this.id = id;
	        this.term = term;
	    }
	    return SocialShareItemsFilterAction;
	}());
	exports.SocialShareItemsFilterAction = SocialShareItemsFilterAction;
	var SetCurrentSocialShareItemAction = (function () {
	    function SetCurrentSocialShareItemAction(entity) {
	        this.entity = entity;
	    }
	    return SetCurrentSocialShareItemAction;
	}());
	exports.SetCurrentSocialShareItemAction = SetCurrentSocialShareItemAction;
	var AddOrUpdateSocialShareItemSuccessAction = (function () {
	    function AddOrUpdateSocialShareItemSuccessAction(entity) {
	        this.entity = entity;
	    }
	    return AddOrUpdateSocialShareItemSuccessAction;
	}());
	exports.AddOrUpdateSocialShareItemSuccessAction = AddOrUpdateSocialShareItemSuccessAction;
	var CurrentSocialShareItemRemovedAction = (function () {
	    function CurrentSocialShareItemRemovedAction() {
	    }
	    return CurrentSocialShareItemRemovedAction;
	}());
	exports.CurrentSocialShareItemRemovedAction = CurrentSocialShareItemRemovedAction;


/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var modal_action_creator_1 = __webpack_require__(72);
	var social_share_item_actions_1 = __webpack_require__(424);
	var SocialShareItemActionCreator = (function (_super) {
	    __extends(SocialShareItemActionCreator, _super);
	    function SocialShareItemActionCreator($location, dispatcher, socialShareItemService, guid, invokeAsync, modalActionCreator) {
	        var _this = this;
	        _super.call(this, $location, socialShareItemService, dispatcher, guid, social_share_item_actions_1.AddOrUpdateSocialShareItemAction, social_share_item_actions_1.AllSocialShareItemsAction, social_share_item_actions_1.RemoveSocialShareItemAction, social_share_item_actions_1.SetCurrentSocialShareItemAction);
	        this.invokeAsync = invokeAsync;
	        this.modalActionCreator = modalActionCreator;
	        this.addOrUpdateSuccess = function (options) { return _this.dispatcher.dispatch(new social_share_item_actions_1.AddOrUpdateSocialShareItemSuccessAction(options.entity)); };
	        this.currentSocialShareItemRemoved = function () { return _this.dispatcher.dispatch(new social_share_item_actions_1.CurrentSocialShareItemRemovedAction()); };
	        this.openAllSocialShareItemsModal = function () {
	            _this.invokeAsync(_this.all).then(function (results) {
	                _this.modalActionCreator.open({ html: "<all-social-share-item-modal></all-social-share-item-modal>" });
	            });
	        };
	    }
	    SocialShareItemActionCreator = __decorate([
	        core_1.Service({
	            serviceName: "socialShareItemActionCreator",
	            viewProviders: ["$location", "dispatcher", "socialShareItemService", "guid", "invokeAsync", "modalActionCreator"]
	        }), 
	        __metadata('design:paramtypes', [Object, Object, Object, Object, Object, modal_action_creator_1.ModalActionCreator])
	    ], SocialShareItemActionCreator);
	    return SocialShareItemActionCreator;
	}(core_1.BaseActionCreator));
	exports.SocialShareItemActionCreator = SocialShareItemActionCreator;


/***/ },
/* 426 */
/***/ function(module, exports) {

	"use strict";
	var SocialShareItem = (function () {
	    function SocialShareItem() {
	    }
	    return SocialShareItem;
	}());
	exports.SocialShareItem = SocialShareItem;


/***/ },
/* 427 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <social-share-item-editor entity=\"vm.entity\" edit=\"vm.edit\" remove=\"vm.remove\" add-or-update=\"vm.addOrUpdate\" create=\"vm.create\"></social-share-item-editor>\r\n    <social-share-item-list entities=\"vm.entities\" edit=\"vm.edit\" remove=\"vm.remove\"></social-share-item-list>\r\n</div>\r\n"

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(429);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-items-container.component.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/sass-loader/index.js!./social-share-items-container.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var SocialShareItemService = (function (_super) {
	    __extends(SocialShareItemService, _super);
	    function SocialShareItemService($q, apiEndpoint, fetch) {
	        _super.call(this, $q, apiEndpoint, fetch);
	    }
	    Object.defineProperty(SocialShareItemService.prototype, "baseUri", {
	        get: function () { return this.apiEndpoint.getBaseUrl() + "/socialShareItem"; },
	        enumerable: true,
	        configurable: true
	    });
	    SocialShareItemService = __decorate([
	        core_1.Injectable(),
	        core_1.Service({
	            serviceName: "socialShareItemService",
	            viewProviders: ["$q", "apiEndpoint", "fetch"]
	        }), 
	        __metadata('design:paramtypes', [Function, Object, Object])
	    ], SocialShareItemService);
	    return SocialShareItemService;
	}(core_1.BaseService));
	exports.SocialShareItemService = SocialShareItemService;


/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var actions = __webpack_require__(424);
	var core_1 = __webpack_require__(2);
	exports.removeSocialShareItemReducer = function (state, action) {
	    if (action instanceof actions.RemoveSocialShareItemAction)
	        core_1.pluckOut({ items: state.socialShareItems, value: action.entity.id });
	    return state;
	};
	exports.addSocialShareItemReducer = function (state, action) {
	    if (action instanceof actions.AddOrUpdateSocialShareItemAction) {
	        core_1.addOrUpdate({ items: state.socialShareItems, item: action.entity });
	    }
	    return state;
	};
	exports.allSocialShareItemsReducer = function (state, action) {
	    if (action instanceof actions.AllSocialShareItemsAction) {
	        state.socialShareItems = action.entities;
	    }
	    return state;
	};
	exports.setCurrentSocialShareItemReducer = function (state, action) {
	    if (action instanceof actions.SetCurrentSocialShareItemAction) {
	        state.currentSocialShareItemId = action.id;
	    }
	    return state;
	};


/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var social_share_items_container_component_1 = __webpack_require__(423);
	exports.SocialShareItemsRoutes = [
	    {
	        path: "/admin/socialshareitems",
	        component: social_share_items_container_component_1.SocialShareItemsContainerComponent,
	        authorizationRequired: true
	    },
	    {
	        path: "/admin/socialshareitem/edit/:socialShareItemId",
	        component: social_share_items_container_component_1.SocialShareItemsContainerComponent,
	        authorizationRequired: true
	    }
	];


/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var app_actions_1 = __webpack_require__(84);
	var app_constants_1 = __webpack_require__(434);
	exports.allAppsReducer = function (state, action) {
	    if (action instanceof app_actions_1.AddOrUpdateAppAction) {
	        state.app = state.app || { properties: [] };
	        for (var i = 0; i < action.entity.properties.length; i++) {
	            if (action.entity.properties[i].name === app_constants_1.appProperties.homePageHeroImageUrl)
	                state.app.homePageHeroImageUrl = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.contactPageHeroImageUrl)
	                state.app.contactPageHeroImageUrl = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.servicesPageHeroImageUrl)
	                state.app.servicesPageHeroImageUrl = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.whatsNewPageHeroImageUrl)
	                state.app.whatsNewPageHeroImageUrl = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.galleriesPageHeroImageUrl)
	                state.app.galleriesPageHeroImageUrl = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.logo)
	                state.app.logo = action.entity.properties[i].value;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.whatsNew)
	                state.app.whatsNew = action.entity.properties[i].htmlBody;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.biography)
	                state.app.biography = action.entity.properties[i].htmlBody;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.contactInfomation)
	                state.app.contactInfomation = action.entity.properties[i].htmlBody;
	            if (action.entity.properties[i].name === app_constants_1.appProperties.services)
	                state.app.services = JSON.parse(action.entity.properties[i].value);
	            if (action.entity.properties[i].name === app_constants_1.appProperties.socialShareItems)
	                state.app.socialShareItems = JSON.parse(action.entity.properties[i].value);
	            if (action.entity.properties[i].name === app_constants_1.appProperties.menuItems)
	                state.app.menuItems = JSON.parse(action.entity.properties[i].value);
	        }
	    }
	    return state;
	};


/***/ },
/* 434 */
/***/ function(module, exports) {

	"use strict";
	var appProperties = (function () {
	    function appProperties() {
	    }
	    appProperties.homePageHeroImageUrl = "homePageHeroImageUrl";
	    appProperties.contactPageHeroImageUrl = "contactPageHeroImageUrl";
	    appProperties.servicesPageHeroImageUrl = "servicesPageHeroImageUrl";
	    appProperties.whatsNewPageHeroImageUrl = "whatsNewPageHeroImageUrl";
	    appProperties.galleriesPageHeroImageUrl = "galleriesPageHeroImageUrl";
	    appProperties.whatsNew = "whatsNew";
	    appProperties.biography = "biography";
	    appProperties.contactInfomation = "contactInfomation";
	    appProperties.logo = "logo";
	    appProperties.services = "services";
	    appProperties.socialShareItems = "socialShareItems";
	    appProperties.menuItems = "menuItems";
	    return appProperties;
	}());
	exports.appProperties = appProperties;


/***/ },
/* 435 */
/***/ function(module, exports) {

	"use strict";
	exports.authorizationGuard = {
	    route: "*",
	    promise: ["loginRedirect", "$q", "$route", "invokeAsync", "store", "userActionCreator", function (loginRedirect, $q, $route, invokeAsync, store, userActionCreator) {
	            var deferred = $q.defer();
	            invokeAsync(userActionCreator.current).then(function (results) {
	                if ($route.current.$$route.authorizationRequired && !store.getValue().currentUser) {
	                    loginRedirect.redirectToLogin();
	                    deferred.reject();
	                }
	                else {
	                    deferred.resolve();
	                }
	            });
	            return deferred.promise;
	        }],
	    priority: -999
	};


/***/ },
/* 436 */
/***/ function(module, exports) {

	"use strict";
	exports.appGuard = {
	    promise: [
	        "$q",
	        "$route",
	        "invokeAsync",
	        "appActionCreator",
	        "store",
	        function ($q, $route, invokeAsync, appActionCreator, store) {
	            return invokeAsync({ action: appActionCreator.getById, params: { id: 1 } });
	        }],
	    route: "*"
	};


/***/ },
/* 437 */
/***/ function(module, exports) {

	"use strict";
	exports.routeChangeSuccessIsAdminReducer = ["$location", "$rootScope", function ($location, $rootScope) {
	        $rootScope.$on("$routeChangeSuccess", function () {
	            var path = $location.path();
	            if (path.length >= 6 && (path.substring(0, 6) == "/admin" || path.substring(0, 6) == "/login")) {
	                $rootScope.isAdmin = true;
	            }
	            else {
	                $rootScope.isAdmin = false;
	            }
	        });
	    }];


/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AppComponent = (function () {
	    function AppComponent() {
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(439),
	            styles: [__webpack_require__(440)],
	            selector: "root-app",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },
/* 439 */
/***/ function(module, exports) {

	module.exports = "<div class=\"app\">\r\n    <app-header></app-header>\r\n    <div data-ng-view></div>\r\n    <app-footer></app-footer>\r\n</div>"

/***/ },
/* 440 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(441);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, "", ""]);

	// exports


/***/ },
/* 442 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var AdminAppComponent = (function () {
	    function AdminAppComponent() {
	        var _this = this;
	        this.storeOnChange = function (state) { return _this.currentUser = state.currentUser; };
	    }
	    AdminAppComponent = __decorate([
	        core_1.Component({
	            template: __webpack_require__(443),
	            styles: [__webpack_require__(444)],
	            selector: "admin-app",
	            changeDetection: core_1.ChangeDetectionStrategy.OnPush
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AdminAppComponent);
	    return AdminAppComponent;
	}());
	exports.AdminAppComponent = AdminAppComponent;


/***/ },
/* 443 */
/***/ function(module, exports) {

	module.exports = "<div class=\"admin-app\">\r\n    <admin-header></admin-header>\r\n    <div class=\"admin-content-container\">\r\n        <div class=\"admin-side-nav\" data-ng-if=\"vm.currentUser\">\r\n            <ul>\r\n                <li><a href=\"/admin/apps\">Apps</a></li>\r\n                <li><a href=\"/admin/photos\">Photos</a></li>\r\n                <li><a href=\"/admin/galleries\">Galleries</a></li>\r\n                <li><a href=\"/admin/socialshareitems\">Social Share Items</a></li>\r\n                <li><a href=\"/admin/professionalservices\">Services</a></li>\r\n                <li><a href=\"/admin/properties\">Properties</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"admin-main-content\" data-ng-view></div>\r\n    </div>\r\n</div>\r\n"

/***/ },
/* 444 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(445);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(60)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./admin-app.component.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./admin-app.component.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(59)();
	// imports


	// module
	exports.push([module.id, ".admin-content-container:after {\n  content: \" \";\n  display: block; }\n\n.admin-side-nav {\n  position: relative;\n  float: left;\n  width: 200px; }\n\n.admin-main-content {\n  position: relative;\n  float: left; }\n\n.admin-app {\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.admin-side-nav ul {\n  list-style-type: none; }\n\n.admin-side-nav a {\n  cursor: pointer;\n  text-decoration: none;\n  color: #272727;\n  line-height: 1.5em; }\n", ""]);

	// exports


/***/ }
/******/ ]);