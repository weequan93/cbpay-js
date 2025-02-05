type DestinationWallet = {
    /**
     * Destination address where the purchased assets will be sent for the assets/networks listed in the other fields.
     */
    address: string;
    /**
     * List of networks enabled for the associated address. For any networks in this field, the user will be able to
     * buy/send any asset that is supported on this network.
     *
     * If you only want to support a subset of assets, leave this empty and use the assets field instead.
     */
    blockchains?: string[];
    /**
     * List of assets enabled for the associated address. If blockchains is non-empty, these assets will be available in
     * addition to all assets supported by the networks in the blockchains field. If blockchains is empty, only these
     * asset will be available.
     */
    assets?: string[];
    /**
     * Restrict the networks available for assets in the assets field. If the blockchains field is empty, only these
     * networks will be available. Otherwise these networks will be available in addition to the networks in blockchains.
     */
    supportedNetworks?: string[];
};
type OnRampExperience = 'buy' | 'send';
type BaseOnRampAppParams = {
    /**
     * @deprecated Please use the addresses and assets params instead. This parameter will be removed in a future release.
     *
     * This parameter controls which crypto assets your user will be able to buy/send, which wallet address their asset
     * will be delivered to, and which networks their assets will be delivered on. If this parameter is not provided, the
     * {addresses} param must be provided.
     *
     * Some common examples:
     *
     * Support all assets that are available for sending on the base network, only on the base network:
     *
     * `[{ address: "0x1", blockchains: ["base"] }]`
     *
     * Support only USDC on either the base network or the ethereum network:
     *
     * `[{ address: "0x1", assets: ["USDC"], supportedNetworks: ["base", "ethereum"] }]`
     *
     */
    destinationWallets?: DestinationWallet[];
    /**
     * The addresses parameter is a simpler way to provide the addresses customers funds should be delivered to. One of
     * either {addresses} or {destinationWallets} must be provided.
     *
     * Each entry in the record represents a wallet address and the networks it is valid for. There should only be a
     * single address for each network your app supports. Users will be able to buy/send any asset supported by any of
     * the networks you specify. See the assets param if you want to restrict the avaialable assets.
     *
     * Some common examples:
     *
     * Support all assets that are available for sending on the base network, only on the base network:
     *
     * `{ "0x1": ["base"] }`
     */
    addresses?: Record<string, string[]>;
    /**
     * This optional parameter will restrict the assets available for the user to buy/send. It acts as a filter on the
     * networks specified in the {addresses} param.
     *
     * Some common examples:
     *
     * Support only USDC on either the base network or the ethereum network:
     *
     * `addresses: { "0x1": ["base", "ethereum"] }, assets: ["USDC"]`
     *
     * The values in this list can either be asset symbols like BTC, ETH, or asset UUIDs that you can get from the Buy
     * Options API {@link https://docs.cdp.coinbase.com/onramp/docs/api-configurations/#buy-options}.
     */
    assets?: string[];
    /** The preset input amount as a crypto value. i.e. 0.1 ETH. This will be the initial default for all cryptocurrencies. */
    presetCryptoAmount?: number;
    /**
     * The preset input amount as a fiat value. i.e. 15 USD.
     * This will be the initial default for all cryptocurrencies. Ignored if presetCryptoAmount is also set.
     * Also note this only works for a subset of fiat currencies: USD, CAD, GBP, EUR
     * */
    presetFiatAmount?: number;
    /** The default network that should be selected when multiple networks are present. */
    defaultNetwork?: string;
    /** The default experience the user should see: either transfer funds from Coinbase (`'send'`) or buy them (`'buy'`). */
    defaultExperience?: OnRampExperience;
    handlingRequestedUrls?: boolean;
    /** ID used to link all user transactions created during the session. */
    partnerUserId?: string;
    /** A URL that the user will be automatically redirected to after a successful buy/send. The domain must match a domain
     * on the domain allowlist in Coinbase Developer Platform (https://portal.cdp.coinbase.com/products/onramp). */
    redirectUrl?: string;
};
type OnRampAggregatorAppParams = {
    quoteId: string;
    defaultAsset: string;
    defaultNetwork?: string;
    defaultPaymentMethod: string;
    presetFiatAmount: number;
    fiatCurrency: string;
};
type OnRampAppParams = BaseOnRampAppParams | (BaseOnRampAppParams & OnRampAggregatorAppParams);

type OpenEvent = {
    eventName: 'open';
    widgetName: string;
};
type TransitionViewEvent = {
    eventName: 'transition_view';
    pageRoute: string;
};
type PublicErrorEvent = {
    eventName: 'error';
    error: any;
};
type ExitEvent = {
    eventName: 'exit';
    error?: any;
};
type SuccessEvent = {
    eventName: 'success';
};
type RequestOpenUrlEvent = {
    eventName: 'request_open_url';
    url: string;
};
type EventMetadata = OpenEvent | TransitionViewEvent | PublicErrorEvent | ExitEvent | SuccessEvent | RequestOpenUrlEvent;

type WidgetType = 'buy' | 'checkout' | 'sell';
/**
 * Note: Two factor authentication does not work in an iframe, so the embedded experience should not be used. It will
 * be removed in a future release.
 */
type Experience = 'embedded' | 'popup' | 'new_tab';
type Theme = 'light' | 'dark';
type EmbeddedContentStyles = {
    target?: string;
    width?: string;
    height?: string;
    position?: string;
    top?: string;
};
type CBPayExperienceOptions<T> = {
    widgetParameters: T;
    target?: string;
    appId: string;
    host?: string;
    debug?: boolean;
    theme?: Theme;
    onExit?: (error?: Error) => void;
    onSuccess?: () => void;
    onEvent?: (event: EventMetadata) => void;
    onRequestedUrl?: (url: string) => void;
    closeOnExit?: boolean;
    closeOnSuccess?: boolean;
    embeddedContentStyles?: EmbeddedContentStyles;
    experienceLoggedIn?: Experience;
    experienceLoggedOut?: Experience;
};

type GenerateOnRampURLOptions = {
    /** This & destinationWallets or sessionToken are required. */
    appId?: string;
    host?: string;
    /** This or appId & destinationWallets are required. */
    sessionToken?: string;
    theme?: Theme;
} & OnRampAppParams;
declare const generateOnRampURL: ({ host, ...props }: GenerateOnRampURLOptions) => string;

type BaseOffRampAppParams = {
    /**
     *
     * Each entry in the record represents a wallet address and the networks it is valid for. There should only be a
     * single address for each network your app supports. Users will be able to cash out any owned assets supported by any of
     * the networks you specify. See the assets parameter if you want to restrict the available assets.
     *
     * Example:
     *
     * Show all assets users have on the base network, only on the base network:
     *
     * `{ "0x1": ["base"] }`
     *
     */
    addresses?: Record<string, string[]>;
    /** A URL that the user will be redirected to after to sign their transaction after the transaction has been committed. */
    redirectUrl?: string;
    /**
     * This optional parameter will restrict the assets available for the user to cash out. It acts as a filter on the
     * networks specified in the {addresses} param.
     *
     * Example:
     *
     * Support only USDC on either the base network or the ethereum network:
     *
     * `addresses: { "0x1": ["base", "ethereum"] }, assets: ["USDC"]`
     *
     */
    assets?: string[];
    /** The default network that should be selected when multiple networks are present. */
    defaultNetwork?: string;
    /** The preset input amount as a crypto value. i.e. 0.1 ETH. */
    presetCryptoAmount?: number;
    /**
     * The preset input amount as a fiat value. i.e. 15 USD.
     * Ignored if presetCryptoAmount is also set.
     * Also note this only works for a subset of fiat currencies: USD, CAD, GBP, EUR
     * */
    presetFiatAmount?: number;
    /** ID used to link all user transactions created during the session. */
    partnerUserId?: string;
};
type OffRampAggregatorAppParams = {
    quoteId?: string;
    defaultAsset?: string;
    defaultNetwork?: string;
    defaultCashoutMethod?: string;
    presetFiatAmount?: number;
    fiatCurrency?: string;
    disableEdit?: boolean;
};
type OffRampAppParams = BaseOffRampAppParams | (BaseOffRampAppParams & OffRampAggregatorAppParams);

type GenerateOffRampURLOptions = {
    /** This & addresses or sessionToken are required. */
    appId?: string;
    host?: string;
    theme?: Theme;
    /** This or appId & addresses are required. */
    sessionToken?: string;
} & OffRampAppParams;
declare const generateOffRampURL: ({ host, ...props }: GenerateOffRampURLOptions) => string;

/**
Matches a JSON object.
This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.
@category JSON
*/
type JsonObject = {
    [Key in string]?: JsonValue;
};
/**
Matches a JSON array.
@category JSON
*/
type JsonArray = JsonValue[];
/**
Matches any valid JSON primitive value.
@category JSON
*/
type JsonPrimitive = string | number | boolean | null;
/**
Matches any valid JSON value.
@see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.
@category JSON
*/
type JsonValue = JsonPrimitive | JsonObject | JsonArray;

type InternalExperienceOptions = Omit<CBPayExperienceOptions<JsonObject>, 'widgetParameters'> & {
    widget: WidgetType;
    experienceLoggedIn: Experience;
};
type CBPayInstanceConstructorArguments = {
    appParams: JsonObject;
} & InternalExperienceOptions;
interface CBPayInstanceType {
    open: () => void;
    destroy: () => void;
}
declare class CBPayInstance implements CBPayInstanceType {
    private pixel;
    private options;
    constructor(options: CBPayInstanceConstructorArguments);
    open: () => void;
    destroy: () => void;
}

type InitOnRampParams = CBPayExperienceOptions<OnRampAppParams>;
type InitOnRampCallback = {
    (error: Error, instance: null): void;
    (error: null, instance: CBPayInstanceType): void;
};
declare const initOnRamp: ({ experienceLoggedIn, widgetParameters, ...options }: InitOnRampParams, callback: InitOnRampCallback) => void;

declare enum MessageCodes {
    LaunchEmbedded = "launch_embedded",
    AppReady = "app_ready",
    AppParams = "app_params",
    SigninSuccess = "signin_success",
    Success = "success",
    Exit = "exit",
    Event = "event",
    Error = "error",
    PixelReady = "pixel_ready",
    OnAppParamsNonce = "on_app_params_nonce"
}
type MessageCode = `${MessageCodes}`;
type MessageData = JsonObject;
type PostMessageData = {
    eventName: MessageCode;
    data?: MessageData;
};
declare const onBroadcastedPostMessage: (messageCode: MessageCode, { onMessage: callback, shouldUnsubscribe, allowedOrigin, onValidateOrigin, }: {
    onMessage: (data?: MessageData) => void;
    shouldUnsubscribe?: boolean | undefined;
    allowedOrigin?: string | undefined;
    onValidateOrigin?: ((origin: string) => Promise<boolean>) | undefined;
}) => (() => void);
type SdkTarget = Window | {
    postMessage: typeof window.postMessage;
};
declare const getSdkTarget: (win: Window) => SdkTarget | undefined;
declare const broadcastPostMessage: (win: SdkTarget, eventName: MessageCode, { allowedOrigin, data }?: {
    allowedOrigin?: string | undefined;
    data?: JsonObject | undefined;
}) => void;

declare function broadcastEvent(sdkTarget: SdkTarget, event: EventMetadata): void;

export { CBPayInstance, CBPayInstanceType, InitOnRampParams, MessageCode, MessageData, PostMessageData, SdkTarget, broadcastEvent, broadcastPostMessage, generateOffRampURL, generateOnRampURL, getSdkTarget, initOnRamp, onBroadcastedPostMessage };
