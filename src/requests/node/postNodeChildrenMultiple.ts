import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ParentMultipleRequest, ParentMultipleResponse } from "./_interfaces";


export async function postNodeChildrenMultiple(buildingId: string, body: ParentMultipleRequest[]): Promise<ParentMultipleResponse> {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/children_multiple`);
        const response = await spinalAPI.post<ParentMultipleResponse>(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}