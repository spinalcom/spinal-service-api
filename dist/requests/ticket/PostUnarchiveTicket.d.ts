export declare function postUnarchiveTicket(buildingId: string, ticketId: string, data: {
    workflowDynamicId: number;
    processDynamicId: number;
}): Promise<Boolean>;
