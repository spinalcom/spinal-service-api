interface IBaseNode {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
interface IRelation extends IBaseNode {
    children_number?: number;
}
export type IBimFile = IBimFileItem[];
export interface IBimFileItem extends IBaseNode {
    items: IItemsItem[];
    offset?: unknown;
}
export interface IItemsItem {
    name: string;
    path: string;
    aecPath: string;
}
export type IBimObjet = IBimObjetItem[];
interface IBimObjetItem {
    model: IModel;
    bimObjects: IBimObjectsItem[];
    notFound: unknown[];
}
interface IModel extends IBaseNode {
}
interface IBimObjectsItem extends IBaseNode {
    children_relation_list: IRelation[];
    parent_relation_list: IParentRelationListItem[];
    externalId: string;
    dbid: number;
    bimFileId: string;
}
interface IParentRelationListItem extends IBaseNode {
    children_number: number;
}
export {};
