import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const get = createCommand(async (execute, key: string) => {
    const res = await execute('dht/get', { arg: key }).then(res => res.json())

    return lowercaseKeys(res)
})