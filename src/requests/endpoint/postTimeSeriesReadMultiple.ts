import { SpinalAPI } from "../../spinalAPI";
import { IEndpointTimeSeriesMultipleResult } from "./_interfaces";

export async function postTimeSeriesReadMultiple(
  buildingId: string,
  endpointIds: number[],
  start: string,
  end: string
): Promise<IEndpointTimeSeriesMultipleResult[]> {
  const spinalAPI = SpinalAPI.getInstance();
  const url = spinalAPI.createUrlWithPlatformId(
    buildingId,
    `api/v1/endpoint/timeSeries/read_multiple/${encodeURIComponent(start)}/${encodeURIComponent(end)}`
  );
  const response = await spinalAPI.post<IEndpointTimeSeriesMultipleResult[]>(url, endpointIds);
  return response.data;
}
