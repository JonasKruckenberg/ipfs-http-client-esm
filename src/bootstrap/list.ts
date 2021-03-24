import { createCommand } from "../util/create-command";

export const list = createCommand(async (execute): Promise<string[]> => {
    const { Peers } = await execute('bootstrap/list').then(res => res.json())

    return Peers
})