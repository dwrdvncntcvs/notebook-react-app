import { Notebook } from "../Notebooks/notebook";
import { PaginatedData, Pagination, SuccessResponse } from "./api";

export type SuccessNotebookResponse = SuccessResponse<
    PaginatedData<Notebook[], "notebooks">
>;

interface GetNotebooksParams {
    pagination: Pagination;
}

type GetNotebooks = (
    pagination: Pagination
) => Promise<SuccessNotebookResponse>;

export interface INotebookApi {
    getNotebooks: GetNotebooks;
}
