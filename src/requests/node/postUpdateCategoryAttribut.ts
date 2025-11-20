import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IWorkflowItem } from "./_interfaces";


export async function postUpdateCategoryAttribut(buildingId: string, referenceId: number, cateId: number, item: object) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${referenceId}/categoryById/${cateId}/update`);
    const res = await spinalAPI.put(url, item)
    console.log(res);
    return res;
}
