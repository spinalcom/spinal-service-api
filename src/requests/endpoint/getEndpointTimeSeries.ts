import { SpinalAPI } from "../../spinalAPI";

export interface ITimeSeriesPoint {
  date: number;
  value: number;
}

export async function getEndpointTimeSeries(
  endpointId: string,
  begin: string,
  end: string,
  valueAtBegin: boolean = false
): Promise<ITimeSeriesPoint[]> {
  const spinalAPI = SpinalAPI.getInstance();

  const path =
    `api/v1/endpoint/${endpointId}/timeSeries/read/` +
    `${encodeURIComponent(begin)}/${encodeURIComponent(end)}` +
    `?valueAtBegin=${valueAtBegin ? "true" : "false"}`;

  const url = spinalAPI.createUrlWithPlatformId(endpointId, path);

  let result = await spinalAPI.get<ITimeSeriesPoint[]>(url);

  return result.data;
}
