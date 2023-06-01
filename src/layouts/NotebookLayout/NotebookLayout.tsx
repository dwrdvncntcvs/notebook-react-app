import React, { FC, PropsWithChildren } from "react";
import scss from "./notebookLayout.module.scss";

const NotebookLayout: FC<PropsWithChildren> = ({ children }) => {
    return <main className={scss["notebook-layout"]}>{children}</main>;
};

export default NotebookLayout;
