import React from "react";
import scss from "./notebookList.module.scss";
import { NavLink } from "react-router-dom";

const sc_name = "nb-l";

const NotebookList = () => {
    const sampleData = [
        {
            id: 1,
            label: "Notebook 1",
        },
        {
            id: 2,
            label: "Notebook 2",
        },
        {
            id: 3,
            label: "Notebook 3",
        },
        {
            id: 4,
            label: "Notebook 4",
        },
    ];

    return (
        <div className={scss[`${sc_name}-container`]}>
            <div className={scss[`${sc_name}-header`]}>
                <h1>Notebook List</h1>
            </div>
            <ul className={scss[`${sc_name}-list`]}>
                {sampleData.map(({ id, label }) => (
                    <li key={id}>
                        <NavLink to={`/${id}`}>{label}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotebookList;
