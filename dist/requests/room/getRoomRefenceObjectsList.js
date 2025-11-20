import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getRoomRefenceObjectsList(platformId, roomDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/room/${roomDynId}/reference_Objects_list`);
    let result = await spinalAPI.get(url);
    return result.data;
}
