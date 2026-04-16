import { SpinalAPI } from "../../spinalAPI";
import { ITimeSeriesPoint, ITimeSeriesOptions } from "./_interfaces";

export async function getEndpointTimeSeries(
  endpointId: string,
  begin: string,
  end: string,
  options: ITimeSeriesOptions = {}
): Promise<ITimeSeriesPoint[]> {
  const spinalAPI = SpinalAPI.getInstance();

  const params = new URLSearchParams();
  if (options.valueAtBegin !== undefined) params.append("valueAtBegin", String(options.valueAtBegin));
  if (options.aggregation !== undefined) params.append("aggregation", options.aggregation);
  if (options.bucket !== undefined) params.append("bucket", options.bucket);

  const query = params.toString() ? `?${params.toString()}` : "";
  const path = `api/v1/endpoint/${endpointId}/timeSeries/read/${encodeURIComponent(begin)}/${encodeURIComponent(end)}${query}`;

  const url = spinalAPI.createUrlWithPlatformId(endpointId, path);
  const result = await spinalAPI.get<ITimeSeriesPoint[]>(url);
  return result.data;
}
