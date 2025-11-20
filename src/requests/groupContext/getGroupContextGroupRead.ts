import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IGroupingItemObject } from "./_interfaces";

export async function getGroupContextGroupRead(patrimoineId: string, buildingId: string, contextDynId: number, categoryDynId: number, groupDynId: number): Promise<IGroupingItemObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/read`);
    let result = await spinalAPI.get<IGroupingItemObject[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'EquipementList' });
        return obj;
    });
    return res;
}