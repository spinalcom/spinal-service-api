

import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItemList } from "./_interfaces";


export async function getRoomList2( buildingId: string, contextDynId: number, categoryDynId: number, groupDynId: number): Promise<INodeItemList[]> {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/roomsGroup/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/roomList`);
        let result = await spinalAPI.get<INodeItemList[]>(url);

        return result.data;
        
    } catch (error) {
        throw error;   
    }
}