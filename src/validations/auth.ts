import * as Yup from "yup";

const MINIMUM_USERNAME_LENGTH = 8;

const SignInSchema = Yup.object().shape({
    username: Yup.string()
        .required("Username can't be empty.")
        .min(
            MINIMUM_USERNAME_LENGTH,
            `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters`
        ),
    password: Yup.string().required("Password can't be empty."),
});

const SignUpSchema = Yup.object().shape({
    first_name: Yup.string().required("First name can't be empty."),
    last_name: Yup.string().required("Last name can't be empty."),
    username: Yup.string()
        .required("Username can't be empty.")
        .min(
            MINIMUM_USERNAME_LENGTH,
            `Username should be at least ${MINIMUM_USERNAME_LENGTH} characters`
        ),
    email: Yup.string()
        .required("Email can't be empty.")
        .email("Invalid Email"),
    password: Yup.string().required("Password can't be empty."),
    password_check: Yup.string()
        .required("Re-type password can't be empty.")
        .oneOf([Yup.ref("password")], "Password must match"),
});

export { SignInSchema, SignUpSchema };
