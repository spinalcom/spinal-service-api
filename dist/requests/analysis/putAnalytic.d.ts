import { IAnalysisAnalytic, IAnalysisAnalyticUpdateParam } from "./_interfaces";
export declare function putAnalytic(analyticId: string | number, params: IAnalysisAnalyticUpdateParam): Promise<IAnalysisAnalytic>;
export declare const putAnalysisAnalytic: typeof putAnalytic;
export declare const updateAnalytic: typeof putAnalytic;
