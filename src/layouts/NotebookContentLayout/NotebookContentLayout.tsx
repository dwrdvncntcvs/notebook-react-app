import React, { FC, PropsWithChildren } from "react";
import scss from "./notebookContentLayout.module.scss";

interface NotebookContentLayoutProps extends PropsWithChildren {
    display: "flex" | "grid";
}

const NotebookContentLayout: FC<NotebookContentLayoutProps> = ({
    children,
    display,
}) => {
    return (
        <div className={scss[`notebook-content-${display}-layout`]}>
            {children}
        </div>
    );
};

export default NotebookContentLayout;
