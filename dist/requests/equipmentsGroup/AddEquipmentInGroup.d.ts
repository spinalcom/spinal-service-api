interface EquipmentInGroupResponse {
    dynamicId: number;
    staticId: string;
    name: string;
    type: string;
}
export declare function AddequipmentIngGroup(buildingId: string, contextId: number, categoryId: number, groupId: number, dynamicIds: number[]): Promise<EquipmentInGroupResponse[]>;
export {};
