import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postUploadFile(buildingId, refrenceId, file) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${refrenceId}/upload_file`);
    const res = await spinalAPI.post(url, file);
    return res.data;
}
