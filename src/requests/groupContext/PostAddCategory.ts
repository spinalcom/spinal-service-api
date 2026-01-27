import { SpinalAPI } from "../../spinalAPI";
import { ICategoryAddParam } from "./_interfaces";

export async function postAddCategory(buildingId: string, contextId: number, categoryParam: ICategoryAddParam): Promise<any> {
    try {
        const spinalApi = SpinalAPI.getInstance();

        const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${contextId}/create_category`);

        const body: ICategoryAddParam = {
            categoryName: categoryParam.categoryName,
            categoryIcon: categoryParam.categoryIcon,
            categoryColor: categoryParam.categoryColor
        }
        
        const response = await spinalApi.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}