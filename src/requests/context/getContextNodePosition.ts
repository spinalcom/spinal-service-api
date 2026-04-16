import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function getContextNodePosition(buildingId: string, contextId: number, nodeId: number): Promise<any> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/context/${contextId}/node/${nodeId}/get_position`);
    const result = await spinalAPI.get<any>(url);
    return result.data;
}
