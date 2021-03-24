import { createCommand } from "../util/create-command";

export const update = createCommand(async (execute, oldPath: string, newPath: string, unpinOld: boolean = false) => {
    const params = new URLSearchParams()
    params.append('arg', oldPath)
    params.append('arg', newPath)
    params.append('unpin', unpinOld.toString())

    const { Pins } = await execute('pin/update', params).then(res => res.json())

    return Pins
})