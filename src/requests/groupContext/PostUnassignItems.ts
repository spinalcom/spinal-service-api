import { SpinalAPI } from "../../spinalAPI";

export async function postUnassignItems(
  buildingId: string,
  contextId: number,
  categoryId: number,
  groupId: number,
  dynamicIds: number[]
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/groupContext/${contextId}/category/${categoryId}/group/${groupId}/unassign_items`
    );

    const response = await spinalApi.post(url, dynamicIds);
    return response.data;
  } catch (error) {
    throw error;
  }
}
