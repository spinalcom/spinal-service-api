import { SpinalAPI } from "../../spinalAPI";
export async function apiGet(url) {
    const api = SpinalAPI.getInstance();
    const res = await api.get(url);
    return res.data;
}
export async function apiPost(url, body) {
    const api = SpinalAPI.getInstance();
    const res = await api.post(url, body);
    return res.data;
}
export function withPlatform(buildingId, route) {
    const api = SpinalAPI.getInstance();
    return api.createUrlWithPlatformId(buildingId, route);
}
