import {
    createContext,
    FC,
    PropsWithChildren,
    useReducer,
    useCallback,
    useContext,
} from "react";
import {
    CreateNotebook,
    GetNotebooks,
    INotebookContext,
    NotebookReducer,
    NotebookState,
} from "../types/Context/notebook_context";
import { NotebookAPI } from "../api";
import { PageMeta } from "../types/Api/api";
import { useAuth } from "./Auth";
import { axiosClient } from "../configs/axiosClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { NOTEBOOK } from "../variables";

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
    createNotebook: async () => {},
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
    const { token } = useAuth();
    const navigate = useNavigate();

    const notebookApi = new NotebookAPI(axiosClient, {
        Authorization: `Bearer ${token}`,
    });

    const getNotebooks: GetNotebooks = useCallback(async () => {
        try {
            const response = await notebookApi.getNotebooks({
                limit: 13,
                page: 1,
            });

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
    }, [token]);

    const createNotebook: CreateNotebook = useCallback(
        async (values) => {
            try {
                const response = await notebookApi.createNotebook(values);

                toast.success(response.message);
                navigate(-1);
            } catch (err) {
                console.log("Error: ", err);
            }
        },
        [getNotebooks, state.notebooks]
    );

    return (
        <NotebookContext.Provider
            value={{ ...state, getNotebooks, createNotebook }}
        >
            {children}
        </NotebookContext.Provider>
    );
};

export const useNotebook = () => useContext(NotebookContext);

export { NotebookProvider, NotebookContext };
