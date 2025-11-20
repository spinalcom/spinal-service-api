import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function postArchiveTicket(building, ticketId, data) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(building, `api/v1/ticket/${ticketId}/archive`);
    const res = await spinalAPI.post(url, data);
    return res.data;
}
