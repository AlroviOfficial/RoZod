"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_SIGNATURE_ALGORITHM = exports.AUTH_TOKEN_SEPARATOR = exports.FETCH_TOKEN_METADATA_SELECTOR = exports.FETCH_TOKEN_METADATA_URL = exports.FETCH_TOKEN_URL = exports.TOKEN_HEADER_NAME = void 0;
exports.TOKEN_HEADER_NAME = "x-bound-auth-token";
exports.FETCH_TOKEN_URL = "https://apis.roblox.com/hba-service/v1/getServerNonce";
exports.FETCH_TOKEN_METADATA_URL = "https://www.roblox.com/reference/blank";
exports.FETCH_TOKEN_METADATA_SELECTOR = 'meta[name="hardware-backed-authentication-data"]';
exports.AUTH_TOKEN_SEPARATOR = "|";
exports.TOKEN_SIGNATURE_ALGORITHM = {
    name: "ECDSA",
    hash: { name: "SHA-256" }
};
