import { MouseEvent } from "react";
import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";

import "./hobby.scss";

type HobbyPropsType = {
    readonly handleActiveIndex: (e: MouseEvent<HTMLLIElement>) => void;
    readonly id: string;
    readonly index: number;
    readonly resetActiveIndex: () => void;
};
export const Hobby = ({
    id,
    index,
    handleActiveIndex,
    resetActiveIndex,
}: HobbyPropsType) => {
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    return (
        <li
            // @ts-expect-error
            ref={elementRef}
            className={"hobby"}
            id={`hobby-${index}`}
            onMouseEnter={handleActiveIndex}
            onMouseLeave={resetActiveIndex}
        >
            <div className="hobby-background" />
            <div className="hobby-content">
                <h3>{t(`about.me.hobbies.${id}`)}</h3>
            </div>
        </li>
    );
};
