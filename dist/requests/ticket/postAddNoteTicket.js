import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function addNoteTicket(building, ticketId, data) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(building, `api/v1/ticket/${ticketId}/add_note`);
    const res = await spinalAPI.post(url, data);
    return res.data;
}
