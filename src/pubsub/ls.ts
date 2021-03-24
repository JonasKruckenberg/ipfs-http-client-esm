import { createCommand } from "../util/create-command";

export const ls = createCommand(async (execute) => {
    const { Strings } = await execute('pubsub/ls').then(res => res.json())

    return Strings
})