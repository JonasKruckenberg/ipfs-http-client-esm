import { createCommand } from "../util/create-command";

export const add = createCommand(async (execute, peer: string): Promise<string[]> => {
    const { Peers } = await execute('bootstrap/add', { arg: peer }).then(res => res.json())

    return Peers
})