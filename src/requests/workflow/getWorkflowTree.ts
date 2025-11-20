import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IWorkflowItem } from "./_interfaces";

export async function getProcess(building: string, workflowId: number) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(building, `api/v1/workflow/${workflowId}/tree`);
    const res = await spinalAPI.get(url);
    return res.data;
}