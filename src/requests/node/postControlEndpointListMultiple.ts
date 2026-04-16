
import { SpinalAPI } from "../../spinalAPI";
import { INodeControlEndpointListMultiple } from "./_interfaces";

export async function postControlEndpointListMultiple(
  buildingId: string,
  referenceIds: number[]
): Promise<INodeControlEndpointListMultiple[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(
    buildingId,
    `api/v1/node/control_endpoint_list_multiple`
  );
  const response = await spinalAPI.post<INodeControlEndpointListMultiple[]>(url, referenceIds);
  return response.data;
}
