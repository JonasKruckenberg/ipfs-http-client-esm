import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const rename = createCommand(async (execute, oldName: string, newName: string) => {
    const params = new URLSearchParams()
    params.append('arg', oldName)
    params.append('arg', newName)

    const res = await execute('key/rename', params).then(res => res.json())

    return lowercaseKeys(res)
})