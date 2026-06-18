import { SpinalAPI } from "../../spinalAPI";
import { INodeReadMultipleItem, INodeReadMultipleOptions } from "./_interfaces";

export async function postNodeMultiple(
  buildingId: string,
  nodeIds: number[],
  options: INodeReadMultipleOptions = {}
): Promise<INodeReadMultipleItem[]> {
  const spinalAPI = SpinalAPI.getInstance();

  const params = new URLSearchParams();
  if (options.includeChildrenRelations !== undefined) {
    params.append("includeChildrenRelations", String(options.includeChildrenRelations));
  }
  if (options.includeParentRelations !== undefined) {
    params.append("includeParentRelations", String(options.includeParentRelations));
  }

  const query = params.toString() ? `?${params.toString()}` : "";
  const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/node/read_multiple${query}`);
  const response = await spinalAPI.post<INodeReadMultipleItem[]>(url, nodeIds);

  return response.data;
}
