import { query } from './query';
import { Client } from './client';
declare type IPFSFunction<O extends any[], R extends any> = (_query: ReturnType<typeof query>) => (...args: O) => Promise<R>;
export declare function configure<O extends any[], R = any>(fn: IPFSFunction<O, R>): (client: Client, ...args: O) => Promise<R>;
export {};
