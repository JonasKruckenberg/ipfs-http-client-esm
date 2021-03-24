import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const provide = createCommand(async (execute, key:string) => {
    const res = execute('dht/provide', { arg:key }).then(res => res.json())

    return lowercaseKeys(res)
})