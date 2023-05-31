import React from "react";
import { useAuth } from "../../contexts/Auth";

const NotebookPage = () => {
    const { signOutAction } = useAuth();

    return (
        <div>
            <h1>Notebook Page</h1>
            <button onClick={signOutAction}>Sign Out</button>
        </div>
    );
};

export default NotebookPage;
