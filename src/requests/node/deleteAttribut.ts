import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function deleteAttribut(buildingId: string, referenceId: number, cateId: number, name: string) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceId}/category/${cateId}/attribut/${name}/delete`);
    const res = await spinalAPI.delete(url)
    return res;
}