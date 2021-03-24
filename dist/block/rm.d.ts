import CID from "cids";
interface BlockRemoveOptions {
    force?: boolean;
}
export declare const rm: (endpoint: import("../util/endpoint").Endpoint, cid: string | CID, opts?: BlockRemoveOptions | undefined) => Promise<Record<string, any>>;
export {};
