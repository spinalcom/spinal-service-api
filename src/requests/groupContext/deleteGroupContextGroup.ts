import { SpinalAPI } from "../../spinalAPI";

export async function deleteGroupContextGroup(
  buildingId: string,
  contextId: number,
  categoryId: number,
  groupId: number
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/groupContext/${contextId}/category/${categoryId}/group/${groupId}/delete`
    );
    const response = await spinalApi.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
