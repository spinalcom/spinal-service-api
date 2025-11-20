
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IGroupingItemObject } from "./_interfaces";

export async function getGroupContextCategoryList(patrimoineId: string, buildingId: string, contextDynId: number): Promise<IGroupingItemObject[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupeContext/${contextDynId}/category_list`);
    let result = await spinalAPI.get<IGroupingItemObject[]>(url);
    const res = result.data.map((obj) => {
        Object.assign(obj, { patrimoineId, buildingId, req: 'CategoryList' });
        return obj;
    });
    return res;
}
