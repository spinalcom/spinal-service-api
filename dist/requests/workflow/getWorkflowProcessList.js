import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getProcessList(workflowId) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/workflow/${workflowId}/processList`);
    let result = await spinalAPI.get(url);
    return result.data;
}
