import { JSDOM as DOMParser } from "jsdom";
export { JSDOM as DOMParser } from "jsdom";
export declare const dntGlobalThis: Omit<typeof globalThis, "DOMParser"> & {
    DOMParser: typeof DOMParser;
};
