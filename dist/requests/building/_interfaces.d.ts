export interface INodeItem {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export interface IBuildingItem extends INodeItem {
    address: string;
    area: string;
}
