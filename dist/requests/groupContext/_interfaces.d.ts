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
//# sourceMappingURL=_interfaces.d.ts.map