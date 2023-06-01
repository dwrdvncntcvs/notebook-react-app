import { axiosClient } from "../configs/axiosClient";
import { useAuth } from "../contexts/Auth";
import AuthStorage from "../services/AuthStorage";
import { useEffect } from "react";

const usePrivateAxios = () => {
    const { isAuth } = useAuth();
    useEffect(() => {
        const token = new AuthStorage(localStorage).getToken();
        const reqInterceptor = axiosClient.interceptors.request.use(
            (config) => {
                if (!config?.headers?.Authorization) {
                    config.headers["Authorization"] = `Bearer ${token}`;
                }
                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            axiosClient.interceptors.request.eject(reqInterceptor);
        };
    }, [isAuth]);

    return axiosClient;
};

export default usePrivateAxios;
