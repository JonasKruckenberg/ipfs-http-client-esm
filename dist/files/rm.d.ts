interface RemoveOptions {
    force?: boolean;
}
export declare const rm: (endpoint: import("../util/endpoint").Endpoint, path: string, opts?: RemoveOptions | undefined) => Promise<void>;
export {};
