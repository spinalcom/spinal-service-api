import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postTicketListMultiple(stepIds) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/node/ticket_list_multiple`);
    let result = await spinalAPI.post(url, stepIds);
    return result.data;
}
