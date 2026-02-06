
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItem } from "./_interfaces";

export async function getEndpointList(buildingId: string, referenceId: number): Promise<INodeItem> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${referenceId}/endpoint_list`);
    const result = await spinalAPI.get<INodeItem>(url,{
        params: {
            "includeDetails": true
        }
    });
    return result.data;
}
