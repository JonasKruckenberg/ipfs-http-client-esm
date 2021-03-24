import { createCommand } from "../util/create-command";

interface RemoveOptions {
    force?: boolean
}

export const rm = createCommand(async (execute, path:string, opts: RemoveOptions = {}) => {
    await execute('files/rm',{ arg: path, ...opts })
})