interface WriteOptions {
    offset: number
    create: boolean
    recursive: boolean
    cidVersion: number
    hash: string
}

function write(path:string, data:Uint8Array, options: WriteOptions) {}