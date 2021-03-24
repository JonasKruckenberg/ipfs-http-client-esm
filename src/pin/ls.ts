import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const ls = createCommand(async (execute, path: string, type?: string) => {
    const res = await execute('pin/ls', { arg: path, type }).then(res => res.json())

    lowercaseKeys(res)
})