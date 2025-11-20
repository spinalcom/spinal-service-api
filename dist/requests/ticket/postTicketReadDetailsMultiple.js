import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getTicketDetailsMultiple(ticketIds) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/ticket/read_details_multiple`);
    let result = await spinalAPI.post(url, ticketIds);
    return result.data;
}
