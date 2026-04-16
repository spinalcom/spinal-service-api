export interface ITimeSeriesPoint {
    date: number;
    value: number;
}
export interface ITimeSeriesOptions {
    aggregation?: string;
    bucket?: string;
    valueAtBegin?: boolean;
}
export interface ITimeSeriesBucket {
    /** ISO date string for the bucket start */
    date: string;
    /** Average (or aggregated) value for the bucket */
    value: number | null;
}
export interface IEndpointTimeSeriesMultipleResult {
    /** dynamicId of the endpoint */
    dynamicId: number;
    /** Time-series buckets for this endpoint */
    timeSeries: ITimeSeriesBucket[];
}
