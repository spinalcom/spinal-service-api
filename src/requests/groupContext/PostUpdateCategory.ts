import { SpinalAPI } from "../../spinalAPI";
import { ICategoryUpdateParam } from "./_interfaces";

export async function postUpdateCategory(
  buildingId: string,
  contextId: number,
  categoryId: number,
  params: ICategoryUpdateParam
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/groupContext/${contextId}/category/${categoryId}/update`
    );

    const body: ICategoryUpdateParam = {
      newNameCategory: params.newNameCategory,
      newNameIcon: params.newNameIcon,
    };

    const response = await spinalApi.put(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
