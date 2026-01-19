import { SpinalAPI } from "../../spinalAPI";
import { IAttributeUpdateMultipleParam } from "./_interface";


export async function postUpdateAttributeMultiple(buildingId: string = "", body: IAttributeUpdateMultipleParam[]): Promise<any> {
   try {
       const spinalAPI = SpinalAPI.getInstance();
       const url = spinalAPI.createUrlWithPlatformId(buildingId, `/api/v1/node/attribute/update_multiple`);
   
       const response = await spinalAPI.post(url, body);
         return response.data;
   } catch(error) {
        throw error;
   }
} 