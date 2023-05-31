import {
    FC,
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
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
import AuthStorage from "../services/AuthStorage";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ErrorResponse } from "../types/Api/api";

const authState: AuthState = {
    token: "",
    isAuth: false,
};

const AuthContext = createContext<IAuthContext>({
    ...authState,
    signInAction: async (_values) => {},
    signUpAction: async (_values) => {},
    signOutAction: () => {},
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
    const navigate = useNavigate();

    const authApi = new AuthAPI(axiosClient);
    const authStorage = new AuthStorage(localStorage);

    useEffect(() => {
        const token = authStorage.getToken();
        if (token) {
            dispatch({ type: "SET_AUTH", payload: token });
        }
    }, []);

    const signInAction: ISignInAction = async (values) => {
        try {
            const { data, message } = await authApi.signIn(values);
            authStorage.saveToken(data.token);
            dispatch({ type: "SET_AUTH", payload: data.token });
            toast.success(message);
            navigate("/", { replace: true });
        } catch (err) {
            const error = err as ErrorResponse<string>;
            toast.error(error.error);
        }
    };

    const signUpAction: ISignUpAction = async (values) => {
        const { message } = await authApi.signUp(values);
        toast.success(message);
        navigate("/sign-in", { replace: true });
    };

    const signOutAction = async () => {
        authStorage.removeToken();
        toast.success("Signed Out Successfully");
        navigate("/sign-in", { replace: true });
    };

    return (
        <AuthContext.Provider
            value={{ ...state, signInAction, signUpAction, signOutAction }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };
