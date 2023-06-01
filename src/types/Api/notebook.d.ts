import { Notebook } from "../Notebooks/notebook";
import { PaginatedData, SuccessResponse } from "./api";

export type SuccessNotebookResponse = SuccessResponse<
    PaginatedData<Notebook[], "notebooks">
>;

export interface INotebookApi {
    getNotebooks: () => Promise<SuccessNotebookResponse>;
}
