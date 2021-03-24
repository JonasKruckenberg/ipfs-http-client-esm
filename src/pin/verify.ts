import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const verify = createCommand(async (execute) => {
    const res = await execute('pin/verify').then(res => res.json())

    return lowercaseKeys(res)
})