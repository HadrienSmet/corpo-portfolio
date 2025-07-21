import { Link } from "react-router";

import { Hiking, Home, Work } from "@/assets";
import { useCssVariable } from "@/hooks";

import "./navigation.scss";

type NavigationProps = {
    readonly isOpen: boolean;
};
export const Navigation = ({ isOpen }: NavigationProps) => {
    const txtOnBg = useCssVariable("--clr-txt-onBg");

    const NAVIGATION = [
        {
            route: "/",
            item: (
                <>
                    <Home color={txtOnBg} />
                    <p>Home</p>
                </>
            ),
        },
        {
            route: "/",
            item: (
                <>
                    <Work color={txtOnBg} />
                    <p>About my work</p>
                </>
            ),
        },
        {
            route: "/",
            item: (
                <>
                    <Hiking color={txtOnBg} />
                    <p>About me</p>
                </>
            ),
        },
    ];

    return (
        <div className={`navigation ${isOpen ? "opened": "closed"}`}>
            {NAVIGATION.map(elem => (
                <Link key={elem.route} to={elem.route}>
                    {elem.item}
                </Link>
            ))}
        </div>
    );
};
