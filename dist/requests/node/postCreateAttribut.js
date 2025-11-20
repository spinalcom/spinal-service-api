import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postCreateAttribut(buildingId, referenceId, categoryId, formattedData) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${referenceId}/category/${categoryId}/attribut/create`);
    const result = await spinalAPI.post(url, formattedData);
    return result;
}
