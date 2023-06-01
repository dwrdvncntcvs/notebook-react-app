import { Axios } from "axios";
import {
    INotebookApi,
    SuccessNotebookResponse,
} from "../../types/Api/notebook";

export default class NotebookApi implements INotebookApi {
    private notebookUrl = (endpoint: string) => `notebooks${endpoint}`;

    constructor(private axiosClient: Axios) {}

    async getNotebooks() {
        const response = await this.axiosClient.get(this.notebookUrl("/"));
        const data = JSON.parse(response.data);

        return data as SuccessNotebookResponse;
    }
}
