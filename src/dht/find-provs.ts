import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface FindProvsOptions {
    'num-providers'?: number
}

export const findProvs = createCommand(async (execute, key: string, opts: FindProvsOptions = {}) => {
    const res = await execute('dht/findpeer', { 
        arg: key,
        ...opts
    }).then(res => res.json())

    return lowercaseKeys(res)
})