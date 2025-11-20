import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
import { ITicketList } from "./_interfaces";


export async function getTicketList(nodeId: number): Promise<ITicketList[]> {
    const platformId = localStorage.getItem("idBuilding") || "";
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        platformId,
        `api/v1/node/${nodeId}/ticket_list`
    );
    let result = await spinalAPI.get<ITicketList[]>(url);
    return result.data;
}
