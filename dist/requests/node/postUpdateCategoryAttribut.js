import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postUpdateCategoryAttribut(buildingId, referenceId, cateId, item) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceId}/categoryById/${cateId}/update`);
    const res = await spinalAPI.put(url, item);
    console.log(res);
    return res;
}
