import { PropsWithChildren } from "react";

import "./backgroundLayout.scss";

export const BackgroundLayout = ({ children }: PropsWithChildren) => (
    <div className="background-layout">{children}</div>
);
