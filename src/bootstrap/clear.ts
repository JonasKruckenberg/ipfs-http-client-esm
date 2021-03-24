import { createCommand } from "../util/create-command";

export const clear = createCommand(async (execute): Promise<string[]> => {
    const { Peers } = await execute('bootstrap/rm/all').then(res => res.json())

    return Peers
})