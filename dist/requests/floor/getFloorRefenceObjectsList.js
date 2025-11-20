import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getFloorRefenceObjectsList(platformId, floorDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/floor/${floorDynId}/reference_Objects_list`);
    let result = await spinalAPI.get(url);
    return result.data;
}
