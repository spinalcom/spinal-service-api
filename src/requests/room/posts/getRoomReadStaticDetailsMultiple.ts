

/**
 * @packageDocumentation
 * @module Requests-Equipment-Post-ReadStaticDetailsMultiple
 * 
 */

import { IReadStaticDetailsMultiple } from "../../../interfaces/IGeneral";
import chunk  from "lodash.chunk";
import { SpinalAPI } from "../../../spinalAPI"; // chemin relatif à src/requests/building

export default async function getReadStaticDetailsMultiple(buildingId: string, dynamicIds: number[], size: number = 200) : Promise<IReadStaticDetailsMultiple[]> { 
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(
        buildingId,
        "/api/v1/room/read_static_details_multiple"
    )
    
    try {
        const chunckedIds = chunk(dynamicIds, size);
        let results : IReadStaticDetailsMultiple[] = [];
        
        for (const currentChunk of chunckedIds) {
            const response = await spinalAPI.post<IReadStaticDetailsMultiple[]>(url, currentChunk);
            results = results.concat(response.data);
        }
        return results;
    } catch (error) {
        throw error;
    }

}   