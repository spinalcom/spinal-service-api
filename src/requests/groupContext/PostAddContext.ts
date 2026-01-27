import { SpinalAPI } from "../../spinalAPI";
import { IContextAddParam } from "../context/_interfaces";


export async function postAddContext(buildingId: string, params: IContextAddParam): Promise<any> {
    try {
        const spinalApi = SpinalAPI.getInstance();
        const url = spinalApi.createUrlWithPlatformId(buildingId, 'api/v1/groupContext/create');
        const body: IContextAddParam = {
            contextName: params.contextName,
            childrenType: params.childrenType,
            contextColor: params.contextColor,
            contextIcon: params.contextIcon
        }
        const response = await spinalApi.post(url, body);
        return response.data;

    } catch (error) {
        throw error;
    }
    

}