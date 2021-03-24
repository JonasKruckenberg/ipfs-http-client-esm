import { createCommand } from "../util/create-command";

export const reprovide = createCommand(async (execute) => {
    await execute('bitswap/reprovide')
})