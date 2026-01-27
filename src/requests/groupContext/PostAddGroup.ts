import { SpinalAPI } from "../../spinalAPI";
import { IGroupAddParam } from "./_interfaces";

export async function postAddGroup(buildingId: string, contextId: number, categoryId: number, groupParam: IGroupAddParam): Promise<any> {
    try {
        const spinalApi = SpinalAPI.getInstance();

        const url = spinalApi.createUrlWithPlatformId(buildingId, `api/v1/groupContext/${contextId}/category/${categoryId}/create_group`);
        
        const body: IGroupAddParam = {
            groupName: groupParam.groupName,
            groupIcon: groupParam.groupIcon,
            groupColor: groupParam.groupColor
        }
        const response = await spinalApi.post(url, body);
        return response.data;
    } catch (error) {
        throw error;
    }
}