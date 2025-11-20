import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building
export async function createTicket(building, data) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(building, "api/v1/ticket/create_ticket");
    const res = await spinalAPI.post(url, data);
    return res.data;
}
