"use strict";
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpinalAPI = exports.API_MODE = void 0;
const axios_1 = __importDefault(require("axios"));
var API_MODE;
(function (API_MODE) {
    API_MODE[API_MODE["BOS_APP"] = 0] = "BOS_APP";
    API_MODE[API_MODE["PAM_APP"] = 1] = "PAM_APP";
})(API_MODE || (exports.API_MODE = API_MODE = {}));
/** Résolution d’une variable d’environnement depuis le projet consommateur. */
function resolveEnv(key) {
    // Node / Webpack / CRA / Next (server)
    const fromProcess = typeof process !== "undefined" && process.env
        ? process.env[key]
        : undefined;
    // Global ad hoc (optionnel)
    const fromGlobal = typeof globalThis !== "undefined" &&
        globalThis[key] !== undefined
        ? String(globalThis[key])
        : undefined;
    return fromProcess !== null && fromProcess !== void 0 ? fromProcess : fromGlobal;
}
function safeWindow() {
    return typeof window !== "undefined" ? window : undefined;
}
function safeLocalStorage() {
    if (typeof window === "undefined")
        return undefined;
    try {
        return window.localStorage;
    }
    catch (_a) {
        return undefined;
    }
}
class SpinalAPI {
    /** Permet d’injecter un autre "window" (ex: iframe) si besoin. */
    static setHook(w) {
        SpinalAPI.instanceParent = w !== null && w !== void 0 ? w : {};
    }
    setApiMode(mode) {
        this.api_mode = mode;
    }
    /** Getter normalisé (toujours un trailing slash si baseURL non vide) */
    get apiUrl() {
        if (!this.baseURL)
            return "";
        return `${this.baseURL}${this.baseURL.endsWith("/") ? "" : "/"}`;
    }
    constructor(_apiUrl, axiosConfig) {
        this.api_mode = API_MODE.BOS_APP;
        // Méthodes HTTP
        this.get = (url, config) => this.axiosInstance.get(url, config);
        this.post = (url, data, config) => this.axiosInstance.post(url, data, config);
        this.put = (url, data, config) => this.axiosInstance.put(url, data, config);
        this.delete = (url, config) => this.axiosInstance.delete(url, config);
        this.baseURL = _apiUrl !== null && _apiUrl !== void 0 ? _apiUrl : "";
        // Crée l’instance axios ici (et pas en field initializer)
        this.axiosInstance = axios_1.default.create(Object.assign({ baseURL: this.apiUrl || undefined }, axiosConfig));
        // Interceptor de token – garde SSR
        this.axiosInstance.interceptors.request.use((request) => {
            var _a;
            const ls = safeLocalStorage();
            const t = ls === null || ls === void 0 ? void 0 : ls.getItem("token");
            if (t) {
                // @ts-ignore
                request.headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
                request.headers.Authorization = `Bearer ${t}`;
            }
            return request;
        });
    }
    /**
     * @param apiUrl URL explicite (prioritaire). Si omis, on lit l’ENV du projet consommateur :
     *  - SPINAL_API_URL
     *  - (fallbacks) VITE_SPINAL_API_URL / NEXT_PUBLIC_SPINAL_API_URL / PUBLIC_SPINAL_API_URL
     */
    static getInstance(apiUrl, axiosConfig) {
        var _a, _b, _c, _d, _e;
        // Recyclage du singleton si déjà créé
        const parent = SpinalAPI.instanceParent;
        if (parent.spinalApi) {
            // possibilité de mettre à jour la baseURL dynamiquement
            if (apiUrl)
                parent.spinalApi.setBaseURL(apiUrl);
            return parent.spinalApi;
        }
        // Lecture ENV du projet consommateur
        let url = apiUrl || resolveEnv("SPINAL_API_URL");
        // Gestion "tablette" via query ?istablette=1 -> bascule sur SPINAL_TABLETTE_URL
        const w = safeWindow();
        if (w) {
            const urlParams = new URLSearchParams((_b = (_a = w.location) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : "");
            const istab = urlParams.get("istablette");
            if (istab) {
                url =
                    (_e = (_d = (_c = resolveEnv("SPINAL_TABLETTE_URL")) !== null && _c !== void 0 ? _c : resolveEnv("VITE_SPINAL_TABLETTE_URL")) !== null && _d !== void 0 ? _d : resolveEnv("NEXT_PUBLIC_SPINAL_TABLETTE_URL")) !== null && _e !== void 0 ? _e : url;
            }
        }
        parent.spinalApi = new SpinalAPI(url, axiosConfig);
        return parent.spinalApi;
    }
    /** Permet de changer la baseURL à chaud (ex : multi-tenant) */
    setBaseURL(url) {
        this.baseURL = url !== null && url !== void 0 ? url : "";
        // Répercute sur axios
        this.axiosInstance.defaults.baseURL = this.apiUrl || undefined;
    }
    createUrl(apiRoute) {
        if (apiRoute.startsWith("/"))
            apiRoute = apiRoute.substring(1);
        if (!this.apiUrl)
            return "/" + apiRoute;
        return this.apiUrl + apiRoute;
    }
    createUrlWithPlatformId(buildingId, apiRoute) {
        if (this.api_mode === API_MODE.BOS_APP)
            return this.createUrl(apiRoute);
        if (apiRoute.startsWith("/"))
            apiRoute = apiRoute.substring(1);
        return `${this.apiUrl}api/v2/building/${buildingId}${apiRoute}`;
    }
    createIteratorCall(fct, ...args) {
        return __asyncGenerator(this, arguments, function* createIteratorCall_1() {
            const res = yield __await(fct(...args));
            while (true) {
                yield yield __await(res);
            }
        });
    }
}
exports.SpinalAPI = SpinalAPI;
SpinalAPI.instanceParent = (_a = safeWindow()) !== null && _a !== void 0 ? _a : {};
//# sourceMappingURL=spinalAPI.js.map