type InventoryIdentifier = string | number;
interface IInventoryBody {
    context: InventoryIdentifier;
    category: InventoryIdentifier;
    groups: InventoryIdentifier[];
}
export declare function postFloorInventory(id: number, body: IInventoryBody, options: any): Promise<any>;
export {};
