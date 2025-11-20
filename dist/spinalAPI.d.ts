import { AxiosRequestConfig } from "axios";
interface SpinalWindow extends Window {
    spinalApi?: SpinalAPI;
}
export declare enum API_MODE {
    BOS_APP = 0,
    PAM_APP = 1
}
export declare class SpinalAPI {
    private static instanceParent;
    private axiosInstance;
    private baseURL;
    api_mode: API_MODE;
    /** Permet d’injecter un autre "window" (ex: iframe) si besoin. */
    static setHook(w: SpinalWindow): void;
    setApiMode(mode: API_MODE): void;
    /** Getter normalisé (toujours un trailing slash si baseURL non vide) */
    get apiUrl(): string;
    private constructor();
    /**
     * @param apiUrl URL explicite (prioritaire). Si omis, on lit l’ENV du projet consommateur :
     *  - SPINAL_API_URL
     *  - (fallbacks) VITE_SPINAL_API_URL / NEXT_PUBLIC_SPINAL_API_URL / PUBLIC_SPINAL_API_URL
     */
    static getInstance(apiUrl?: string, axiosConfig?: AxiosRequestConfig): SpinalAPI;
    /** Permet de changer la baseURL à chaud (ex : multi-tenant) */
    setBaseURL(url?: string): void;
    createUrl(apiRoute: string): string;
    createUrlWithPlatformId(buildingId: string, apiRoute: string): string;
    get: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<T, any, {}>>;
    post: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<T, any, {}>>;
    put: <T = any>(url: string, data?: any, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<T, any, {}>>;
    delete: <T = any>(url: string, config?: AxiosRequestConfig) => Promise<import("axios").AxiosResponse<T, any, {}>>;
    createIteratorCall<K extends (...args: any[]) => any>(fct: K, ...args: Parameters<K>): AsyncGenerator<Awaited<ReturnType<K>>>;
}
export {};
//# sourceMappingURL=spinalAPI.d.ts.map