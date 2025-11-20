import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface SpinalWindow extends Window {
  spinalApi?: SpinalAPI;
}

export enum API_MODE {
  BOS_APP,
  PAM_APP,
}

/** Résolution d’une variable d’environnement depuis le projet consommateur. */
function resolveEnv(key: string): string | undefined {
  // Node / Webpack / CRA / Next (server)
  const fromProcess =
    typeof process !== "undefined" && (process as any).env
      ? (process as any).env[key]
      : undefined;

  // Vite / Astro (client)
  const fromImportMeta =
    typeof import.meta !== "undefined" &&
    (import.meta as any).env &&
    (import.meta as any).env[key];

  // Vite variables publiques usuelles (fallback ergonomique)
  const vitePublic =
    typeof import.meta !== "undefined" &&
    (import.meta as any).env &&
    ((import.meta as any).env["VITE_" + key] ||
      (import.meta as any).env["PUBLIC_" + key]);

  // Next.js côté client (variables publiques)
  const nextPublic =
    typeof process !== "undefined" &&
    (process as any).env &&
    ((process as any).env["NEXT_PUBLIC_" + key] ||
      (process as any).env["PUBLIC_" + key]);

  // Global ad hoc (optionnel)
  const fromGlobal =
    typeof globalThis !== "undefined" &&
    (globalThis as any)[key] !== undefined
      ? String((globalThis as any)[key])
      : undefined;

  return fromProcess ?? fromImportMeta ?? vitePublic ?? nextPublic ?? fromGlobal;
}

function safeWindow(): SpinalWindow | undefined {
  return typeof window !== "undefined" ? (window as SpinalWindow) : undefined;
}
function safeLocalStorage(): Storage | undefined {
  if (typeof window === "undefined") return undefined;
  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}

export class SpinalAPI {
  private static instanceParent: SpinalWindow | { spinalApi?: SpinalAPI } =
    safeWindow() ?? {};
  private axiosInstance: AxiosInstance;
  private baseURL: string;
  api_mode = API_MODE.BOS_APP;

  /** Permet d’injecter un autre "window" (ex: iframe) si besoin. */
  public static setHook(w: SpinalWindow) {
    SpinalAPI.instanceParent = w ?? ({} as any);
  }

  public setApiMode(mode: API_MODE) {
    this.api_mode = mode;
  }

  /** Getter normalisé (toujours un trailing slash si baseURL non vide) */
  get apiUrl() {
    if (!this.baseURL) return "";
    return `${this.baseURL}${this.baseURL.endsWith("/") ? "" : "/"}`;
  }

  private constructor(_apiUrl?: string, axiosConfig?: AxiosRequestConfig) {
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
        (request.headers as any).Authorization = `Bearer ${t}`;
      }
      return request;
    });
  }

  /**
   * @param apiUrl URL explicite (prioritaire). Si omis, on lit l’ENV du projet consommateur :
   *  - SPINAL_API_URL
   *  - (fallbacks) VITE_SPINAL_API_URL / NEXT_PUBLIC_SPINAL_API_URL / PUBLIC_SPINAL_API_URL
   */
  public static getInstance(
    apiUrl?: string,
    axiosConfig?: AxiosRequestConfig
  ): SpinalAPI {
    // Recyclage du singleton si déjà créé
    const parent = SpinalAPI.instanceParent;
    if (parent.spinalApi) {
      // possibilité de mettre à jour la baseURL dynamiquement
      if (apiUrl) parent.spinalApi.setBaseURL(apiUrl);
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
  public setBaseURL(url?: string) {
    this.baseURL = url ?? "";
    // Répercute sur axios
    this.axiosInstance.defaults.baseURL = this.apiUrl || undefined;
  }

  public createUrl(apiRoute: string): string {
    if (apiRoute.startsWith("/")) apiRoute = apiRoute.substring(1);
    if (!this.apiUrl) return "/" + apiRoute;
    return this.apiUrl + apiRoute;
  }

  public createUrlWithPlatformId(buildingId: string, apiRoute: string): string {
    if (this.api_mode === API_MODE.BOS_APP) return this.createUrl(apiRoute);
    if (apiRoute.startsWith("/")) apiRoute = apiRoute.substring(1);
    return `${this.apiUrl}api/v2/building/${buildingId}${apiRoute}`;
  }

  // Méthodes HTTP
  public get = <T = any>(url: string, config?: AxiosRequestConfig) =>
    this.axiosInstance.get<T>(url, config);
  public post = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.axiosInstance.post<T>(url, data, config);
  public put = <T = any>(url: string, data?: any, config?: AxiosRequestConfig) =>
    this.axiosInstance.put<T>(url, data, config);
  public delete = <T = any>(url: string, config?: AxiosRequestConfig) =>
    this.axiosInstance.delete<T>(url, config);

  async *createIteratorCall<K extends (...args: any[]) => any>(
    fct: K,
    ...args: Parameters<K>
  ): AsyncGenerator<Awaited<ReturnType<K>>> {
    const res = await fct(...args);
    while (true) {
      yield res;
    }
  }
}
