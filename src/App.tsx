import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { NotebookPage, SignInPage, SignUpPage } from "./pages";
import { MainLayout } from "./layouts";
import AuthPortal from "./pages/AuthPortal/AuthPortal";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route element={<AuthPortal />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
                <Route path="/" element={<NotebookPage />} />
            </Routes>
        </MainLayout>
    );
}

export default App;
