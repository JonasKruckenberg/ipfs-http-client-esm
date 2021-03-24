import CID from "cids";
import Multiaddr from "multiaddr";
import { createCommand } from "../util/create-command";

interface BitswapStats {
    blocksReceived: BigInt
    blocksSent: BigInt
    dataReceived: BigInt
    dataSent: BigInt
    dupBlksReceived: BigInt
    dupDataReceived: BigInt
    messagesReceived: BigInt
    peers: Multiaddr[]
    provideBufLen: number
    wantlist: CID[]
}

export const stat = createCommand(async (execute): Promise<BitswapStats> => {
    const res = await execute('bitswap/stat').then(res => res.json())

    return {
        blocksReceived: BigInt(res.BlocksReceived),
        blocksSent: BigInt(res.BlocksSent),
        dataReceived: BigInt(res.DataReceived),
        dataSent: BigInt(res.DataSent),
        dupBlksReceived: BigInt(res.DupBlksReceived),
        dupDataReceived: BigInt(res.DupDataReceived),
        messagesReceived: BigInt(res.MessagesReceived),
        peers: res.Peers.map((mu: string) => new Multiaddr(mu)),
        provideBufLen: res.ProvideBufLen,
        wantlist: res.Wantlist.map((cid: { '/': string }) => new CID(cid['/']))
    }
})