import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getWorkflowList() {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, "api/v1/workflow/list");
    let result = await spinalAPI.get(url);
    return result.data;
}
