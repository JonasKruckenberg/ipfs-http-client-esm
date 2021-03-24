import CID from "cids";
import { createCommand } from "../util/create-command";

export const rm = createCommand(async (execute, cid: CID | string): Promise<string[]> => {
    const { Peers } = await execute('bootstrap/rm', { arg: cid }).then(res => res.json())

    return Peers
})