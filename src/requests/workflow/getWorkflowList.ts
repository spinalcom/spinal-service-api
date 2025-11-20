import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IWorkflowItem } from "./_interfaces";


export async function getWorkflowList(): Promise<IWorkflowItem[]> {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        platformId,
        "api/v1/workflow/list"
    );
    let result = await spinalAPI.get<IWorkflowItem[]>(url);
    return result.data;
}