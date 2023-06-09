import React from "react";
import scss from "./notebookNav.module.scss";
import { useAuth } from "../../../contexts/Auth";
import { AppTitle } from "../../Common";
import { HiArrowCircleRight, HiOutlineBookOpen, HiPlus } from "react-icons/hi";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const NotebookNav = () => {
    const { signOutAction } = useAuth();
    const navigate = useNavigate();

    const params = useParams();

    const notebookId = params.notebookId ? `/${params.notebookId}` : "";

    return (
        <nav className={scss["notebook-nav-container"]}>
            <div className={scss["notebook-nav-header"]}>
                <span onClick={() => navigate("/")}>
                    <AppTitle />
                </span>
            </div>

            <div className={scss["notebook-nav-actions"]}>
                <NavLink
                    to={`${notebookId}/create`}
                    className={scss["notebook-nav-btn"]}
                >
                    <HiPlus />
                </NavLink>
                <NavLink
                    to={`${notebookId}/notebook-list`}
                    className={scss["notebook-nav-btn"]}
                >
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
