/// <reference types="node" />
import events from "events";
export declare class ProxyFinalResponseFilter extends events.EventEmitter {
    writable: boolean;
    write: any;
    end: any;
    constructor(proxy: any, ctx: any);
}
