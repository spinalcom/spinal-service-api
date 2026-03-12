
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItem } from "./_interfaces";

export async function getAnalyticsBycontexts(buildingId: string, contextId: number): Promise<INodeItem> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/analysis/contexts/${contextId}/analytics`);
    const result = await spinalAPI.get<INodeItem>(url);
    return result.data;
}
