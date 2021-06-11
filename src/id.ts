import { createCommand } from "./util/create-command";

interface PeerInfo {
    Addresses: string[],
    AgentVersion: string,
    ID: string,
    ProtocolVersion: string,
    Protocols: string[],
    PublicKey: string
}

export const id = createCommand(async (execute): Promise<PeerInfo> => {
    return execute('id').then(res => res.json())
})