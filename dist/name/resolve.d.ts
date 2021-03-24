interface IPNSResolveOptions {
    nocache?: boolean;
    dhtRecordCount?: number;
    dhtTimeout?: string;
}
export declare const resolve: (endpoint: import("../util/endpoint").Endpoint, path: string, opts?: IPNSResolveOptions | undefined) => Promise<any>;
export {};
