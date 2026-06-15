import { SpinalAPI } from "../../spinalAPI";
import { INodeItem } from "./_interfaces";

export async function getAnalysisTriggerTypes(buildingId: string): Promise<INodeItem[]> {
    const spinalAPI = SpinalAPI.getInstance();
    const url = spinalAPI.createUrlWithPlatformId(buildingId, '/api/v1/analysis/triggerTypes');
    try {
        const result = await spinalAPI.get<INodeItem[]>(url);
        return result.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des types de déclencheurs:', error);
        throw error;
    }
}

export const getAnalyseTriggerTypes = getAnalysisTriggerTypes;
