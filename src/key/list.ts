import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface KeyEntry {
    id:string
    name:string
}

export const list = createCommand(async (execute, verbose?: boolean): Promise<KeyEntry[]> => {
    const { Keys } = await execute('key/list',{ l: verbose }).then(res => res.json())

    return Keys.map(lowercaseKeys)
})