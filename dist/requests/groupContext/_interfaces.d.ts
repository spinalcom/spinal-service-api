export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export interface IGroupingItem extends INodeItem {
    color?: string;
    icon?: string;
}
export type IGroupingItemObject = IGroupingItem[];
export interface ICategoryAddParam {
    categoryName: string;
    categoryIcon: string;
    categoryColor: string;
}
export interface IGroupAddParam {
    groupName: string;
    groupColor: string;
    groupIcon: string;
}
