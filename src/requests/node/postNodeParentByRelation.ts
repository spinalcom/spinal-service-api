import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItem } from "./_interfaces";


export async function postNodeParentByRelation(buildingId: string, dynamicId: number, relationName: string): Promise<INodeItem> {
    try {
            const spinalAPI = SpinalAPI.getInstance();
            const body = [relationName];
            const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/${dynamicId}/parents`);
            const response = await spinalAPI.post<INodeItem>(url, body);
            return response.data;
    } catch (error) {
        throw error;
    }
}