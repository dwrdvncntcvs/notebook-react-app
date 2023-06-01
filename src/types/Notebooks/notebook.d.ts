import { FormikHelpers } from "formik";

export interface Notebook {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    user_id: string;
}

export interface NotebookValues {
    name: string;
}

export type NotebookSubmitHandler = (
    values: NotebookValues,
    helper: FormikHelpers<NotebookValues>
) => void;
