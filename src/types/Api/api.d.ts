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
