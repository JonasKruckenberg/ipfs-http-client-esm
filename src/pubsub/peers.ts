import { createCommand } from "../util/create-command";

export const peers = createCommand(async (execute) => {
    const { Strings } = await execute('pubsub/peers').then(res => res.json())

    return Strings
})