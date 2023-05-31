import { Axios } from "axios";
import { SignInValues, SignUpValues } from "../../types/Auth/auth";
import { ErrorResponse, SuccessResponse } from "../../types/Api/api";
import { AuthToken } from "../../types/Api/auth";

export default class AuthAPI {
    private authUrl = (endpoint: string) => `auth${endpoint}`;

    constructor(private axiosClient: Axios) {}

    async signIn(values: SignInValues) {
        const { data, status } = await this.axiosClient.post(
            this.authUrl("/sign-in"),
            JSON.stringify(values)
        );

        const responseData = JSON.parse(data);

        if (status === 404) {
            responseData["status"] = status;
            const data = responseData as ErrorResponse<string>;
            throw data;
        }

        return responseData as SuccessResponse<AuthToken>;
    }

    async signUp(values: SignUpValues) {
        const response = await this.axiosClient.post(
            this.authUrl("/sign-up"),
            JSON.stringify({ user: values })
        );

        console.log(response);
    }
}
