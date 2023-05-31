import React from "react";
import scss from "./notebookNav.module.scss";
import { useAuth } from "../../../contexts/Auth";
import { AppTitle } from "../../Common";
import { HiArrowCircleRight, HiOutlineBookOpen, HiPlus } from "react-icons/hi";

const NotebookNav = () => {
    const { signOutAction } = useAuth();

    return (
        <nav className={scss["notebook-nav-container"]}>
            <div className={scss["notebook-nav-header"]}>
                <AppTitle />
            </div>

            <div className={scss["notebook-nav-actions"]}>
                <button>
                    <HiPlus />
                </button>
                <button>
                    <HiOutlineBookOpen />
                </button>
                <button onClick={signOutAction}>
                    <HiArrowCircleRight />
                </button>
            </div>
        </nav>
    );
};

export default NotebookNav;
