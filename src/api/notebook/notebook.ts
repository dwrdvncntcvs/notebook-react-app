import { Axios } from "axios";
import {
    CreateNotebook,
    GetNotebooks,
    INotebookApi,
    SuccessCreateNotebookResponse,
    SuccessNotebookResponse,
} from "../../types/Api/notebook";
import { NOTEBOOK } from "../../variables";

export default class NotebookApi implements INotebookApi {
    private notebookUrl = (endpoint: string) => `notebooks${endpoint}`;

    constructor(private axiosClient: Axios, private headers: any) {}

    getNotebooks: GetNotebooks = async ({
        limit = NOTEBOOK.LIMIT,
        page = NOTEBOOK.PAGE,
    }) => {
        const response = await this.axiosClient.get(
            this.notebookUrl(`/?page=${page}&limit=${limit}`),
            { headers: { ...this.headers } }
        );
        const data = JSON.parse(response.data);

        return data as SuccessNotebookResponse;
    };

    createNotebook: CreateNotebook = async (values) => {
        const response = await this.axiosClient.post(
            this.notebookUrl("/"),
            JSON.stringify(values),
            { headers: { ...this.headers } }
        );

        const data = JSON.parse(response.data);

        return data as SuccessCreateNotebookResponse;
    };
}
