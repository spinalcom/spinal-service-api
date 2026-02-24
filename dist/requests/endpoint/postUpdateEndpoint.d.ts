export type EndpointUpdateType = "currentValue" | "controlValue";
export interface IEndpointUpdateBody {
    newValue: number | string | boolean;
}
export declare function putUpdateEndpoint(buildingId: string, endpointId: number, updateType: EndpointUpdateType, body: IEndpointUpdateBody): Promise<import("axios").AxiosResponse<any, any, {}>>;
