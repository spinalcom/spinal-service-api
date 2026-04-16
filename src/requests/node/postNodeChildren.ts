import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function postNodeChildren(buildingId: string, id: number, body: string[]): Promise<any> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${id}/children`);
    const result = await spinalAPI.post(url, body);
    return result.data;
}
