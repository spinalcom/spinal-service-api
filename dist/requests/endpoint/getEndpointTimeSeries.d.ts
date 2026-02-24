export interface ITimeSeriesPoint {
    date: number;
    value: number;
}
export declare function getEndpointTimeSeries(endpointId: string, begin: string, end: string, valueAtBegin?: boolean): Promise<ITimeSeriesPoint[]>;
