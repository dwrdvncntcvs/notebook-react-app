import { Notebook, NotebookValues } from "../Notebooks/notebook";
import { PaginatedData, Pagination, SuccessResponse } from "./api";

export type SuccessNotebookResponse = SuccessResponse<
    PaginatedData<Notebook[], "notebooks">
>;

export type SuccessCreateNotebookResponse = SuccessResponse<Notebook>;

interface GetNotebooksParams {
    pagination: Pagination;
}

type GetNotebooks = (
    pagination: Pagination
) => Promise<SuccessNotebookResponse>;

type CreateNotebook = (
    values: NotebookValues
) => Promise<SuccessCreateNotebookResponse>;

export interface INotebookApi {
    getNotebooks: GetNotebooks;
    createNotebook: CreateNotebook;
}
