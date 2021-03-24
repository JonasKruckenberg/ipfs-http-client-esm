import { Client } from './client';
export interface QueryOptions extends RequestInit {
    timeout?: number;
}
export declare function query(client: Client): (action: string, params?: string | Record<string, any> | undefined, opts?: QueryOptions | undefined) => Promise<Response>;
