import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IWorkflowItem } from "./_interfaces";


export async function getStepList(workflowId: number, processId: number) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
      platformId,
      `api/v1/workflow/${workflowId}/process/${processId}/stepList`
    );
    let result = await spinalAPI.get(url);
    return result.data;
  }