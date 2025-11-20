import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { IRoomStaticDetailsObject } from "./_interfaces";


export async function getRoomStaticDetails(buildingId: string, roomDynId: number): Promise<IRoomStaticDetailsObject[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(buildingId, `api/v1/room/${roomDynId}/read_static_details`);
  let result = await spinalAPI.get<IRoomStaticDetailsObject[]>(url);
  return result.data;
}
