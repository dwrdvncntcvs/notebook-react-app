import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useReducer,
} from "react";
import { AuthAPI } from "../api";
import { axiosClient } from "../configs/axiosClient";
import {
    IAuthContext,
    AuthReducer,
    AuthState,
    ISignInAction,
    ISignUpAction,
} from "../types/Context/auth_context";

const authState: AuthState = {
    token: "",
    isAuth: false,
};

const AuthContext = createContext<IAuthContext>({
    ...authState,
    signInAction: async (_values) => {},
    signUpAction: async (_values) => {},
});

const authReducer: AuthReducer = (state, action) => {
    switch (action.type) {
        case "SET_AUTH":
            return {
                ...state,
                isAuth: !!action.payload,
                token: action.payload,
            };
        default:
            return state;
    }
};

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, authState);
    const authApi = new AuthAPI(axiosClient);

    const signInAction: ISignInAction = async (values) => {
        await authApi.signIn(values);
    };

    const signUpAction: ISignUpAction = async (values) => {
        await authApi.signUp(values);
    };

    return (
        <AuthContext.Provider value={{ ...state, signInAction, signUpAction }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
