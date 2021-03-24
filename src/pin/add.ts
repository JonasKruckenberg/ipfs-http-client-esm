import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const add = createCommand(async (execute, path: string) => {
    const res = await execute('pin/add', { arg:path }).then(res => res.json())

    return lowercaseKeys(res)
})