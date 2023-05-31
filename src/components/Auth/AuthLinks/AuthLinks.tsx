import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { IAuthLink } from "../../../types/Auth/auth_links";
import scss from "./authLink.module.scss";

interface AuthLinksProps {
    authLinks: IAuthLink[];
}

const AuthLinks: FC<AuthLinksProps> = ({ authLinks }) => {
    return (
        <>
            {authLinks.map(({ label, link }) => (
                <p key={link.to} className={scss["link"]}>
                    {label} <NavLink to={link.to}>{link.name}</NavLink>
                </p>
            ))}
        </>
    );
};

export default AuthLinks;
