import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import React, { FC } from "react";
import {
    AuthSubmit,
    AuthValidation,
    InputFields,
    InputValues,
} from "../../../types/Auth/auth";

interface AuthFormProps {
    initialValues: InputValues;
    submitHandler: AuthSubmit<InputValues>;
    inputFields: InputFields[];
    title: string;
    buttonLabel: string;
    validationSchema: AuthValidation;
}

const AuthForm: FC<AuthFormProps> = ({
    initialValues,
    submitHandler,
    inputFields,
    title,
    buttonLabel,
    validationSchema,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            <Form>
                <h1>{title}</h1>
                {inputFields.map(({ label, name, type, placeholder }) => (
                    <div key={name}>
                        <label htmlFor={name}>{label}</label>
                        <Field
                            id={name}
                            name={name}
                            type={type}
                            placeholder={placeholder}
                        />
                        <ErrorMessage name={name} />
                    </div>
                ))}
                <button type="submit">{buttonLabel}</button>
            </Form>
        </Formik>
    );
};

export default AuthForm;
