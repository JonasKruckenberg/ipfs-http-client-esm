import CID from "cids";
import Multiaddr from "multiaddr";
export declare const wantlistForPeer: (endpoint: import("../util/endpoint").Endpoint, peer: string | Multiaddr) => Promise<CID[]>;
