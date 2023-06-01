import React from "react";
import scss from "./noNotebookSelected.module.scss";
import { IconType } from "react-icons/lib";
import {
    HiOutlineBookOpen,
    HiOutlineDocumentAdd,
    HiPlus,
} from "react-icons/hi";

interface Instruction {
    Icon: IconType;
    label: string;
    description: string;
}

const NoNotebookSelected = () => {
    const instructions: Instruction[] = [
        {
            Icon: HiPlus,
            description: "Create your very own notebook for your own purposes",
            label: "Add Notebook",
        },
        {
            Icon: HiOutlineDocumentAdd,
            description:
                "Create Pages for your notebooks and store a lot of notes",
            label: "Add Pages",
        },
        {
            Icon: HiOutlineDocumentAdd,
            description:
                "Create notes for your pages as Journal, Reminder or whatever you want!",
            label: "Add Notes",
        },
        {
            Icon: HiOutlineBookOpen,
            description:
                "View or modify your notes from pages of your notebooks because you can do it!",
            label: "My Notebooks",
        },
    ];

    return (
        <div className={scss["no-notebook-container"]}>
            {instructions.map(({ Icon, description, label }, i) => (
                <div className={scss["instruction"]} key={i}>
                    <Icon id={scss["icon"]} />
                    <h2>{label}</h2>
                    <p>{description}</p>
                </div>
            ))}
        </div>
    );
};

export default NoNotebookSelected;
