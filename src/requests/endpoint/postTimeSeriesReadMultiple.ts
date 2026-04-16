import { SpinalAPI } from "../../spinalAPI";
import { IEndpointTimeSeriesMultipleResult, ITimeSeriesOptions } from "./_interfaces";

export async function postTimeSeriesReadMultiple(
  buildingId: string,
  endpointIds: number[],
  start: string,
  end: string,
  options: ITimeSeriesOptions = {}
): Promise<IEndpointTimeSeriesMultipleResult[]> {
  const spinalAPI = SpinalAPI.getInstance();

  const params = new URLSearchParams();
  if (options.valueAtBegin !== undefined) params.append("valueAtBegin", String(options.valueAtBegin));
  if (options.aggregation !== undefined) params.append("aggregation", options.aggregation);
  if (options.bucket !== undefined) params.append("bucket", options.bucket);

  const query = params.toString() ? `?${params.toString()}` : "";
  const url = spinalAPI.createUrlWithPlatformId(
    buildingId,
    `api/v1/endpoint/timeSeries/read_multiple/${encodeURIComponent(start)}/${encodeURIComponent(end)}${query}`
  );

  const response = await spinalAPI.post<IEndpointTimeSeriesMultipleResult[]>(url, endpointIds);
  return response.data;
}
