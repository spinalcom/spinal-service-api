export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export interface IAnalysisContextCreateParam {
    contextName: string;
}
export interface IAnalysisAnalyticsCreateParam {
    [key: string]: unknown;
}
