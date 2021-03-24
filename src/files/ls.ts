import CID from "cids";
import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface Entry {
    cid: CID
    name: string
    size: BigInt
    type: number

}

export const ls = createCommand(async (execute, path:string) => {
    const { Entries } = await execute('files/ls', { arg: path }).then(res => res.json())

    return Entries.map(lowercaseKeys)
})