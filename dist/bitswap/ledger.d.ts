import Multiaddr from "multiaddr";
interface BitswapLedger {
    exchanged: BigInt;
    peer: string;
    recv: BigInt;
    sent: BigInt;
    value: number;
}
export declare const ledger: (endpoint: import("../util/endpoint").Endpoint, peer: string | Multiaddr) => Promise<BitswapLedger>;
export {};
