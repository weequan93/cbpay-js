var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// src/config.ts
var DEFAULT_HOST = "https://pay.coinbase.com";

// src/onramp/generateOnRampURL.ts
var generateOnRampURL = /* @__PURE__ */ __name(({ host = DEFAULT_HOST, ...props }) => {
  const url = new URL(host);
  url.pathname = "/buy/select-asset";
  if (props.destinationWallets && props.addresses) {
    throw new Error("Only one of destinationWallets or addresses can be provided");
  } else if (!props.destinationWallets && !props.addresses) {
    throw new Error("One of destinationWallets or addresses must be provided");
  }
  Object.keys(props).forEach((key) => {
    const value = props[key];
    if (value !== void 0) {
      if ([
        "string",
        "number",
        "boolean"
      ].includes(typeof value)) {
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
var generateOffRampURL = /* @__PURE__ */ __name(({ host = DEFAULT_HOST, ...props }) => {
  const url = new URL(host);
  url.pathname = "/v3/sell/input";
  Object.keys(props).forEach((key) => {
    const value = props[key];
    if (value !== void 0) {
      if ([
        "string",
        "number",
        "boolean"
      ].includes(typeof value)) {
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
var createEmbeddedContent = /* @__PURE__ */ __name(({ url, width = "100%", height = "100%", position = "fixed", top = "0px" }) => {
  const iframe = document.createElement("iframe");
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
var onBroadcastedPostMessage = /* @__PURE__ */ __name((messageCode, { onMessage: callback, shouldUnsubscribe = true, allowedOrigin, onValidateOrigin = /* @__PURE__ */ __name(() => Promise.resolve(true), "onValidateOrigin") }) => {
  const onMessage = /* @__PURE__ */ __name((e) => {
    const { eventName, data } = parsePostMessage(e.data);
    const isOriginAllowed = !allowedOrigin || e.origin === allowedOrigin;
    if (eventName === messageCode) {
      void (async () => {
        if (isOriginAllowed && await onValidateOrigin(e.origin)) {
          callback(data);
          if (shouldUnsubscribe) {
            window.removeEventListener("message", onMessage);
          }
        }
      })();
    }
  }, "onMessage");
  window.addEventListener("message", onMessage);
  return () => {
    window.removeEventListener("message", onMessage);
  };
}, "onBroadcastedPostMessage");
var getSdkTarget = /* @__PURE__ */ __name((win) => {
  if (win !== window) {
    return win;
  } else if (isMobileSdkTarget(win)) {
    return {
      postMessage: (message) => win.ReactNativeWebView.postMessage(message)
    };
  } else if (win.opener) {
    return win.opener;
  } else if (win.parent !== win.self) {
    return win.parent;
  } else {
    return void 0;
  }
}, "getSdkTarget");
var isMobileSdkTarget = /* @__PURE__ */ __name((win) => {
  try {
    return win.ReactNativeWebView?.postMessage !== void 0;
  } catch {
    return false;
  }
}, "isMobileSdkTarget");
var broadcastPostMessage = /* @__PURE__ */ __name((win, eventName, { allowedOrigin = "*", data } = {}) => {
  const message = formatPostMessage(eventName, data);
  win.postMessage(message, allowedOrigin);
}, "broadcastPostMessage");
var parsePostMessage = /* @__PURE__ */ __name((data) => {
  try {
    return JSON.parse(data);
  } catch {
    return {
      eventName: data
    };
  }
}, "parsePostMessage");
var formatPostMessage = /* @__PURE__ */ __name((eventName, data) => {
  if (data) {
    return JSON.stringify({
      eventName,
      data
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
var CoinbasePixel = class {
  constructor({ host = DEFAULT_HOST, appId, appParams, debug, theme }) {
    __publicField(this, "debug");
    __publicField(this, "host");
    __publicField(this, "appId");
    __publicField(this, "eventStreamListeners", {});
    __publicField(this, "unsubs", []);
    __publicField(this, "appParams");
    __publicField(this, "removeEventListener");
    __publicField(this, "theme");
    /** Opens the CB Pay experience */
    __publicField(this, "openExperience", /* @__PURE__ */ __name((options) => {
      this.log("Attempting to open experience");
      this.setupExperienceListeners(options);
      const { experienceLoggedIn, experienceLoggedOut, embeddedContentStyles } = options;
      const experience = experienceLoggedOut || experienceLoggedIn;
      let url = "";
      if (options.path === "/v3/sell") {
        url = generateOffRampURL({
          appId: this.appId,
          host: this.host,
          theme: this.theme ?? void 0,
          ...this.appParams
        });
      } else {
        url = generateOnRampURL({
          appId: this.appId,
          host: this.host,
          theme: this.theme ?? void 0,
          ...this.appParams
        });
      }
      this.log("Opening experience", {
        experience
      });
      if (experience === "embedded") {
        this.log("DEPRECATION WARNING: Two factor authentication does not work in an iframe, so the embedded experience should not be used. It will be removed in a future release");
        const openEmbeddedExperience = /* @__PURE__ */ __name(() => {
          const embedded = createEmbeddedContent({
            url,
            ...embeddedContentStyles
          });
          if (embeddedContentStyles?.target) {
            document.querySelector(embeddedContentStyles?.target)?.replaceChildren(embedded);
          } else {
            document.body.appendChild(embedded);
          }
        }, "openEmbeddedExperience");
        this.startDirectSignin(openEmbeddedExperience);
      } else if (experience === "popup" && window.chrome?.windows?.create) {
        void window.chrome.windows.create({
          url,
          setSelfAsOpener: true,
          type: "popup",
          focused: true,
          width: PopupSizes.signin.width,
          height: PopupSizes.signin.height,
          left: window.screenLeft - PopupSizes.signin.width - 10,
          top: window.screenTop
        }, (winRef) => {
          const onOpenCallback = /* @__PURE__ */ __name(() => {
            if (winRef?.id) {
              chrome.windows.update(winRef.id, {
                width: PopupSizes.widget.width,
                height: PopupSizes.widget.height,
                left: window.screenLeft - PopupSizes.widget.width - 10,
                top: window.screenTop
              });
              this.removeEventStreamListener("open", onOpenCallback);
            }
          }, "onOpenCallback");
          this.addEventStreamListener("open", onOpenCallback);
        });
      } else if (experience === "new_tab" && window.chrome?.tabs?.create) {
        void window.chrome.tabs.create({
          url
        });
      } else {
        openWindow(url, experience);
      }
    }, "openExperience"));
    __publicField(this, "endExperience", /* @__PURE__ */ __name(() => {
      document.getElementById(EMBEDDED_IFRAME_ID)?.remove();
    }, "endExperience"));
    __publicField(this, "destroy", /* @__PURE__ */ __name(() => {
      this.unsubs.forEach((unsub) => unsub());
    }, "destroy"));
    __publicField(this, "setupExperienceListeners", /* @__PURE__ */ __name(({ onSuccess, onExit, onEvent, onRequestedUrl }) => {
      if (this.removeEventListener) {
        this.removeEventListener();
      }
      this.removeEventListener = this.onMessage("event", {
        shouldUnsubscribe: false,
        onMessage: (data) => {
          const metadata = data;
          this.eventStreamListeners[metadata.eventName]?.forEach((cb) => cb?.());
          if (metadata.eventName === "success") {
            onSuccess?.();
          }
          if (metadata.eventName === "exit") {
            onExit?.(metadata.error);
          }
          if (metadata.eventName === "request_open_url") {
            onRequestedUrl?.(metadata.url);
          }
          onEvent?.(data);
        }
      });
    }, "setupExperienceListeners"));
    __publicField(this, "startDirectSignin", /* @__PURE__ */ __name((callback) => {
      const queryParams = new URLSearchParams();
      queryParams.set("appId", this.appId);
      queryParams.set("type", "direct");
      const directSigninUrl = `${this.host}/signin?${queryParams.toString()}`;
      const signinWinRef = openWindow(directSigninUrl, "popup");
      this.onMessage("signin_success", {
        onMessage: () => {
          signinWinRef?.close();
          callback();
        }
      });
    }, "startDirectSignin"));
    __publicField(this, "addEventStreamListener", /* @__PURE__ */ __name((name, cb) => {
      if (this.eventStreamListeners[name]) {
        this.eventStreamListeners[name]?.push(cb);
      } else {
        this.eventStreamListeners[name] = [
          cb
        ];
      }
    }, "addEventStreamListener"));
    __publicField(this, "removeEventStreamListener", /* @__PURE__ */ __name((name, callback) => {
      if (this.eventStreamListeners[name]) {
        const filteredListeners = this.eventStreamListeners[name]?.filter((cb) => cb !== callback);
        this.eventStreamListeners[name] = filteredListeners;
      }
    }, "removeEventStreamListener"));
    __publicField(this, "onMessage", /* @__PURE__ */ __name((...args) => {
      const unsubFxn = onBroadcastedPostMessage(args[0], {
        allowedOrigin: this.host,
        ...args[1]
      });
      this.unsubs.push(unsubFxn);
      return unsubFxn;
    }, "onMessage"));
    __publicField(this, "log", /* @__PURE__ */ __name((...args) => {
      if (this.debug) {
        console.log("[CBPAY]", ...args);
      }
    }, "log"));
    this.host = host;
    this.appId = appId;
    this.appParams = appParams;
    this.debug = debug || false;
    this.theme = theme;
  }
};
__name(CoinbasePixel, "CoinbasePixel");
function openWindow(url, experience) {
  return window.open(url, "Coinbase", experience === "popup" ? `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, height=${PopupSizes.signin.height},width=${PopupSizes.signin.width}` : void 0);
}
__name(openWindow, "openWindow");

// src/utils/CBPayInstance.ts
var widgetRoutes = {
  buy: "/buy",
  checkout: "/checkout",
  sell: "/v3/sell"
};
var CBPayInstance = class {
  constructor(options) {
    __publicField(this, "pixel");
    __publicField(this, "options");
    __publicField(this, "open", /* @__PURE__ */ __name(() => {
      const { widget, experienceLoggedIn, experienceLoggedOut, embeddedContentStyles, onExit, onSuccess, onEvent, onRequestedUrl, closeOnSuccess, closeOnExit } = this.options;
      this.pixel.openExperience({
        path: widgetRoutes[widget],
        experienceLoggedIn,
        experienceLoggedOut,
        embeddedContentStyles,
        onExit: () => {
          onExit?.();
          if (closeOnExit) {
            this.pixel.endExperience();
          }
        },
        onSuccess: () => {
          onSuccess?.();
          if (closeOnSuccess) {
            this.pixel.endExperience();
          }
        },
        onRequestedUrl,
        onEvent
      });
    }, "open"));
    __publicField(this, "destroy", /* @__PURE__ */ __name(() => {
      this.pixel.destroy();
    }, "destroy"));
    this.options = options;
    this.pixel = new CoinbasePixel({
      ...options,
      appParams: {
        widget: options.widget,
        ...options.appParams
      }
    });
    if (options.target) {
      const targetElement = document.querySelector(options.target);
      if (targetElement) {
        targetElement.addEventListener("click", this.open);
      }
    }
  }
};
__name(CBPayInstance, "CBPayInstance");

// src/onramp/initOnRamp.ts
var initOnRamp = /* @__PURE__ */ __name(({ experienceLoggedIn = "new_tab", widgetParameters, ...options }, callback) => {
  const instance = new CBPayInstance({
    ...options,
    widget: "buy",
    experienceLoggedIn,
    appParams: widgetParameters
  });
  callback(null, instance);
}, "initOnRamp");

// src/utils/events.ts
function broadcastEvent(sdkTarget, event) {
  broadcastPostMessage(sdkTarget, "event", {
    data: event
  });
}
__name(broadcastEvent, "broadcastEvent");
export {
  CBPayInstance,
  broadcastEvent,
  broadcastPostMessage,
  generateOffRampURL,
  generateOnRampURL,
  getSdkTarget,
  initOnRamp,
  onBroadcastedPostMessage
};
//# sourceMappingURL=index.mjs.map