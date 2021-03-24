interface FindProvsOptions {
    'num-providers'?: number;
}
export declare const findProvs: (endpoint: import("../util/endpoint").Endpoint, key: string, opts?: FindProvsOptions | undefined) => Promise<Record<string, any>>;
export {};
