import { ReactNode, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { Hiking, Home, Work } from "@/assets";
import { useCssVariable } from "@/hooks";

import { ROUTES } from "../routes";
import { getLocalizedPath } from "../router.utils";

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
            to={getLocalizedPath(elem.route)}
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
    const { t } = useTranslation();

    const NAVIGATION = [
        {
            route: ROUTES.home,
            item: (
                <>
                    <Home color={txtOnBg} />
                    <p>{t("routes.home")}</p>
                </>
            ),
        },
        {
            route: ROUTES.aboutWork,
            item: (
                <>
                    <Work color={txtOnBg} />
                    <p>{t("routes.aboutWork")}</p>
                </>
            ),
        },
        {
            route: ROUTES.aboutMe,
            item: (
                <>
                    <Hiking color={txtOnBg} />
                    <p>{t("routes.aboutMe")}</p>
                </>
            ),
        },
    ];

    return (
        <div className={`navigation ${isOpen ? "opened": "closed"}`}>
            {NAVIGATION.map(elem => (
                <NavigationButton
                    {...elem}
                    key={elem.route}
                    close={close}
                />
            ))}
        </div>
    );
};
