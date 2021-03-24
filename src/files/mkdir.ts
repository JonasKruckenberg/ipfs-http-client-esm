import { createCommand } from "../util/create-command";

interface MkdirOptions {
    recursive?: boolean
    cidVersion?: number
    hashAlg?: string
}

export const mkdir = createCommand(async (execute, path:string, opts: MkdirOptions = {}) => {
    await execute('files/mkdir', {
        arg: path,
        parents: opts.recursive,
        'cid-version': opts.cidVersion,
        hash: opts.hashAlg
    })
})