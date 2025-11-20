import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getNodeParent(buildingId, referenceIds) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceIds}/parents`);
    let result = await spinalAPI.get(url);
    return result.data;
}
