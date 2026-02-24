type InventoryIdentifier = string | number;
interface IInventoryBody {
    context: InventoryIdentifier;
    category: InventoryIdentifier;
    groups: InventoryIdentifier[];
}
export declare function postRoomInventory(buildingId: string, id: number, body: IInventoryBody, options: any): Promise<any>;
export {};
