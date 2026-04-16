export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export type IWorkflowItem = IWorkflowItemItem[];
export type INodeFileList = INodeFileItem[];
export interface IWorkflowItemItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export type ITicketList = ITicket[];
export interface ITicket extends INodeItem {
    priority: number;
    creationDate: number;
    userName: string;
    gmaoId: string;
    gmaoDateCreation: string;
    description: string;
    declarer_id: string;
    process: INodeItem;
    step: IStep;
    workflowId: number;
    workflowName: string;
}
export interface IStep extends INodeItem {
    color: string;
    order: number;
}
export interface ParentMultipleRequest {
    dynamicId: number;
    relations: string[];
}
export interface ParentMultipleResponse {
    dynamicId: number;
    nodes: INodeItem[];
}
export type INodesAttributItem = INodeAttributItem[];
export interface INodeAttributItem {
    dynamicId: number;
    categoryAttributes: ICategoryAttributesItem[];
}
export interface ICategoryAttributesItem extends INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    attributs: IAttributsItem[];
}
export interface IAttributsItem {
    label: string;
    value: string;
    date: number;
    type: number;
    unit: number;
}
export interface INodeFileItem {
    dynamicId: number;
    Name: string;
}
export interface IControlEndpointItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    currentValue?: number | string | boolean | null;
    unit?: string;
}
export interface INodeControlEndpointListMultiple {
    dynamicId: number;
    endpoints: IControlEndpointItem[];
}
export interface IEndpointItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    currentValue?: number | string | boolean | null;
    unit?: string;
}
export interface INodeEndpointListMultiple {
    dynamicId: number;
    endpoints: IEndpointItem[];
}
