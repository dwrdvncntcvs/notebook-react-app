import { AuthForm } from "../../components/Auth";
import { useAuth } from "../../contexts/Auth";
import { AuthSubmit, InputValues, SignUpValues } from "../../types/Auth/auth";
import { SignUpSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";
import { FormikHelpers } from "formik";

const SignUpPage = () => {
    const { signUpAction } = useAuth();
    const submitHandler: AuthSubmit<InputValues> = async (values, helpers) => {
        if ("email" in values) {
            await signUpAction(values);
            helpers.resetForm();
        }
    };

    return (
        <div>
            <AuthForm
                title="Sign Up"
                buttonLabel="Sign Up"
                inputFields={inputFields}
                initialValues={inputValues}
                submitHandler={submitHandler}
                validationSchema={SignUpSchema}
            />
        </div>
    );
};

export default SignUpPage;
