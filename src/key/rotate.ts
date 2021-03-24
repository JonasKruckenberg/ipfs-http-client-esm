import { createCommand } from "../util/create-command";

export const rotate = createCommand(async (execute, oldKey:string) => {
    await execute('key/rotate', { oldkey: oldKey })
})