export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export interface Ticket {
    workflow: String;
    process: String;
    nodeDynamicId: number;
    name: String;
    priority: number;
    description: String;
}
export interface ITicketObject extends INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
    priority: number;
    creationDate: number;
    description: string;
    declarer_id: string;
    elementSelected: INodeItem;
    userName: string;
    gmaoId: string;
    gmaoDateCreation: string;
    process: INodeItem;
    step: IStep;
    workflowId: number;
    workflowName: string;
    annotation_list: any[];
    file_list: any[];
    log_list: ILogListItem[];
}
export interface IStep extends INodeItem {
    color: string;
    order: number;
}
export interface ILogListItem {
    date: number;
    event: string;
    ticketStaticId: string;
}
