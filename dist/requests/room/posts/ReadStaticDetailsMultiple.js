import { SpinalAPI } from "../../../spinalAPI";
import { chunk } from 'lodash';
/**
 * @packageDocumentation
 * @module Requests-Equipment-Post-ReadStaticDetailsMultiple
 *
 * */
export default async function getReadStaticDetailsMultiple(buildingId, dynamicIds, size = 200) {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, "api/v1/room/read_static_details_multiple");
    try {
        const chunckedIds = chunk(dynamicIds, size);
        let results = [];
        for (const currentChunk of chunckedIds) {
            const response = await spinalAPI.post(url, currentChunk);
            results = results.concat(response.data);
        }
        return results;
    }
    catch (error) {
        throw error;
    }
}
