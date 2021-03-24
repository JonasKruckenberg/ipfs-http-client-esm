import { createCommand } from "../util/create-command";

export const flush = createCommand(async (execute, path: string) => {
    await execute('files/flush',{ arg: path })
})