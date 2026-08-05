import { IAnalysisOrganAssignmentMutationResponse } from "./_interfaces";
/**
 * Assigns one analysis to an organ (adds its id to the organ's list; creates the file if
 * needed). Idempotent — `data.added` is false if it was already assigned.
 * POST /api/v1/analysis/organs/{organName}/analytics/{analyticId}
 */
export declare function postAssignAnalytic(buildingId: string, organName: string, analyticId: string): Promise<IAnalysisOrganAssignmentMutationResponse>;
export declare const assignAnalyticToOrgan: typeof postAssignAnalytic;
