import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const rm = createCommand(async (execute, name: string) => {
    const { Keys } = await execute('key/rm',{ arg: name }).then(res => res.json())

    return lowercaseKeys(Keys[0])
})