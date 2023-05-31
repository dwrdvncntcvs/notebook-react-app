import { InputFields, SignUpValues } from "../../types/Auth/auth";

const inputValues: SignUpValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    password_check: "",
    username: "",
};

const inputFields: InputFields[] = [
    {
        label: "First Name",
        name: "first_name",
        placeholder: "Enter First Name",
        type: "text",
    },
    {
        label: "Last Name",
        name: "last_name",
        placeholder: "Enter Last Name",
        type: "text",
    },
    {
        label: "Username",
        name: "username",
        placeholder: "Enter Username",
        type: "text",
    },
    {
        label: "Email Address",
        name: "email",
        placeholder: "Enter Email Address",
        type: "text",
    },
    {
        label: "Password",
        name: "password",
        placeholder: "Enter Password",
        type: "password",
    },
    {
        label: "Re-type Password",
        name: "password_check",
        placeholder: "Enter Password",
        type: "password",
    },
];

export { inputValues, inputFields };
