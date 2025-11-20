import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getCategoriesList(buildingId, referenceId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${referenceId}/categoriesList`);
    const result = await spinalAPI.get(url);
    return result.data;
}
