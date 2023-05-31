import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import scss from "./appTitle.module.scss";

const AppTitle = () => {
    return (
        <div>
            <h1 className={scss["title"]}>
                Noteb
                <HiOutlineBookOpen />k
            </h1>
        </div>
    );
};

export default AppTitle;
