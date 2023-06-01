import {
    createContext,
    FC,
    PropsWithChildren,
    useReducer,
    useCallback,
    useContext,
} from "react";
import {
    GetNotebooks,
    INotebookContext,
    NotebookReducer,
    NotebookState,
} from "../types/Context/notebook_context";
import usePrivateAxios from "../hooks/usePrivateAxios";
import { NotebookAPI } from "../api";
import { PageMeta } from "../types/Api/api";

const defaultMeta: PageMeta = {
    limit: 0,
    page: 0,
    total_pages: 0,
};

const notebookState: NotebookState = {
    notebooks: [],
    notebookMeta: defaultMeta,
};

const NotebookContext = createContext<INotebookContext>({
    notebooks: [],
    notebookMeta: defaultMeta,
    getNotebooks: async () => {},
});

const notebookReducer: NotebookReducer = (state, action) => {
    switch (action.type) {
        case "SET_NOTEBOOKS":
            return { ...state, notebooks: action.payload };
        case "SET_NOTEBOOK_META":
            return {
                ...state,
                notebookMeta: action.payload,
            };
        default:
            return state;
    }
};

const NotebookProvider: FC<PropsWithChildren> = ({ children }) => {
    const [state, dispatch] = useReducer(notebookReducer, notebookState);
    const axiosClient = usePrivateAxios();

    const getNotebooks: GetNotebooks = useCallback(async () => {
        const notebookApi = new NotebookAPI(axiosClient);

        try {
            const response = await notebookApi.getNotebooks();

            dispatch({
                type: "SET_NOTEBOOKS",
                payload: response.data.notebooks,
            });
            dispatch({
                type: "SET_NOTEBOOK_META",
                payload: response.data.meta,
            });
        } catch (err) {
            console.log((err as any).message);
        }
    }, []);

    return (
        <NotebookContext.Provider value={{ ...state, getNotebooks }}>
            {children}
        </NotebookContext.Provider>
    );
};

export const useNotebook = () => useContext(NotebookContext);

export { NotebookProvider, NotebookContext };