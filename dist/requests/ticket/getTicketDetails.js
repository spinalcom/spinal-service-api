import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function getTicketDetails(ticketId) {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(platformId, `api/v1/ticket/${ticketId}/read_details`);
    const result = await spinalAPI.get(url);
    return result.data;
}
