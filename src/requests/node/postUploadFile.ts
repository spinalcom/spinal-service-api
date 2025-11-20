import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IWorkflowItem } from "./_interfaces";

export async function postUploadFile(buildingId: string, refrenceId: number, file: FormData) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${refrenceId}/upload_file`);
    const res = await spinalAPI.post(url, file)
    return res.data;
}