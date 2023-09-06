export function filterObject(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => (v !== null) && v !== undefined));
}
