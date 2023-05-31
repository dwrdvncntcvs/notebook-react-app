import { AuthForm } from "../../components/Auth";
import { InputValues, SignUpValues } from "../../types/Auth/auth";
import { SignUpSchema } from "../../validations/auth";
import { inputFields, inputValues } from "./fields";

const SignUpPage = () => {
    const submitHandler = (values: InputValues) => {
        console.log("Values: ", values);
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
