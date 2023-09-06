"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCryptoKeyPairFromDB = exports.signWithKey = exports.arrayBufferToBase64String = exports.hashStringSha256 = void 0;
const constants_js_1 = require("./constants.js");
async function hashStringSha256(str) {
    const uint8 = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest(constants_js_1.TOKEN_SIGNATURE_ALGORITHM.hash.name, uint8);
    return arrayBufferToBase64String(hashBuffer);
}
exports.hashStringSha256 = hashStringSha256;
function arrayBufferToBase64String(arrayBuffer) {
    let res = "";
    const bytes = new Uint8Array(arrayBuffer);
    // can't just do new TextDecoder().decode(arrayBuffer) :(
    for (let i = 0; i < bytes.byteLength; i++) {
        res += String.fromCharCode(bytes[i]);
    }
    return btoa(res);
}
exports.arrayBufferToBase64String = arrayBufferToBase64String;
async function signWithKey(privateKey, data) {
    const bufferResult = await crypto.subtle.sign(constants_js_1.TOKEN_SIGNATURE_ALGORITHM, privateKey, new TextEncoder().encode(data).buffer);
    return arrayBufferToBase64String(bufferResult);
}
exports.signWithKey = signWithKey;
function getCryptoKeyPairFromDB(dbName, dbObjectName, dbObjectChildId) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(dbName, 1);
        request.onsuccess = () => {
            try {
                const db = request.result;
                const transaction = db.transaction(dbObjectName, "readonly");
                const objectStore = transaction.objectStore(dbObjectName);
                const get = objectStore.get(dbObjectChildId);
                get.onsuccess = () => {
                    resolve(get.result);
                };
                get.onerror = () => {
                    reject(request.error);
                };
                transaction.oncomplete = () => {
                    db.close();
                };
            }
            catch (err) {
                reject(err);
            }
        };
        request.onerror = () => {
            reject(request.error);
        };
    });
}
exports.getCryptoKeyPairFromDB = getCryptoKeyPairFromDB;
