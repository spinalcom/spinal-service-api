import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getRoomPosition(buildingId, roomDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/room/${roomDynId}/get_position`);
    let result = await spinalAPI.get(url);
    return result.data;
}
