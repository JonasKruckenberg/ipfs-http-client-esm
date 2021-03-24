import { createCommand } from "../util/create-command";

interface FileStats {
    onlyHash?: boolean
    onlySize?: boolean
    withLocal?: boolean
}

export const stat = createCommand(async (execute, path:string, opts: FileStats = {}) => {
    const res = await execute('files/stat', {
        arg: path,
        ...opts
    }).then(res => res.json())

    return {
        blocks: res.Blocks,
        cumulativeSize: BigInt(res.CumulativeSize),
        hash: res.Hash,
        local: res.Local,
        size: BigInt(res.Size),
        sizeLocal: BigInt(res.SizeLocal),
        type: res.Type,
        withLocality: res.WithLocality
    }
})