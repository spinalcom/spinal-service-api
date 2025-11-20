import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getStepList(workflowId, processId) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/workflow/${workflowId}/process/${processId}/stepList`);
    let result = await spinalAPI.get(url);
    return result.data;
}
