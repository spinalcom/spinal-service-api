interface ISnapShot {
    version: string;
    createdAt: string;
    digitalTwinPath: string;
    objectCount: number;
    nodeCount: number;
    file: string;
    durationMs: number;
}
export { ISnapShot };
