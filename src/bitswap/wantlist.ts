import CID from "cids";
import { createCommand } from "../util/create-command";

export const wantlist = createCommand(async (execute): Promise<CID[]> => {
    const { Keys } = await execute('bitswap/wantlist').then(res => res.json())

    return Keys.map((cid: { '/': string }) => new CID(cid['/']))
})