export declare const TOKEN_HEADER_NAME = "x-bound-auth-token";
export declare const FETCH_TOKEN_URL = "https://apis.roblox.com/hba-service/v1/getServerNonce";
export declare const FETCH_TOKEN_METADATA_URL = "https://www.roblox.com/reference/blank";
export declare const FETCH_TOKEN_METADATA_SELECTOR = "meta[name=\"hardware-backed-authentication-data\"]";
export declare const AUTH_TOKEN_SEPARATOR = "|";
export declare const TOKEN_SIGNATURE_ALGORITHM: EcdsaParams & {
    hash: {
        name: string;
    };
};
