import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getNodeRead(buildingId, roomDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${roomDynId}/read`);
    let result = await spinalAPI.get(url);
    return result.data;
}
