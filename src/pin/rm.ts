import { createCommand } from "../util/create-command";

export const rm = createCommand(async (execute,path:string) => {
    const { Pins } = await execute('pin/rm',{ arg: path }).then(res => res.json())

    return Pins
})