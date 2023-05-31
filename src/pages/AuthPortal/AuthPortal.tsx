import React from "react";
import { Outlet } from "react-router-dom";
import scss from "./authPortal.module.scss";

const AuthPortal = () => {
    return (
        <div className={scss["portal-page-container"]}>
            <div className={scss["portal-form-container"]}>
                <Outlet />
            </div>
            <div className={scss["portal-wallpaper"]}></div>
        </div>
    );
};

export default AuthPortal;
