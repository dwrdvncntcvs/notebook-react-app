import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { FC, useState } from "react";
import {
    AuthSubmit,
    AuthValidation,
    InputFields,
    InputValues,
} from "../../../types/Auth/auth";
import scss from "./authForm.module.scss";
import { HiEye, HiEyeOff } from "react-icons/hi";

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
    const [fields, setFields] = useState(inputFields);

    const isPasswordField = (name: string) => /password/.test(name);

    const togglePassword = () => () => {
        setFields((prev) =>
            prev.map((field) => {
                if (!isPasswordField(field.name)) return field;

                return field.type === "password"
                    ? { ...field, type: "text" }
                    : { ...field, type: "password" };
            })
        );
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitHandler}
        >
            <Form className={scss["form"]}>
                <h1>{title}</h1>
                <div className={scss["form-body"]}>
                    {fields.map(({ label, name, type, placeholder }) => (
                        <div key={name} className={scss["form-control"]}>
                            <label htmlFor={name}>{label}</label>
                            <div className={`${scss["input-container"]} `}>
                                <Field
                                    id={name}
                                    name={name}
                                    type={type}
                                    placeholder={placeholder}
                                />
                                {isPasswordField(name) ? (
                                    <div
                                        className={scss["password-toggle"]}
                                        onClick={togglePassword()}
                                    >
                                        {type === "password" ? (
                                            <HiEye />
                                        ) : (
                                            <HiEyeOff />
                                        )}
                                    </div>
                                ) : null}
                            </div>
                            <p id={scss["error-message"]}>
                                <ErrorMessage name={name} />
                            </p>
                        </div>
                    ))}
                </div>
                <button type="submit">{buttonLabel}</button>
            </Form>
        </Formik>
    );
};

export default AuthForm;
