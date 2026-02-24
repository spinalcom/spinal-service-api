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
interface IObjectItem extends INodeItem {
    bimFileId: string;
    dbid: number;
}
export type IEquipementsGroup = IGroupingItem[];
export type IEquipementsGroupObject = IObjectItem[];
export {};
