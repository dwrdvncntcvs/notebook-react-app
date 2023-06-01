import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, NotebookProvider } from "./contexts";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <AuthProvider>
            <NotebookProvider>
                <App />
            </NotebookProvider>
        </AuthProvider>
    </BrowserRouter>
);
