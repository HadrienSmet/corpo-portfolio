import { RefObject, useEffect, useRef } from "react";
import { Link } from "react-router";

import { useElementVisibility, useWindowSize } from "@/hooks";

import "./detailsContainer.scss";
import { useTranslation } from "react-i18next";

type DetailCardProps = {
    readonly details: Array<string>;
    readonly dynamicClass: string;
    readonly ref: RefObject<HTMLAnchorElement | null>;
    readonly title: string;
    readonly to: string;
};
const DetailCard = ({ details, dynamicClass, ref, title, to }: DetailCardProps) => (
    <Link
        to={to}
        ref={ref}
        className={dynamicClass}
    >
        <h3>{title}</h3>
        <ul>
            {details.map((detail, i) => (<li key={detail} style={{ transitionDelay: `${.5 + (i*.08)}s` }}>{detail}</li>))}
        </ul>
    </Link>
);

const useDetailsOnMouseMove = () => {
    const { width } = useWindowSize();

    const myRef = useRef<HTMLAnchorElement | null>(null);
    const myWorkRef = useRef<HTMLAnchorElement | null>(null);

    useEffect(() => {
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / width) * 100;

            if (ratioX < 50) {
                myWorkRef.current?.classList.add("visible");
                myRef.current?.classList.remove("visible");
            } else {
                myWorkRef.current?.classList.remove("visible");
                myRef.current?.classList.add("visible");
            }
        };

        if (width && width > 1025) {
            window.addEventListener("mousemove", handlePictureOnMouseMove);
        }

        if (width && width < 1025) {
            myWorkRef.current?.classList.add("visible");
            myRef.current?.classList.add("visible");
        }
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, [width]);

    return ({
        myRef,
        myWorkRef,
    });
};

export const DetailsContainer = () => {
    const { myRef, myWorkRef } = useDetailsOnMouseMove();
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    const cards: Array<DetailCardProps> = [
        {
            details: [
                t("about.work.items.experience"),
                t("about.work.items.projects"),
                t("about.work.items.stack"),
            ],
            dynamicClass: "details-about-my-work",
            ref: myWorkRef,
            title: t("about.work.title"),
            to: "/aboutMyWork"
        },
        {
            details: [
                t("about.me.items.softSkills"),
                t("about.me.items.pictures"),
                t("about.me.items.hobbies"),
                t("about.me.items.personnalityTests"),
            ],
            dynamicClass: "details-about-me",
            ref: myRef,
            title: t("about.me.title"),
            to: "/aboutMe"
        },
    ];

    return (
        <div ref={elementRef} className="details-container">
            {cards.map(card => <DetailCard key={card.to} {...card} />)}
        </div>
    );
};
