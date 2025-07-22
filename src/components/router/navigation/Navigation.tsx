import { ReactNode, useRef } from "react";
import { Link } from "react-router";

import { Hiking, Home, Work } from "@/assets";
import { useCssVariable } from "@/hooks";

import { ROUTES } from "../routes";

import "./navigation.scss";

const NavigationButton = (elem: {
    readonly close: () => void;
    route: string;
    item: ReactNode;
}) => {
    const ref = useRef<HTMLAnchorElement>(null);
    return (
        <Link
            className="default"
            key={elem.route}
            onClick={elem.close}
            onMouseEnter={() => {
                ref.current?.classList.remove("default");
                ref.current?.classList.add("hovered");
            }}
            onMouseLeave={() => {
                ref.current?.classList.remove("hovered")
                ref.current?.classList.add("default")
            }}
            ref={ref}
            to={elem.route}
        >
            {elem.item}
        </Link>
    );
};

type NavigationProps = {
    readonly close: () => void;
    readonly isOpen: boolean;
};
export const Navigation = ({ close, isOpen }: NavigationProps) => {
    const txtOnBg = useCssVariable("--clr-txt-onBg");

    const NAVIGATION = [
        {
            route: ROUTES.home,
            item: (
                <>
                    <Home color={txtOnBg} />
                    <p>Home</p>
                </>
            ),
        },
        {
            route: ROUTES.aboutWork,
            item: (
                <>
                    <Work color={txtOnBg} />
                    <p>About my work</p>
                </>
            ),
        },
        {
            route: ROUTES.aboutMe,
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
                <NavigationButton {...elem} close={close} />
            ))}
        </div>
    );
};
