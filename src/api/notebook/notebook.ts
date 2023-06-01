import { Axios } from "axios";
import {
    GetNotebooks,
    INotebookApi,
    SuccessNotebookResponse,
} from "../../types/Api/notebook";

export default class NotebookApi implements INotebookApi {
    private notebookUrl = (endpoint: string) => `notebooks${endpoint}`;

    constructor(private axiosClient: Axios, private headers: any) {}

    getNotebooks: GetNotebooks = async ({ limit = 10, page = 1 }) => {
        const response = await this.axiosClient.get(
            this.notebookUrl(`/?page=${page}&limit=${limit}`),
            { headers: { ...this.headers } }
        );
        const data = JSON.parse(response.data);

        return data as SuccessNotebookResponse;
    };
}
