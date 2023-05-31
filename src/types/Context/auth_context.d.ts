import { SignInValues, SignUpValues } from "../Auth/auth";

type Token = string;

export interface AuthState {
    token: Token;
    isAuth: boolean;
}

export type ISignInAction = (values: SignInValues) => Promise<void>;

export type ISignUpAction = (values: SignUpValues) => Promise<void>;

export type AuthAction = { type: "SET_AUTH"; payload: Token };

export type AuthReducer = (state: AuthState, action: AuthAction) => AuthState;

export interface IAuthContext extends AuthState {
    signInAction: ISignInAction;
    signUpAction: ISignUpAction;
}
