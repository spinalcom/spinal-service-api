
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IEquipementsGroup } from "./_interfaces";


export async function getEquipmentGroupGroupList(patrimoineId: string, buildingId: string, contextDynId: number, categoryDynId: number): Promise<IEquipementsGroup[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/${contextDynId}/category/${categoryDynId}/group_list`);
    let result = await spinalAPI.get<IEquipementsGroup[]>(url);
    const res = result.data
    return res;
}
