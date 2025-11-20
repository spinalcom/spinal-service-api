import { SpinalAPI } from "../../spinalAPI"; // chemin relatif à src/requests/building

export async function moveToStepTicket(building: string, ticketId: string, data: { workflowDynamicId: number; toStepName: string }) {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(
    building,
    `api/v1/ticket/${ticketId}/move_to_step`
  );
  const res = await spinalAPI.post(url, data);
  return res.data;
}