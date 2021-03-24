interface CreateClientOptions {
    url?: string;
    protocol?: string;
    host?: string;
    port?: number;
    path?: string;
    fetch?: typeof fetch;
    timeout?: number;
}
export interface Client {
    url: string;
    fetch: (url: string, options: RequestInit & {
        timeout?: number;
    }) => Promise<Response>;
}
export declare function createClient(options?: CreateClientOptions): Client;
export {};
