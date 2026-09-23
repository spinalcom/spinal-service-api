import { SpinalAPI } from "../../spinalAPI";
import { IEndpointTimeSeriesMultipleResult, ITimeSeriesOptions } from "./_interfaces";


export const postTimeSeriesReadCurrentDayMultiple: (buildingId: string, endpoints: number[]) => Promise<IEndpointTimeSeriesMultipleResult> = async (buildingId: string,endpoints: number[]) =>  {
    try {
        const spinalAPI = SpinalAPI.getInstance();
        const url = spinalAPI.createUrlWithPlatformId(buildingId, 'api/v1/endpoint/timeSeries/readCurrentDay_multiple')
        const result = await spinalAPI.post<IEndpointTimeSeriesMultipleResult>(url,endpoints);
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}