import CID from "cids";
import { createCommand } from "../util/create-command";

export const stat = createCommand(async (execute, cid: CID | string) => {
    const res = await execute('dag/stat', { arg: cid }).then(res => res.json())

    return {
        numBlocks: BigInt(res.NumBlocks),
        size: BigInt(res.Size)
    }
})