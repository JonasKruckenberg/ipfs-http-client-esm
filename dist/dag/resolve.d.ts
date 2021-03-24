import CID from "cids";
export declare const resolve: (endpoint: import("../util/endpoint").Endpoint, path: string) => Promise<{
    cid: CID;
    remPath: any;
}>;
