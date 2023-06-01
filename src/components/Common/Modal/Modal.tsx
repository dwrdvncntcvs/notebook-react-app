import React, { FC, PropsWithChildren } from "react";
import { DOMPortal } from "../../Wrapper";
import scss from "./modal.module.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
    return (
        <DOMPortal elementId="modal-root">
            <div className={scss["modal"]}>{children}</div>
        </DOMPortal>
    );
};

export default Modal;
