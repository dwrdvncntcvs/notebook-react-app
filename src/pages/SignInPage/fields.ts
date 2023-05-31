import { InputFields, SignInValues } from "../../types/Auth/auth";

const inputFields: InputFields[] = [
    {
        label: "Username",
        name: "username",
        placeholder: "Enter username",
        type: "text",
    },
    {
        label: "Password",
        name: "password",
        placeholder: "Enter password",
        type: "password",
    },
];

const inputValues: SignInValues = {
    password: "",
    username: "",
};

export { inputFields, inputValues };
