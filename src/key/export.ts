import { createCommand } from "../util/create-command";

export const exportKey = createCommand(async (execute, name: string, outputPath: string) => {
    await execute('key/export', { arg: name, output: outputPath })
})