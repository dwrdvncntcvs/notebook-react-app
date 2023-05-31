import { AuthForm } from "../../components/Auth";
import { useAuth } from "../../contexts/Auth";
import { AuthSubmit, InputValues, SignInValues } from "../../types/Auth/auth";
import { SignInSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";

const SignInPage = () => {
    const { signInAction } = useAuth();

    const submitHandler: AuthSubmit<InputValues> = async (values, helpers) => {
        await signInAction(values);
        helpers.resetForm();
    };

    return (
        <div>
            <AuthForm
                title="Sign In"
                buttonLabel="Sign In"
                inputFields={inputFields}
                initialValues={inputValues}
                submitHandler={submitHandler}
                validationSchema={SignInSchema}
            />
        </div>
    );
};

export default SignInPage;
