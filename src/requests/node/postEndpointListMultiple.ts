import { SpinalAPI } from "../../spinalAPI";
import { INodeEndpointListMultiple } from "./_interfaces";

export async function postEndpointListMultiple(
  buildingId: string,
  referenceIds: number[]
): Promise<INodeEndpointListMultiple[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(
    buildingId,
    `api/v1/node/endpoint_list_multiple`
  );
  const response = await spinalAPI.post<INodeEndpointListMultiple[]>(url, referenceIds);
  return response.data;
}
