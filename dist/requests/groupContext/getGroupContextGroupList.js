import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getGroupContextGroupList(patrimoineId, buildingId, contextDynId, categoryDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupeContext/${contextDynId}/category/${categoryDynId}/group_list`);
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'GroupList' });
        return obj;
    });
    return res;
}
