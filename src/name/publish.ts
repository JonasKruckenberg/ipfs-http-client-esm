import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

interface IPNSPublishOptions {
    resolve?: boolean
    lifetime?: string
    allowOffline?: boolean
    ttl?: string
    key?: string
    ipnsBase?: string
}

export const publish = createCommand(async (execute, path: string, opts: IPNSPublishOptions = {}) => {
    const res = await execute('name/publish', {
        arg: path,
        ...opts,
        'allow-offline': opts.allowOffline,
        'ipns-base': opts.ipnsBase
    })

    return lowercaseKeys(res)
})