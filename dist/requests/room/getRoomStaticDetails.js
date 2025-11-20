import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getRoomStaticDetails(buildingId, roomDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/room/${roomDynId}/read_static_details`);
    let result = await spinalAPI.get(url);
    return result.data;
}
