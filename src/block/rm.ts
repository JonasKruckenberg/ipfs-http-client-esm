import CID from "cids";
import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface BlockRemoveOptions {
    force?: boolean
}

export const rm = createCommand(async (execute, cid: CID | string, opts: BlockRemoveOptions = {}) => {
    const res = await execute('block/rm', { arg: cid, ...opts }).then(res => res.json())

    return lowercaseKeys(res)
})