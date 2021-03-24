import { Endpoint } from './endpoint';
import { Execute } from './execute';
declare type IPFSCommand<O extends any[], R extends any> = (execute: Execute, ...args: O) => Promise<R>;
export declare function createCommand<O extends any[], R = any>(command: IPFSCommand<O, R>): (endpoint: Endpoint, ...args: O) => Promise<R>;
export {};
