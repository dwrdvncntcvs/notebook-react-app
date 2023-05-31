import React from "react";
import { useAuth } from "../contexts/Auth";
import { Navigate, Outlet } from "react-router-dom";

const AuthGuard = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to={"/sign-in"} />;
};

export default AuthGuard;
