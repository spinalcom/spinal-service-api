import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getGroupContextCategoryList(patrimoineId, buildingId, contextDynId) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupeContext/${contextDynId}/category_list`);
    let result = await spinalAPI.get(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'CategoryList' });
        return obj;
    });
    return res;
}
