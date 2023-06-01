import { Notebook } from "../Notebooks/notebook";

interface Response {
    message: string;
    timestamp: number;
}

export interface SuccessResponse<T> extends Response {
    data: T;
}

export interface ErrorResponse<T> extends Response {
    error: T;
    status: number;
}

export interface PageMeta {
    page: number;
    limit: number;
    total_pages: number;
}

export interface Pagination {
    page: number;
    limit: number;
}

export type PaginatedData<T, K extends string> = {
    [key in K]: T;
} & { meta: PageMeta };
