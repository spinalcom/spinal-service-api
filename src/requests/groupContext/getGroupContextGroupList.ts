
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IGroupingItemObject } from "./_interfaces";

export async function getGroupContextGroupList(patrimoineId: string, buildingId: string, contextDynId: number, categoryDynId: number): Promise<IGroupingItemObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupeContext/${contextDynId}/category/${categoryDynId}/group_list`);
    let result = await spinalAPI.get<IGroupingItemObject[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'GroupList' });
        return obj;
    });
    return res;
}
