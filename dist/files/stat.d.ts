interface FileStats {
    onlyHash?: boolean;
    onlySize?: boolean;
    withLocal?: boolean;
}
export declare const stat: (endpoint: import("../util/endpoint").Endpoint, path: string, opts?: FileStats | undefined) => Promise<{
    blocks: any;
    cumulativeSize: bigint;
    hash: any;
    local: any;
    size: bigint;
    sizeLocal: bigint;
    type: any;
    withLocality: any;
}>;
export {};
