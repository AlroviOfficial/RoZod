"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HBAClient = void 0;
const dntShim = __importStar(require("../_dnt.shims.js"));
const constants_js_1 = require("./utils/constants.js");
const crypto_js_1 = require("./utils/crypto.js");
const filterObject_js_1 = require("./utils/filterObject.js");
const parseDOM_node_js_1 = require("./utils/parseDOM.node.js");
/**
 * Hardware-backed authentication client. This handles generating the headers required.
 */
class HBAClient {
    /**
     * General fetch wrapper for the client. Not for general public use.
     * @param url - The target URL
     * @param params - The request parameters
     */
    fetch(url, params) {
        let headers = (0, filterObject_js_1.filterObject)(this.headers);
        if (params?.headers) {
            let headerParams = {};
            if (params.headers instanceof Headers || Array.isArray(params.headers)) {
                // @ts-ignore: fine
                headerParams = Object.fromEntries(params.headers);
            }
            else {
                headerParams = params.headers;
            }
            headers = {
                ...headers,
                ...headerParams
            };
        }
        const init = {
            ...params,
            headers
        };
        if (this.onSite) {
            // @ts-ignore: just incase ts is annoying
            init.credentials = "include";
        }
        return (this._fetchFn ?? fetch)(url, init);
    }
    /**
     * Generate the base headers required, it may be empty or only include `x-bound-auth-token`
     * @param requestUrl - The target request URL, will be checked if it's supported for HBA.
     * @param body - The request body. If the method does not support a body, leave it undefined.
     */
    async generateBaseHeaders(requestUrl, body) {
        if (!await this.isUrlIncludedInWhitelist(requestUrl)) {
            return {};
        }
        const token = await this.generateBAT(body);
        if (!token) {
            return {};
        }
        return {
            [constants_js_1.TOKEN_HEADER_NAME]: token
        };
    }
    /**
     * Get HBA token metadata.
     * @param uncached - Whether it should fetch uncached.
     */
    async getTokenMetadata(uncached) {
        if (!uncached && await this.cachedTokenMetadata) {
            return this.cachedTokenMetadata;
        }
        const promise = (async () => {
            let doc;
            if (uncached || !("document" in dntShim.dntGlobalThis) || !document.querySelector(constants_js_1.FETCH_TOKEN_METADATA_SELECTOR)) {
                const res = await this.fetch(constants_js_1.FETCH_TOKEN_METADATA_URL).then(res => res.text());
                doc = (0, parseDOM_node_js_1.parseDOM)(res);
            }
            else {
                doc = document;
            }
            const el = doc?.querySelector(constants_js_1.FETCH_TOKEN_METADATA_SELECTOR);
            if (!el) {
                return null;
            }
            const isSecureAuthenticationIntentEnabled = el.getAttribute("data-is-secure-authentication-intent-enabled") === "true";
            const isBoundAuthTokenEnabled = el.getAttribute("data-is-bound-auth-token-enabled") === "true";
            const boundAuthTokenWhitelist = JSON.parse(el.getAttribute("data-bound-auth-token-whitelist")).Whitelist.map((item) => ({
                ...item,
                sampleRate: Number(item.sampleRate)
            }));
            const boundAuthTokenExemptlist = JSON.parse(el.getAttribute("data-bound-auth-token-exemptlist")).Exemptlist;
            const hbaIndexedDbName = el.getAttribute("data-hba-indexed-db-name");
            const hbaIndexedDbObjStoreName = el.getAttribute("data-hba-indexed-db-obj-store-name");
            const tokenMetadata = {
                isSecureAuthenticationIntentEnabled,
                isBoundAuthTokenEnabled,
                boundAuthTokenWhitelist,
                boundAuthTokenExemptlist,
                hbaIndexedDbName,
                hbaIndexedDbObjStoreName
            };
            this.cachedTokenMetadata = tokenMetadata;
            return tokenMetadata;
        })();
        this.cachedTokenMetadata = promise;
        return promise;
    }
    /**
     * Fetch the public-private crypto key pair from the indexed DB store.
     * @param uncached - Whether it should fetch uncached.
     * @returns
     */
    async getCryptoKeyPair(uncached) {
        if (this.suppliedCryptoKeyPair) {
            return this.suppliedCryptoKeyPair;
        }
        if (!uncached && await this.cryptoKeyPair) {
            return this.cryptoKeyPair;
        }
        const promise = (async () => {
            const metadata = await this.getTokenMetadata(uncached);
            if (!metadata) {
                return null;
            }
            try {
                const pair = await (0, crypto_js_1.getCryptoKeyPairFromDB)(metadata.hbaIndexedDbName, metadata.hbaIndexedDbObjStoreName, this.targetId);
                this.cryptoKeyPair = pair ?? undefined;
                return pair;
            }
            catch {
                this.cryptoKeyPair = undefined;
                return null;
            }
        })();
        this.cryptoKeyPair = promise;
        return promise;
    }
    /**
     * Generate the bound auth token given a body.
     * @param body - The request body. If the method does not support a body, leave it undefined.
     */
    async generateBAT(body) {
        const pair = await this.getCryptoKeyPair();
        if (!pair?.privateKey) {
            return null;
        }
        const timestamp = Math.floor(Date.now() / 1000).toString();
        let strBody;
        if (typeof body === "object") {
            strBody = JSON.stringify(body);
        }
        else if (typeof body === "string") {
            strBody = body;
        }
        const hashedBody = await (0, crypto_js_1.hashStringSha256)(strBody);
        const payloadToSign = [hashedBody, timestamp].join(constants_js_1.AUTH_TOKEN_SEPARATOR);
        const signature = await (0, crypto_js_1.signWithKey)(pair.privateKey, payloadToSign);
        return [hashedBody, timestamp, signature].join(constants_js_1.AUTH_TOKEN_SEPARATOR);
    }
    /**
     * Check whether the URL is supported for bound auth tokens.
     * @param url - The target URL.
     */
    async isUrlIncludedInWhitelist(url) {
        if (!url.includes(".roblox.com")) {
            return false;
        }
        if (this.onSite && globalThis?.location?.href) {
            try {
                const targetUrl = new URL(url, location.href);
                if (!targetUrl.href.includes(".roblox.com")) {
                    return false;
                }
            }
            catch { /* empty */ }
        }
        const metadata = await this.getTokenMetadata();
        return !!metadata?.isBoundAuthTokenEnabled && metadata.boundAuthTokenWhitelist.some(item => url.includes(item.apiSite) && (Math.floor(Math.random() * 100) < item.sampleRate)) && !metadata.boundAuthTokenExemptlist.some(item => url.includes(item.apiSite));
    }
    constructor({ fetch, headers, cookie, targetId, onSite, keys } = {}) {
        Object.defineProperty(this, "_fetchFn", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cookie", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "targetId", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: ""
        });
        Object.defineProperty(this, "cachedTokenMetadata", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "headers", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: {}
        });
        Object.defineProperty(this, "cryptoKeyPair", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "onSite", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: false
        });
        Object.defineProperty(this, "suppliedCryptoKeyPair", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        if (fetch) {
            this._fetchFn = fetch;
        }
        if (headers) {
            // @ts-ignore: fine
            this.headers = headers instanceof Headers ? Object.fromEntries(headers.entries()) : headers;
        }
        if (cookie) {
            this.cookie = cookie;
        }
        if (onSite) {
            this.onSite = onSite;
        }
        if (keys) {
            this.suppliedCryptoKeyPair = keys;
        }
        const setCookie = cookie ?? globalThis?.document?.cookie;
        if (targetId) {
            this.targetId = targetId;
        }
        else if (setCookie) {
            const btid = setCookie.match(/browserid=(\d+)/i)?.[1];
            if (btid) {
                this.targetId = btid;
            }
        }
    }
}
exports.HBAClient = HBAClient;
