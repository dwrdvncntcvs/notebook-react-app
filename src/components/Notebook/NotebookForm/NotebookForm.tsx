import React, { FC } from "react";
import scss from "./notebookForm.module.scss";
import { Field, Form, Formik } from "formik";
import {
    NotebookSubmitHandler,
    NotebookValues,
} from "../../../types/Notebooks/notebook";

const nf = "n-f";

interface NotebookFormProps {
    initialValues: NotebookValues;
    submitHandler: NotebookSubmitHandler;
}

const NotebookForm: FC<NotebookFormProps> = ({
    initialValues,
    submitHandler,
}) => {
    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            <Form className={scss[`${nf}-form`]}>
                <h1>Create Notebook</h1>
                <div className={scss[`${nf}-input`]}>
                    <Field name="name" placeholder="Enter Notebook Name" />
                </div>
                <button type="submit">Create</button>
            </Form>
        </Formik>
    );
};

export default NotebookForm;
