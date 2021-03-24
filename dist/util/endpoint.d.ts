interface ClientOptions {
    url?: string;
    protocol?: string;
    host?: string;
    port?: number;
    path?: string;
    fetch?: typeof fetch;
    timeout?: number | false;
}
export interface Endpoint {
    url: string;
    fetch: (url: string, options: RequestInit & {
        timeout?: number | false;
    }) => Promise<Response>;
}
export declare function createClient(options?: ClientOptions): Endpoint;
export {};
