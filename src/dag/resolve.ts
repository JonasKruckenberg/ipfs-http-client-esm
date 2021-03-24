import CID from "cids";
import { createCommand } from "../util/create-command";

export const resolve = createCommand(async (execute, path: string) => {
    const res = await execute('dag/resolve', { arg: path }).then(res => res.json())

    return {
        cid: new CID(res.Cid['/']),
        remPath: res.RemPath
    }
})