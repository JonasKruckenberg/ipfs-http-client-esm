interface IPNSPublishOptions {
    resolve?: boolean;
    lifetime?: string;
    allowOffline?: boolean;
    ttl?: string;
    key?: string;
    ipnsBase?: string;
}
export declare const publish: (endpoint: import("../util/endpoint").Endpoint, path: string, opts?: IPNSPublishOptions | undefined) => Promise<Record<string, any>>;
export {};
