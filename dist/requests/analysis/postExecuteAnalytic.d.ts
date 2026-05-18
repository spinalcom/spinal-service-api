import { IAnalysisExecuteResponse } from "./_interfaces";
export declare function postExecuteAnalytic(buildingId: string, analyticId: string): Promise<IAnalysisExecuteResponse>;
export declare const executeAnalytic: typeof postExecuteAnalytic;
