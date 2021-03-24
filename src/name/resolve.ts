import { createCommand } from "../util/create-command";

interface IPNSResolveOptions {
    nocache?: boolean
    dhtRecordCount?: number
    dhtTimeout?: string
}

export const resolve = createCommand(async (execute, path: string, opts: IPNSResolveOptions = {}) => {
    const { Path } = await execute('name/resolve', {
        arg: path,
        nocache: opts.nocache,
        'dht-record-count': opts.dhtRecordCount,
        'dht-timeout': opts.dhtTimeout
    }).then(res => res.json())

    return Path
})