export interface IAttributeUpdateMultipleParam {
    dynamicId: number;
    categories: AttributeUpdateMultipleCategory[];
}
interface AttributeUpdateMultipleCategory {
    categoryName: string;
    attributes: {
        attributeLabel: string;
        attributeValue: string;
    }[];
}
export {};
