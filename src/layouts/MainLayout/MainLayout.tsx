import React, { FC, PropsWithChildren } from "react";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return <div>{children}</div>;
};

export default MainLayout;
