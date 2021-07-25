interface ClientOptions {
    url?: string
    protocol?: string
    host?: string
    port?: number
    path?: string
    fetch?: typeof fetch
    timeout?: number | false
}

export interface Client {
    url: string
    fetch: (url: string, options: RequestInit & { timeout?: number | false }) => Promise<Response>
}

export function createClient(options: ClientOptions = {}): Client {
    const {
        protocol = 'http',
        host = 'localhost',
        port = 5001,
        path = 'api/v0',
        url = `${protocol}://${host}:${port}/${path}`,
        fetch: _fetch = globalThis.fetch,
        timeout = 5000
    } = options

    return {
        url,
        fetch: (url: string, options: RequestInit & { timeout?: number | false }) => {
            if (options.timeout === false || timeout === false) {
                return _fetch(url, options)
            } else {
                return Promise.race([
                    new Promise<never>((_, reject) => setTimeout(() => reject('Request timed out'), options.timeout || timeout)),
                    _fetch(url, options)
                ])
            }
        }
    }
}
