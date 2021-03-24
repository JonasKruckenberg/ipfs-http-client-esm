import { Endpoint } from './endpoint'
import { createExecute, Execute } from './execute'

type IPFSCommand<O extends any[], R extends any> = (execute: Execute, ...args: O) => Promise<R>

export function createCommand<O extends any[], R = any>(command: IPFSCommand<O, R>) {
    return (endpoint: Endpoint, ...args: O) => command(createExecute(endpoint), ...args)
}