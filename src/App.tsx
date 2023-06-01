import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { NotebookPage, SignInPage, SignUpPage } from "./pages";
import AuthPortal from "./pages/AuthPortal/AuthPortal";
import AuthGuard from "./routes/AuthGuard";
import PersistGuard from "./routes/PersistGuard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageModalOverlay } from "./components/Common";
import { CreateNotebook, NotebookList } from "./components/Notebook";

function App() {
    return (
        <>
            <Routes>
                <Route element={<AuthPortal />}>
                    <Route path="/sign-in" element={<SignInPage />} />
                    <Route path="/sign-up" element={<SignUpPage />} />
                </Route>
                <Route path="" element={<PersistGuard />}>
                    <Route element={<AuthGuard />}>
                        <Route path="/:notebookId?/" element={<NotebookPage />}>
                            <Route
                                path="notebook-list"
                                element={
                                    <PageModalOverlay>
                                        <NotebookList />
                                    </PageModalOverlay>
                                }
                            />
                            <Route
                                path="create"
                                element={
                                    <PageModalOverlay>
                                        <CreateNotebook />
                                    </PageModalOverlay>
                                }
                            />
                        </Route>
                    </Route>
                </Route>
            </Routes>
            <ToastContainer
                autoClose={1500}
                hideProgressBar={true}
                position="bottom-right"
                pauseOnHover={false}
            />
        </>
    );
}

export default App;
