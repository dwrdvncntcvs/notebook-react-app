import React, { FC, PropsWithChildren } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";

const PageModal: FC<PropsWithChildren> = ({ children }) => {
    const navigate = useNavigate();

    const closeModal = () => {
        navigate(-1);
    };

    return (
        <>
            <Backdrop closeFn={closeModal} />
            <Modal>{children}</Modal>
        </>
    );
};

export default PageModal;
