import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getGroupContextGroupRead(patrimoineId, buildingId, contextDynId, categoryDynId, groupDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${contextDynId}/category/${categoryDynId}/group/${groupDynId}/read`);
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'EquipementList' });
        return obj;
    });
    return res;
}
