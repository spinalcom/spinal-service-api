import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building


export async function postCreateCategory(buildingId: string, referenceId: number, categoryName: string): Promise<any> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/${referenceId}/category/create`);
    const result = await spinalAPI.post(url, { categoryName: categoryName });
    return result;
}