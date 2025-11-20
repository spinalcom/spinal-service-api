import axios from "axios";
export var API_MODE;
(function (API_MODE) {
    API_MODE[API_MODE["BOS_APP"] = 0] = "BOS_APP";
    API_MODE[API_MODE["PAM_APP"] = 1] = "PAM_APP";
})(API_MODE || (API_MODE = {}));
/** Résolution d’une variable d’environnement depuis le projet consommateur. */
function resolveEnv(key) {
    // Node / Webpack / CRA / Next (server)
    const fromProcess = typeof process !== "undefined" && process.env
        ? process.env[key]
        : undefined;
    // Vite / Astro (client)
    const fromImportMeta = typeof import.meta !== "undefined" &&
        import.meta.env &&
        import.meta.env[key];
    // Vite variables publiques usuelles (fallback ergonomique)
    const vitePublic = typeof import.meta !== "undefined" &&
        import.meta.env &&
        (import.meta.env["VITE_" + key] ||
            import.meta.env["PUBLIC_" + key]);
    // Next.js côté client (variables publiques)
    const nextPublic = typeof process !== "undefined" &&
        process.env &&
        (process.env["NEXT_PUBLIC_" + key] ||
            process.env["PUBLIC_" + key]);
    // Global ad hoc (optionnel)
    const fromGlobal = typeof globalThis !== "undefined" &&
        globalThis[key] !== undefined
        ? String(globalThis[key])
        : undefined;
    return fromProcess ?? fromImportMeta ?? vitePublic ?? nextPublic ?? fromGlobal;
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
    catch {
        return undefined;
    }
}
export class SpinalAPI {
    /** Permet d’injecter un autre "window" (ex: iframe) si besoin. */
    static setHook(w) {
        SpinalAPI.instanceParent = w ?? {};
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
        this.baseURL = _apiUrl ?? "";
        // Crée l’instance axios ici (et pas en field initializer)
        this.axiosInstance = axios.create({
            baseURL: this.apiUrl || undefined,
            ...axiosConfig,
        });
        // Interceptor de token – garde SSR
        this.axiosInstance.interceptors.request.use((request) => {
            const ls = safeLocalStorage();
            const t = ls?.getItem("token");
            if (t) {
                request.headers = request.headers ?? {};
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
            const urlParams = new URLSearchParams(w.location?.search ?? "");
            const istab = urlParams.get("istablette");
            if (istab) {
                url =
                    resolveEnv("SPINAL_TABLETTE_URL") ??
                        resolveEnv("VITE_SPINAL_TABLETTE_URL") ??
                        resolveEnv("NEXT_PUBLIC_SPINAL_TABLETTE_URL") ??
                        url;
            }
        }
        parent.spinalApi = new SpinalAPI(url, axiosConfig);
        return parent.spinalApi;
    }
    /** Permet de changer la baseURL à chaud (ex : multi-tenant) */
    setBaseURL(url) {
        this.baseURL = url ?? "";
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
    async *createIteratorCall(fct, ...args) {
        const res = await fct(...args);
        while (true) {
            yield res;
        }
    }
}
SpinalAPI.instanceParent = safeWindow() ?? {};
