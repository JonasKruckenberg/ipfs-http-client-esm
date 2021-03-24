import CID from "cids";
import Multiaddr from "multiaddr";
interface BitswapStats {
    blocksReceived: BigInt;
    blocksSent: BigInt;
    dataReceived: BigInt;
    dataSent: BigInt;
    dupBlksReceived: BigInt;
    dupDataReceived: BigInt;
    messagesReceived: BigInt;
    peers: Multiaddr[];
    provideBufLen: number;
    wantlist: CID[];
}
export declare const stat: (endpoint: import("../util/endpoint").Endpoint) => Promise<BitswapStats>;
export {};
