
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IEquipementsGroup } from "./_interfaces";


export async function getEquipmentGroupCategoryList(patrimoineId: string, buildingId: string, contextDynId: number): Promise<IEquipementsGroup[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/${contextDynId}/category_list`);
    let result = await spinalAPI.get<IEquipementsGroup[]>(url);
    const res = result.data
    return res;
}