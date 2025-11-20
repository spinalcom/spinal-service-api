import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postUpdateAttribut(buildingId, referenceId, cateId, name, item) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceId}/category/${cateId}/attribut/${name}/update`);
    const res = await spinalAPI.put(url, item);
    console.log(res);
    return res;
}
