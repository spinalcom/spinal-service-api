export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export type IWorkflowItem = IWorkflowItemItem[];
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
//# sourceMappingURL=_interfaces.d.ts.map