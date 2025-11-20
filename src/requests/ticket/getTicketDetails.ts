import type { promises } from "dns";
import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ITicketObject } from "./_interfaces";

export async function getTicketDetails(ticketId: number): Promise<ITicketObject[]> {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        platformId,
        `api/v1/ticket/${ticketId}/read_details`
    );
    const result = await spinalAPI.get<ITicketObject[]>(url);
    return result.data
}