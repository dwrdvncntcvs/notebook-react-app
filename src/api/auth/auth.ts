import { Axios } from "axios";
import { SignInValues, SignUpValues } from "../../types/Auth/auth";

export default class AuthAPI {
    private authUrl = (endpoint: string) => `auth${endpoint}`;

    constructor(private axiosClient: Axios) {}

    async signIn(values: SignInValues) {
        const response = await this.axiosClient.post(
            this.authUrl("/sign-in"),
            JSON.stringify(values)
        );

        console.log(response);
    }

    async signUp(values: SignUpValues) {
        const response = await this.axiosClient.post(
            this.authUrl("/sign-up"),
            JSON.stringify({ user: values })
        );

        console.log(response);
    }
}
