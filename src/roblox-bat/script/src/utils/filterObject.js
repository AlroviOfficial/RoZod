"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterObject = void 0;
function filterObject(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => (v !== null) && v !== undefined));
}
exports.filterObject = filterObject;
