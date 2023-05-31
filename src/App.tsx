import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { NotebookPage, SignInPage, SignUpPage } from "./pages";
import { MainLayout } from "./layouts";
import AuthPortal from "./pages/AuthPortal/AuthPortal";
import AuthGuard from "./routes/AuthGuard";
import PersistGuard from "./routes/PersistGuard";

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route element={<AuthPortal />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
                <Route path="" element={<PersistGuard />}>
                    <Route element={<AuthGuard />}>
                        <Route path="/" element={<NotebookPage />} />
                    </Route>
                </Route>
            </Routes>
        </MainLayout>
    );
}

export default App;
