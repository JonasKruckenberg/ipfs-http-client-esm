import { Endpoint } from './endpoint';
export interface ExecuteOptions extends RequestInit {
    timeout?: number | false;
}
export declare type Execute = (action: string, params?: Record<string, any> | URLSearchParams, options?: ExecuteOptions) => Promise<Response>;
export declare const createExecute: (endpoint: Endpoint) => Execute;
