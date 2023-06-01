import React from "react";
import scss from "./notebookNav.module.scss";
import { useAuth } from "../../../contexts/Auth";
import { AppTitle } from "../../Common";
import { HiArrowCircleRight, HiOutlineBookOpen, HiPlus } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const NotebookNav = () => {
    const { signOutAction } = useAuth();

    return (
        <nav className={scss["notebook-nav-container"]}>
            <div className={scss["notebook-nav-header"]}>
                <AppTitle />
            </div>

            <div className={scss["notebook-nav-actions"]}>
                <NavLink to={"/"} className={scss["notebook-nav-btn"]}>
                    <HiPlus />
                </NavLink>
                <NavLink to={"/notebook-list"} className={scss["notebook-nav-btn"]}>
                    <HiOutlineBookOpen />
                </NavLink>
                <button
                    className={scss["notebook-nav-btn"]}
                    onClick={signOutAction}
                >
                    <HiArrowCircleRight />
                </button>
            </div>
        </nav>
    );
};

export default NotebookNav;
