import { createCommand } from "../util/create-command";

export const chcid = createCommand(async (execute, path: string, cidVersion?: number, hashAlg?: string) => {
    await execute('files/chcid', { path, 'cid-version': cidVersion, hash: hashAlg })
})