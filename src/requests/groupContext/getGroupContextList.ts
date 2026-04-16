import { SpinalAPI } from "../../spinalAPI";
import { IGroupingItemObject } from "./_interfaces";

export async function getGroupContextList(buildingId: string): Promise<IGroupingItemObject[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/groupContext/list`);
  const result = await spinalAPI.get<IGroupingItemObject[]>(url);
  return result.data;
}
