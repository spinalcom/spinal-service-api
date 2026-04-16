import { IEndpointTimeSeriesMultipleResult, ITimeSeriesOptions } from "./_interfaces";
export declare function postTimeSeriesReadMultiple(buildingId: string, endpointIds: number[], start: string, end: string, options?: ITimeSeriesOptions): Promise<IEndpointTimeSeriesMultipleResult[]>;
