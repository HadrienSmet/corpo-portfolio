import { RefObject, useEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

import { GlowingButton, ROUTES } from "@/components";
import { useElementVisibility, useWindowSize } from "@/hooks";

import { useDoubleImageDimensions } from "../useDoublieImageDimensions";

import "./detailsContainer.scss";

type DetailCardProps = {
    readonly details: Array<string>;
    readonly dynamicClass: string;
    readonly ref: RefObject<HTMLButtonElement | null>;
    readonly title: string;
    readonly to: string;
};
const DetailCard = ({ details, dynamicClass, ref, title, to }: DetailCardProps) => (
    <GlowingButton
        className={dynamicClass}
        ref={ref}
    >
        <Link
            to={to}
            className={dynamicClass}
        >
            <Trans
                i18nKey={title}
                components={{
                    default: <h3></h3>,
                    styled: <span></span>,
                }}
            />
            <ul>
                {details.map((detail, i) => (
                    <li
                        key={detail}
                        style={{ transitionDelay: `${.5 + (i*.08)}s` }}
                    >{detail}</li>
                ))}
            </ul>
        </Link>
    </GlowingButton>
);

const useDetailsOnMouseMove = () => {
    const { width } = useWindowSize();

    const myRef = useRef<HTMLButtonElement | null>(null);
    const myWorkRef = useRef<HTMLButtonElement | null>(null);

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
    const { height, width } = useDoubleImageDimensions();
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    const cards: Array<DetailCardProps> = [
        {
            details: [
                t("about.work.card.items.experience"),
                t("about.work.card.items.projects"),
                t("about.work.card.items.stack"),
            ],
            dynamicClass: "details-about-my-work",
            ref: myWorkRef,
            title: t("about.work.card.title"),
            to: ROUTES.aboutWork,
        },
        {
            details: [
                t("about.me.card.items.softSkills"),
                t("about.me.card.items.pictures"),
                t("about.me.card.items.hobbies"),
                t("about.me.card.items.personnalityTests"),
            ],
            dynamicClass: "details-about-me",
            ref: myRef,
            title: t("about.me.card.title"),
            to: ROUTES.aboutMe,
        },
    ];

    return (
        <div
            ref={elementRef}
            className="details-container"
            style={{ gap: width, height }}
        >
            {cards.map(card => <DetailCard key={card.to} {...card} />)}
        </div>
    );
};
