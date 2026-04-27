import { SpinalAPI } from "../../spinalAPI";
import { IGroupUpdateParam } from "./_interfaces";

export async function postUpdateGroup(
  buildingId: string,
  contextId: number,
  categoryId: number,
  groupId: number,
  params: IGroupUpdateParam
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(
      buildingId,
      `api/v1/groupContext/${contextId}/category/${categoryId}/group/${groupId}/update`
    );

    const body: IGroupUpdateParam = {
      newNameGroup: params.newNameGroup,
      newNameColor: params.newNameColor,
    };

    const response = await spinalApi.put(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
