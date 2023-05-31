import React from "react";
import { Outlet } from "react-router-dom";
import scss from "./authPortal.module.scss";
import { AppTitle } from "../../components/Common";

const AuthPortal = () => {
    return (
        <div className={scss["portal-page-container"]}>
            <div className={scss["portal-form-container"]}>
                <Outlet />
            </div>
            <div className={scss["portal-wallpaper"]}>
                <AppTitle />
            </div>
        </div>
    );
};

export default AuthPortal;
