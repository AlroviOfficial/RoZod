import * as dntShim from "../../_dnt.shims.js";
// @ts-nocheck no
export function parseDOM(text) {
    return new dntShim.DOMParser(text).window.document;
}
