import { axiosClient } from "../configs/axiosClient";
import { useAuth } from "../contexts/Auth";
import AuthStorage from "../services/AuthStorage";
import { useEffect } from "react";

const usePrivateAxios = () => {
    const { isAuth, token } = useAuth();
    useEffect(() => {
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

        const resInterceptor = axiosClient.interceptors.response.use(
            (res) => {
                const token = new AuthStorage(localStorage).getToken();

                if (res.status === 400) {
                    res.config.headers["Authorization"] = `Bearer ${token}`;
                    return axiosClient.request(res.config);
                }

                return res;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        return () => {
            if (token) {
                axiosClient.interceptors.request.eject(reqInterceptor);
                axiosClient.interceptors.response.eject(resInterceptor);
            }
        };
    }, [isAuth, token]);

    return axiosClient;
};

export default usePrivateAxios;
