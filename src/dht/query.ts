import Multiaddr from "multiaddr";
import { createCommand } from "../util/create-command";
import { lowercaseKeys } from "../util/lowercase-keys";

export const query = createCommand(async (execute, peer: string) => {
    const res = execute('dht/query', { arg: peer }).then(res => res.json())

    return lowercaseKeys(res)
})