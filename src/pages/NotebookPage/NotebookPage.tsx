import React from "react";
import { NoNotebookSelected, NotebookNav } from "../../components/Notebook";
import { Outlet, useParams } from "react-router-dom";
import { NotebookContentLayout, NotebookLayout } from "../../layouts";

const NotebookPage = () => {
    const params = useParams();

    return (
        <NotebookLayout>
            <NotebookNav />
            {params?.notebookId ? (
                <NotebookContentLayout display="grid">
                    <section>First</section>
                    <section>Second</section>
                </NotebookContentLayout>
            ) : (
                <NotebookContentLayout display="flex">
                    <NoNotebookSelected />
                </NotebookContentLayout>
            )}
            <Outlet />
        </NotebookLayout>
    );
};

export default NotebookPage;
