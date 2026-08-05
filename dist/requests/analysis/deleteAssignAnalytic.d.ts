import { IAnalysisOrganAssignmentMutationResponse } from "./_interfaces";
/**
 * Unassigns one analysis from an organ (removes its id from the organ's list). `data.removed`
 * is false if it wasn't assigned. 404 if the organ has no assignment file.
 * DELETE /api/v1/analysis/organs/{organName}/analytics/{analyticId}
 */
export declare function deleteAssignAnalytic(buildingId: string, organName: string, analyticId: string): Promise<IAnalysisOrganAssignmentMutationResponse>;
export declare const unassignAnalyticFromOrgan: typeof deleteAssignAnalytic;
