import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IBuildingItem } from "./_interfaces";

export async function getBuildingRead(buildingId: string): Promise<IBuildingItem[]> {
  const api = SpinalAPI.getInstance();
  const url = api.createUrlWithPlatformId(buildingId, "api/v1/building/read");
  const res = await api.get<IBuildingItem[]>(url);
  return res.data;
}
