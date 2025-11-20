

import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { INodeItemList } from "./_interfaces";


export async function getRoomList(patrimoineId: string, buildingId: string, contextDynId: number, categoryDynId: number, groupDynId: number): Promise<INodeItemList[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/roomsGroup/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/roomList`);
    let result = await spinalAPI.get<INodeItemList[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId });
        return obj;
    });

    return res;
}