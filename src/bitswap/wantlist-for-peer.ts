import CID from "cids";
import Multiaddr from "multiaddr";
import { createCommand } from "../util/create-command";

export const wantlistForPeer = createCommand(async (execute, peer: Multiaddr | string): Promise<CID[]> => {
    const { Keys } = await execute('bitswap/wantlist', { peer }).then(res => res.json())

    return Keys.map((cid: { '/': string }) => new CID(cid['/']))
})