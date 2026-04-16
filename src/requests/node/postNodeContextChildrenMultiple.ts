import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ParentMultipleRequest, ParentMultipleResponse } from "./_interfaces";



export async function postNodeContextChildrenMultiple(buildingId: string, contextId: number ,body: ParentMultipleRequest[]): Promise<ParentMultipleResponse[]> {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/context/${contextId}/node/children_multiple`);
        const response = await spinalAPI.post<ParentMultipleResponse[]>(url, body);
        return response.data;    
    } catch (error) {
        throw new Error(`Failed to post node context children multiple: ${error}`);
    }
}