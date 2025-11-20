
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IEquipementsGroupObject } from "./_interfaces";


export async function getEquipmentGroupEquipmentList(buildingId: string, contextDynId: number, categoryDynId: number, groupDynId: number): Promise<IEquipementsGroupObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/equipementList`);
    let result = await spinalAPI.get<IEquipementsGroupObject[]>(url);
    const res = result.data
    return res;
}