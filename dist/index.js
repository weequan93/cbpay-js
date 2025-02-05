"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _nullishCoalesce(lhs, rhsFn) {
    if (lhs != null) {
        return lhs;
    } else {
        return rhsFn();
    }
}
function _optionalChain(ops) {
    var lastAccessLHS = undefined;
    var value = ops[0];
    var i = 1;
    while(i < ops.length){
        var op = ops[i];
        var fn = ops[i + 1];
        i += 2;
        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
            return undefined;
        }
        if (op === 'access' || op === 'optionalAccess') {
            lastAccessLHS = value;
            value = fn(value);
        } else if (op === 'call' || op === 'optionalCall') {
            var _value;
            value = fn(function() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                return (_value = value).call.apply(_value, [
                    lastAccessLHS
                ].concat(_to_consumable_array(args)));
            });
            lastAccessLHS = undefined;
        }
    }
    return value;
}
var __defProp = Object.defineProperty;
var __defNormalProp = function(obj, key, value) {
    return key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value: value
    }) : obj[key] = value;
};
var __name = function(target, value) {
    return __defProp(target, "name", {
        value: value,
        configurable: true
    });
};
var __publicField = function(obj, key, value) {
    __defNormalProp(obj, (typeof key === "undefined" ? "undefined" : _type_of(key)) !== "symbol" ? key + "" : key, value);
    return value;
};
// src/config.ts
var DEFAULT_HOST = "https://pay.coinbase.com";
// src/onramp/generateOnRampURL.ts
var generateOnRampURL = /* @__PURE__ */ __name(function(_param) {
    var _param_host = _param.host, host = _param_host === void 0 ? DEFAULT_HOST : _param_host, props = _object_without_properties(_param, [
        "host"
    ]);
    var url = new URL(host);
    url.pathname = "/buy/select-asset";
    if (props.destinationWallets && props.addresses) {
        throw new Error("Only one of destinationWallets or addresses can be provided");
    } else if (!props.destinationWallets && !props.addresses) {
        throw new Error("One of destinationWallets or addresses must be provided");
    }
    Object.keys(props).forEach(function(key) {
        var value = props[key];
        if (value !== void 0) {
            if ([
                "string",
                "number",
                "boolean"
            ].includes(typeof value === "undefined" ? "undefined" : _type_of(value))) {
                url.searchParams.append(key, value.toString());
            } else {
                url.searchParams.append(key, JSON.stringify(value));
            }
        }
    });
    url.searchParams.sort();
    return url.toString();
}, "generateOnRampURL");
// src/offramp/generateOffRampURL.ts
var generateOffRampURL = /* @__PURE__ */ __name(function(_param) {
    var _param_host = _param.host, host = _param_host === void 0 ? DEFAULT_HOST : _param_host, props = _object_without_properties(_param, [
        "host"
    ]);
    var url = new URL(host);
    url.pathname = "/v3/sell/input";
    Object.keys(props).forEach(function(key) {
        var value = props[key];
        if (value !== void 0) {
            if ([
                "string",
                "number",
                "boolean"
            ].includes(typeof value === "undefined" ? "undefined" : _type_of(value))) {
                url.searchParams.append(key, value.toString());
            } else {
                url.searchParams.append(key, JSON.stringify(value));
            }
        }
    });
    url.searchParams.sort();
    return url.toString();
}, "generateOffRampURL");
// src/utils/createEmbeddedContent.ts
var EMBEDDED_IFRAME_ID = "cbpay-embedded-onramp";
var createEmbeddedContent = /* @__PURE__ */ __name(function(param) {
    var url = param.url, _param_width = param.width, width = _param_width === void 0 ? "100%" : _param_width, _param_height = param.height, height = _param_height === void 0 ? "100%" : _param_height, _param_position = param.position, position = _param_position === void 0 ? "fixed" : _param_position, _param_top = param.top, top = _param_top === void 0 ? "0px" : _param_top;
    var iframe = document.createElement("iframe");
    iframe.style.border = "unset";
    iframe.style.borderWidth = "0";
    iframe.style.width = width.toString();
    iframe.style.height = height.toString();
    iframe.style.position = position;
    iframe.style.top = top;
    iframe.id = EMBEDDED_IFRAME_ID;
    iframe.src = url;
    return iframe;
}, "createEmbeddedContent");
// src/utils/postMessage.ts
var MessageCodes;
(function(MessageCodes2) {
    MessageCodes2["LaunchEmbedded"] = "launch_embedded";
    MessageCodes2["AppReady"] = "app_ready";
    MessageCodes2["AppParams"] = "app_params";
    MessageCodes2["SigninSuccess"] = "signin_success";
    MessageCodes2["Success"] = "success";
    MessageCodes2["Exit"] = "exit";
    MessageCodes2["Event"] = "event";
    MessageCodes2["Error"] = "error";
    MessageCodes2["PixelReady"] = "pixel_ready";
    MessageCodes2["OnAppParamsNonce"] = "on_app_params_nonce";
})(MessageCodes || (MessageCodes = {}));
var onBroadcastedPostMessage = /* @__PURE__ */ __name(function(messageCode, param) {
    var callback = param.onMessage, _param_shouldUnsubscribe = param.shouldUnsubscribe, shouldUnsubscribe = _param_shouldUnsubscribe === void 0 ? true : _param_shouldUnsubscribe, allowedOrigin = param.allowedOrigin, _param_onValidateOrigin = param.onValidateOrigin, onValidateOrigin = _param_onValidateOrigin === void 0 ? /* @__PURE__ */ __name(function() {
        return Promise.resolve(true);
    }, "onValidateOrigin") : _param_onValidateOrigin;
    var onMessage = /* @__PURE__ */ __name(function(e) {
        var _parsePostMessage = parsePostMessage(e.data), eventName = _parsePostMessage.eventName, data = _parsePostMessage.data;
        var isOriginAllowed = !allowedOrigin || e.origin === allowedOrigin;
        if (eventName === messageCode) {
            void _async_to_generator(function() {
                var _tmp;
                return _ts_generator(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            _tmp = isOriginAllowed;
                            if (!_tmp) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                onValidateOrigin(e.origin)
                            ];
                        case 1:
                            _tmp = _state.sent();
                            _state.label = 2;
                        case 2:
                            if (_tmp) {
                                callback(data);
                                if (shouldUnsubscribe) {
                                    window.removeEventListener("message", onMessage);
                                }
                            }
                            return [
                                2
                            ];
                    }
                });
            })();
        }
    }, "onMessage");
    window.addEventListener("message", onMessage);
    return function() {
        window.removeEventListener("message", onMessage);
    };
}, "onBroadcastedPostMessage");
var getSdkTarget = /* @__PURE__ */ __name(function(win) {
    if (win !== window) {
        return win;
    } else if (isMobileSdkTarget(win)) {
        return {
            postMessage: function(message) {
                return win.ReactNativeWebView.postMessage(message);
            }
        };
    } else if (win.opener) {
        return win.opener;
    } else if (win.parent !== win.self) {
        return win.parent;
    } else {
        return void 0;
    }
}, "getSdkTarget");
var isMobileSdkTarget = /* @__PURE__ */ __name(function(win) {
    try {
        return _optionalChain([
            win,
            'access',
            function(_) {
                return _.ReactNativeWebView;
            },
            'optionalAccess',
            function(_2) {
                return _2.postMessage;
            }
        ]) !== void 0;
    } catch (e2) {
        return false;
    }
}, "isMobileSdkTarget");
var broadcastPostMessage = /* @__PURE__ */ __name(function(win, eventName) {
    var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref_allowedOrigin = _ref.allowedOrigin, allowedOrigin = _ref_allowedOrigin === void 0 ? "*" : _ref_allowedOrigin, data = _ref.data;
    var message = formatPostMessage(eventName, data);
    win.postMessage(message, allowedOrigin);
}, "broadcastPostMessage");
var parsePostMessage = /* @__PURE__ */ __name(function(data) {
    try {
        return JSON.parse(data);
    } catch (e3) {
        return {
            eventName: data
        };
    }
}, "parsePostMessage");
var formatPostMessage = /* @__PURE__ */ __name(function(eventName, data) {
    if (data) {
        return JSON.stringify({
            eventName: eventName,
            data: data
        });
    }
    return eventName;
}, "formatPostMessage");
// src/utils/CoinbasePixel.ts
var PopupSizes = {
    signin: {
        width: 460,
        height: 730
    },
    widget: {
        width: 430,
        height: 600
    }
};
var CoinbasePixel = function CoinbasePixel(param) {
    var _this = this;
    var _param_host = param.host, host = _param_host === void 0 ? DEFAULT_HOST : _param_host, appId = param.appId, appParams = param.appParams, debug = param.debug, theme = param.theme;
    var _this1 = this;
    _class_call_check(this, CoinbasePixel);
    __publicField(this, "debug");
    __publicField(this, "host");
    __publicField(this, "appId");
    __publicField(this, "eventStreamListeners", {});
    __publicField(this, "unsubs", []);
    __publicField(this, "appParams");
    __publicField(this, "removeEventListener");
    __publicField(this, "theme");
    /** Opens the CB Pay experience */ __publicField(this, "openExperience", /* @__PURE__ */ __name(function(options) {
        _this.log("Attempting to open experience");
        _this.setupExperienceListeners(options);
        var experienceLoggedIn = options.experienceLoggedIn, experienceLoggedOut = options.experienceLoggedOut, embeddedContentStyles = options.embeddedContentStyles;
        var experience = experienceLoggedOut || experienceLoggedIn;
        var url = "";
        if (options.path === "/v3/sell") {
            url = generateOffRampURL(_object_spread({
                appId: _this.appId,
                host: _this.host,
                theme: _nullishCoalesce(_this.theme, function() {
                    return void 0;
                })
            }, _this.appParams));
        } else {
            url = generateOnRampURL(_object_spread({
                appId: _this.appId,
                host: _this.host,
                theme: _nullishCoalesce(_this.theme, function() {
                    return void 0;
                })
            }, _this.appParams));
        }
        _this.log("Opening experience", {
            experience: experience
        });
        if (experience === "embedded") {
            _this.log("DEPRECATION WARNING: Two factor authentication does not work in an iframe, so the embedded experience should not be used. It will be removed in a future release");
            var openEmbeddedExperience = /* @__PURE__ */ __name(function() {
                var embedded = createEmbeddedContent(_object_spread({
                    url: url
                }, embeddedContentStyles));
                if (_optionalChain([
                    embeddedContentStyles,
                    'optionalAccess',
                    function(_3) {
                        return _3.target;
                    }
                ])) {
                    _optionalChain([
                        document,
                        'access',
                        function(_4) {
                            return _4.querySelector;
                        },
                        'call',
                        function(_5) {
                            return _5(_optionalChain([
                                embeddedContentStyles,
                                'optionalAccess',
                                function(_6) {
                                    return _6.target;
                                }
                            ]));
                        },
                        'optionalAccess',
                        function(_7) {
                            return _7.replaceChildren;
                        },
                        'call',
                        function(_8) {
                            return _8(embedded);
                        }
                    ]);
                } else {
                    document.body.appendChild(embedded);
                }
            }, "openEmbeddedExperience");
            _this.startDirectSignin(openEmbeddedExperience);
        } else if (experience === "popup" && _optionalChain([
            window,
            'access',
            function(_9) {
                return _9.chrome;
            },
            'optionalAccess',
            function(_10) {
                return _10.windows;
            },
            'optionalAccess',
            function(_11) {
                return _11.create;
            }
        ])) {
            void window.chrome.windows.create({
                url: url,
                setSelfAsOpener: true,
                type: "popup",
                focused: true,
                width: PopupSizes.signin.width,
                height: PopupSizes.signin.height,
                left: window.screenLeft - PopupSizes.signin.width - 10,
                top: window.screenTop
            }, function(winRef) {
                var onOpenCallback = /* @__PURE__ */ __name(function() {
                    if (_optionalChain([
                        winRef,
                        'optionalAccess',
                        function(_12) {
                            return _12.id;
                        }
                    ])) {
                        chrome.windows.update(winRef.id, {
                            width: PopupSizes.widget.width,
                            height: PopupSizes.widget.height,
                            left: window.screenLeft - PopupSizes.widget.width - 10,
                            top: window.screenTop
                        });
                        _this.removeEventStreamListener("open", onOpenCallback);
                    }
                }, "onOpenCallback");
                _this.addEventStreamListener("open", onOpenCallback);
            });
        } else if (experience === "new_tab" && _optionalChain([
            window,
            'access',
            function(_13) {
                return _13.chrome;
            },
            'optionalAccess',
            function(_14) {
                return _14.tabs;
            },
            'optionalAccess',
            function(_15) {
                return _15.create;
            }
        ])) {
            void window.chrome.tabs.create({
                url: url
            });
        } else {
            openWindow(url, experience);
        }
    }, "openExperience"));
    __publicField(this, "endExperience", /* @__PURE__ */ __name(function() {
        _optionalChain([
            document,
            'access',
            function(_16) {
                return _16.getElementById;
            },
            'call',
            function(_17) {
                return _17(EMBEDDED_IFRAME_ID);
            },
            'optionalAccess',
            function(_18) {
                return _18.remove;
            },
            'call',
            function(_19) {
                return _19();
            }
        ]);
    }, "endExperience"));
    __publicField(this, "destroy", /* @__PURE__ */ __name(function() {
        _this.unsubs.forEach(function(unsub) {
            return unsub();
        });
    }, "destroy"));
    __publicField(this, "setupExperienceListeners", /* @__PURE__ */ __name(function(param) {
        var onSuccess = param.onSuccess, onExit = param.onExit, onEvent = param.onEvent, onRequestedUrl = param.onRequestedUrl;
        if (_this.removeEventListener) {
            _this.removeEventListener();
        }
        _this.removeEventListener = _this.onMessage("event", {
            shouldUnsubscribe: false,
            onMessage: function(data) {
                var metadata = data;
                _optionalChain([
                    _this,
                    'access',
                    function(_20) {
                        return _20.eventStreamListeners;
                    },
                    'access',
                    function(_21) {
                        return _21[metadata.eventName];
                    },
                    'optionalAccess',
                    function(_22) {
                        return _22.forEach;
                    },
                    'call',
                    function(_23) {
                        return _23(function(cb) {
                            return _optionalChain([
                                cb,
                                'optionalCall',
                                function(_24) {
                                    return _24();
                                }
                            ]);
                        });
                    }
                ]);
                if (metadata.eventName === "success") {
                    _optionalChain([
                        onSuccess,
                        'optionalCall',
                        function(_25) {
                            return _25();
                        }
                    ]);
                }
                if (metadata.eventName === "exit") {
                    _optionalChain([
                        onExit,
                        'optionalCall',
                        function(_26) {
                            return _26(metadata.error);
                        }
                    ]);
                }
                if (metadata.eventName === "request_open_url") {
                    _optionalChain([
                        onRequestedUrl,
                        'optionalCall',
                        function(_27) {
                            return _27(metadata.url);
                        }
                    ]);
                }
                _optionalChain([
                    onEvent,
                    'optionalCall',
                    function(_28) {
                        return _28(data);
                    }
                ]);
            }
        });
    }, "setupExperienceListeners"));
    __publicField(this, "startDirectSignin", /* @__PURE__ */ __name(function(callback) {
        var queryParams = new URLSearchParams();
        queryParams.set("appId", _this.appId);
        queryParams.set("type", "direct");
        var directSigninUrl = "".concat(_this.host, "/signin?").concat(queryParams.toString());
        var signinWinRef = openWindow(directSigninUrl, "popup");
        _this.onMessage("signin_success", {
            onMessage: function() {
                _optionalChain([
                    signinWinRef,
                    'optionalAccess',
                    function(_29) {
                        return _29.close;
                    },
                    'call',
                    function(_30) {
                        return _30();
                    }
                ]);
                callback();
            }
        });
    }, "startDirectSignin"));
    __publicField(this, "addEventStreamListener", /* @__PURE__ */ __name(function(name, cb) {
        if (_this.eventStreamListeners[name]) {
            _optionalChain([
                _this,
                'access',
                function(_31) {
                    return _31.eventStreamListeners;
                },
                'access',
                function(_32) {
                    return _32[name];
                },
                'optionalAccess',
                function(_33) {
                    return _33.push;
                },
                'call',
                function(_34) {
                    return _34(cb);
                }
            ]);
        } else {
            _this.eventStreamListeners[name] = [
                cb
            ];
        }
    }, "addEventStreamListener"));
    __publicField(this, "removeEventStreamListener", /* @__PURE__ */ __name(function(name, callback) {
        if (_this.eventStreamListeners[name]) {
            var filteredListeners = _optionalChain([
                _this,
                'access',
                function(_35) {
                    return _35.eventStreamListeners;
                },
                'access',
                function(_36) {
                    return _36[name];
                },
                'optionalAccess',
                function(_37) {
                    return _37.filter;
                },
                'call',
                function(_38) {
                    return _38(function(cb) {
                        return cb !== callback;
                    });
                }
            ]);
            _this.eventStreamListeners[name] = filteredListeners;
        }
    }, "removeEventStreamListener"));
    __publicField(this, "onMessage", /* @__PURE__ */ __name(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var unsubFxn = onBroadcastedPostMessage(args[0], _object_spread({
            allowedOrigin: _this1.host
        }, args[1]));
        _this1.unsubs.push(unsubFxn);
        return unsubFxn;
    }, "onMessage"));
    __publicField(this, "log", /* @__PURE__ */ __name(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (_this1.debug) {
            var _console;
            (_console = console).log.apply(_console, [
                "[CBPAY]"
            ].concat(_to_consumable_array(args)));
        }
    }, "log"));
    this.host = host;
    this.appId = appId;
    this.appParams = appParams;
    this.debug = debug || false;
    this.theme = theme;
};
__name(CoinbasePixel, "CoinbasePixel");
function openWindow(url, experience) {
    return window.open(url, "Coinbase", experience === "popup" ? "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, height=".concat(PopupSizes.signin.height, ",width=").concat(PopupSizes.signin.width) : void 0);
}
__name(openWindow, "openWindow");
// src/utils/CBPayInstance.ts
var widgetRoutes = {
    buy: "/buy",
    checkout: "/checkout",
    sell: "/v3/sell"
};
var CBPayInstance = function CBPayInstance(options) {
    var _this = this;
    _class_call_check(this, CBPayInstance);
    __publicField(this, "pixel");
    __publicField(this, "options");
    __publicField(this, "open", /* @__PURE__ */ __name(function() {
        var _this_options = _this.options, widget = _this_options.widget, experienceLoggedIn = _this_options.experienceLoggedIn, experienceLoggedOut = _this_options.experienceLoggedOut, embeddedContentStyles = _this_options.embeddedContentStyles, onExit = _this_options.onExit, onSuccess = _this_options.onSuccess, onEvent = _this_options.onEvent, onRequestedUrl = _this_options.onRequestedUrl, closeOnSuccess = _this_options.closeOnSuccess, closeOnExit = _this_options.closeOnExit;
        _this.pixel.openExperience({
            path: widgetRoutes[widget],
            experienceLoggedIn: experienceLoggedIn,
            experienceLoggedOut: experienceLoggedOut,
            embeddedContentStyles: embeddedContentStyles,
            onExit: function() {
                _optionalChain([
                    onExit,
                    'optionalCall',
                    function(_39) {
                        return _39();
                    }
                ]);
                if (closeOnExit) {
                    _this.pixel.endExperience();
                }
            },
            onSuccess: function() {
                _optionalChain([
                    onSuccess,
                    'optionalCall',
                    function(_40) {
                        return _40();
                    }
                ]);
                if (closeOnSuccess) {
                    _this.pixel.endExperience();
                }
            },
            onRequestedUrl: onRequestedUrl,
            onEvent: onEvent
        });
    }, "open"));
    __publicField(this, "destroy", /* @__PURE__ */ __name(function() {
        _this.pixel.destroy();
    }, "destroy"));
    this.options = options;
    this.pixel = new CoinbasePixel(_object_spread_props(_object_spread({}, options), {
        appParams: _object_spread({
            widget: options.widget
        }, options.appParams)
    }));
    if (options.target) {
        var targetElement = document.querySelector(options.target);
        if (targetElement) {
            targetElement.addEventListener("click", this.open);
        }
    }
};
__name(CBPayInstance, "CBPayInstance");
// src/onramp/initOnRamp.ts
var initOnRamp = /* @__PURE__ */ __name(function(_param, callback) {
    var _param_experienceLoggedIn = _param.experienceLoggedIn, experienceLoggedIn = _param_experienceLoggedIn === void 0 ? "new_tab" : _param_experienceLoggedIn, widgetParameters = _param.widgetParameters, options = _object_without_properties(_param, [
        "experienceLoggedIn",
        "widgetParameters"
    ]);
    var instance = new CBPayInstance(_object_spread_props(_object_spread({}, options), {
        widget: "buy",
        experienceLoggedIn: experienceLoggedIn,
        appParams: widgetParameters
    }));
    callback(null, instance);
}, "initOnRamp");
// src/utils/events.ts
function broadcastEvent(sdkTarget, event) {
    broadcastPostMessage(sdkTarget, "event", {
        data: event
    });
}
__name(broadcastEvent, "broadcastEvent");
exports.CBPayInstance = CBPayInstance;
exports.broadcastEvent = broadcastEvent;
exports.broadcastPostMessage = broadcastPostMessage;
exports.generateOffRampURL = generateOffRampURL;
exports.generateOnRampURL = generateOnRampURL;
exports.getSdkTarget = getSdkTarget;
exports.initOnRamp = initOnRamp;
exports.onBroadcastedPostMessage = onBroadcastedPostMessage;
//# sourceMappingURL=index.js.map