import React from "react";
import { NavLink } from "react-router-dom";

const NotebookPage = () => {
    return (
        <div>
            NotebookPage
            <NavLink to={"/sample"}>NAvigate</NavLink>
        </div>
    );
};

export default NotebookPage;
