/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Actions = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.update = update;
	exports.view = view;
	
	var _Symbol2 = __webpack_require__(1);
	
	var _Symbol3 = _interopRequireDefault(_Symbol2);
	
	var _Util = __webpack_require__(2);
	
	var _FableArch = __webpack_require__(3);
	
	var _List = __webpack_require__(4);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _String = __webpack_require__(10);
	
	var _FableArch2 = __webpack_require__(14);
	
	var _FableArch3 = __webpack_require__(15);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Actions = exports.Actions = function () {
	    function Actions(caseName, fields) {
	        _classCallCheck(this, Actions);
	
	        this.Case = caseName;
	        this.Fields = fields;
	    }
	
	    _createClass(Actions, [{
	        key: _Symbol3.default.reflection,
	        value: function () {
	            return {
	                type: "Client.Actions",
	                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
	                cases: {
	                    ChangeInput: ["string"]
	                }
	            };
	        }
	    }, {
	        key: "Equals",
	        value: function (other) {
	            return (0, _Util.equalsUnions)(this, other);
	        }
	    }, {
	        key: "CompareTo",
	        value: function (other) {
	            return (0, _Util.compareUnions)(this, other);
	        }
	    }]);
	
	    return Actions;
	}();
	
	(0, _Symbol2.setType)("Client.Actions", Actions);
	
	function update(model, msg) {
	    return msg.Fields[0];
	}
	
	function view(model) {
	    return function () {
	        var tagName = "div";
	        return function (children) {
	            return new _FableArch.Types.DomNode("Element", [[tagName, new _List2.default()], children]);
	        };
	    }()((0, _List.ofArray)([function () {
	        var tagName = "label";
	        return function (children) {
	            return new _FableArch.Types.DomNode("Element", [[tagName, new _List2.default()], children]);
	        };
	    }()((0, _List.ofArray)([new _FableArch.Types.DomNode("Text", ["Enter name: "])])), new _FableArch.Types.DomNode("VoidElement", [["input", (0, _List.ofArray)([new _FableArch.Types.Attribute("EventHandler", [["oninput", function (e) {
	        return function (x) {
	            return new Actions("ChangeInput", [x]);
	        }(e.target.value);
	    }]])])]]), new _FableArch.Types.DomNode("VoidElement", [["br", new _List2.default()]]), function () {
	        var tagName = "span";
	        return function (children) {
	            return new _FableArch.Types.DomNode("Element", [[tagName, new _List2.default()], children]);
	        };
	    }()((0, _List.ofArray)([new _FableArch.Types.DomNode("Text", [(0, _String.fsFormat)("Hello %s")(function (x) {
	        return x;
	    })(model)])]))]));
	}
	
	_FableArch2.AppApi.start(_FableArch2.AppApi.withStartNodeSelector("#sample", _FableArch2.AppApi.createSimpleApp("", function (model) {
	    return view(model);
	}, function (model) {
	    return function (msg) {
	        return update(model, msg);
	    };
	})(function (selector) {
	    return function (handler) {
	        return function (view_1) {
	            return (0, _FableArch3.createRender)(selector, handler, view_1);
	        };
	    };
	})));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.Symbol = mod.exports;
	    }
	})(this, function (exports) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.setType = setType;
	    exports.getType = getType;
	    var fableGlobal = function () {
	        var globalObj = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : null;
	        if (typeof globalObj.__FABLE_CORE__ === "undefined") {
	            globalObj.__FABLE_CORE__ = {
	                types: new Map(),
	                symbols: {
	                    reflection: Symbol("reflection"),
	                    generics: Symbol("generics")
	                }
	            };
	        }
	        return globalObj.__FABLE_CORE__;
	    }();
	    function setType(fullName, cons) {
	        fableGlobal.types.set(fullName, cons);
	    }
	    function getType(fullName) {
	        return fableGlobal.types.get(fullName);
	    }
	    exports.default = fableGlobal.symbols;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Symbol"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Symbol);
	        global.Util = mod.exports;
	    }
	})(this, function (exports, _Symbol) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.Array = exports.Unit = exports.Any = exports.NonDeclaredType = undefined;
	    exports.Option = Option;
	    exports.Tuple = Tuple;
	    exports.GenericParam = GenericParam;
	    exports.Interface = Interface;
	    exports.makeGeneric = makeGeneric;
	    exports.isGeneric = isGeneric;
	    exports.getDefinition = getDefinition;
	    exports.extendInfo = extendInfo;
	    exports.hasInterface = hasInterface;
	    exports.isArray = isArray;
	    exports.getRestParams = getRestParams;
	    exports.toString = toString;
	    exports.hash = hash;
	    exports.equals = equals;
	    exports.compare = compare;
	    exports.equalsRecords = equalsRecords;
	    exports.compareRecords = compareRecords;
	    exports.equalsUnions = equalsUnions;
	    exports.compareUnions = compareUnions;
	    exports.createDisposable = createDisposable;
	    exports.createObj = createObj;
	    exports.toPlainJsObj = toPlainJsObj;
	    exports.round = round;
	
	    var _Symbol2 = _interopRequireDefault(_Symbol);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _defineProperty(obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, {
	                value: value,
	                enumerable: true,
	                configurable: true,
	                writable: true
	            });
	        } else {
	            obj[key] = value;
	        }
	
	        return obj;
	    }
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    function _possibleConstructorReturn(self, call) {
	        if (!self) {
	            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	        }
	
	        return call && (typeof call === "object" || typeof call === "function") ? call : self;
	    }
	
	    function _inherits(subClass, superClass) {
	        if (typeof superClass !== "function" && superClass !== null) {
	            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	        }
	
	        subClass.prototype = Object.create(superClass && superClass.prototype, {
	            constructor: {
	                value: subClass,
	                enumerable: false,
	                writable: true,
	                configurable: true
	            }
	        });
	        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var NonDeclaredType = exports.NonDeclaredType = function () {
	        function NonDeclaredType(kind, name, generics) {
	            _classCallCheck(this, NonDeclaredType);
	
	            this.kind = kind;
	            this.name = name;
	            this.generics = generics || [];
	        }
	
	        _createClass(NonDeclaredType, [{
	            key: "Equals",
	            value: function Equals(other) {
	                return this.kind === other.kind && this.name === other.name && equals(this.generics, other.generics);
	            }
	        }]);
	
	        return NonDeclaredType;
	    }();
	
	    var GenericNonDeclaredType = function (_NonDeclaredType) {
	        _inherits(GenericNonDeclaredType, _NonDeclaredType);
	
	        function GenericNonDeclaredType(kind, generics) {
	            _classCallCheck(this, GenericNonDeclaredType);
	
	            return _possibleConstructorReturn(this, (GenericNonDeclaredType.__proto__ || Object.getPrototypeOf(GenericNonDeclaredType)).call(this, kind, null, generics));
	        }
	
	        _createClass(GenericNonDeclaredType, [{
	            key: _Symbol2.default.generics,
	            value: function value() {
	                return this.generics;
	            }
	        }]);
	
	        return GenericNonDeclaredType;
	    }(NonDeclaredType);
	
	    var Any = exports.Any = new NonDeclaredType("Any");
	    var Unit = exports.Unit = new NonDeclaredType("Unit");
	    function Option(t) {
	        return new GenericNonDeclaredType("Option", [t]);
	    }
	    function FArray(t) {
	        return new GenericNonDeclaredType("Array", [t]);
	    }
	    exports.Array = FArray;
	    function Tuple(ts) {
	        return new GenericNonDeclaredType("Tuple", ts);
	    }
	    function GenericParam(name) {
	        return new NonDeclaredType("GenericParam", name);
	    }
	    function Interface(name) {
	        return new NonDeclaredType("Interface", name);
	    }
	    function makeGeneric(typeDef, genArgs) {
	        return function (_typeDef) {
	            _inherits(_class, _typeDef);
	
	            function _class() {
	                _classCallCheck(this, _class);
	
	                return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	            }
	
	            _createClass(_class, [{
	                key: _Symbol2.default.generics,
	                value: function value() {
	                    return genArgs;
	                }
	            }]);
	
	            return _class;
	        }(typeDef);
	    }
	    /**
	     * Checks if this a function constructor extending another with generic info.
	     */
	    function isGeneric(typ) {
	        return typeof typ === "function" && !!typ.prototype[_Symbol2.default.generics];
	    }
	    /**
	     * Returns the parent if this is a declared generic type or the argument otherwise.
	     * Attention: Unlike .NET this doesn't throw an exception if type is not generic.
	    */
	    function getDefinition(typ) {
	        return typeof typ === "function" && typ.prototype[_Symbol2.default.generics] ? Object.getPrototypeOf(typ.prototype).constructor : typ;
	    }
	    function extendInfo(cons, info) {
	        var parent = Object.getPrototypeOf(cons.prototype);
	        if (typeof parent[_Symbol2.default.reflection] === "function") {
	            var _ret = function () {
	                var newInfo = {},
	                    parentInfo = parent[_Symbol2.default.reflection]();
	                Object.getOwnPropertyNames(info).forEach(function (k) {
	                    var i = info[k];
	                    if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object") {
	                        newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : Object.assign(parentInfo[k] || {}, i);
	                    } else {
	                        newInfo[k] = i;
	                    }
	                });
	                return {
	                    v: newInfo
	                };
	            }();
	
	            if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	        }
	        return info;
	    }
	    function hasInterface(obj, interfaceName) {
	        if (typeof obj[_Symbol2.default.reflection] === "function") {
	            var interfaces = obj[_Symbol2.default.reflection]().interfaces;
	            return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
	        }
	        return false;
	    }
	    function isArray(obj) {
	        return Array.isArray(obj) || ArrayBuffer.isView(obj);
	    }
	    function getRestParams(args, idx) {
	        for (var _len = args.length, restArgs = Array(_len > idx ? _len - idx : 0), _key = idx; _key < _len; _key++) {
	            restArgs[_key - idx] = args[_key];
	        }return restArgs;
	    }
	    function toString(o) {
	        return o != null && typeof o.ToString == "function" ? o.ToString() : String(o);
	    }
	    function hash(x) {
	        var s = JSON.stringify(x);
	        var h = 5381,
	            i = 0,
	            len = s.length;
	        while (i < len) {
	            h = h * 33 ^ s.charCodeAt(i++);
	        }
	        return h;
	    }
	    function equals(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) return true;else if (x == null) return y == null;else if (y == null) return false;else if (isGeneric(x) && isGeneric(y)) return getDefinition(x) === getDefinition(y) && equalsRecords(x.prototype[_Symbol2.default.generics](), y.prototype[_Symbol2.default.generics]());else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return false;else if (typeof x.Equals === "function") return x.Equals(y);else if (Array.isArray(x)) {
	            if (x.length != y.length) return false;
	            for (var i = 0; i < x.length; i++) {
	                if (!equals(x[i], y[i])) return false;
	            }return true;
	        } else if (ArrayBuffer.isView(x)) {
	            if (x.byteLength !== y.byteLength) return false;
	            var dv1 = new DataView(x.buffer),
	                dv2 = new DataView(y.buffer);
	            for (var _i = 0; _i < x.byteLength; _i++) {
	                if (dv1.getUint8(_i) !== dv2.getUint8(_i)) return false;
	            }return true;
	        } else if (x instanceof Date) return x.getTime() == y.getTime();else return false;
	    }
	    function compare(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) return 0;
	        if (x == null) return y == null ? 0 : -1;else if (y == null) return -1;else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) return -1;else if (hasInterface(x, "System.IComparable")) return x.CompareTo(y);else if (Array.isArray(x)) {
	            if (x.length != y.length) return x.length < y.length ? -1 : 1;
	            for (var i = 0, j = 0; i < x.length; i++) {
	                if ((j = compare(x[i], y[i])) !== 0) return j;
	            }return 0;
	        } else if (ArrayBuffer.isView(x)) {
	            if (x.byteLength != y.byteLength) return x.byteLength < y.byteLength ? -1 : 1;
	            var dv1 = new DataView(x.buffer),
	                dv2 = new DataView(y.buffer);
	            for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
	                b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
	                if (b1 < b2) return -1;
	                if (b1 > b2) return 1;
	            }
	            return 0;
	        } else if (x instanceof Date) return compare(x.getTime(), y.getTime());else return x < y ? -1 : 1;
	    }
	    function equalsRecords(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) {
	            return true;
	        } else {
	            var keys = Object.getOwnPropertyNames(x);
	            for (var i = 0; i < keys.length; i++) {
	                if (!equals(x[keys[i]], y[keys[i]])) return false;
	            }
	            return true;
	        }
	    }
	    function compareRecords(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) {
	            return 0;
	        } else {
	            var keys = Object.getOwnPropertyNames(x);
	            for (var i = 0; i < keys.length; i++) {
	                var res = compare(x[keys[i]], y[keys[i]]);
	                if (res !== 0) return res;
	            }
	            return 0;
	        }
	    }
	    function equalsUnions(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) {
	            return true;
	        } else if (x.Case !== y.Case) {
	            return false;
	        } else {
	            for (var i = 0; i < x.Fields.length; i++) {
	                if (!equals(x.Fields[i], y.Fields[i])) return false;
	            }
	            return true;
	        }
	    }
	    function compareUnions(x, y) {
	        // Optimization if they are referencially equal
	        if (x === y) {
	            return 0;
	        } else {
	            var res = compare(x.Case, y.Case);
	            if (res !== 0) return res;
	            for (var i = 0; i < x.Fields.length; i++) {
	                res = compare(x.Fields[i], y.Fields[i]);
	                if (res !== 0) return res;
	            }
	            return 0;
	        }
	    }
	    function createDisposable(f) {
	        return _defineProperty({
	            Dispose: f
	        }, _Symbol2.default.reflection, function () {
	            return { interfaces: ["System.IDisposable"] };
	        });
	    }
	    function createObj(fields) {
	        var o = {};
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var kv = _step.value;
	
	                o[kv[0]] = kv[1];
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        return o;
	    }
	    function toPlainJsObj(source) {
	        if (source != null && source.constructor != Object) {
	            var target = {};
	            var props = Object.getOwnPropertyNames(source);
	            for (var i = 0; i < props.length; i++) {
	                target[props[i]] = source[props[i]];
	            }
	            // Copy also properties from prototype, see #192
	            var proto = Object.getPrototypeOf(source);
	            if (proto != null) {
	                props = Object.getOwnPropertyNames(proto);
	                for (var _i3 = 0; _i3 < props.length; _i3++) {
	                    var prop = Object.getOwnPropertyDescriptor(proto, props[_i3]);
	                    if (prop.value) {
	                        target[props[_i3]] = prop.value;
	                    } else if (prop.get) {
	                        target[props[_i3]] = prop.get.apply(source);
	                    }
	                }
	            }
	            return target;
	        } else {
	            return source;
	        }
	    }
	    function round(value) {
	        var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	        var m = Math.pow(10, digits);
	        var n = +(digits ? value * m : value).toFixed(8);
	        var i = Math.floor(n),
	            f = n - i;
	        var e = 1e-8;
	        var r = f > 0.5 - e && f < 0.5 + e ? i % 2 == 0 ? i : i + 1 : Math.round(n);
	        return digits ? r / m : r;
	    }
	});

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Svg = exports.Attributes = exports.Types = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.mapEventHandler = mapEventHandler;
	exports.mapAttributes = mapAttributes;
	exports.mapElem = mapElem;
	exports.mapVoidElem = mapVoidElem;
	exports.map = map;
	
	var _Symbol2 = __webpack_require__(1);
	
	var _Symbol3 = _interopRequireDefault(_Symbol2);
	
	var _Util = __webpack_require__(2);
	
	var _List = __webpack_require__(4);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _String = __webpack_require__(10);
	
	var _Seq = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Types = exports.Types = function (__exports) {
	    var Attribute = __exports.Attribute = function () {
	        function Attribute(caseName, fields) {
	            _classCallCheck(this, Attribute);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(Attribute, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.Html.Types.Attribute",
	                    interfaces: ["FSharpUnion"],
	                    cases: {
	                        Attribute: [(0, _Util.Tuple)(["string", "string"])],
	                        EventHandler: [(0, _Util.Tuple)(["string", "function"])],
	                        Property: [(0, _Util.Tuple)(["string", "string"])],
	                        Style: [(0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.Tuple)(["string", "string"])
	                        })]
	                    }
	                };
	            }
	        }]);
	
	        return Attribute;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.Html.Types.Attribute", Attribute);
	
	    var DomNode = __exports.DomNode = function () {
	        function DomNode(caseName, fields) {
	            _classCallCheck(this, DomNode);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(DomNode, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.Html.Types.DomNode",
	                    interfaces: ["FSharpUnion"],
	                    cases: {
	                        Element: [(0, _Util.Tuple)(["string", (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.makeGeneric)(Attribute, {
	                                TMessage: (0, _Util.GenericParam)("TMessage")
	                            })
	                        })]), (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.makeGeneric)(DomNode, {
	                                TMessage: (0, _Util.GenericParam)("TMessage")
	                            })
	                        })],
	                        Svg: [(0, _Util.Tuple)(["string", (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.makeGeneric)(Attribute, {
	                                TMessage: (0, _Util.GenericParam)("TMessage")
	                            })
	                        })]), (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.makeGeneric)(DomNode, {
	                                TMessage: (0, _Util.GenericParam)("TMessage")
	                            })
	                        })],
	                        Text: ["string"],
	                        VoidElement: [(0, _Util.Tuple)(["string", (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.makeGeneric)(Attribute, {
	                                TMessage: (0, _Util.GenericParam)("TMessage")
	                            })
	                        })])],
	                        WhiteSpace: ["string"]
	                    }
	                };
	            }
	        }]);
	
	        return DomNode;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.Html.Types.DomNode", DomNode);
	    return __exports;
	}({});
	
	function mapEventHandler(mapping, e, f) {
	    return new Types.Attribute("EventHandler", [[e, function ($var1) {
	        return mapping(f($var1));
	    }]]);
	}
	
	function mapAttributes(mapping, attribute) {
	    return attribute.Case === "Style" ? new Types.Attribute("Style", [attribute.Fields[0]]) : attribute.Case === "Property" ? new Types.Attribute("Property", [attribute.Fields[0]]) : attribute.Case === "Attribute" ? new Types.Attribute("Attribute", [attribute.Fields[0]]) : mapEventHandler(mapping, attribute.Fields[0][0], attribute.Fields[0][1]);
	}
	
	function mapElem(mapping, node_0, node_1) {
	    var node = [node_0, node_1];
	    return [node[0], (0, _List.map)(function (attribute) {
	        return mapAttributes(mapping, attribute);
	    }, node[1])];
	}
	
	function mapVoidElem(mapping, node_0, node_1) {
	    var node = [node_0, node_1];
	    return [node[0], (0, _List.map)(function (attribute) {
	        return mapAttributes(mapping, attribute);
	    }, node[1])];
	}
	
	function map(mapping, node) {
	    return node.Case === "VoidElement" ? new Types.DomNode("VoidElement", [mapVoidElem(mapping, node.Fields[0][0], node.Fields[0][1])]) : node.Case === "Text" ? new Types.DomNode("Text", [node.Fields[0]]) : node.Case === "WhiteSpace" ? new Types.DomNode("WhiteSpace", [node.Fields[0]]) : node.Case === "Svg" ? new Types.DomNode("Element", [mapElem(mapping, node.Fields[0][0], node.Fields[0][1]), (0, _List.map)(function (node_1) {
	        return map(mapping, node_1);
	    }, node.Fields[1])]) : new Types.DomNode("Element", [mapElem(mapping, node.Fields[0][0], node.Fields[0][1]), (0, _List.map)(function (node_1) {
	        return map(mapping, node_1);
	    }, node.Fields[1])]);
	}
	
	var Attributes = exports.Attributes = function (__exports) {
	    var classBaseList = __exports.classBaseList = function (b, list) {
	        return new Types.Attribute("Attribute", [["class", (0, _String.fsFormat)("%s %s")(function (x) {
	            return x;
	        })(b)((0, _String.join)(" ", (0, _Seq.map)(function (tupledArg) {
	            return tupledArg[0];
	        }, (0, _Seq.filter)(function (tupledArg) {
	            return tupledArg[1];
	        }, list))))]]);
	    };
	
	    return __exports;
	}({});
	
	var Svg = exports.Svg = function (__exports) {
	    var svgNS = __exports.svgNS = function () {
	        return new Types.Attribute("Property", [["namespace", "http://www.w3.org/2000/svg"]]);
	    };
	
	    return __exports;
	}({});


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5), __webpack_require__(6), __webpack_require__(8)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./ListClass"), require("./Seq"), require("./Map"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.ListClass, global.Seq, global.Map);
	        global.List = mod.exports;
	    }
	})(this, function (exports, _ListClass, _Seq, _Map) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ofArray = undefined;
	    Object.defineProperty(exports, "ofArray", {
	        enumerable: true,
	        get: function () {
	            return _ListClass.ofArray;
	        }
	    });
	    exports.append = append;
	    exports.choose = choose;
	    exports.collect = collect;
	    exports.concat = concat;
	    exports.filter = filter;
	    exports.where = where;
	    exports.initialize = initialize;
	    exports.map = map;
	    exports.mapIndexed = mapIndexed;
	    exports.partition = partition;
	    exports.replicate = replicate;
	    exports.reverse = reverse;
	    exports.singleton = singleton;
	    exports.slice = slice;
	    exports.unzip = unzip;
	    exports.unzip3 = unzip3;
	    exports.groupBy = groupBy;
	
	    var _ListClass2 = _interopRequireDefault(_ListClass);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    exports.default = _ListClass2.default;
	    function append(xs, ys) {
	        return (0, _Seq.fold)(function (acc, x) {
	            return new _ListClass2.default(x, acc);
	        }, ys, reverse(xs));
	    }
	    function choose(f, xs) {
	        var r = (0, _Seq.fold)(function (acc, x) {
	            var y = f(x);
	            return y != null ? new _ListClass2.default(y, acc) : acc;
	        }, new _ListClass2.default(), xs);
	        return reverse(r);
	    }
	    function collect(f, xs) {
	        return (0, _Seq.fold)(function (acc, x) {
	            return append(acc, f(x));
	        }, new _ListClass2.default(), xs);
	    }
	    // TODO: should be xs: Iterable<List<T>>
	    function concat(xs) {
	        return collect(function (x) {
	            return x;
	        }, xs);
	    }
	    function filter(f, xs) {
	        return reverse((0, _Seq.fold)(function (acc, x) {
	            return f(x) ? new _ListClass2.default(x, acc) : acc;
	        }, new _ListClass2.default(), xs));
	    }
	    function where(f, xs) {
	        return filter(f, xs);
	    }
	    function initialize(n, f) {
	        if (n < 0) {
	            throw new Error("List length must be non-negative");
	        }
	        var xs = new _ListClass2.default();
	        for (var i = 1; i <= n; i++) {
	            xs = new _ListClass2.default(f(n - i), xs);
	        }
	        return xs;
	    }
	    function map(f, xs) {
	        return reverse((0, _Seq.fold)(function (acc, x) {
	            return new _ListClass2.default(f(x), acc);
	        }, new _ListClass2.default(), xs));
	    }
	    function mapIndexed(f, xs) {
	        return reverse((0, _Seq.fold)(function (acc, x, i) {
	            return new _ListClass2.default(f(i, x), acc);
	        }, new _ListClass2.default(), xs));
	    }
	    function partition(f, xs) {
	        return (0, _Seq.fold)(function (acc, x) {
	            var lacc = acc[0],
	                racc = acc[1];
	            return f(x) ? [new _ListClass2.default(x, lacc), racc] : [lacc, new _ListClass2.default(x, racc)];
	        }, [new _ListClass2.default(), new _ListClass2.default()], reverse(xs));
	    }
	    function replicate(n, x) {
	        return initialize(n, function () {
	            return x;
	        });
	    }
	    function reverse(xs) {
	        return (0, _Seq.fold)(function (acc, x) {
	            return new _ListClass2.default(x, acc);
	        }, new _ListClass2.default(), xs);
	    }
	    function singleton(x) {
	        return new _ListClass2.default(x, new _ListClass2.default());
	    }
	    function slice(lower, upper, xs) {
	        var noLower = lower == null;
	        var noUpper = upper == null;
	        return reverse((0, _Seq.fold)(function (acc, x, i) {
	            return (noLower || lower <= i) && (noUpper || i <= upper) ? new _ListClass2.default(x, acc) : acc;
	        }, new _ListClass2.default(), xs));
	    }
	    /* ToDo: instance unzip() */
	    function unzip(xs) {
	        return (0, _Seq.foldBack)(function (xy, acc) {
	            return [new _ListClass2.default(xy[0], acc[0]), new _ListClass2.default(xy[1], acc[1])];
	        }, xs, [new _ListClass2.default(), new _ListClass2.default()]);
	    }
	    /* ToDo: instance unzip3() */
	    function unzip3(xs) {
	        return (0, _Seq.foldBack)(function (xyz, acc) {
	            return [new _ListClass2.default(xyz[0], acc[0]), new _ListClass2.default(xyz[1], acc[1]), new _ListClass2.default(xyz[2], acc[2])];
	        }, xs, [new _ListClass2.default(), new _ListClass2.default(), new _ListClass2.default()]);
	    }
	    function groupBy(f, xs) {
	        return (0, _Seq.toList)((0, _Seq.map)(function (k) {
	            return [k[0], (0, _Seq.toList)(k[1])];
	        }, (0, _Map.groupBy)(f, xs)));
	    }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(1), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Symbol"), require("./Util"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Symbol, global.Util);
	        global.ListClass = mod.exports;
	    }
	})(this, function (exports, _Symbol, _Util) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.ofArray = ofArray;
	
	    var _Symbol2 = _interopRequireDefault(_Symbol);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    // This module is split from List.ts to prevent cyclic dependencies
	    function ofArray(args, base) {
	        var acc = base || new List();
	        for (var i = args.length - 1; i >= 0; i--) {
	            acc = new List(args[i], acc);
	        }
	        return acc;
	    }
	
	    var List = function () {
	        function List(head, tail) {
	            _classCallCheck(this, List);
	
	            this.head = head;
	            this.tail = tail;
	        }
	
	        _createClass(List, [{
	            key: "ToString",
	            value: function ToString() {
	                return "[" + Array.from(this).map(_Util.toString).join("; ") + "]";
	            }
	        }, {
	            key: "Equals",
	            value: function Equals(x) {
	                // Optimization if they are referencially equal
	                if (this === x) {
	                    return true;
	                } else {
	                    var iter1 = this[Symbol.iterator](),
	                        iter2 = x[Symbol.iterator]();
	                    for (;;) {
	                        var cur1 = iter1.next(),
	                            cur2 = iter2.next();
	                        if (cur1.done) return cur2.done ? true : false;else if (cur2.done) return false;else if (!(0, _Util.equals)(cur1.value, cur2.value)) return false;
	                    }
	                }
	            }
	        }, {
	            key: "CompareTo",
	            value: function CompareTo(x) {
	                // Optimization if they are referencially equal
	                if (this === x) {
	                    return 0;
	                } else {
	                    var acc = 0;
	                    var iter1 = this[Symbol.iterator](),
	                        iter2 = x[Symbol.iterator]();
	                    for (;;) {
	                        var cur1 = iter1.next(),
	                            cur2 = iter2.next();
	                        if (cur1.done) return cur2.done ? acc : -1;else if (cur2.done) return 1;else {
	                            acc = (0, _Util.compare)(cur1.value, cur2.value);
	                            if (acc != 0) return acc;
	                        }
	                    }
	                }
	            }
	        }, {
	            key: Symbol.iterator,
	            value: function value() {
	                var cur = this;
	                return {
	                    next: function next() {
	                        var tmp = cur;
	                        cur = cur.tail;
	                        return { done: tmp.tail == null, value: tmp.head };
	                    }
	                };
	            }
	        }, {
	            key: _Symbol2.default.reflection,
	            value: function value() {
	                return {
	                    type: "Microsoft.FSharp.Collections.FSharpList",
	                    interfaces: ["System.IEquatable", "System.IComparable"]
	                };
	            }
	        }, {
	            key: "length",
	            get: function get() {
	                var cur = this,
	                    acc = 0;
	                while (cur.tail != null) {
	                    cur = cur.tail;
	                    acc++;
	                }
	                return acc;
	            }
	        }]);
	
	        return List;
	    }();
	
	    exports.default = List;
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(7), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Util"), require("./Array"), require("./ListClass"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Util, global.Array, global.ListClass);
	        global.Seq = mod.exports;
	    }
	})(this, function (exports, _Util, _Array, _ListClass) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.toList = toList;
	    exports.ofList = ofList;
	    exports.ofArray = ofArray;
	    exports.append = append;
	    exports.average = average;
	    exports.averageBy = averageBy;
	    exports.concat = concat;
	    exports.collect = collect;
	    exports.choose = choose;
	    exports.compareWith = compareWith;
	    exports.delay = delay;
	    exports.empty = empty;
	    exports.enumerateWhile = enumerateWhile;
	    exports.enumerateThenFinally = enumerateThenFinally;
	    exports.enumerateUsing = enumerateUsing;
	    exports.exactlyOne = exactlyOne;
	    exports.except = except;
	    exports.exists = exists;
	    exports.exists2 = exists2;
	    exports.filter = filter;
	    exports.where = where;
	    exports.fold = fold;
	    exports.foldBack = foldBack;
	    exports.fold2 = fold2;
	    exports.foldBack2 = foldBack2;
	    exports.forAll = forAll;
	    exports.forAll2 = forAll2;
	    exports.tryHead = tryHead;
	    exports.head = head;
	    exports.initialize = initialize;
	    exports.initializeInfinite = initializeInfinite;
	    exports.tryItem = tryItem;
	    exports.item = item;
	    exports.iterate = iterate;
	    exports.iterate2 = iterate2;
	    exports.iterateIndexed = iterateIndexed;
	    exports.iterateIndexed2 = iterateIndexed2;
	    exports.isEmpty = isEmpty;
	    exports.tryLast = tryLast;
	    exports.last = last;
	    exports.count = count;
	    exports.map = map;
	    exports.mapIndexed = mapIndexed;
	    exports.map2 = map2;
	    exports.mapIndexed2 = mapIndexed2;
	    exports.map3 = map3;
	    exports.mapFold = mapFold;
	    exports.mapFoldBack = mapFoldBack;
	    exports.max = max;
	    exports.maxBy = maxBy;
	    exports.min = min;
	    exports.minBy = minBy;
	    exports.pairwise = pairwise;
	    exports.permute = permute;
	    exports.rangeStep = rangeStep;
	    exports.rangeChar = rangeChar;
	    exports.range = range;
	    exports.readOnly = readOnly;
	    exports.reduce = reduce;
	    exports.reduceBack = reduceBack;
	    exports.replicate = replicate;
	    exports.reverse = reverse;
	    exports.scan = scan;
	    exports.scanBack = scanBack;
	    exports.singleton = singleton;
	    exports.skip = skip;
	    exports.skipWhile = skipWhile;
	    exports.sortWith = sortWith;
	    exports.sum = sum;
	    exports.sumBy = sumBy;
	    exports.tail = tail;
	    exports.take = take;
	    exports.truncate = truncate;
	    exports.takeWhile = takeWhile;
	    exports.tryFind = tryFind;
	    exports.find = find;
	    exports.tryFindBack = tryFindBack;
	    exports.findBack = findBack;
	    exports.tryFindIndex = tryFindIndex;
	    exports.findIndex = findIndex;
	    exports.tryFindIndexBack = tryFindIndexBack;
	    exports.findIndexBack = findIndexBack;
	    exports.tryPick = tryPick;
	    exports.pick = pick;
	    exports.unfold = unfold;
	    exports.zip = zip;
	    exports.zip3 = zip3;
	
	    var _ListClass2 = _interopRequireDefault(_ListClass);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _slicedToArray = function () {
	        function sliceIterator(arr, i) {
	            var _arr = [];
	            var _n = true;
	            var _d = false;
	            var _e = undefined;
	
	            try {
	                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	                    _arr.push(_s.value);
	
	                    if (i && _arr.length === i) break;
	                }
	            } catch (err) {
	                _d = true;
	                _e = err;
	            } finally {
	                try {
	                    if (!_n && _i["return"]) _i["return"]();
	                } finally {
	                    if (_d) throw _e;
	                }
	            }
	
	            return _arr;
	        }
	
	        return function (arr, i) {
	            if (Array.isArray(arr)) {
	                return arr;
	            } else if (Symbol.iterator in Object(arr)) {
	                return sliceIterator(arr, i);
	            } else {
	                throw new TypeError("Invalid attempt to destructure non-iterable instance");
	            }
	        };
	    }();
	
	    function _defineProperty(obj, key, value) {
	        if (key in obj) {
	            Object.defineProperty(obj, key, {
	                value: value,
	                enumerable: true,
	                configurable: true,
	                writable: true
	            });
	        } else {
	            obj[key] = value;
	        }
	
	        return obj;
	    }
	
	    function __failIfNone(res) {
	        if (res == null) throw new Error("Seq did not contain any matching element");
	        return res;
	    }
	    function toList(xs) {
	        return foldBack(function (x, acc) {
	            return new _ListClass2.default(x, acc);
	        }, xs, new _ListClass2.default());
	    }
	    function ofList(xs) {
	        return delay(function () {
	            return unfold(function (x) {
	                return x.tail != null ? [x.head, x.tail] : null;
	            }, xs);
	        });
	    }
	    function ofArray(xs) {
	        return delay(function () {
	            return unfold(function (i) {
	                return i < xs.length ? [xs[i], i + 1] : null;
	            }, 0);
	        });
	    }
	    function append(xs, ys) {
	        return delay(function () {
	            var firstDone = false;
	            var i = xs[Symbol.iterator]();
	            var iters = [i, null];
	            return unfold(function () {
	                var cur = void 0;
	                if (!firstDone) {
	                    cur = iters[0].next();
	                    if (!cur.done) {
	                        return [cur.value, iters];
	                    } else {
	                        firstDone = true;
	                        iters = [null, ys[Symbol.iterator]()];
	                    }
	                }
	                cur = iters[1].next();
	                return !cur.done ? [cur.value, iters] : null;
	            }, iters);
	        });
	    }
	    function average(xs) {
	        var count = 1;
	        var sum = reduce(function (acc, x) {
	            count++;
	            return acc + x;
	        }, xs);
	        return sum / count;
	    }
	    function averageBy(f, xs) {
	        var count = 1;
	        var sum = reduce(function (acc, x) {
	            count++;
	            return (count === 2 ? f(acc) : acc) + f(x);
	        }, xs);
	        return sum / count;
	    }
	    function concat(xs) {
	        return delay(function () {
	            var iter = xs[Symbol.iterator]();
	            var output = null;
	            return unfold(function (innerIter) {
	                var hasFinished = false;
	                while (!hasFinished) {
	                    if (innerIter == null) {
	                        var cur = iter.next();
	                        if (!cur.done) {
	                            innerIter = cur.value[Symbol.iterator]();
	                        } else {
	                            hasFinished = true;
	                        }
	                    } else {
	                        var _cur = innerIter.next();
	                        if (!_cur.done) {
	                            output = _cur.value;
	                            hasFinished = true;
	                        } else {
	                            innerIter = null;
	                        }
	                    }
	                }
	                return innerIter != null && output != null ? [output, innerIter] : null;
	            }, null);
	        });
	    }
	    function collect(f, xs) {
	        return concat(map(f, xs));
	    }
	    function choose(f, xs) {
	        var trySkipToNext = function trySkipToNext(iter) {
	            var cur = iter.next();
	            if (!cur.done) {
	                var y = f(cur.value);
	                return y != null ? [y, iter] : trySkipToNext(iter);
	            }
	            return void 0;
	        };
	        return delay(function () {
	            return unfold(function (iter) {
	                return trySkipToNext(iter);
	            }, xs[Symbol.iterator]());
	        });
	    }
	    function compareWith(f, xs, ys) {
	        var nonZero = tryFind(function (i) {
	            return i != 0;
	        }, map2(function (x, y) {
	            return f(x, y);
	        }, xs, ys));
	        return nonZero != null ? nonZero : count(xs) - count(ys);
	    }
	    function delay(f) {
	        return _defineProperty({}, Symbol.iterator, function () {
	            return f()[Symbol.iterator]();
	        });
	    }
	    function empty() {
	        return unfold(function () {
	            return void 0;
	        });
	    }
	    function enumerateWhile(cond, xs) {
	        return concat(unfold(function () {
	            return cond() ? [xs, true] : null;
	        }));
	    }
	    function enumerateThenFinally(xs, finalFn) {
	        return delay(function () {
	            var iter = void 0;
	            try {
	                iter = xs[Symbol.iterator]();
	            } catch (err) {
	                return void 0;
	            } finally {
	                finalFn();
	            }
	            return unfold(function (iter) {
	                try {
	                    var cur = iter.next();
	                    return !cur.done ? [cur.value, iter] : null;
	                } catch (err) {
	                    return void 0;
	                } finally {
	                    finalFn();
	                }
	            }, iter);
	        });
	    }
	    function enumerateUsing(disp, work) {
	        var isDisposed = false;
	        var disposeOnce = function disposeOnce() {
	            if (!isDisposed) {
	                isDisposed = true;
	                disp.Dispose();
	            }
	        };
	        try {
	            return enumerateThenFinally(work(disp), disposeOnce);
	        } catch (err) {
	            return void 0;
	        } finally {
	            disposeOnce();
	        }
	    }
	    function exactlyOne(xs) {
	        var iter = xs[Symbol.iterator]();
	        var fst = iter.next();
	        if (fst.done) throw new Error("Seq was empty");
	        var snd = iter.next();
	        if (!snd.done) throw new Error("Seq had multiple items");
	        return fst.value;
	    }
	    function except(itemsToExclude, source) {
	        var exclusionItems = Array.from(itemsToExclude);
	        var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
	            return !exclusionItems.some(function (excludedItem) {
	                return (0, _Util.equals)(excludedItem, element);
	            });
	        };
	        return filter(testIsNotInExclusionItems, source);
	    }
	    function exists(f, xs) {
	        function aux(iter) {
	            var cur = iter.next();
	            return !cur.done && (f(cur.value) || aux(iter));
	        }
	        return aux(xs[Symbol.iterator]());
	    }
	    function exists2(f, xs, ys) {
	        function aux(iter1, iter2) {
	            var cur1 = iter1.next(),
	                cur2 = iter2.next();
	            return !cur1.done && !cur2.done && (f(cur1.value, cur2.value) || aux(iter1, iter2));
	        }
	        return aux(xs[Symbol.iterator](), ys[Symbol.iterator]());
	    }
	    function filter(f, xs) {
	        function trySkipToNext(iter) {
	            var cur = iter.next();
	            while (!cur.done) {
	                if (f(cur.value)) {
	                    return [cur.value, iter];
	                }
	                cur = iter.next();
	            }
	            return void 0;
	        }
	        return delay(function () {
	            return unfold(trySkipToNext, xs[Symbol.iterator]());
	        });
	    }
	    function where(f, xs) {
	        return filter(f, xs);
	    }
	    function fold(f, acc, xs) {
	        if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
	            return xs.reduce(f, acc);
	        } else {
	            var cur = void 0;
	            for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	                cur = iter.next();
	                if (cur.done) break;
	                acc = f(acc, cur.value, i);
	            }
	            return acc;
	        }
	    }
	    function foldBack(f, xs, acc) {
	        var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	        for (var i = arr.length - 1; i >= 0; i--) {
	            acc = f(arr[i], acc, i);
	        }
	        return acc;
	    }
	    function fold2(f, acc, xs, ys) {
	        var iter1 = xs[Symbol.iterator](),
	            iter2 = ys[Symbol.iterator]();
	        var cur1 = void 0,
	            cur2 = void 0;
	        for (var i = 0;; i++) {
	            cur1 = iter1.next();
	            cur2 = iter2.next();
	            if (cur1.done || cur2.done) {
	                break;
	            }
	            acc = f(acc, cur1.value, cur2.value, i);
	        }
	        return acc;
	    }
	    function foldBack2(f, xs, ys, acc) {
	        var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	        var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
	        for (var i = ar1.length - 1; i >= 0; i--) {
	            acc = f(ar1[i], ar2[i], acc, i);
	        }
	        return acc;
	    }
	    function forAll(f, xs) {
	        return fold(function (acc, x) {
	            return acc && f(x);
	        }, true, xs);
	    }
	    function forAll2(f, xs, ys) {
	        return fold2(function (acc, x, y) {
	            return acc && f(x, y);
	        }, true, xs, ys);
	    }
	    function tryHead(xs) {
	        var iter = xs[Symbol.iterator]();
	        var cur = iter.next();
	        return cur.done ? null : cur.value;
	    }
	    function head(xs) {
	        return __failIfNone(tryHead(xs));
	    }
	    function initialize(n, f) {
	        return delay(function () {
	            return unfold(function (i) {
	                return i < n ? [f(i), i + 1] : null;
	            }, 0);
	        });
	    }
	    function initializeInfinite(f) {
	        return delay(function () {
	            return unfold(function (i) {
	                return [f(i), i + 1];
	            }, 0);
	        });
	    }
	    function tryItem(i, xs) {
	        if (i < 0) return null;
	        if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return i < xs.length ? xs[i] : null;
	        for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
	            var cur = iter.next();
	            if (cur.done) return null;
	            if (j === i) return cur.value;
	        }
	    }
	    function item(i, xs) {
	        return __failIfNone(tryItem(i, xs));
	    }
	    function iterate(f, xs) {
	        fold(function (_, x) {
	            return f(x);
	        }, null, xs);
	    }
	    function iterate2(f, xs, ys) {
	        fold2(function (_, x, y) {
	            return f(x, y);
	        }, null, xs, ys);
	    }
	    function iterateIndexed(f, xs) {
	        fold(function (_, x, i) {
	            return f(i, x);
	        }, null, xs);
	    }
	    function iterateIndexed2(f, xs, ys) {
	        fold2(function (_, x, y, i) {
	            return f(i, x, y);
	        }, null, xs, ys);
	    }
	    function isEmpty(xs) {
	        var i = xs[Symbol.iterator]();
	        return i.next().done;
	    }
	    function tryLast(xs) {
	        try {
	            return reduce(function (_, x) {
	                return x;
	            }, xs);
	        } catch (err) {
	            return null;
	        }
	    }
	    function last(xs) {
	        return __failIfNone(tryLast(xs));
	    }
	    // A export function 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
	    function count(xs) {
	        return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
	            return acc + 1;
	        }, 0, xs);
	    }
	    function map(f, xs) {
	        return delay(function () {
	            return unfold(function (iter) {
	                var cur = iter.next();
	                return !cur.done ? [f(cur.value), iter] : null;
	            }, xs[Symbol.iterator]());
	        });
	    }
	    function mapIndexed(f, xs) {
	        return delay(function () {
	            var i = 0;
	            return unfold(function (iter) {
	                var cur = iter.next();
	                return !cur.done ? [f(i++, cur.value), iter] : null;
	            }, xs[Symbol.iterator]());
	        });
	    }
	    function map2(f, xs, ys) {
	        return delay(function () {
	            var iter1 = xs[Symbol.iterator]();
	            var iter2 = ys[Symbol.iterator]();
	            return unfold(function () {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
	            });
	        });
	    }
	    function mapIndexed2(f, xs, ys) {
	        return delay(function () {
	            var i = 0;
	            var iter1 = xs[Symbol.iterator]();
	            var iter2 = ys[Symbol.iterator]();
	            return unfold(function () {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next();
	                return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
	            });
	        });
	    }
	    function map3(f, xs, ys, zs) {
	        return delay(function () {
	            var iter1 = xs[Symbol.iterator]();
	            var iter2 = ys[Symbol.iterator]();
	            var iter3 = zs[Symbol.iterator]();
	            return unfold(function () {
	                var cur1 = iter1.next(),
	                    cur2 = iter2.next(),
	                    cur3 = iter3.next();
	                return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
	            });
	        });
	    }
	    function mapFold(f, acc, xs) {
	        var result = [];
	        var r = void 0;
	        var cur = void 0;
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            cur = iter.next();
	            if (cur.done) break;
	
	            var _f = f(acc, cur.value);
	
	            var _f2 = _slicedToArray(_f, 2);
	
	            r = _f2[0];
	            acc = _f2[1];
	
	            result.push(r);
	        }
	        return [result, acc];
	    }
	    function mapFoldBack(f, xs, acc) {
	        var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	        var result = [];
	        var r = void 0;
	        for (var i = arr.length - 1; i >= 0; i--) {
	            var _f3 = f(arr[i], acc);
	
	            var _f4 = _slicedToArray(_f3, 2);
	
	            r = _f4[0];
	            acc = _f4[1];
	
	            result.push(r);
	        }
	        return [result, acc];
	    }
	    function max(xs) {
	        return reduce(function (acc, x) {
	            return (0, _Util.compare)(acc, x) === 1 ? acc : x;
	        }, xs);
	    }
	    function maxBy(f, xs) {
	        return reduce(function (acc, x) {
	            return (0, _Util.compare)(f(acc), f(x)) === 1 ? acc : x;
	        }, xs);
	    }
	    function min(xs) {
	        return reduce(function (acc, x) {
	            return (0, _Util.compare)(acc, x) === -1 ? acc : x;
	        }, xs);
	    }
	    function minBy(f, xs) {
	        return reduce(function (acc, x) {
	            return (0, _Util.compare)(f(acc), f(x)) === -1 ? acc : x;
	        }, xs);
	    }
	    function pairwise(xs) {
	        return skip(2, scan(function (last, next) {
	            return [last[1], next];
	        }, [0, 0], xs));
	    }
	    function permute(f, xs) {
	        return ofArray((0, _Array.permute)(f, Array.from(xs)));
	    }
	    function rangeStep(first, step, last) {
	        if (step === 0) throw new Error("Step cannot be 0");
	        return delay(function () {
	            return unfold(function (x) {
	                return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
	            }, first);
	        });
	    }
	    function rangeChar(first, last) {
	        return delay(function () {
	            return unfold(function (x) {
	                return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
	            }, first);
	        });
	    }
	    function range(first, last) {
	        return rangeStep(first, 1, last);
	    }
	    function readOnly(xs) {
	        return map(function (x) {
	            return x;
	        }, xs);
	    }
	    function reduce(f, xs) {
	        if (Array.isArray(xs) || ArrayBuffer.isView(xs)) return xs.reduce(f);
	        var iter = xs[Symbol.iterator]();
	        var cur = iter.next();
	        if (cur.done) throw new Error("Seq was empty");
	        var acc = cur.value;
	        for (;;) {
	            cur = iter.next();
	            if (cur.done) break;
	            acc = f(acc, cur.value);
	        }
	        return acc;
	    }
	    function reduceBack(f, xs) {
	        var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
	        if (ar.length === 0) throw new Error("Seq was empty");
	        var acc = ar[ar.length - 1];
	        for (var i = ar.length - 2; i >= 0; i--) {
	            acc = f(ar[i], acc, i);
	        }return acc;
	    }
	    function replicate(n, x) {
	        return initialize(n, function () {
	            return x;
	        });
	    }
	    function reverse(xs) {
	        var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
	        return ofArray(ar.reverse());
	    }
	    function scan(f, seed, xs) {
	        return delay(function () {
	            var iter = xs[Symbol.iterator]();
	            return unfold(function (acc) {
	                if (acc == null) return [seed, seed];
	                var cur = iter.next();
	                if (!cur.done) {
	                    acc = f(acc, cur.value);
	                    return [acc, acc];
	                }
	                return void 0;
	            }, null);
	        });
	    }
	    function scanBack(f, xs, seed) {
	        return reverse(scan(function (acc, x) {
	            return f(x, acc);
	        }, seed, reverse(xs)));
	    }
	    function singleton(x) {
	        return unfold(function (x) {
	            return x != null ? [x, null] : null;
	        }, x);
	    }
	    function skip(n, xs) {
	        return _defineProperty({}, Symbol.iterator, function () {
	            var iter = xs[Symbol.iterator]();
	            for (var i = 1; i <= n; i++) {
	                if (iter.next().done) throw new Error("Seq has not enough elements");
	            }return iter;
	        });
	    }
	    function skipWhile(f, xs) {
	        return delay(function () {
	            var hasPassed = false;
	            return filter(function (x) {
	                return hasPassed || (hasPassed = !f(x));
	            }, xs);
	        });
	    }
	    function sortWith(f, xs) {
	        var ys = Array.from(xs);
	        return ofArray(ys.sort(f));
	    }
	    function sum(xs) {
	        return fold(function (acc, x) {
	            return acc + x;
	        }, 0, xs);
	    }
	    function sumBy(f, xs) {
	        return fold(function (acc, x) {
	            return acc + f(x);
	        }, 0, xs);
	    }
	    function tail(xs) {
	        var iter = xs[Symbol.iterator]();
	        var cur = iter.next();
	        if (cur.done) throw new Error("Seq was empty");
	        return _defineProperty({}, Symbol.iterator, function () {
	            return iter;
	        });
	    }
	    function take(n, xs) {
	        var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
	        return delay(function () {
	            var iter = xs[Symbol.iterator]();
	            return unfold(function (i) {
	                if (i < n) {
	                    var cur = iter.next();
	                    if (!cur.done) return [cur.value, i + 1];
	                    if (!truncate) throw new Error("Seq has not enough elements");
	                }
	                return void 0;
	            }, 0);
	        });
	    }
	    function truncate(n, xs) {
	        return take(n, xs, true);
	    }
	    function takeWhile(f, xs) {
	        return delay(function () {
	            var iter = xs[Symbol.iterator]();
	            return unfold(function (i) {
	                var cur = iter.next();
	                if (!cur.done && f(cur.value)) return [cur.value, null];
	                return void 0;
	            }, 0);
	        });
	    }
	    function tryFind(f, xs, defaultValue) {
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            var cur = iter.next();
	            if (cur.done) return defaultValue === void 0 ? null : defaultValue;
	            if (f(cur.value, i)) return cur.value;
	        }
	    }
	    function find(f, xs) {
	        return __failIfNone(tryFind(f, xs));
	    }
	    function tryFindBack(f, xs, defaultValue) {
	        var match = null;
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            var cur = iter.next();
	            if (cur.done) return match === null ? defaultValue === void 0 ? null : defaultValue : match;
	            if (f(cur.value, i)) match = cur.value;
	        }
	    }
	    function findBack(f, xs) {
	        return __failIfNone(tryFindBack(f, xs));
	    }
	    function tryFindIndex(f, xs) {
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            var cur = iter.next();
	            if (cur.done) return null;
	            if (f(cur.value, i)) return i;
	        }
	    }
	    function findIndex(f, xs) {
	        return __failIfNone(tryFindIndex(f, xs));
	    }
	    function tryFindIndexBack(f, xs) {
	        var match = -1;
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            var cur = iter.next();
	            if (cur.done) return match === -1 ? null : match;
	            if (f(cur.value, i)) match = i;
	        }
	    }
	    function findIndexBack(f, xs) {
	        return __failIfNone(tryFindIndexBack(f, xs));
	    }
	    function tryPick(f, xs) {
	        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
	            var cur = iter.next();
	            if (cur.done) break;
	            var y = f(cur.value, i);
	            if (y != null) return y;
	        }
	        return void 0;
	    }
	    function pick(f, xs) {
	        return __failIfNone(tryPick(f, xs));
	    }
	    function unfold(f, acc) {
	        return _defineProperty({}, Symbol.iterator, function () {
	            return {
	                next: function next() {
	                    var res = f(acc);
	                    if (res != null) {
	                        acc = res[1];
	                        return { done: false, value: res[0] };
	                    }
	                    return { done: true };
	                }
	            };
	        });
	    }
	    function zip(xs, ys) {
	        return map2(function (x, y) {
	            return [x, y];
	        }, xs, ys);
	    }
	    function zip3(xs, ys, zs) {
	        return map3(function (x, y, z) {
	            return [x, y, z];
	        }, xs, ys, zs);
	    }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.Array = mod.exports;
	    }
	})(this, function (exports) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.addRangeInPlace = addRangeInPlace;
	    exports.copyTo = copyTo;
	    exports.partition = partition;
	    exports.permute = permute;
	    exports.removeInPlace = removeInPlace;
	    exports.setSlice = setSlice;
	    exports.sortInPlaceBy = sortInPlaceBy;
	    exports.unzip = unzip;
	    exports.unzip3 = unzip3;
	    function addRangeInPlace(range, xs) {
	        var iter = range[Symbol.iterator]();
	        var cur = iter.next();
	        while (!cur.done) {
	            xs.push(cur.value);
	            cur = iter.next();
	        }
	    }
	    function copyTo(source, sourceIndex, target, targetIndex, count) {
	        while (count--) {
	            target[targetIndex++] = source[sourceIndex++];
	        }
	    }
	    function partition(f, xs) {
	        var ys = [],
	            zs = [],
	            j = 0,
	            k = 0;
	        for (var i = 0; i < xs.length; i++) {
	            if (f(xs[i])) ys[j++] = xs[i];else zs[k++] = xs[i];
	        }return [ys, zs];
	    }
	    function permute(f, xs) {
	        // Keep the type of the array
	        var ys = xs.map(function () {
	            return null;
	        });
	        var checkFlags = new Array(xs.length);
	        for (var i = 0; i < xs.length; i++) {
	            var j = f(i);
	            if (j < 0 || j >= xs.length) throw new Error("Not a valid permutation");
	            ys[j] = xs[i];
	            checkFlags[j] = 1;
	        }
	        for (var _i = 0; _i < xs.length; _i++) {
	            if (checkFlags[_i] != 1) throw new Error("Not a valid permutation");
	        }return ys;
	    }
	    function removeInPlace(item, xs) {
	        var i = xs.indexOf(item);
	        if (i > -1) {
	            xs.splice(i, 1);
	            return true;
	        }
	        return false;
	    }
	    function setSlice(target, lower, upper, source) {
	        var length = (upper || target.length - 1) - lower;
	        if (ArrayBuffer.isView(target) && source.length <= length) target.set(source, lower);else for (var i = lower | 0, j = 0; j <= length; i++, j++) {
	            target[i] = source[j];
	        }
	    }
	    function sortInPlaceBy(f, xs) {
	        var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	
	        return xs.sort(function (x, y) {
	            x = f(x);
	            y = f(y);
	            return (x < y ? -1 : x == y ? 0 : 1) * dir;
	        });
	    }
	    function unzip(xs) {
	        var bs = new Array(xs.length),
	            cs = new Array(xs.length);
	        for (var i = 0; i < xs.length; i++) {
	            bs[i] = xs[i][0];
	            cs[i] = xs[i][1];
	        }
	        return [bs, cs];
	    }
	    function unzip3(xs) {
	        var bs = new Array(xs.length),
	            cs = new Array(xs.length),
	            ds = new Array(xs.length);
	        for (var i = 0; i < xs.length; i++) {
	            bs[i] = xs[i][0];
	            cs[i] = xs[i][1];
	            ds[i] = xs[i][2];
	        }
	        return [bs, cs, ds];
	    }
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(5), __webpack_require__(2), __webpack_require__(9), __webpack_require__(1), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./ListClass"), require("./Util"), require("./GenericComparer"), require("./Symbol"), require("./Seq"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.ListClass, global.Util, global.GenericComparer, global.Symbol, global.Seq);
	        global.Map = mod.exports;
	    }
	})(this, function (exports, _ListClass, _Util, _GenericComparer, _Symbol, _Seq) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.MapTree = undefined;
	    exports.groupBy = groupBy;
	    exports.countBy = countBy;
	    exports.create = create;
	    exports.add = add;
	    exports.remove = remove;
	    exports.containsValue = containsValue;
	    exports.tryGetValue = tryGetValue;
	    exports.exists = exists;
	    exports.find = find;
	    exports.tryFind = tryFind;
	    exports.filter = filter;
	    exports.fold = fold;
	    exports.foldBack = foldBack;
	    exports.forAll = forAll;
	    exports.isEmpty = isEmpty;
	    exports.iterate = iterate;
	    exports.map = map;
	    exports.partition = partition;
	    exports.findKey = findKey;
	    exports.tryFindKey = tryFindKey;
	    exports.pick = pick;
	    exports.tryPick = tryPick;
	
	    var _ListClass2 = _interopRequireDefault(_ListClass);
	
	    var _GenericComparer2 = _interopRequireDefault(_GenericComparer);
	
	    var _Symbol2 = _interopRequireDefault(_Symbol);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    // ----------------------------------------------
	    // These functions belong to Seq.ts but are
	    // implemented here to prevent cyclic dependencies
	    function groupBy(f, xs) {
	        var keys = [],
	            iter = xs[Symbol.iterator]();
	        var acc = create(),
	            cur = iter.next();
	        while (!cur.done) {
	            var k = f(cur.value),
	                vs = tryFind(k, acc);
	            if (vs == null) {
	                keys.push(k);
	                acc = add(k, [cur.value], acc);
	            } else {
	                vs.push(cur.value);
	            }
	            cur = iter.next();
	        }
	        return keys.map(function (k) {
	            return [k, acc.get(k)];
	        });
	    }
	    function countBy(f, xs) {
	        return groupBy(f, xs).map(function (kv) {
	            return [kv[0], kv[1].length];
	        });
	    }
	
	    var MapTree = exports.MapTree = function MapTree(caseName, fields) {
	        _classCallCheck(this, MapTree);
	
	        this.Case = caseName;
	        this.Fields = fields;
	    };
	
	    function tree_sizeAux(acc, m) {
	        return m.Case === "MapOne" ? acc + 1 : m.Case === "MapNode" ? tree_sizeAux(tree_sizeAux(acc + 1, m.Fields[2]), m.Fields[3]) : acc;
	    }
	    function tree_size(x) {
	        return tree_sizeAux(0, x);
	    }
	    function tree_empty() {
	        return new MapTree("MapEmpty", []);
	    }
	    function tree_height(_arg1) {
	        return _arg1.Case === "MapOne" ? 1 : _arg1.Case === "MapNode" ? _arg1.Fields[4] : 0;
	    }
	    function tree_isEmpty(m) {
	        return m.Case === "MapEmpty" ? true : false;
	    }
	    function tree_mk(l, k, v, r) {
	        var matchValue = [l, r];
	        var $target1 = function $target1() {
	            var hl = tree_height(l);
	            var hr = tree_height(r);
	            var m = hl < hr ? hr : hl;
	            return new MapTree("MapNode", [k, v, l, r, m + 1]);
	        };
	        if (matchValue[0].Case === "MapEmpty") {
	            if (matchValue[1].Case === "MapEmpty") {
	                return new MapTree("MapOne", [k, v]);
	            } else {
	                return $target1();
	            }
	        } else {
	            return $target1();
	        }
	    }
	    ;
	    function tree_rebalance(t1, k, v, t2) {
	        var t1h = tree_height(t1);
	        var t2h = tree_height(t2);
	        if (t2h > t1h + 2) {
	            if (t2.Case === "MapNode") {
	                if (tree_height(t2.Fields[2]) > t1h + 1) {
	                    if (t2.Fields[2].Case === "MapNode") {
	                        return tree_mk(tree_mk(t1, k, v, t2.Fields[2].Fields[2]), t2.Fields[2].Fields[0], t2.Fields[2].Fields[1], tree_mk(t2.Fields[2].Fields[3], t2.Fields[0], t2.Fields[1], t2.Fields[3]));
	                    } else {
	                        throw new Error("rebalance");
	                    }
	                } else {
	                    return tree_mk(tree_mk(t1, k, v, t2.Fields[2]), t2.Fields[0], t2.Fields[1], t2.Fields[3]);
	                }
	            } else {
	                throw new Error("rebalance");
	            }
	        } else {
	            if (t1h > t2h + 2) {
	                if (t1.Case === "MapNode") {
	                    if (tree_height(t1.Fields[3]) > t2h + 1) {
	                        if (t1.Fields[3].Case === "MapNode") {
	                            return tree_mk(tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], t1.Fields[3].Fields[2]), t1.Fields[3].Fields[0], t1.Fields[3].Fields[1], tree_mk(t1.Fields[3].Fields[3], k, v, t2));
	                        } else {
	                            throw new Error("rebalance");
	                        }
	                    } else {
	                        return tree_mk(t1.Fields[2], t1.Fields[0], t1.Fields[1], tree_mk(t1.Fields[3], k, v, t2));
	                    }
	                } else {
	                    throw new Error("rebalance");
	                }
	            } else {
	                return tree_mk(t1, k, v, t2);
	            }
	        }
	    }
	    function tree_add(comparer, k, v, m) {
	        if (m.Case === "MapOne") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c < 0) {
	                return new MapTree("MapNode", [k, v, new MapTree("MapEmpty", []), m, 2]);
	            } else if (c === 0) {
	                return new MapTree("MapOne", [k, v]);
	            }
	            return new MapTree("MapNode", [k, v, m, new MapTree("MapEmpty", []), 2]);
	        } else if (m.Case === "MapNode") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c < 0) {
	                return tree_rebalance(tree_add(comparer, k, v, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
	            } else if (c === 0) {
	                return new MapTree("MapNode", [k, v, m.Fields[2], m.Fields[3], m.Fields[4]]);
	            }
	            return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_add(comparer, k, v, m.Fields[3]));
	        }
	        return new MapTree("MapOne", [k, v]);
	    }
	    function tree_find(comparer, k, m) {
	        var res = tree_tryFind(comparer, k, m);
	        if (res != null) return res;
	        throw new Error("key not found");
	    }
	    function tree_tryFind(comparer, k, m) {
	        if (m.Case === "MapOne") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            return c === 0 ? m.Fields[1] : null;
	        } else if (m.Case === "MapNode") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c < 0) {
	                return tree_tryFind(comparer, k, m.Fields[2]);
	            } else {
	                if (c === 0) {
	                    return m.Fields[1];
	                } else {
	                    return tree_tryFind(comparer, k, m.Fields[3]);
	                }
	            }
	        }
	        return null;
	    }
	    function tree_partition1(comparer, f, k, v, acc1, acc2) {
	        return f(k, v) ? [tree_add(comparer, k, v, acc1), acc2] : [acc1, tree_add(comparer, k, v, acc2)];
	    }
	    function tree_partitionAux(comparer, f, s, acc_0, acc_1) {
	        var acc = [acc_0, acc_1];
	        if (s.Case === "MapOne") {
	            return tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc[0], acc[1]);
	        } else if (s.Case === "MapNode") {
	            var acc_2 = tree_partitionAux(comparer, f, s.Fields[3], acc[0], acc[1]);
	            var acc_3 = tree_partition1(comparer, f, s.Fields[0], s.Fields[1], acc_2[0], acc_2[1]);
	            return tree_partitionAux(comparer, f, s.Fields[2], acc_3[0], acc_3[1]);
	        }
	        return acc;
	    }
	    function tree_partition(comparer, f, s) {
	        return tree_partitionAux(comparer, f, s, tree_empty(), tree_empty());
	    }
	    function tree_filter1(comparer, f, k, v, acc) {
	        return f(k, v) ? tree_add(comparer, k, v, acc) : acc;
	    }
	    function tree_filterAux(comparer, f, s, acc) {
	        return s.Case === "MapOne" ? tree_filter1(comparer, f, s.Fields[0], s.Fields[1], acc) : s.Case === "MapNode" ? function () {
	            var acc_1 = tree_filterAux(comparer, f, s.Fields[2], acc);
	            var acc_2 = tree_filter1(comparer, f, s.Fields[0], s.Fields[1], acc_1);
	            return tree_filterAux(comparer, f, s.Fields[3], acc_2);
	        }() : acc;
	    }
	    function tree_filter(comparer, f, s) {
	        return tree_filterAux(comparer, f, s, tree_empty());
	    }
	    function tree_spliceOutSuccessor(m) {
	        if (m.Case === "MapOne") {
	            return [m.Fields[0], m.Fields[1], new MapTree("MapEmpty", [])];
	        } else if (m.Case === "MapNode") {
	            if (m.Fields[2].Case === "MapEmpty") {
	                return [m.Fields[0], m.Fields[1], m.Fields[3]];
	            } else {
	                var kvl = tree_spliceOutSuccessor(m.Fields[2]);
	                return [kvl[0], kvl[1], tree_mk(kvl[2], m.Fields[0], m.Fields[1], m.Fields[3])];
	            }
	        }
	        throw new Error("internal error: Map.spliceOutSuccessor");
	    }
	    function tree_remove(comparer, k, m) {
	        if (m.Case === "MapOne") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c === 0) {
	                return new MapTree("MapEmpty", []);
	            } else {
	                return m;
	            }
	        } else if (m.Case === "MapNode") {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c < 0) {
	                return tree_rebalance(tree_remove(comparer, k, m.Fields[2]), m.Fields[0], m.Fields[1], m.Fields[3]);
	            } else {
	                if (c === 0) {
	                    var matchValue = [m.Fields[2], m.Fields[3]];
	                    if (matchValue[0].Case === "MapEmpty") {
	                        return m.Fields[3];
	                    } else {
	                        if (matchValue[1].Case === "MapEmpty") {
	                            return m.Fields[2];
	                        } else {
	                            var patternInput = tree_spliceOutSuccessor(m.Fields[3]);
	                            var sv = patternInput[1];
	                            var sk = patternInput[0];
	                            var r_ = patternInput[2];
	                            return tree_mk(m.Fields[2], sk, sv, r_);
	                        }
	                    }
	                } else {
	                    return tree_rebalance(m.Fields[2], m.Fields[0], m.Fields[1], tree_remove(comparer, k, m.Fields[3]));
	                }
	            }
	        } else {
	            return tree_empty();
	        }
	    }
	    function tree_mem(comparer, k, m) {
	        return m.Case === "MapOne" ? comparer.Compare(k, m.Fields[0]) === 0 : m.Case === "MapNode" ? function () {
	            var c = comparer.Compare(k, m.Fields[0]);
	            if (c < 0) {
	                return tree_mem(comparer, k, m.Fields[2]);
	            } else {
	                if (c === 0) {
	                    return true;
	                } else {
	                    return tree_mem(comparer, k, m.Fields[3]);
	                }
	            }
	        }() : false;
	    }
	    function tree_iter(f, m) {
	        if (m.Case === "MapOne") {
	            f(m.Fields[0], m.Fields[1]);
	        } else if (m.Case === "MapNode") {
	            tree_iter(f, m.Fields[2]);
	            f(m.Fields[0], m.Fields[1]);
	            tree_iter(f, m.Fields[3]);
	        }
	    }
	    function tree_tryPick(f, m) {
	        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? function () {
	            var matchValue = tree_tryPick(f, m.Fields[2]);
	            if (matchValue == null) {
	                var matchValue_1 = f(m.Fields[0], m.Fields[1]);
	                if (matchValue_1 == null) {
	                    return tree_tryPick(f, m.Fields[3]);
	                } else {
	                    var res = matchValue_1;
	                    return res;
	                }
	            } else {
	                var res = matchValue;
	                return res;
	            }
	        }() : null;
	    }
	    function tree_exists(f, m) {
	        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_exists(f, m.Fields[2]) ? true : f(m.Fields[0], m.Fields[1])) ? true : tree_exists(f, m.Fields[3]) : false;
	    }
	    function tree_forall(f, m) {
	        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? (tree_forall(f, m.Fields[2]) ? f(m.Fields[0], m.Fields[1]) : false) ? tree_forall(f, m.Fields[3]) : false : true;
	    }
	    // function tree_map(f: (v:any) => any, m: MapTree): MapTree {
	    //   return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[1])]) : m.Case === "MapNode" ? (() => {
	    //     var l2 = tree_map(f, m.Fields[2]);
	    //     var v2 = f(m.Fields[1]);
	    //     var r2 = tree_map(f, m.Fields[3]);
	    //     return new MapTree("MapNode", [m.Fields[0], v2, l2, r2, m.Fields[4]]);
	    //   })() : tree_empty();
	    // }
	    function tree_mapi(f, m) {
	        return m.Case === "MapOne" ? new MapTree("MapOne", [m.Fields[0], f(m.Fields[0], m.Fields[1])]) : m.Case === "MapNode" ? function () {
	            var l2 = tree_mapi(f, m.Fields[2]);
	            var v2 = f(m.Fields[0], m.Fields[1]);
	            var r2 = tree_mapi(f, m.Fields[3]);
	            return new MapTree("MapNode", [m.Fields[0], v2, l2, r2, m.Fields[4]]);
	        }() : tree_empty();
	    }
	    function tree_foldBack(f, m, x) {
	        return m.Case === "MapOne" ? f(m.Fields[0], m.Fields[1], x) : m.Case === "MapNode" ? function () {
	            var x_1 = tree_foldBack(f, m.Fields[3], x);
	            var x_2 = f(m.Fields[0], m.Fields[1], x_1);
	            return tree_foldBack(f, m.Fields[2], x_2);
	        }() : x;
	    }
	    function tree_fold(f, x, m) {
	        return m.Case === "MapOne" ? f(x, m.Fields[0], m.Fields[1]) : m.Case === "MapNode" ? function () {
	            var x_1 = tree_fold(f, x, m.Fields[2]);
	            var x_2 = f(x_1, m.Fields[0], m.Fields[1]);
	            return tree_fold(f, x_2, m.Fields[3]);
	        }() : x;
	    }
	    // function tree_foldFromTo(comparer: IComparer<any>, lo: any, hi: any, f: (k:any, v:any, acc: any) => any, m: MapTree, x: any): any {
	    //   if (m.Case === "MapOne") {
	    //     var cLoKey = comparer.Compare(lo, m.Fields[0]);
	    //     var cKeyHi = comparer.Compare(m.Fields[0], hi);
	    //     var x_1 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.Fields[0], m.Fields[1], x) : x;
	    //     return x_1;
	    //   }
	    //   else if (m.Case === "MapNode") {
	    //     var cLoKey = comparer.Compare(lo, m.Fields[0]);
	    //     var cKeyHi = comparer.Compare(m.Fields[0], hi);
	    //     var x_1 = cLoKey < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.Fields[2], x) : x;
	    //     var x_2 = (cLoKey <= 0 ? cKeyHi <= 0 : false) ? f(m.Fields[0], m.Fields[1], x_1) : x_1;
	    //     var x_3 = cKeyHi < 0 ? tree_foldFromTo(comparer, lo, hi, f, m.Fields[3], x_2) : x_2;
	    //     return x_3;
	    //   }
	    //   return x;
	    // }
	    // function tree_foldSection(comparer: IComparer<any>, lo: any, hi: any, f: (k:any, v:any, acc: any) => any, m: MapTree, x: any) {
	    //   return comparer.Compare(lo, hi) === 1 ? x : tree_foldFromTo(comparer, lo, hi, f, m, x);
	    // }
	    // function tree_loop(m: MapTree, acc: any): List<[any,any]> {
	    //   return m.Case === "MapOne"
	    //     ? new List([m.Fields[0], m.Fields[1]], acc)
	    //     : m.Case === "MapNode"
	    //       ? tree_loop(m.Fields[2], new List([m.Fields[0], m.Fields[1]], tree_loop(m.Fields[3], acc)))
	    //       : acc;
	    // }
	    // function tree_toList(m: MapTree) {
	    //   return tree_loop(m, new List());
	    // }
	    // function tree_toArray(m: MapTree) {
	    //   return Array.from(tree_toList(m));
	    // }
	    // function tree_ofList(comparer: IComparer<any>, l: List<[any,any]>) {
	    //   return Seq.fold((acc: MapTree, tupledArg: [any, any]) => {
	    //     return tree_add(comparer, tupledArg[0], tupledArg[1], acc);
	    //   }, tree_empty(), l);
	    // }
	    function tree_mkFromEnumerator(comparer, acc, e) {
	        var cur = e.next();
	        while (!cur.done) {
	            acc = tree_add(comparer, cur.value[0], cur.value[1], acc);
	            cur = e.next();
	        }
	        return acc;
	    }
	    // function tree_ofArray(comparer: IComparer<any>, arr: ArrayLike<[any,any]>) {
	    //   var res = tree_empty();
	    //   for (var i = 0; i <= arr.length - 1; i++) {
	    //     res = tree_add(comparer, arr[i][0], arr[i][1], res);
	    //   }
	    //   return res;
	    // }
	    function tree_ofSeq(comparer, c) {
	        var ie = c[Symbol.iterator]();
	        return tree_mkFromEnumerator(comparer, tree_empty(), ie);
	    }
	    // function tree_copyToArray(s: MapTree, arr: ArrayLike<any>, i: number) {
	    //   tree_iter((x, y) => { arr[i++] = [x, y]; }, s);
	    // }
	    function tree_collapseLHS(stack) {
	        if (stack.tail != null) {
	            if (stack.head.Case === "MapOne") {
	                return stack;
	            } else if (stack.head.Case === "MapNode") {
	                return tree_collapseLHS((0, _ListClass.ofArray)([stack.head.Fields[2], new MapTree("MapOne", [stack.head.Fields[0], stack.head.Fields[1]]), stack.head.Fields[3]], stack.tail));
	            } else {
	                return tree_collapseLHS(stack.tail);
	            }
	        } else {
	            return new _ListClass2.default();
	        }
	    }
	    function tree_mkIterator(s) {
	        return { stack: tree_collapseLHS(new _ListClass2.default(s, new _ListClass2.default())), started: false };
	    }
	    function tree_moveNext(i) {
	        function current(i) {
	            if (i.stack.tail == null) {
	                return null;
	            } else if (i.stack.head.Case === "MapOne") {
	                return [i.stack.head.Fields[0], i.stack.head.Fields[1]];
	            }
	            throw new Error("Please report error: Map iterator, unexpected stack for current");
	        }
	        if (i.started) {
	            if (i.stack.tail == null) {
	                return { done: true, value: null };
	            } else {
	                if (i.stack.head.Case === "MapOne") {
	                    i.stack = tree_collapseLHS(i.stack.tail);
	                    return {
	                        done: i.stack.tail == null,
	                        value: current(i)
	                    };
	                } else {
	                    throw new Error("Please report error: Map iterator, unexpected stack for moveNext");
	                }
	            }
	        } else {
	            i.started = true;
	            return {
	                done: i.stack.tail == null,
	                value: current(i)
	            };
	        }
	        ;
	    }
	
	    var FMap = function () {
	        /** Do not call, use Map.create instead. */
	        function FMap() {
	            _classCallCheck(this, FMap);
	        }
	
	        _createClass(FMap, [{
	            key: "ToString",
	            value: function ToString() {
	                return "map [" + Array.from(this).map(_Util.toString).join("; ") + "]";
	            }
	        }, {
	            key: "Equals",
	            value: function Equals(m2) {
	                return this.CompareTo(m2) === 0;
	            }
	        }, {
	            key: "CompareTo",
	            value: function CompareTo(m2) {
	                var _this = this;
	
	                return this === m2 ? 0 : (0, _Seq.compareWith)(function (kvp1, kvp2) {
	                    var c = _this.comparer.Compare(kvp1[0], kvp2[0]);
	                    return c !== 0 ? c : (0, _Util.compare)(kvp1[1], kvp2[1]);
	                }, this, m2);
	            }
	        }, {
	            key: Symbol.iterator,
	            value: function value() {
	                var i = tree_mkIterator(this.tree);
	                return {
	                    next: function next() {
	                        return tree_moveNext(i);
	                    }
	                };
	            }
	        }, {
	            key: "entries",
	            value: function entries() {
	                return this[Symbol.iterator]();
	            }
	        }, {
	            key: "keys",
	            value: function keys() {
	                return (0, _Seq.map)(function (kv) {
	                    return kv[0];
	                }, this);
	            }
	        }, {
	            key: "values",
	            value: function values() {
	                return (0, _Seq.map)(function (kv) {
	                    return kv[1];
	                }, this);
	            }
	        }, {
	            key: "get",
	            value: function get(k) {
	                return tree_find(this.comparer, k, this.tree);
	            }
	        }, {
	            key: "has",
	            value: function has(k) {
	                return tree_mem(this.comparer, k, this.tree);
	            }
	        }, {
	            key: "set",
	            value: function set(k, v) {
	                throw new Error("not supported");
	            }
	        }, {
	            key: "delete",
	            value: function _delete(k) {
	                throw new Error("not supported");
	            }
	        }, {
	            key: "clear",
	            value: function clear() {
	                throw new Error("not supported");
	            }
	        }, {
	            key: _Symbol2.default.reflection,
	            value: function value() {
	                return {
	                    type: "Microsoft.FSharp.Collections.FSharpMap",
	                    interfaces: ["System.IEquatable", "System.IComparable"]
	                };
	            }
	        }, {
	            key: "size",
	            get: function get() {
	                return tree_size(this.tree);
	            }
	        }]);
	
	        return FMap;
	    }();
	
	    exports.default = FMap;
	
	    function from(comparer, tree) {
	        var map = new FMap();
	        map.tree = tree;
	        map.comparer = comparer || new _GenericComparer2.default();
	        return map;
	    }
	    function create(ie, comparer) {
	        comparer = comparer || new _GenericComparer2.default();
	        return from(comparer, ie ? tree_ofSeq(comparer, ie) : tree_empty());
	    }
	    function add(k, v, map) {
	        return from(map.comparer, tree_add(map.comparer, k, v, map.tree));
	    }
	    function remove(item, map) {
	        return from(map.comparer, tree_remove(map.comparer, item, map.tree));
	    }
	    function containsValue(v, map) {
	        return (0, _Seq.fold)(function (acc, k) {
	            return acc || (0, _Util.equals)(map.get(k), v);
	        }, false, map.keys());
	    }
	    function tryGetValue(map, key, defaultValue) {
	        return map.has(key) ? [true, map.get(key)] : [false, defaultValue];
	    }
	    function exists(f, map) {
	        return tree_exists(f, map.tree);
	    }
	    function find(k, map) {
	        return tree_find(map.comparer, k, map.tree);
	    }
	    function tryFind(k, map) {
	        return tree_tryFind(map.comparer, k, map.tree);
	    }
	    function filter(f, map) {
	        return from(map.comparer, tree_filter(map.comparer, f, map.tree));
	    }
	    function fold(f, seed, map) {
	        return tree_fold(f, seed, map.tree);
	    }
	    function foldBack(f, map, seed) {
	        return tree_foldBack(f, map.tree, seed);
	    }
	    function forAll(f, map) {
	        return tree_forall(f, map.tree);
	    }
	    function isEmpty(map) {
	        return tree_isEmpty(map.tree);
	    }
	    function iterate(f, map) {
	        tree_iter(f, map.tree);
	    }
	    function map(f, map) {
	        return from(map.comparer, tree_mapi(f, map.tree));
	    }
	    function partition(f, map) {
	        var rs = tree_partition(map.comparer, f, map.tree);
	        return [from(map.comparer, rs[0]), from(map.comparer, rs[1])];
	    }
	    function findKey(f, map) {
	        return (0, _Seq.pick)(function (kv) {
	            return f(kv[0], kv[1]) ? kv[0] : null;
	        }, map);
	    }
	    function tryFindKey(f, map) {
	        return (0, _Seq.tryPick)(function (kv) {
	            return f(kv[0], kv[1]) ? kv[0] : null;
	        }, map);
	    }
	    function pick(f, map) {
	        var res = tryPick(f, map);
	        if (res != null) return res;
	        throw new Error("key not found");
	    }
	    function tryPick(f, map) {
	        return tree_tryPick(f, map.tree);
	    }
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Util"), require("./Symbol"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Util, global.Symbol);
	        global.GenericComparer = mod.exports;
	    }
	})(this, function (exports, _Util, _Symbol) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	
	    var _Symbol2 = _interopRequireDefault(_Symbol);
	
	    function _interopRequireDefault(obj) {
	        return obj && obj.__esModule ? obj : {
	            default: obj
	        };
	    }
	
	    function _classCallCheck(instance, Constructor) {
	        if (!(instance instanceof Constructor)) {
	            throw new TypeError("Cannot call a class as a function");
	        }
	    }
	
	    var _createClass = function () {
	        function defineProperties(target, props) {
	            for (var i = 0; i < props.length; i++) {
	                var descriptor = props[i];
	                descriptor.enumerable = descriptor.enumerable || false;
	                descriptor.configurable = true;
	                if ("value" in descriptor) descriptor.writable = true;
	                Object.defineProperty(target, descriptor.key, descriptor);
	            }
	        }
	
	        return function (Constructor, protoProps, staticProps) {
	            if (protoProps) defineProperties(Constructor.prototype, protoProps);
	            if (staticProps) defineProperties(Constructor, staticProps);
	            return Constructor;
	        };
	    }();
	
	    var GenericComparer = function () {
	        function GenericComparer(f) {
	            _classCallCheck(this, GenericComparer);
	
	            this.Compare = f || _Util.compare;
	        }
	
	        _createClass(GenericComparer, [{
	            key: _Symbol2.default.reflection,
	            value: function value() {
	                return { interfaces: ["System.IComparer"] };
	            }
	        }]);
	
	        return GenericComparer;
	    }();
	
	    exports.default = GenericComparer;
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2), __webpack_require__(11), __webpack_require__(12)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Util"), require("./RegExp"), require("./Date"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Util, global.RegExp, global.Date);
	        global.String = mod.exports;
	    }
	})(this, function (exports, _Util, _RegExp, _Date) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.fsFormat = fsFormat;
	    exports.format = format;
	    exports.endsWith = endsWith;
	    exports.initialize = initialize;
	    exports.insert = insert;
	    exports.isNullOrEmpty = isNullOrEmpty;
	    exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
	    exports.join = join;
	    exports.newGuid = newGuid;
	    exports.padLeft = padLeft;
	    exports.padRight = padRight;
	    exports.remove = remove;
	    exports.replace = replace;
	    exports.replicate = replicate;
	    exports.split = split;
	    exports.trim = trim;
	
	    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	        return typeof obj;
	    } : function (obj) {
	        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	
	    var fsFormatRegExp = /(^|[^%])%([0+ ]*)(-?\d+)?(?:\.(\d+))?(\w)/;
	    var formatRegExp = /\{(\d+)(,-?\d+)?(?:\:(.+?))?\}/g;
	    function toHex(value) {
	        return value < 0 ? "ff" + (16777215 - (Math.abs(value) - 1)).toString(16) : value.toString(16);
	    }
	    function fsFormat(str) {
	        var _cont = void 0;
	        function isObject(x) {
	            return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
	        }
	        function formatOnce(str, rep) {
	            return str.replace(fsFormatRegExp, function (_, prefix, flags, pad, precision, format) {
	                switch (format) {
	                    case "f":
	                    case "F":
	                        rep = rep.toFixed(precision || 6);
	                        break;
	                    case "g":
	                    case "G":
	                        rep = rep.toPrecision(precision);
	                        break;
	                    case "e":
	                    case "E":
	                        rep = rep.toExponential(precision);
	                        break;
	                    case "O":
	                        rep = (0, _Util.toString)(rep);
	                        break;
	                    case "A":
	                        try {
	                            rep = JSON.stringify(rep, function (k, v) {
	                                return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v;
	                            });
	                        } catch (err) {
	                            // Fallback for objects with circular references
	                            rep = "{" + Object.getOwnPropertyNames(rep).map(function (k) {
	                                return k + ": " + String(rep[k]);
	                            }).join(", ") + "}";
	                        }
	                        break;
	                    case "x":
	                        rep = toHex(Number(rep));
	                        break;
	                    case "X":
	                        rep = toHex(Number(rep)).toUpperCase();
	                        break;
	                }
	                var plusPrefix = flags.indexOf("+") >= 0 && parseInt(rep) >= 0;
	                if (!isNaN(pad = parseInt(pad))) {
	                    var ch = pad >= 0 && flags.indexOf("0") >= 0 ? "0" : " ";
	                    rep = padLeft(rep, Math.abs(pad) - (plusPrefix ? 1 : 0), ch, pad < 0);
	                }
	                var once = prefix + (plusPrefix ? "+" + rep : rep);
	                return once.replace(/%/g, "%%");
	            });
	        }
	        function makeFn(str) {
	            return function (rep) {
	                var str2 = formatOnce(str, rep);
	                return fsFormatRegExp.test(str2) ? makeFn(str2) : _cont(str2.replace(/%%/g, "%"));
	            };
	        }
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	        }
	
	        if (args.length === 0) {
	            return function (cont) {
	                _cont = cont;
	                return fsFormatRegExp.test(str) ? makeFn(str) : _cont(str);
	            };
	        } else {
	            for (var i = 0; i < args.length; i++) {
	                str = formatOnce(str, args[i]);
	            }
	            return str.replace(/%%/g, "%");
	        }
	    }
	    function format(str) {
	        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	            args[_key2 - 1] = arguments[_key2];
	        }
	
	        return str.replace(formatRegExp, function (match, idx, pad, format) {
	            var rep = args[idx],
	                padSymbol = " ";
	            if (typeof rep === "number") {
	                switch ((format || "").substring(0, 1)) {
	                    case "f":
	                    case "F":
	                        rep = format.length > 1 ? rep.toFixed(format.substring(1)) : rep.toFixed(2);
	                        break;
	                    case "g":
	                    case "G":
	                        rep = format.length > 1 ? rep.toPrecision(format.substring(1)) : rep.toPrecision();
	                        break;
	                    case "e":
	                    case "E":
	                        rep = format.length > 1 ? rep.toExponential(format.substring(1)) : rep.toExponential();
	                        break;
	                    case "p":
	                    case "P":
	                        rep = (format.length > 1 ? (rep * 100).toFixed(format.substring(1)) : (rep * 100).toFixed(2)) + " %";
	                        break;
	                    case "x":
	                        rep = toHex(Number(rep));
	                        break;
	                    case "X":
	                        rep = toHex(Number(rep)).toUpperCase();
	                        break;
	                    default:
	                        var m = /^(0+)(\.0+)?$/.exec(format);
	                        if (m != null) {
	                            var decs = 0;
	                            if (m[2] != null) rep = rep.toFixed(decs = m[2].length - 1);
	                            pad = "," + (m[1].length + (decs ? decs + 1 : 0)).toString();
	                            padSymbol = "0";
	                        } else if (format) {
	                            rep = format;
	                        }
	                }
	            } else if (rep instanceof Date) {
	                if (format.length === 1) {
	                    switch (format) {
	                        case "D":
	                            rep = rep.toDateString();
	                            break;
	                        case "T":
	                            rep = rep.toLocaleTimeString();
	                            break;
	                        case "d":
	                            rep = rep.toLocaleDateString();
	                            break;
	                        case "t":
	                            rep = rep.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	                            break;
	                        case "o":
	                        case "O":
	                            if (rep.kind === 2 /* Local */) {
	                                    var offset = rep.getTimezoneOffset() * -1;
	                                    rep = format("{0:yyyy-MM-dd}T{0:HH:mm}:{1:00.000}{2}{3:00}:{4:00}", rep, (0, _Date.second)(rep), offset >= 0 ? "+" : "-", ~~(offset / 60), offset % 60);
	                                } else {
	                                rep = rep.toISOString();
	                            }
	                    }
	                } else {
	                    rep = format.replace(/\w+/g, function (match2) {
	                        var rep2 = match2;
	                        switch (match2.substring(0, 1)) {
	                            case "y":
	                                rep2 = match2.length < 4 ? (0, _Date.year)(rep) % 100 : (0, _Date.year)(rep);
	                                break;
	                            case "h":
	                                rep2 = rep.getHours() > 12 ? (0, _Date.hour)(rep) % 12 : (0, _Date.hour)(rep);
	                                break;
	                            case "M":
	                                rep2 = (0, _Date.month)(rep);
	                                break;
	                            case "d":
	                                rep2 = (0, _Date.day)(rep);
	                                break;
	                            case "H":
	                                rep2 = (0, _Date.hour)(rep);
	                                break;
	                            case "m":
	                                rep2 = (0, _Date.minute)(rep);
	                                break;
	                            case "s":
	                                rep2 = (0, _Date.second)(rep);
	                                break;
	                        }
	                        if (rep2 !== match2 && rep2 < 10 && match2.length > 1) {
	                            rep2 = "0" + rep2;
	                        }
	                        return rep2;
	                    });
	                }
	            }
	            if (!isNaN(pad = parseInt((pad || "").substring(1)))) {
	                rep = padLeft(rep, Math.abs(pad), padSymbol, pad < 0);
	            }
	            return rep;
	        });
	    }
	    function endsWith(str, search) {
	        var idx = str.lastIndexOf(search);
	        return idx >= 0 && idx == str.length - search.length;
	    }
	    function initialize(n, f) {
	        if (n < 0) throw new Error("String length must be non-negative");
	        var xs = new Array(n);
	        for (var i = 0; i < n; i++) {
	            xs[i] = f(i);
	        }return xs.join("");
	    }
	    function insert(str, startIndex, value) {
	        if (startIndex < 0 || startIndex > str.length) {
	            throw new Error("startIndex is negative or greater than the length of this instance.");
	        }
	        return str.substring(0, startIndex) + value + str.substring(startIndex);
	    }
	    function isNullOrEmpty(str) {
	        return typeof str !== "string" || str.length == 0;
	    }
	    function isNullOrWhiteSpace(str) {
	        return typeof str !== "string" || /^\s*$/.test(str);
	    }
	    function join(delimiter, xs) {
	        xs = typeof xs == "string" ? (0, _Util.getRestParams)(arguments, 1) : xs;
	        return (Array.isArray(xs) ? xs : Array.from(xs)).join(delimiter);
	    }
	    function newGuid() {
	        var uuid = "";
	        for (var i = 0; i < 32; i++) {
	            var random = Math.random() * 16 | 0;
	            if (i === 8 || i === 12 || i === 16 || i === 20) uuid += "-";
	            uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
	        }
	        return uuid;
	    }
	    function padLeft(str, len, ch, isRight) {
	        ch = ch || " ";
	        str = String(str);
	        len = len - str.length;
	        for (var i = -1; ++i < len;) {
	            str = isRight ? str + ch : ch + str;
	        }return str;
	    }
	    function padRight(str, len, ch) {
	        return padLeft(str, len, ch, true);
	    }
	    function remove(str, startIndex, count) {
	        if (startIndex >= str.length) {
	            throw new Error("startIndex must be less than length of string");
	        }
	        if (typeof count === "number" && startIndex + count > str.length) {
	            throw new Error("Index and count must refer to a location within the string.");
	        }
	        return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
	    }
	    function replace(str, search, replace) {
	        return str.replace(new RegExp((0, _RegExp.escape)(search), "g"), replace);
	    }
	    function replicate(n, x) {
	        return initialize(n, function () {
	            return x;
	        });
	    }
	    function split(str, splitters, count, removeEmpty) {
	        count = typeof count == "number" ? count : null;
	        removeEmpty = typeof removeEmpty == "number" ? removeEmpty : null;
	        if (count < 0) throw new Error("Count cannot be less than zero");
	        if (count === 0) return [];
	        splitters = Array.isArray(splitters) ? splitters : (0, _Util.getRestParams)(arguments, 1);
	        splitters = splitters.map(function (x) {
	            return (0, _RegExp.escape)(x);
	        });
	        splitters = splitters.length > 0 ? splitters : [" "];
	        var m = void 0;
	        var i = 0;
	        var splits = [];
	        var reg = new RegExp(splitters.join("|"), "g");
	        while ((count == null || count > 1) && (m = reg.exec(str)) !== null) {
	            if (!removeEmpty || m.index - i > 0) {
	                count = count != null ? count - 1 : count;
	                splits.push(str.substring(i, m.index));
	            }
	            i = reg.lastIndex;
	        }
	        if (!removeEmpty || str.length - i > 0) splits.push(str.substring(i));
	        return splits;
	    }
	    function trim(str, side) {
	        for (var _len3 = arguments.length, chars = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
	            chars[_key3 - 2] = arguments[_key3];
	        }
	
	        if (side == "both" && chars.length == 0) return str.trim();
	        if (side == "start" || side == "both") {
	            var reg = chars.length == 0 ? /^\s+/ : new RegExp("^[" + (0, _RegExp.escape)(chars.join("")) + "]+");
	            str = str.replace(reg, "");
	        }
	        if (side == "end" || side == "both") {
	            var _reg = chars.length == 0 ? /\s+$/ : new RegExp("[" + (0, _RegExp.escape)(chars.join("")) + "]+$");
	            str = str.replace(_reg, "");
	        }
	        return str;
	    }
	});

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports);
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports);
	        global.RegExp = mod.exports;
	    }
	})(this, function (exports) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.create = create;
	    exports.escape = escape;
	    exports.unescape = unescape;
	    exports.isMatch = isMatch;
	    exports.match = match;
	    exports.matches = matches;
	    exports.options = options;
	    exports.replace = replace;
	    exports.split = split;
	    function create(pattern, options) {
	        var flags = "g";
	        flags += options & 1 ? "i" : "";
	        flags += options & 2 ? "m" : "";
	        return new RegExp(pattern, flags);
	    }
	    // From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
	    function escape(str) {
	        return str.replace(/[\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
	    }
	    function unescape(str) {
	        return str.replace(/\\([\-\[\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
	    }
	    function isMatch(str, pattern) {
	        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	        var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
	        return reg.test(str);
	    }
	    function match(str, pattern) {
	        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	        var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
	        return reg.exec(str);
	    }
	    function matches(str, pattern) {
	        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
	        var reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = create(pattern, options);
	        if (!reg.global) throw new Error("Non-global RegExp"); // Prevent infinite loop
	        var m = void 0;
	        var matches = [];
	        while ((m = reg.exec(str)) !== null) {
	            matches.push(m);
	        }return matches;
	    }
	    function options(reg) {
	        var options = 256; // ECMAScript
	        options |= reg.ignoreCase ? 1 : 0;
	        options |= reg.multiline ? 2 : 0;
	        return options;
	    }
	    function replace(reg, input, replacement, limit) {
	        var offset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	        function replacer() {
	            var res = arguments[0];
	            if (limit !== 0) {
	                limit--;
	                var _match = [];
	                var len = arguments.length;
	                for (var i = 0; i < len - 2; i++) {
	                    _match.push(arguments[i]);
	                }_match.index = arguments[len - 2];
	                _match.input = arguments[len - 1];
	                res = replacement(_match);
	            }
	            return res;
	        }
	        if (typeof reg == "string") {
	            var tmp = reg;
	            reg = create(input, limit);
	            input = tmp;
	            limit = undefined;
	        }
	        if (typeof replacement == "function") {
	            limit = limit == null ? -1 : limit;
	            return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
	        } else {
	            if (limit != null) {
	                var m = void 0;
	                var sub1 = input.substring(offset);
	                var _matches = matches(reg, sub1);
	                var sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
	                return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
	            } else {
	                return input.replace(reg, replacement);
	            }
	        }
	    }
	    function split(reg, input, limit) {
	        var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
	        if (typeof reg == "string") {
	            var tmp = reg;
	            reg = create(input, limit);
	            input = tmp;
	            limit = undefined;
	        }
	        input = input.substring(offset);
	        return input.split(reg, limit);
	    }
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(13), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./TimeSpan"), require("./Util"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.TimeSpan, global.Util);
	        global.Date = mod.exports;
	    }
	})(this, function (exports, _TimeSpan, _Util) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.minValue = minValue;
	    exports.maxValue = maxValue;
	    exports.parse = parse;
	    exports.tryParse = tryParse;
	    exports.create = create;
	    exports.now = now;
	    exports.utcNow = utcNow;
	    exports.today = today;
	    exports.isLeapYear = isLeapYear;
	    exports.daysInMonth = daysInMonth;
	    exports.toUniversalTime = toUniversalTime;
	    exports.toLocalTime = toLocalTime;
	    exports.timeOfDay = timeOfDay;
	    exports.date = date;
	    exports.day = day;
	    exports.hour = hour;
	    exports.millisecond = millisecond;
	    exports.minute = minute;
	    exports.month = month;
	    exports.second = second;
	    exports.year = year;
	    exports.ticks = ticks;
	    exports.toBinary = toBinary;
	    exports.dayOfWeek = dayOfWeek;
	    exports.dayOfYear = dayOfYear;
	    exports.add = add;
	    exports.addDays = addDays;
	    exports.addHours = addHours;
	    exports.addMinutes = addMinutes;
	    exports.addSeconds = addSeconds;
	    exports.addMilliseconds = addMilliseconds;
	    exports.addTicks = addTicks;
	    exports.addYears = addYears;
	    exports.addMonths = addMonths;
	    exports.subtract = subtract;
	    exports.toLongDateString = toLongDateString;
	    exports.toShortDateString = toShortDateString;
	    exports.toLongTimeString = toLongTimeString;
	    exports.toShortTimeString = toShortTimeString;
	    exports.equals = equals;
	    exports.compare = compare;
	    exports.compareTo = compareTo;
	    exports.op_Addition = op_Addition;
	    exports.op_Subtraction = op_Subtraction;
	
	    function __changeKind(d, kind) {
	        var d2 = void 0;
	        return d.kind == kind ? d : (d2 = new Date(d.getTime()), d2.kind = kind, d2);
	    }
	    function __getValue(d, key) {
	        return d[(d.kind == 1 /* UTC */ ? "getUTC" : "get") + key]();
	    }
	    function minValue() {
	        return parse(-8640000000000000, 1);
	    }
	    function maxValue() {
	        return parse(8640000000000000, 1);
	    }
	    function parse(v, kind) {
	        var date = v == null ? new Date() : new Date(v);
	        if (isNaN(date.getTime())) throw new Error("The string is not a valid Date.");
	        date.kind = kind || (typeof v == "string" && v.slice(-1) == "Z" ? 1 /* UTC */ : 2 /* Local */);
	        return date;
	    }
	    function tryParse(v) {
	        try {
	            return [true, parse(v)];
	        } catch (_err) {
	            return [false, minValue()];
	        }
	    }
	    function create(year, month, day) /* Local */{
	        var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	        var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	        var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	        var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	        var kind = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 2;
	
	        var date = kind === 1 /* UTC */ ? new Date(Date.UTC(year, month - 1, day, h, m, s, ms)) : new Date(year, month - 1, day, h, m, s, ms);
	        if (isNaN(date.getTime())) throw new Error("The parameters describe an unrepresentable Date.");
	        date.kind = kind;
	        return date;
	    }
	    function now() {
	        return parse();
	    }
	    function utcNow() {
	        return parse(null, 1);
	    }
	    function today() {
	        return date(now());
	    }
	    function isLeapYear(year) {
	        return year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	    }
	    function daysInMonth(year, month) {
	        return month == 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 == 0 ? 31 : 30 : month % 2 == 0 ? 30 : 31;
	    }
	    function toUniversalTime(d) {
	        return __changeKind(d, 1);
	    }
	    function toLocalTime(d) {
	        return __changeKind(d, 2);
	    }
	    function timeOfDay(d) {
	        return (0, _TimeSpan.create)(0, hour(d), minute(d), second(d), millisecond(d));
	    }
	    function date(d) {
	        return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
	    }
	    function day(d) {
	        return __getValue(d, "Date");
	    }
	    function hour(d) {
	        return __getValue(d, "Hours");
	    }
	    function millisecond(d) {
	        return __getValue(d, "Milliseconds");
	    }
	    function minute(d) {
	        return __getValue(d, "Minutes");
	    }
	    function month(d) {
	        return __getValue(d, "Month") + 1;
	    }
	    function second(d) {
	        return __getValue(d, "Seconds");
	    }
	    function year(d) {
	        return __getValue(d, "FullYear");
	    }
	    function ticks(d) {
	        return (d.getTime() + 6.2135604e+13 /* millisecondsJSOffset */) * 10000;
	    }
	    function toBinary(d) {
	        return ticks(d);
	    }
	    function dayOfWeek(d) {
	        return __getValue(d, "Day");
	    }
	    function dayOfYear(d) {
	        var _year = year(d);
	        var _month = month(d);
	        var _day = day(d);
	        for (var i = 1; i < _month; i++) {
	            _day += daysInMonth(_year, i);
	        }return _day;
	    }
	    function add(d, ts) {
	        return parse(d.getTime() + ts, d.kind);
	    }
	    function addDays(d, v) {
	        return parse(d.getTime() + v * 86400000, d.kind);
	    }
	    function addHours(d, v) {
	        return parse(d.getTime() + v * 3600000, d.kind);
	    }
	    function addMinutes(d, v) {
	        return parse(d.getTime() + v * 60000, d.kind);
	    }
	    function addSeconds(d, v) {
	        return parse(d.getTime() + v * 1000, d.kind);
	    }
	    function addMilliseconds(d, v) {
	        return parse(d.getTime() + v, d.kind);
	    }
	    function addTicks(d, v) {
	        return parse(d.getTime() + v / 10000, d.kind);
	    }
	    function addYears(d, v) {
	        var newMonth = month(d);
	        var newYear = year(d) + v;
	        var _daysInMonth = daysInMonth(newYear, newMonth);
	        var newDay = Math.min(_daysInMonth, day(d));
	        return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
	    }
	    function addMonths(d, v) {
	        var newMonth = month(d) + v;
	        var newMonth_ = 0;
	        var yearOffset = 0;
	        if (newMonth > 12) {
	            newMonth_ = newMonth % 12;
	            yearOffset = Math.floor(newMonth / 12);
	            newMonth = newMonth_;
	        } else if (newMonth < 1) {
	            newMonth_ = 12 + newMonth % 12;
	            yearOffset = Math.floor(newMonth / 12) + (newMonth_ == 12 ? -1 : 0);
	            newMonth = newMonth_;
	        }
	        var newYear = year(d) + yearOffset;
	        var _daysInMonth = daysInMonth(newYear, newMonth);
	        var newDay = Math.min(_daysInMonth, day(d));
	        return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
	    }
	    function subtract(d, that) {
	        return typeof that == "number" ? parse(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
	    }
	    function toLongDateString(d) {
	        return d.toDateString();
	    }
	    function toShortDateString(d) {
	        return d.toLocaleDateString();
	    }
	    function toLongTimeString(d) {
	        return d.toLocaleTimeString();
	    }
	    function toShortTimeString(d) {
	        return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
	    }
	    function equals(d1, d2) {
	        return d1.getTime() == d2.getTime();
	    }
	    function compare(x, y) {
	        return (0, _Util.compare)(x, y);
	    }
	    function compareTo(x, y) {
	        return (0, _Util.compare)(x, y);
	    }
	    function op_Addition(x, y) {
	        return add(x, y);
	    }
	    function op_Subtraction(x, y) {
	        return subtract(x, y);
	    }
	});

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports !== "undefined") {
	        factory(exports, require("./Util"));
	    } else {
	        var mod = {
	            exports: {}
	        };
	        factory(mod.exports, global.Util);
	        global.TimeSpan = mod.exports;
	    }
	})(this, function (exports, _Util) {
	    "use strict";
	
	    Object.defineProperty(exports, "__esModule", {
	        value: true
	    });
	    exports.create = create;
	    exports.fromTicks = fromTicks;
	    exports.fromDays = fromDays;
	    exports.fromHours = fromHours;
	    exports.fromMinutes = fromMinutes;
	    exports.fromSeconds = fromSeconds;
	    exports.days = days;
	    exports.hours = hours;
	    exports.minutes = minutes;
	    exports.seconds = seconds;
	    exports.milliseconds = milliseconds;
	    exports.ticks = ticks;
	    exports.totalDays = totalDays;
	    exports.totalHours = totalHours;
	    exports.totalMinutes = totalMinutes;
	    exports.totalSeconds = totalSeconds;
	    exports.negate = negate;
	    exports.add = add;
	    exports.subtract = subtract;
	    exports.compare = compare;
	    exports.compareTo = compareTo;
	    exports.duration = duration;
	    function create() {
	        var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	        var h = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	        var m = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	        var s = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	        var ms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
	        switch (arguments.length) {
	            case 1:
	                // ticks
	                return fromTicks(arguments[0]);
	            case 3:
	                // h,m,s
	                d = 0, h = arguments[0], m = arguments[1], s = arguments[2], ms = 0;
	                break;
	            default:
	                // d,h,m,s,ms
	                d = arguments[0], h = arguments[1], m = arguments[2], s = arguments[3], ms = arguments[4] || 0;
	                break;
	        }
	        return d * 86400000 + h * 3600000 + m * 60000 + s * 1000 + ms;
	    }
	    function fromTicks(ticks) {
	        return ticks / 10000;
	    }
	    function fromDays(d) {
	        return create(d, 0, 0, 0);
	    }
	    function fromHours(h) {
	        return create(h, 0, 0);
	    }
	    function fromMinutes(m) {
	        return create(0, m, 0);
	    }
	    function fromSeconds(s) {
	        return create(0, 0, s);
	    }
	    function days(ts) {
	        return Math.floor(ts / 86400000);
	    }
	    function hours(ts) {
	        return Math.floor(ts % 86400000 / 3600000);
	    }
	    function minutes(ts) {
	        return Math.floor(ts % 3600000 / 60000);
	    }
	    function seconds(ts) {
	        return Math.floor(ts % 60000 / 1000);
	    }
	    function milliseconds(ts) {
	        return Math.floor(ts % 1000);
	    }
	    function ticks(ts) {
	        return ts * 10000;
	    }
	    function totalDays(ts) {
	        return ts / 86400000;
	    }
	    function totalHours(ts) {
	        return ts / 3600000;
	    }
	    function totalMinutes(ts) {
	        return ts / 60000;
	    }
	    function totalSeconds(ts) {
	        return ts / 1000;
	    }
	    function negate(ts) {
	        return ts * -1;
	    }
	    function add(ts1, ts2) {
	        return ts1 + ts2;
	    }
	    function subtract(ts1, ts2) {
	        return ts1 - ts2;
	    }
	    function compare(x, y) {
	        return (0, _Util.compare)(x, y);
	    }
	    function compareTo(x, y) {
	        return (0, _Util.compare)(x, y);
	    }
	    function duration(x) {
	        return Math.abs(x);
	    }
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AppApi = exports.Types = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Symbol2 = __webpack_require__(1);
	
	var _Symbol3 = _interopRequireDefault(_Symbol2);
	
	var _Util = __webpack_require__(2);
	
	var _List = __webpack_require__(4);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _Seq = __webpack_require__(6);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Types = exports.Types = function (__exports) {
	    var ModelChanged = __exports.ModelChanged = function () {
	        function ModelChanged(previousState, message, currentState) {
	            _classCallCheck(this, ModelChanged);
	
	            this.PreviousState = previousState;
	            this.Message = message;
	            this.CurrentState = currentState;
	        }
	
	        _createClass(ModelChanged, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.ModelChanged",
	                    interfaces: ["FSharpRecord", "System.IEquatable", "System.IComparable"],
	                    properties: {
	                        PreviousState: (0, _Util.GenericParam)("TModel"),
	                        Message: (0, _Util.GenericParam)("TMessage"),
	                        CurrentState: (0, _Util.GenericParam)("TModel")
	                    }
	                };
	            }
	        }, {
	            key: "Equals",
	            value: function (other) {
	                return (0, _Util.equalsRecords)(this, other);
	            }
	        }, {
	            key: "CompareTo",
	            value: function (other) {
	                return (0, _Util.compareRecords)(this, other);
	            }
	        }]);
	
	        return ModelChanged;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.ModelChanged", ModelChanged);
	
	    var AppEvent = __exports.AppEvent = function () {
	        function AppEvent(caseName, fields) {
	            _classCallCheck(this, AppEvent);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(AppEvent, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.AppEvent",
	                    interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
	                    cases: {
	                        ActionReceived: [(0, _Util.GenericParam)("TMessage")],
	                        ModelChanged: [(0, _Util.makeGeneric)(ModelChanged, {
	                            TMessage: (0, _Util.GenericParam)("TMessage"),
	                            TModel: (0, _Util.GenericParam)("TModel")
	                        })],
	                        Replayed: [(0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.Tuple)(["string", (0, _Util.GenericParam)("TModel")])
	                        })]
	                    }
	                };
	            }
	        }, {
	            key: "Equals",
	            value: function (other) {
	                return (0, _Util.equalsUnions)(this, other);
	            }
	        }, {
	            key: "CompareTo",
	            value: function (other) {
	                return (0, _Util.compareUnions)(this, other);
	            }
	        }]);
	
	        return AppEvent;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.AppEvent", AppEvent);
	
	    var AppMessage = __exports.AppMessage = function () {
	        function AppMessage(caseName, fields) {
	            _classCallCheck(this, AppMessage);
	
	            this.Case = caseName;
	            this.Fields = fields;
	        }
	
	        _createClass(AppMessage, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.AppMessage",
	                    interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
	                    cases: {
	                        Message: [(0, _Util.GenericParam)("TMessage")],
	                        Replay: [(0, _Util.GenericParam)("TModel"), (0, _Util.makeGeneric)(_List2.default, {
	                            T: (0, _Util.Tuple)(["string", (0, _Util.GenericParam)("TMessage")])
	                        })]
	                    }
	                };
	            }
	        }, {
	            key: "Equals",
	            value: function (other) {
	                return (0, _Util.equalsUnions)(this, other);
	            }
	        }, {
	            key: "CompareTo",
	            value: function (other) {
	                return (0, _Util.compareUnions)(this, other);
	            }
	        }]);
	
	        return AppMessage;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.AppMessage", AppMessage);
	
	    var Plugin = __exports.Plugin = function () {
	        function Plugin(producer, subscriber) {
	            _classCallCheck(this, Plugin);
	
	            this.Producer = producer;
	            this.Subscriber = subscriber;
	        }
	
	        _createClass(Plugin, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.Plugin",
	                    interfaces: ["FSharpRecord"],
	                    properties: {
	                        Producer: "function",
	                        Subscriber: "function"
	                    }
	                };
	            }
	        }]);
	
	        return Plugin;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.Plugin", Plugin);
	
	    var AppSpecification = __exports.AppSpecification = function () {
	        function AppSpecification(initState, view, update, initMessage, createRenderer, nodeSelector, producers, subscribers) {
	            _classCallCheck(this, AppSpecification);
	
	            this.InitState = initState;
	            this.View = view;
	            this.Update = update;
	            this.InitMessage = initMessage;
	            this.CreateRenderer = createRenderer;
	            this.NodeSelector = nodeSelector;
	            this.Producers = producers;
	            this.Subscribers = subscribers;
	        }
	
	        _createClass(AppSpecification, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.AppSpecification",
	                    interfaces: ["FSharpRecord"],
	                    properties: {
	                        InitState: (0, _Util.GenericParam)("TModel"),
	                        View: "function",
	                        Update: "function",
	                        InitMessage: "function",
	                        CreateRenderer: "function",
	                        NodeSelector: "string",
	                        Producers: (0, _Util.makeGeneric)(_List2.default, {
	                            T: "function"
	                        }),
	                        Subscribers: (0, _Util.makeGeneric)(_List2.default, {
	                            T: "function"
	                        })
	                    }
	                };
	            }
	        }]);
	
	        return AppSpecification;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.AppSpecification", AppSpecification);
	
	    var App = __exports.App = function () {
	        function App(model, actions, render, subscribers) {
	            _classCallCheck(this, App);
	
	            this.Model = model;
	            this.Actions = actions;
	            this.Render = render;
	            this.Subscribers = subscribers;
	        }
	
	        _createClass(App, [{
	            key: _Symbol3.default.reflection,
	            value: function () {
	                return {
	                    type: "Fable.Arch.App.Types.App",
	                    interfaces: ["FSharpRecord"],
	                    properties: {
	                        Model: (0, _Util.GenericParam)("TModel"),
	                        Actions: (0, _Util.makeGeneric)(_List2.default, {
	                            T: "function"
	                        }),
	                        Render: "function",
	                        Subscribers: (0, _Util.makeGeneric)(_List2.default, {
	                            T: "function"
	                        })
	                    }
	                };
	            }
	        }]);
	
	        return App;
	    }();
	
	    (0, _Symbol2.setType)("Fable.Arch.App.Types.App", App);
	
	    var application = __exports.application = function (initMessage, handleMessage, handleReplay, configureProducers, createInitApp) {
	        var state = null;
	
	        var notifySubs = function notifySubs(msg) {
	            if (state == null) {} else {
	                var s = state;
	                (0, _Seq.iterate)(function (sub) {
	                    sub(msg);
	                }, s.Subscribers);
	            }
	        };
	
	        var handleEvent = function handleEvent(evt) {
	            var patternInput = evt.Case === "Replay" ? handleReplay(handleEvent)(notifySubs)([evt.Fields[0], evt.Fields[1]])(state) : handleMessage(handleEvent)(notifySubs)(evt.Fields[0])(state);
	            state = patternInput[0];
	            (0, _Seq.iterate)(function (x) {
	                x();
	            }, patternInput[1]);
	        };
	
	        var post = function post($var2) {
	            return handleEvent(function (arg0) {
	                return new AppMessage("Message", [arg0]);
	            }($var2));
	        };
	
	        state = createInitApp(post);
	        initMessage(post);
	        configureProducers(handleEvent);
	        return handleEvent;
	    };
	
	    var render = __exports.render = function (post, viewFn, app) {
	        var view = viewFn(app.Model);
	        app.Render(function ($var3) {
	            return post(function (arg0) {
	                return new AppMessage("Message", [arg0]);
	            }($var3));
	        })(view);
	        return app;
	    };
	
	    var createActions = __exports.createActions = function (post) {
	        var mapping = function mapping(a) {
	            return function () {
	                return a(function ($var4) {
	                    return post(function (arg0) {
	                        return new AppMessage("Message", [arg0]);
	                    }($var4));
	                });
	            };
	        };
	
	        return function (list) {
	            return (0, _List.map)(mapping, list);
	        };
	    };
	
	    var handleMessage = __exports.handleMessage = function (update, viewFn, post, notifySubs, message, app) {
	        notifySubs(new AppEvent("ActionReceived", [message]));
	        var patternInput = update(app.Model)(message);
	        var modelChanged = new AppEvent("ModelChanged", [new ModelChanged(app.Model, message, patternInput[0])]);
	        var actions = createActions(post)(patternInput[1]);
	
	        var app_ = function (app_1) {
	            return render(post, viewFn, app_1);
	        }(new App(patternInput[0], app.Actions, app.Render, app.Subscribers));
	
	        return [app_, new _List2.default(function () {
	            notifySubs(modelChanged);
	        }, actions)];
	    };
	
	    var calculateModelChanges = __exports.calculateModelChanges = function (initState, update, actions) {
	        var execUpdate = function execUpdate(r) {
	            return function (a) {
	                var m = r.tail != null ? r.head[1] : initState;
	                var msg = a[1];
	                var patternInput = update(m)(a[1]);
	                var id = a[0];
	                return [id, patternInput[0]];
	            };
	        };
	
	        return (0, _Seq.fold)(function (s, a) {
	            return new _List2.default(execUpdate(s)(a), s);
	        }, new _List2.default(), actions);
	    };
	
	    var handleReplay = __exports.handleReplay = function (viewFn, updateFn, post, notifySubs, fromModel, actions, app) {
	        var result = calculateModelChanges(fromModel, updateFn, actions);
	        var model = result.tail == null ? fromModel : result.head[1];
	
	        var app_ = function (app_1) {
	            return render(post, viewFn, app_1);
	        }(new App(model, app.Actions, app.Render, app.Subscribers));
	
	        return [app_, (0, _List.ofArray)([function () {
	            return notifySubs(new AppEvent("Replayed", [result]));
	        }])];
	    };
	
	    return __exports;
	}({});
	
	var AppApi = exports.AppApi = function (__exports) {
	    var mapAction = __exports.mapAction = function (mapping, action, x) {
	        action(function ($var5) {
	            return x(mapping($var5));
	        });
	    };
	
	    var mapAppMessage = __exports.mapAppMessage = function (map, _arg1) {
	        return _arg1.Case === "Replay" ? new Types.AppMessage("Replay", [_arg1.Fields[0], (0, _List.map)(function (tupledArg) {
	            return [tupledArg[0], map(tupledArg[1])];
	        }, _arg1.Fields[1])]) : new Types.AppMessage("Message", [map(_arg1.Fields[0])]);
	    };
	
	    var mapProducer = __exports.mapProducer = function (map, p) {
	        return function (x) {
	            mapAction(map, p, x);
	        };
	    };
	
	    var mapSubscriber = __exports.mapSubscriber = function (mapModelChanged, mapAction_1, sub, _arg1) {
	        if (_arg1.Case === "ActionReceived") {
	            (function (option) {
	                (0, _Seq.iterate)(sub, function () {
	                    var $var6 = option;
	
	                    if ($var6 != null) {
	                        return [$var6];
	                    } else {
	                        return [];
	                    }
	                }());
	            })(function () {
	                var $var7 = mapAction_1(function (x) {
	                    return x;
	                })(_arg1.Fields[0]);
	
	                if ($var7 != null) {
	                    return function (arg0) {
	                        return new Types.AppEvent("ActionReceived", [arg0]);
	                    }($var7);
	                } else {
	                    return $var7;
	                }
	            }());
	        } else {
	            if (_arg1.Case === "Replayed") {
	                sub(new Types.AppEvent("Replayed", [_arg1.Fields[0]]));
	            } else {
	                (function (option) {
	                    (0, _Seq.iterate)(sub, function () {
	                        var $var8 = option;
	
	                        if ($var8 != null) {
	                            return [$var8];
	                        } else {
	                            return [];
	                        }
	                    }());
	                })(function () {
	                    var $var9 = mapModelChanged(_arg1.Fields[0]);
	
	                    if ($var9 != null) {
	                        return function (arg0) {
	                            return new Types.AppEvent("ModelChanged", [arg0]);
	                        }($var9);
	                    } else {
	                        return $var9;
	                    }
	                }());
	            }
	        }
	    };
	
	    var mapActions = __exports.mapActions = function (m) {
	        var mapping = function mapping(action) {
	            return function (x) {
	                mapAction(m, action, x);
	            };
	        };
	
	        return function (list) {
	            return (0, _List.map)(mapping, list);
	        };
	    };
	
	    var toActionList = __exports.toActionList = function (a) {
	        return (0, _List.ofArray)([a]);
	    };
	
	    var createApp = __exports.createApp = function (state, view, update, createRenderer) {
	        return new Types.AppSpecification(state, view, update, function (_arg1) {}, createRenderer, "body", new _List2.default(), new _List2.default());
	    };
	
	    var createSimpleApp = __exports.createSimpleApp = function (model, view, update) {
	        var update_1 = function update_1(x) {
	            return function (y) {
	                return [update(x)(y), new _List2.default()];
	            };
	        };
	
	        return function (createRenderer) {
	            return createApp(model, view, update_1, createRenderer);
	        };
	    };
	
	    var withStartNodeSelector = __exports.withStartNodeSelector = function (selector, app) {
	        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, selector, app.Producers, app.Subscribers);
	    };
	
	    var withInitMessage = __exports.withInitMessage = function (msg, app) {
	        return new Types.AppSpecification(app.InitState, app.View, app.Update, msg, app.CreateRenderer, app.NodeSelector, app.Producers, app.Subscribers);
	    };
	
	    var withInstrumentationProducer = function withInstrumentationProducer(p, app) {
	        var Producers = new _List2.default(p, app.Producers);
	        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, app.NodeSelector, Producers, app.Subscribers);
	    };
	
	    var withProducer = __exports.withProducer = function (producer, app) {
	        var lift = function lift(h) {
	            return function ($var10) {
	                return h(function (arg0) {
	                    return new Types.AppMessage("Message", [arg0]);
	                }($var10));
	            };
	        };
	
	        var producer_ = function producer_($var11) {
	            return producer(lift($var11));
	        };
	
	        return withInstrumentationProducer(producer_, app);
	    };
	
	    var withInstrumentationSubscriber = __exports.withInstrumentationSubscriber = function (subscriber, app) {
	        var Subscribers = new _List2.default(subscriber, app.Subscribers);
	        return new Types.AppSpecification(app.InitState, app.View, app.Update, app.InitMessage, app.CreateRenderer, app.NodeSelector, app.Producers, Subscribers);
	    };
	
	    var withSubscriber = __exports.withSubscriber = function (subscriber, app) {
	        var subscriber_ = function subscriber_(_arg1) {
	            if (_arg1.Case === "ModelChanged") {
	                subscriber(_arg1.Fields[0]);
	            }
	        };
	
	        return withInstrumentationSubscriber(subscriber_, app);
	    };
	
	    var withPlugin = __exports.withPlugin = function (plugin) {
	        return function ($var12) {
	            return withInstrumentationProducer(plugin.Producer, withInstrumentationSubscriber(plugin.Subscriber, $var12));
	        };
	    };
	
	    var configureProducers = __exports.configureProducers = function (producers, post) {
	        (0, _Seq.iterate)(function (p) {
	            p(post);
	        }, producers);
	    };
	
	    var start = __exports.start = function (appSpec) {
	        var createInitApp = function createInitApp(post) {
	            var view = appSpec.View(appSpec.InitState);
	            var render = appSpec.CreateRenderer(appSpec.NodeSelector)(post)(view);
	            return new Types.App(appSpec.InitState, new _List2.default(), render, appSpec.Subscribers);
	        };
	
	        var handleMessage_ = function handleMessage_(post) {
	            return function (notifySubs) {
	                return function (message) {
	                    return function (app) {
	                        return Types.handleMessage(appSpec.Update, appSpec.View, post, notifySubs, message, app);
	                    };
	                };
	            };
	        };
	
	        var handleReplay_ = function handleReplay_(post) {
	            return function (notifySubs) {
	                return function (tupledArg) {
	                    return function (app) {
	                        return Types.handleReplay(appSpec.View, appSpec.Update, post, notifySubs, tupledArg[0], tupledArg[1], app);
	                    };
	                };
	            };
	        };
	
	        var configureProducers_ = function configureProducers_(post) {
	            configureProducers(appSpec.Producers, post);
	        };
	
	        return Types.application(appSpec.InitMessage, handleMessage_, handleReplay_, configureProducers_, createInitApp);
	    };
	
	    return __exports;
	}({});


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ViewState = exports.RenderState = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.createTree = createTree;
	exports.renderSomething = renderSomething;
	exports.render = render;
	exports.createRender = createRender;
	
	var _Util = __webpack_require__(2);
	
	var _List = __webpack_require__(4);
	
	var _List2 = _interopRequireDefault(_List);
	
	var _virtualDom = __webpack_require__(16);
	
	var _Symbol2 = __webpack_require__(1);
	
	var _Symbol3 = _interopRequireDefault(_Symbol2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function createTree(handler, tag, attributes, children) {
	    var toAttrs = function toAttrs(attrs) {
	        var elAttributes = function (_arg2) {
	            return _arg2.tail == null ? null : ["attributes", (0, _Util.createObj)(_arg2)];
	        }((0, _List.choose)(function (x) {
	            return x;
	        }, (0, _List.map)(function (_arg1) {
	            return _arg1.Case === "Attribute" ? function () {
	                var v = _arg1.Fields[0][1];
	                var k = _arg1.Fields[0][0];
	                return [k, v];
	            }() : null;
	        }, attrs)));
	
	        var props = (0, _List.map)(function (_arg4) {
	            return _arg4.Case === "Style" ? ["style", (0, _Util.createObj)(_arg4.Fields[0])] : _arg4.Case === "Property" ? function () {
	                var v = _arg4.Fields[0][1];
	                var k = _arg4.Fields[0][0];
	                return [k, v];
	            }() : _arg4.Case === "EventHandler" ? function () {
	                var f = _arg4.Fields[0][1];
	                var ev = _arg4.Fields[0][0];
	                return [ev, function ($var13) {
	                    return handler(f($var13));
	                }];
	            }() : function () {
	                throw new Error("Shouldn't happen");
	            }();
	        }, (0, _List.filter)(function (_arg3) {
	            return _arg3.Case === "Attribute" ? false : true;
	        }, attrs));
	        return (0, _Util.createObj)(elAttributes != null ? new _List2.default(elAttributes, props) : props);
	    };
	
	    var elem = (0, _virtualDom.h)(tag, toAttrs(attributes), Array.from(children));
	    return elem;
	}
	
	var RenderState = exports.RenderState = function () {
	    function RenderState(caseName, fields) {
	        _classCallCheck(this, RenderState);
	
	        this.Case = caseName;
	        this.Fields = fields;
	    }
	
	    _createClass(RenderState, [{
	        key: _Symbol3.default.reflection,
	        value: function () {
	            return {
	                type: "Fable.Arch.Virtualdom.RenderState",
	                interfaces: ["FSharpUnion", "System.IEquatable", "System.IComparable"],
	                cases: {
	                    ExtraRequest: [],
	                    NoRequest: [],
	                    PendingRequest: []
	                }
	            };
	        }
	    }, {
	        key: "Equals",
	        value: function (other) {
	            return (0, _Util.equalsUnions)(this, other);
	        }
	    }, {
	        key: "CompareTo",
	        value: function (other) {
	            return (0, _Util.compareUnions)(this, other);
	        }
	    }]);
	
	    return RenderState;
	}();
	
	(0, _Symbol2.setType)("Fable.Arch.Virtualdom.RenderState", RenderState);
	
	var ViewState = exports.ViewState = function () {
	    function ViewState(currentTree, nextTree, node, renderState) {
	        _classCallCheck(this, ViewState);
	
	        this.CurrentTree = currentTree;
	        this.NextTree = nextTree;
	        this.Node = node;
	        this.RenderState = renderState;
	    }
	
	    _createClass(ViewState, [{
	        key: _Symbol3.default.reflection,
	        value: function () {
	            return {
	                type: "Fable.Arch.Virtualdom.ViewState",
	                interfaces: ["FSharpRecord", "System.IEquatable"],
	                properties: {
	                    CurrentTree: _Util.Any,
	                    NextTree: _Util.Any,
	                    Node: (0, _Util.Interface)("Fable.Import.Browser.Node"),
	                    RenderState: RenderState
	                }
	            };
	        }
	    }, {
	        key: "Equals",
	        value: function (other) {
	            return (0, _Util.equalsRecords)(this, other);
	        }
	    }]);
	
	    return ViewState;
	}();
	
	(0, _Symbol2.setType)("Fable.Arch.Virtualdom.ViewState", ViewState);
	
	function renderSomething(handler, node) {
	    var _target0 = function _target0(attrs, nodes, tag) {
	        return createTree(handler, tag, attrs, (0, _List.map)(function (node_1) {
	            return renderSomething(handler, node_1);
	        }, nodes));
	    };
	
	    if (node.Case === "Svg") {
	        return _target0(node.Fields[0][1], node.Fields[1], node.Fields[0][0]);
	    } else {
	        if (node.Case === "VoidElement") {
	            var tag = node.Fields[0][0];
	            var attrs = node.Fields[0][1];
	            return createTree(handler, tag, attrs, new _List2.default());
	        } else {
	            if (node.Case === "Text") {
	                return node.Fields[0];
	            } else {
	                if (node.Case === "WhiteSpace") {
	                    return node.Fields[0];
	                } else {
	                    return _target0(node.Fields[0][1], node.Fields[1], node.Fields[0][0]);
	                }
	            }
	        }
	    }
	}
	
	function render(handler, view, viewState) {
	    var tree = renderSomething(handler, view);
	    return new ViewState(viewState.CurrentTree, tree, viewState.Node, viewState.RenderState);
	}
	
	function createRender(selector, handler, view) {
	    var node = document.body.querySelector(selector);
	    var tree = renderSomething(handler, view);
	    var vdomNode = (0, _virtualDom.create)(tree);
	    node.appendChild(vdomNode);
	    var viewState = new ViewState(tree, tree, vdomNode, new RenderState("NoRequest", []));
	
	    var raf = function raf(cb) {
	        return window.requestAnimationFrame(function (fb) {
	            cb();
	        });
	    };
	
	    var render_ = function render_(handler_1) {
	        return function (view_1) {
	            var viewState_ = render(handler_1, view_1, viewState);
	            viewState = viewState_;
	
	            var callBack = function callBack() {
	                var matchValue = viewState.RenderState;
	
	                if (matchValue.Case === "ExtraRequest") {
	                    {
	                        var RenderState_1 = new RenderState("NoRequest", []);
	                        viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, RenderState_1);
	                    }
	                } else {
	                    if (matchValue.Case === "NoRequest") {
	                        throw new Error("Shouldn't happen");
	                    } else {
	                        raf(callBack);
	                        {
	                            var _RenderState_ = new RenderState("ExtraRequest", []);
	
	                            viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, _RenderState_);
	                        }
	                        var patches = (0, _virtualDom.diff)(viewState.CurrentTree, viewState.NextTree);
	                        (0, _virtualDom.patch)(viewState.Node, patches);
	                        viewState = new ViewState(viewState.NextTree, viewState.NextTree, viewState.Node, viewState.RenderState);
	                    }
	                }
	            };
	
	            {
	                var matchValue = viewState.RenderState;
	
	                if (matchValue.Case === "NoRequest") {
	                    raf(callBack);
	                }
	            }
	            {
	                var RenderState_1 = new RenderState("PendingRequest", []);
	                viewState = new ViewState(viewState.CurrentTree, viewState.NextTree, viewState.Node, RenderState_1);
	            }
	        };
	    };
	
	    return render_;
	}


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(17)
	var patch = __webpack_require__(30)
	var h = __webpack_require__(39)
	var create = __webpack_require__(50)
	var VNode = __webpack_require__(41)
	var VText = __webpack_require__(42)
	
	module.exports = {
	    diff: diff,
	    patch: patch,
	    h: h,
	    create: create,
	    VNode: VNode,
	    VText: VText
	}


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var diff = __webpack_require__(18)
	
	module.exports = diff


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(19)
	
	var VPatch = __webpack_require__(20)
	var isVNode = __webpack_require__(22)
	var isVText = __webpack_require__(23)
	var isWidget = __webpack_require__(24)
	var isThunk = __webpack_require__(25)
	var handleThunk = __webpack_require__(26)
	
	var diffProps = __webpack_require__(27)
	
	module.exports = diff
	
	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}
	
	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }
	
	    var apply = patch[index]
	    var applyClear = false
	
	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {
	
	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }
	
	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }
	
	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }
	
	    if (apply) {
	        patch[index] = apply
	    }
	
	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}
	
	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children
	
	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen
	
	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1
	
	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }
	
	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }
	
	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }
	
	    return apply
	}
	
	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}
	
	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1
	
	            destroyWidgets(child, patch, index)
	
	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}
	
	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}
	
	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }
	
	    return false
	}
	
	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }
	
	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1
	
	                unhook(child, patch, index)
	
	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}
	
	function undefinedKeys(obj) {
	    var result = {}
	
	    for (var key in obj) {
	        result[key] = undefined
	    }
	
	    return result
	}
	
	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free
	
	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }
	
	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free
	
	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }
	
	    // O(MAX(N, M)) memory
	    var newChildren = []
	
	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0
	
	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex
	
	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])
	
	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }
	
	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]
	
	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]
	
	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }
	
	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem
	
	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]
	
	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }
	
	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }
	
	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }
	
	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }
	
	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}
	
	function remove(arr, index, key) {
	    arr.splice(index, 1)
	
	    return {
	        from: index,
	        key: key
	    }
	}
	
	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length
	
	    for (var i = 0; i < length; i++) {
	        var child = children[i]
	
	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }
	
	    return {
	        keys: keys,     // A hash of key name to index
	        free: free      // An array of unkeyed item indices
	    }
	}
	
	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }
	
	        return apply
	    } else {
	        return patch
	    }
	}


/***/ },
/* 19 */
/***/ function(module, exports) {

	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString
	
	module.exports = nativeIsArray || isArray
	
	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(21)
	
	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8
	
	module.exports = VirtualPatch
	
	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}
	
	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"


/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "2"


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(21)
	
	module.exports = isVirtualNode
	
	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(21)
	
	module.exports = isVirtualText
	
	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = isWidget
	
	function isWidget(w) {
	    return w && w.type === "Widget"
	}


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = isThunk
	
	function isThunk(t) {
	    return t && t.type === "Thunk"
	}


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var isVNode = __webpack_require__(22)
	var isVText = __webpack_require__(23)
	var isWidget = __webpack_require__(24)
	var isThunk = __webpack_require__(25)
	
	module.exports = handleThunk
	
	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b
	
	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }
	
	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }
	
	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}
	
	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode
	
	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }
	
	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }
	
	    return renderedThunk
	}


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28)
	var isHook = __webpack_require__(29)
	
	module.exports = diffProps
	
	function diffProps(a, b) {
	    var diff
	
	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }
	
	        var aValue = a[aKey]
	        var bValue = b[aKey]
	
	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }
	
	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }
	
	    return diff
	}
	
	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}


/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};


/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = isHook
	
	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var patch = __webpack_require__(31)
	
	module.exports = patch


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(32)
	var isArray = __webpack_require__(19)
	
	var render = __webpack_require__(34)
	var domIndex = __webpack_require__(36)
	var patchOp = __webpack_require__(37)
	module.exports = patch
	
	function patch(rootNode, patches, renderOptions) {
	    renderOptions = renderOptions || {}
	    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
	        ? renderOptions.patch
	        : patchRecursive
	    renderOptions.render = renderOptions.render || render
	
	    return renderOptions.patch(rootNode, patches, renderOptions)
	}
	
	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)
	
	    if (indices.length === 0) {
	        return rootNode
	    }
	
	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument
	
	    if (!renderOptions.document && ownerDocument !== document) {
	        renderOptions.document = ownerDocument
	    }
	
	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }
	
	    return rootNode
	}
	
	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }
	
	    var newNode
	
	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)
	
	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)
	
	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }
	
	    return rootNode
	}
	
	function patchIndices(patches) {
	    var indices = []
	
	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }
	
	    return indices
	}


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = __webpack_require__(33);
	
	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];
	
	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }
	
	    module.exports = doccy;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var document = __webpack_require__(32)
	
	var applyProperties = __webpack_require__(35)
	
	var isVNode = __webpack_require__(22)
	var isVText = __webpack_require__(23)
	var isWidget = __webpack_require__(24)
	var handleThunk = __webpack_require__(26)
	
	module.exports = createElement
	
	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null
	
	    vnode = handleThunk(vnode).a
	
	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }
	
	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)
	
	    var props = vnode.properties
	    applyProperties(node, props)
	
	    var children = vnode.children
	
	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }
	
	    return node
	}


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(28)
	var isHook = __webpack_require__(29)
	
	module.exports = applyProperties
	
	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]
	
	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}
	
	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]
	
	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}
	
	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined
	
	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]
	
	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }
	
	        return
	    }
	
	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }
	
	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }
	
	    var replacer = propName === "style" ? "" : undefined
	
	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}
	
	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}


/***/ },
/* 36 */
/***/ function(module, exports) {

	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.
	
	var noChild = {}
	
	module.exports = domIndex
	
	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}
	
	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}
	
	
	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }
	
	        var vChildren = tree.children
	
	        if (vChildren) {
	
	            var childNodes = rootNode.childNodes
	
	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1
	
	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)
	
	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }
	
	                rootIndex = nextIndex
	            }
	        }
	    }
	
	    return nodes
	}
	
	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }
	
	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem
	
	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]
	
	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }
	
	    return false;
	}
	
	function ascending(a, b) {
	    return a > b ? 1 : -1
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var applyProperties = __webpack_require__(35)
	
	var isWidget = __webpack_require__(24)
	var VPatch = __webpack_require__(20)
	
	var updateWidget = __webpack_require__(38)
	
	module.exports = applyPatch
	
	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch
	
	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}
	
	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode
	
	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }
	
	    destroyWidget(domNode, vNode);
	
	    return null
	}
	
	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = renderOptions.render(vNode, renderOptions)
	
	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }
	
	    return parentNode
	}
	
	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode
	
	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = renderOptions.render(vText, renderOptions)
	
	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }
	
	    return newNode
	}
	
	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode
	
	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = renderOptions.render(widget, renderOptions)
	    }
	
	    var parentNode = domNode.parentNode
	
	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }
	
	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }
	
	    return newNode
	}
	
	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = renderOptions.render(vNode, renderOptions)
	
	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }
	
	    return newNode
	}
	
	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}
	
	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert
	
	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }
	
	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}
	
	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }
	
	    return newRoot;
	}


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var isWidget = __webpack_require__(24)
	
	module.exports = updateWidget
	
	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }
	
	    return false
	}


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var h = __webpack_require__(40)
	
	module.exports = h


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(19);
	
	var VNode = __webpack_require__(41);
	var VText = __webpack_require__(42);
	var isVNode = __webpack_require__(22);
	var isVText = __webpack_require__(23);
	var isWidget = __webpack_require__(24);
	var isHook = __webpack_require__(29);
	var isVThunk = __webpack_require__(25);
	
	var parseTag = __webpack_require__(43);
	var softSetHook = __webpack_require__(45);
	var evHook = __webpack_require__(46);
	
	module.exports = h;
	
	function h(tagName, properties, children) {
	    var childNodes = [];
	    var tag, props, key, namespace;
	
	    if (!children && isChildren(properties)) {
	        children = properties;
	        props = {};
	    }
	
	    props = props || properties || {};
	    tag = parseTag(tagName, props);
	
	    // support keys
	    if (props.hasOwnProperty('key')) {
	        key = props.key;
	        props.key = undefined;
	    }
	
	    // support namespace
	    if (props.hasOwnProperty('namespace')) {
	        namespace = props.namespace;
	        props.namespace = undefined;
	    }
	
	    // fix cursor bug
	    if (tag === 'INPUT' &&
	        !namespace &&
	        props.hasOwnProperty('value') &&
	        props.value !== undefined &&
	        !isHook(props.value)
	    ) {
	        props.value = softSetHook(props.value);
	    }
	
	    transformProperties(props);
	
	    if (children !== undefined && children !== null) {
	        addChild(children, childNodes, tag, props);
	    }
	
	
	    return new VNode(tag, props, childNodes, key, namespace);
	}
	
	function addChild(c, childNodes, tag, props) {
	    if (typeof c === 'string') {
	        childNodes.push(new VText(c));
	    } else if (typeof c === 'number') {
	        childNodes.push(new VText(String(c)));
	    } else if (isChild(c)) {
	        childNodes.push(c);
	    } else if (isArray(c)) {
	        for (var i = 0; i < c.length; i++) {
	            addChild(c[i], childNodes, tag, props);
	        }
	    } else if (c === null || c === undefined) {
	        return;
	    } else {
	        throw UnexpectedVirtualElement({
	            foreignObject: c,
	            parentVnode: {
	                tagName: tag,
	                properties: props
	            }
	        });
	    }
	}
	
	function transformProperties(props) {
	    for (var propName in props) {
	        if (props.hasOwnProperty(propName)) {
	            var value = props[propName];
	
	            if (isHook(value)) {
	                continue;
	            }
	
	            if (propName.substr(0, 3) === 'ev-') {
	                // add ev-foo support
	                props[propName] = evHook(value);
	            }
	        }
	    }
	}
	
	function isChild(x) {
	    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
	}
	
	function isChildren(x) {
	    return typeof x === 'string' || isArray(x) || isChild(x);
	}
	
	function UnexpectedVirtualElement(data) {
	    var err = new Error();
	
	    err.type = 'virtual-hyperscript.unexpected.virtual-element';
	    err.message = 'Unexpected virtual child passed to h().\n' +
	        'Expected a VNode / Vthunk / VWidget / string but:\n' +
	        'got:\n' +
	        errorString(data.foreignObject) +
	        '.\n' +
	        'The parent vnode is:\n' +
	        errorString(data.parentVnode)
	        '\n' +
	        'Suggested fix: change your `h(..., [ ... ])` callsite.';
	    err.foreignObject = data.foreignObject;
	    err.parentVnode = data.parentVnode;
	
	    return err;
	}
	
	function errorString(obj) {
	    try {
	        return JSON.stringify(obj, null, '    ');
	    } catch (e) {
	        return String(obj);
	    }
	}


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(21)
	var isVNode = __webpack_require__(22)
	var isWidget = __webpack_require__(24)
	var isThunk = __webpack_require__(25)
	var isVHook = __webpack_require__(29)
	
	module.exports = VirtualNode
	
	var noProperties = {}
	var noChildren = []
	
	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null
	
	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks
	
	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }
	
	                hooks[propName] = property
	            }
	        }
	    }
	
	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0
	
	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }
	
	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }
	
	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }
	
	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}
	
	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var version = __webpack_require__(21)
	
	module.exports = VirtualText
	
	function VirtualText(text) {
	    this.text = String(text)
	}
	
	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var split = __webpack_require__(44);
	
	var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
	var notClassId = /^\.|#/;
	
	module.exports = parseTag;
	
	function parseTag(tag, props) {
	    if (!tag) {
	        return 'DIV';
	    }
	
	    var noId = !(props.hasOwnProperty('id'));
	
	    var tagParts = split(tag, classIdSplit);
	    var tagName = null;
	
	    if (notClassId.test(tagParts[1])) {
	        tagName = 'DIV';
	    }
	
	    var classes, part, type, i;
	
	    for (i = 0; i < tagParts.length; i++) {
	        part = tagParts[i];
	
	        if (!part) {
	            continue;
	        }
	
	        type = part.charAt(0);
	
	        if (!tagName) {
	            tagName = part;
	        } else if (type === '.') {
	            classes = classes || [];
	            classes.push(part.substring(1, part.length));
	        } else if (type === '#' && noId) {
	            props.id = part.substring(1, part.length);
	        }
	    }
	
	    if (classes) {
	        if (props.className) {
	            classes.push(props.className);
	        }
	
	        props.className = classes.join(' ');
	    }
	
	    return props.namespace ? tagName : tagName.toUpperCase();
	}


/***/ },
/* 44 */
/***/ function(module, exports) {

	/*!
	 * Cross-Browser Split 1.1.1
	 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
	 * Available under the MIT License
	 * ECMAScript compliant, uniform cross-browser split method
	 */
	
	/**
	 * Splits a string into an array of strings using a regex or string separator. Matches of the
	 * separator are not included in the result array. However, if `separator` is a regex that contains
	 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
	 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
	 * cross-browser.
	 * @param {String} str String to split.
	 * @param {RegExp|String} separator Regex or string to use for separating the string.
	 * @param {Number} [limit] Maximum number of items to include in the result array.
	 * @returns {Array} Array of substrings.
	 * @example
	 *
	 * // Basic use
	 * split('a b c d', ' ');
	 * // -> ['a', 'b', 'c', 'd']
	 *
	 * // With limit
	 * split('a b c d', ' ', 2);
	 * // -> ['a', 'b']
	 *
	 * // Backreferences in result array
	 * split('..word1 word2..', /([a-z]+)(\d+)/i);
	 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
	 */
	module.exports = (function split(undef) {
	
	  var nativeSplit = String.prototype.split,
	    compliantExecNpcg = /()??/.exec("")[1] === undef,
	    // NPCG: nonparticipating capturing group
	    self;
	
	  self = function(str, separator, limit) {
	    // If `separator` is not a regex, use `nativeSplit`
	    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
	      return nativeSplit.call(str, separator, limit);
	    }
	    var output = [],
	      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
	      (separator.sticky ? "y" : ""),
	      // Firefox 3+
	      lastLastIndex = 0,
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      separator = new RegExp(separator.source, flags + "g"),
	      separator2, match, lastIndex, lastLength;
	    str += ""; // Type-convert
	    if (!compliantExecNpcg) {
	      // Doesn't need flags gy, but they don't hurt
	      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
	    }
	    /* Values for `limit`, per the spec:
	     * If undefined: 4294967295 // Math.pow(2, 32) - 1
	     * If 0, Infinity, or NaN: 0
	     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
	     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
	     * If other: Type-convert, then use the above rules
	     */
	    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
	    limit >>> 0; // ToUint32(limit)
	    while (match = separator.exec(str)) {
	      // `separator.lastIndex` is not reliable cross-browser
	      lastIndex = match.index + match[0].length;
	      if (lastIndex > lastLastIndex) {
	        output.push(str.slice(lastLastIndex, match.index));
	        // Fix browsers whose `exec` methods don't consistently return `undefined` for
	        // nonparticipating capturing groups
	        if (!compliantExecNpcg && match.length > 1) {
	          match[0].replace(separator2, function() {
	            for (var i = 1; i < arguments.length - 2; i++) {
	              if (arguments[i] === undef) {
	                match[i] = undef;
	              }
	            }
	          });
	        }
	        if (match.length > 1 && match.index < str.length) {
	          Array.prototype.push.apply(output, match.slice(1));
	        }
	        lastLength = match[0].length;
	        lastLastIndex = lastIndex;
	        if (output.length >= limit) {
	          break;
	        }
	      }
	      if (separator.lastIndex === match.index) {
	        separator.lastIndex++; // Avoid an infinite loop
	      }
	    }
	    if (lastLastIndex === str.length) {
	      if (lastLength || !separator.test("")) {
	        output.push("");
	      }
	    } else {
	      output.push(str.slice(lastLastIndex));
	    }
	    return output.length > limit ? output.slice(0, limit) : output;
	  };
	
	  return self;
	})();


/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = SoftSetHook;
	
	function SoftSetHook(value) {
	    if (!(this instanceof SoftSetHook)) {
	        return new SoftSetHook(value);
	    }
	
	    this.value = value;
	}
	
	SoftSetHook.prototype.hook = function (node, propertyName) {
	    if (node[propertyName] !== this.value) {
	        node[propertyName] = this.value;
	    }
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var EvStore = __webpack_require__(47);
	
	module.exports = EvHook;
	
	function EvHook(value) {
	    if (!(this instanceof EvHook)) {
	        return new EvHook(value);
	    }
	
	    this.value = value;
	}
	
	EvHook.prototype.hook = function (node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);
	
	    es[propName] = this.value;
	};
	
	EvHook.prototype.unhook = function(node, propertyName) {
	    var es = EvStore(node);
	    var propName = propertyName.substr(3);
	
	    es[propName] = undefined;
	};


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var OneVersionConstraint = __webpack_require__(48);
	
	var MY_VERSION = '7';
	OneVersionConstraint('ev-store', MY_VERSION);
	
	var hashKey = '__EV_STORE_KEY@' + MY_VERSION;
	
	module.exports = EvStore;
	
	function EvStore(elem) {
	    var hash = elem[hashKey];
	
	    if (!hash) {
	        hash = elem[hashKey] = {};
	    }
	
	    return hash;
	}


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Individual = __webpack_require__(49);
	
	module.exports = OneVersion;
	
	function OneVersion(moduleName, version, defaultValue) {
	    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
	    var enforceKey = key + '_ENFORCE_SINGLETON';
	
	    var versionValue = Individual(enforceKey, version);
	
	    if (versionValue !== version) {
	        throw new Error('Can only have one copy of ' +
	            moduleName + '.\n' +
	            'You already have version ' + versionValue +
	            ' installed.\n' +
	            'This means you cannot install version ' + version);
	    }
	
	    return Individual(key, defaultValue);
	}


/***/ },
/* 49 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	/*global window, global*/
	
	var root = typeof window !== 'undefined' ?
	    window : typeof global !== 'undefined' ?
	    global : {};
	
	module.exports = Individual;
	
	function Individual(key, value) {
	    if (key in root) {
	        return root[key];
	    }
	
	    root[key] = value;
	
	    return value;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var createElement = __webpack_require__(34)
	
	module.exports = createElement


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map