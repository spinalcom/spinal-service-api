import { SpinalAPI } from "../../spinalAPI";

export async function apiGet<T>(url: string): Promise<T> {
  const api = SpinalAPI.getInstance();
  const res = await api.get<T>(url);
  return res.data as T;
}

export async function apiPost<T>(url: string, body?: any): Promise<T> {
  const api = SpinalAPI.getInstance();
  const res = await api.post<T>(url, body);
  return res.data as T;
}

export function withPlatform(buildingId: string, route: string) {
  const api = SpinalAPI.getInstance();
  return api.createUrlWithPlatformId(buildingId, route);
}
