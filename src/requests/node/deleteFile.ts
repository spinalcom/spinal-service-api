import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function deleteFile(buildingId: string, refrenceId: number, fileId: number) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${refrenceId}/delete_file/${fileId}`);
    const res = await spinalAPI.delete(url)
    return res;
}