import { createCommand } from "../util/create-command";

export const cp = createCommand(async (execute, source: string, dest: string) => {
    const params = new URLSearchParams()
    params.append('arg', source)
    params.append('arg', dest)

    await execute('files/cp', params)
})