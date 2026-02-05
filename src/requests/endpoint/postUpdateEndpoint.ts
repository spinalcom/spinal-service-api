import { SpinalAPI } from "../../spinalAPI";

export type EndpointUpdateType = "currentValue" | "controlValue";

export interface IEndpointUpdateBody {
    newValue: number | string | boolean;
}

export async function putUpdateEndpoint(
    buildingId: string,
    endpointId: number,
    updateType: EndpointUpdateType,
    body: IEndpointUpdateBody
) {
    const spinalAPI = SpinalAPI.getInstance();

    const path = `api/v1/endpoint/${endpointId}/update?updateType=${encodeURIComponent(updateType)}`;
    const url = spinalAPI.createUrlWithPlatformId(buildingId, path);

    const res = await spinalAPI.put(url, body);
    return res;
}
