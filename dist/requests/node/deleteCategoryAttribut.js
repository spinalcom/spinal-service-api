import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function deleteCategoryAttribut(buildingId, referenceId, cateId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceId}/category/${cateId}/delete/`);
    const res = await spinalAPI.delete(url);
    console.log(res);
    return res;
}
