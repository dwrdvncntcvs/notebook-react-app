import React, { useEffect } from "react";
import scss from "./notebookList.module.scss";
import { NavLink } from "react-router-dom";
import { useNotebook } from "../../../contexts/Notebook";

const sc_name = "nb-l";

const NotebookList = () => {
    const { notebooks, getNotebooks } = useNotebook();

    useEffect(() => {
        getNotebooks();
    }, [getNotebooks]);

    return (
        <div className={scss[`${sc_name}-container`]}>
            <div className={scss[`${sc_name}-header`]}>
                <h1>Notebook List</h1>
            </div>
            <ul className={scss[`${sc_name}-list`]}>
                {notebooks.map(({ id, name }) => (
                    <li key={id}>
                        <NavLink to={`/${id}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotebookList;
