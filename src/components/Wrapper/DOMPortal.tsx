import React, { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";

interface DOMPortalPRops {
    elementId: string;
}

const DOMPortal: FC<PropsWithChildren & DOMPortalPRops> = ({
    children,
    elementId,
}) => {
    return ReactDOM.createPortal(
        children,
        document.getElementById(elementId) as HTMLDivElement
    );
};

export default DOMPortal;
