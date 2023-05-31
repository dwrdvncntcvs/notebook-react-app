import { AuthForm } from "../../components/Auth";
import { InputValues } from "../../types/Auth/auth";
import { SignUpSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";

const SignInPage = () => {
    const submitHandler = (values: InputValues) => {
        console.log("Values: ", values);
    };

    return (
        <div>
            <AuthForm
                title="Sign In"
                buttonLabel="Sign In"
                inputFields={inputFields}
                initialValues={inputValues}
                submitHandler={submitHandler}
                validationSchema={SignUpSchema}
            />
        </div>
    );
};

export default SignInPage;
