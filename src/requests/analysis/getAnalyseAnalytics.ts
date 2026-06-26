
import { IAnalysisAnalytic } from "./_interfaces";
import { getAnalytic } from "./getAnalytic";

export async function getAnalyseAnalytics(
    buildingId: string,
    analyticId: string | number
): Promise<IAnalysisAnalytic> {
    return getAnalytic(buildingId, analyticId);
}

export const getAnalysisAnalytics = getAnalyseAnalytics;
