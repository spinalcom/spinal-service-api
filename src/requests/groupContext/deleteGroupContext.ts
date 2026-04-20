import { SpinalAPI } from "../../spinalAPI";

export async function deleteGroupContext(buildingId: string, id: number): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${id}/delete`);
    const response = await spinalApi.delete(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}
