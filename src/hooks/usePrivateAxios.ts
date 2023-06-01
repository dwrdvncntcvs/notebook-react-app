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
            (error) => Promise.reject(error)
        );

        const resInterceptor = axiosClient.interceptors.response.use(
            (response) => response,
            async (err) => {
                const previousReq = err?.config;

                if (err.response.status === 403 && !previousReq?.sent) {
                    const authStorage = new AuthStorage(localStorage);
                    previousReq.sent = true;
                    const newAccessToken = authStorage.getToken() as string;
                    previousReq.headers[
                        "Authorization"
                    ] = `Bearer ${newAccessToken}`;
                    return axiosClient.request(previousReq);
                }
                return Promise.reject(err);
            }
        );

        return () => {
            axiosClient.interceptors.request.eject(reqInterceptor);
            axiosClient.interceptors.response.eject(resInterceptor);
        };
    }, [isAuth]);

    return axiosClient;
};

export default usePrivateAxios;
