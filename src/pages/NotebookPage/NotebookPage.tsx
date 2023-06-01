import React from "react";
import { NotebookNav } from "../../components/Notebook";
import { Outlet } from "react-router-dom";

const NotebookPage = () => {
    return (
        <div>
            <NotebookNav />
            <Outlet />
        </div>
    );
};

export default NotebookPage;
