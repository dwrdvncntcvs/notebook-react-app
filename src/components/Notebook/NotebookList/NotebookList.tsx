import React, { useEffect } from "react";
import scss from "./notebookList.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useNotebook } from "../../../contexts/Notebook";

const sc_name = "nb-l";

const NotebookList = () => {
    const { notebooks, getNotebooks } = useNotebook();
    const location = useLocation();

    useEffect(() => {
        getNotebooks();
    }, [getNotebooks]);

    return (
        <div className={scss[`${sc_name}-container`]}>
            <div className={scss[`${sc_name}-header`]}>
                <h1>Notebook List</h1>
            </div>
            <ul className={scss[`${sc_name}-list`]}>
                {notebooks.map(({ id, name }) => {
                    return (
                        <li key={id}>
                            <NavLink
                                to={`/${id}`}
                                className={
                                    +location.state?.notebookId === id
                                        ? scss["active"]
                                        : ""
                                }
                            >
                                {name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default NotebookList;
