interface MkdirOptions {
    recursive?: boolean;
    cidVersion?: number;
    hashAlg?: string;
}
export declare const mkdir: (endpoint: import("../util/endpoint").Endpoint, path: string, opts?: MkdirOptions | undefined) => Promise<void>;
export {};
