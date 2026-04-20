import { SpinalAPI } from "../../spinalAPI";
import { IContextUpdateParam } from "./_interfaces";

export async function postUpdateContext(
  buildingId: string,
  id: number,
  params: IContextUpdateParam
): Promise<any> {
  try {
    const spinalApi = SpinalAPI.getInstance();
    const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${id}/update`);

    const body: IContextUpdateParam = {
      newContextName: params.newContextName,
    };

    const response = await spinalApi.put(url, body);
    return response.data;
  } catch (error) {
    throw error;
  }
}
