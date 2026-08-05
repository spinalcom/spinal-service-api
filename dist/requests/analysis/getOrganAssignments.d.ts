import { IAnalysisOrgansListResponse } from "./_interfaces";
/**
 * Lists every organ-analysis instance that has an assignment file, with its enabled flag and
 * the analysis ids it manages. GET /api/v1/analysis/organs
 */
export declare function getOrganAssignments(buildingId: string): Promise<IAnalysisOrgansListResponse>;
export declare const getAnalysisOrganAssignments: typeof getOrganAssignments;
