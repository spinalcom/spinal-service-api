import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getBuildingRead(buildingId) {
    const api = SpinalAPI.getInstance();
    const url = api.createUrlWithPlatformId(buildingId, "api/v1/building/read");
    const res = await api.get(url);
    return res.data;
}
