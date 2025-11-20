import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getEquipmentGroupCategoryList(patrimoineId, buildingId, contextDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/${contextDynId}/category_list`);
    let result = await spinalAPI.get(url);
    const res = result.data;
    return res;
}
