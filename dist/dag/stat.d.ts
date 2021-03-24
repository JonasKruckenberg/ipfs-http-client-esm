import CID from "cids";
export declare const stat: (endpoint: import("../util/endpoint").Endpoint, cid: string | CID) => Promise<{
    numBlocks: bigint;
    size: bigint;
}>;
