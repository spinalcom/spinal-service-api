import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getEquipmentGroupGroupList(patrimoineId, buildingId, contextDynId, categoryDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/equipementsGroup/${contextDynId}/category/${categoryDynId}/group_list`);
    let result = await spinalAPI.get(url);
    const res = result.data;
    return res;
}
