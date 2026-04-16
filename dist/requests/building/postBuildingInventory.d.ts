type InventoryIdentifier = string | number;
interface IInventoryBody {
    context: InventoryIdentifier;
    category: InventoryIdentifier;
    groups: InventoryIdentifier[];
}
export declare function postBuildingInventory(body: IInventoryBody, options: any): Promise<any>;
export {};
