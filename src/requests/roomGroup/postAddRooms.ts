import { SpinalAPI } from "../../spinalAPI";
import { INodeItemList } from "./_interfaces";

export async function postAddRooms(
  buildingId: string,
  contextId: number,
  categoryId: number,
  groupId: number,
  dynamicIds: number[]
): Promise<INodeItemList> {
  try {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
      buildingId,
      `/api/v1/roomsGroup/${contextId}/category/${categoryId}/group/${groupId}/addRooms`
    );
    const body = dynamicIds;
    const response = await spinalAPI.post<INodeItemList>(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
