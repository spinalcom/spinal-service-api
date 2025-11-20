import { SpinalAPI } from "../../spinalAPI";

export async function addTicketDoc(building: string, ticketId: number, file: FormData) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        building,
        `api/v1/ticket/${ticketId}/add_doc`
    );
    const res = await spinalAPI.post(url, file);
    return res.data;
}