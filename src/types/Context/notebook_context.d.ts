import { PageMeta } from "../Api/api";
import { Notebook, NotebookValues } from "../Notebooks/notebook";

export interface NotebookState {
    notebooks: Notebook[];
    notebookMeta: PageMeta;
}

export type NotebookAction =
    | {
          type: "SET_NOTEBOOKS";
          payload: Notebook[];
      }
    | {
          type: "SET_NOTEBOOK_META";
          payload: PageMeta;
      };

export type NotebookReducer = (
    state: NotebookState,
    action: NotebookAction
) => NotebookState;

export type GetNotebooks = () => Promise<void>;

export type CreateNotebook = (values: NotebookValues) => Promise<void>;

export interface INotebookContext extends NotebookState {
    getNotebooks: GetNotebooks;
    createNotebook: CreateNotebook;
}
