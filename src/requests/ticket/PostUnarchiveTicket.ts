import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building


interface UnarchiveTicketResponse {
    success: boolean,
    ticketInfo: {
        name: string,
        description: string,
        priority: string
    }
}


export async function postUnarchiveTicket(buildingId: string, ticketId: string, data: {workflowDynamicId: number, processDynamicId: number}): Promise<UnarchiveTicketResponse > {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(
            buildingId,
            `api/v1/ticket/${ticketId}/unarchive`
        );
        const res = await spinalAPI.post(url, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}