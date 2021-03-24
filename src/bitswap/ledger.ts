import Multiaddr from "multiaddr";
import { createCommand } from "../util/create-command";

interface BitswapLedger {
    exchanged: BigInt
    peer: string
    recv: BigInt
    sent: BigInt
    value: number
}

export const ledger = createCommand(async (execute, peer: Multiaddr | string): Promise<BitswapLedger> => {
    const res = await execute('bitswap/ledger', { arg: peer }).then(res => res.json())

    return {
        exchanged: BigInt(res.exchanged),
        peer: res.peer,
        recv: BigInt(res.recv),
        sent: BigInt(res.sent),
        value: res.value
    }
})