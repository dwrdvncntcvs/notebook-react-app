import { object, string, ref } from "yup";

const MINIMUM_USERNAME_LENGTH = 8;

const SignInSchema = object({
    username: string()
        .required("Username can't be empty.")
        .min(
            MINIMUM_USERNAME_LENGTH,
            `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters`
        ),
    password: string().required("Password can't be empty."),
});

const SignUpSchema = object({
    first_name: string().required("First name can't be empty."),
    last_name: string().required("Last name can't be empty."),
    username: string()
        .required("Username can't be empty.")
        .min(
            MINIMUM_USERNAME_LENGTH,
            `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters`
        ),
    email: string().required("Email can't be empty.").email("Invalid Email"),
    password: string().required("Password can't be empty."),
    password_check: string()
        .required("Re-type password can't be empty.")
        .oneOf([ref("password")], "Password must match"),
});

export { SignInSchema, SignUpSchema };
