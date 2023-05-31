import { SignUpSchema, SignInSchema } from "../../validations/auth";
import * as Yup from "yup";
import { FormikHelpers } from "formik";

interface AuthValues {
    username: string;
    password;
}

export interface SignInValues extends AuthValues {}

export interface SignUpValues extends AuthValues {
    first_name: string;
    last_name: string;
    email: string;
    password_check: string;
}

export interface InputFields {
    label: string;
    type: string;
    name: string;
    placeholder: string;
}

export type InputValues = SignInValues | SignUpValues;

export type AuthValidation = typeof SignInSchema | typeof SignUpSchema;

export type AuthSubmit<T> = (
    values: T,
    helpers: FormikHelpers<T>
) => void | Promise<void>;
