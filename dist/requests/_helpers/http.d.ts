export declare function apiGet<T>(url: string): Promise<T>;
export declare function apiPost<T>(url: string, body?: any): Promise<T>;
export declare function withPlatform(buildingId: string, route: string): string;
