import { NavLink } from "react-router-dom";
import { AuthForm, AuthLinks } from "../../components/Auth";
import { useAuth } from "../../contexts/Auth";
import { AuthSubmit, InputValues, SignUpValues } from "../../types/Auth/auth";
import { SignUpSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";
import { IAuthLink } from "../../types/Auth/auth_links";

const authLinks: IAuthLink[] = [
    {
        label: "Already have an account?",
        link: {
            name: "Click Here",
            to: "/sign-In",
        },
    },
];

const SignUpPage = () => {
    const { signUpAction } = useAuth();
    const submitHandler: AuthSubmit<InputValues> = async (values, helpers) => {
        if ("email" in values) {
            await signUpAction(values);
            helpers.resetForm();
        }
    };

    return (
        <>
            <AuthForm
                title="Sign Up"
                buttonLabel="Sign Up"
                inputFields={inputFields}
                initialValues={inputValues}
                submitHandler={submitHandler}
                validationSchema={SignUpSchema}
            />
            <AuthLinks authLinks={authLinks} />
        </>
    );
};

export default SignUpPage;
