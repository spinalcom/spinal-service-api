interface UnarchiveTicketResponse {
    success: boolean;
    ticketInfo: {
        name: string;
        description: string;
        priority: string;
    };
}
export declare function postUnarchiveTicket(buildingId: string, ticketId: string, data: {
    workflowDynamicId: number;
    processDynamicId: number;
}): Promise<UnarchiveTicketResponse>;
export {};
