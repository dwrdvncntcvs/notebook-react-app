import { NavLink } from "react-router-dom";
import { AuthForm, AuthLinks } from "../../components/Auth";
import { useAuth } from "../../contexts/Auth";
import { AuthSubmit, InputValues, SignInValues } from "../../types/Auth/auth";
import { SignInSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";
import { IAuthLink } from "../../types/Auth/auth_links";

const authLinks: IAuthLink[] = [
    {
        label: "Doesn't have an account?",
        link: {
            name: "Click Here",
            to: "/sign-up",
        },
    },
];

const SignInPage = () => {
    const { signInAction } = useAuth();

    const submitHandler: AuthSubmit<InputValues> = async (values, helpers) => {
        await signInAction(values);
        helpers.resetForm();
    };

    return (
        <>
            <AuthForm
                title="Sign In"
                buttonLabel="Sign In"
                inputFields={inputFields}
                initialValues={inputValues}
                submitHandler={submitHandler}
                validationSchema={SignInSchema}
            />
            <AuthLinks authLinks={authLinks} />
        </>
    );
};

export default SignInPage;
