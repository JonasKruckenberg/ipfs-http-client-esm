import CID from "cids";
import { createCommand } from "./util/create-command";


export const cat = createCommand(async (execute, path: string | CID, offset: number, length: number): Promise<string> => {
    return execute('cat', { arg: path, offset, length }).then(res => res.text())
})