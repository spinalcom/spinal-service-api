import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building


export async function postUnarchiveTicket(buildingId: string, ticketId: string, data: {workflowDynamicId: number, processDynamicId: number}): Promise<Boolean> {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(
            buildingId,
            `api/v1/ticket/${ticketId}/unarchive`
        );
        const res = await spinalAPI.post(url, data);
        return res && res.data && res.data.success === true;
    } catch (error) {
        return false;
    }
}