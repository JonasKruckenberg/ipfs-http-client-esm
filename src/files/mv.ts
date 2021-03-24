import { createCommand } from "../util/create-command";

export const mv = createCommand(async (execute, source: string, dest: string) => {
    const params = new URLSearchParams()
    params.append('arg', source)
    params.append('arg', dest)

    await execute('files/mv', params)
})