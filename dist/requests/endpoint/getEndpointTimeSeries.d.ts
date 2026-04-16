import { ITimeSeriesPoint, ITimeSeriesOptions } from "./_interfaces";
export declare function getEndpointTimeSeries(endpointId: string, begin: string, end: string, options?: ITimeSeriesOptions): Promise<ITimeSeriesPoint[]>;
