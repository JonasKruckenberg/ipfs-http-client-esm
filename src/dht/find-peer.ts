import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const findPeer = createCommand(async (execute, peer:string) => {
    const res = await execute('dht/findpeer', { arg: peer }).then(res => res.json())

    return lowercaseKeys(res)
})