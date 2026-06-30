export interface IRelationParentNodeChildRelation {
  dynamicId: number;
  staticId: string;
  name: string;
  children_number: number;
}

export interface IRelationParentNode {
  dynamicId: number;
  staticId: string;
  name: string;
  type: string;
  children_relation_list: IRelationParentNodeChildRelation[];
}

