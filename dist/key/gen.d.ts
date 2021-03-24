interface KeygenOptions {
    type?: string;
    size?: number;
    ipnsBase?: string;
}
export declare const gen: (endpoint: import("../util/endpoint").Endpoint, name: string, opts?: KeygenOptions | undefined) => Promise<Record<string, any>>;
export {};
