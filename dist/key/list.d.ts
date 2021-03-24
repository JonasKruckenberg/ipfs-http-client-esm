interface KeyEntry {
    id: string;
    name: string;
}
export declare const list: (endpoint: import("../util/endpoint").Endpoint, verbose?: boolean | undefined) => Promise<KeyEntry[]>;
export {};
