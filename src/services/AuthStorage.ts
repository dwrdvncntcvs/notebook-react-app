import { Token } from "../types/Context/auth_context";

type IAuthStorage = typeof localStorage | typeof sessionStorage;

export default class AuthStorage {
    private tokenName = "a-t";

    constructor(private storage: IAuthStorage) {}

    saveToken(token: Token) {
        this.storage.setItem(this.tokenName, token);
    }

    getToken() {
        return this.storage.getItem(this.tokenName);
    }

    removeToken() {
        this.storage.removeItem(this.tokenName);
    }
}
