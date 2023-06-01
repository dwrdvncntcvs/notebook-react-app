import React from "react";
import scss from "./createNotebook.module.scss";
import NotebookForm from "../NotebookForm/NotebookForm";
import {
    NotebookSubmitHandler,
    NotebookValues,
} from "../../../types/Notebooks/notebook";
import { useNotebook } from "../../../contexts/Notebook";

const cn = "c-n";

const initialValues: NotebookValues = {
    name: "",
};

const CreateNotebook = () => {
    const { createNotebook } = useNotebook();

    const submitHandler: NotebookSubmitHandler = async (values, helpers) => {
        await createNotebook(values);
        helpers.resetForm();
    };

    return (
        <div className={scss[`${cn}-container`]}>
            <NotebookForm
                initialValues={initialValues}
                submitHandler={submitHandler}
            />
        </div>
    );
};

export default CreateNotebook;
