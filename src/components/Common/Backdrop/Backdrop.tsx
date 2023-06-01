import React, { FC } from "react";
import { DOMPortal } from "../../Wrapper";
import scss from "./backdrop.module.scss";

interface BackdropProps {
    closeFn: () => void;
}

const Backdrop: FC<BackdropProps> = ({ closeFn }) => {
    return (
        <DOMPortal elementId="backdrop-root">
            <div className={scss["backdrop"]} onClick={closeFn}></div>
        </DOMPortal>
    );
};

export default Backdrop;
