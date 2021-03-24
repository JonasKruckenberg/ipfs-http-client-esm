import CID from "cids";
import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const stat = createCommand(async (execute, cid: CID | string) => {
    const res = await execute('block/stat', { arg: cid }).then(res => res.json())

    return lowercaseKeys(res)
})