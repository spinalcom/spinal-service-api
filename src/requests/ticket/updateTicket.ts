import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function modify_ticket(building: string, ticketId: string,
    data: {
        name: string | null;
        description: string | null;
        priority: number | null;
    }
) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        building,
        `api/v1/ticket/${ticketId}/update`
    );
    const res = await spinalAPI.put(url, data);
    return res.data;
}