import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface KeygenOptions {
    type?:string
    size?: number
    ipnsBase?: string
}

export const gen = createCommand(async (execute, name:string, opts: KeygenOptions = {}) => {
    const res = await execute('key/gen', { arg: name, ...opts }).then(res => res.json())

    return lowercaseKeys(res)
})