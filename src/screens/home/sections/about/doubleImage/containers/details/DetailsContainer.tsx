import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router";

import { getLocalizedPath, GlowingButton, ROUTES } from "@/components";
import { useElementVisibility } from "@/hooks";

import { useDoubleImageDimensions } from "../useDoublieImageDimensions";

import "./detailsContainer.scss";

type DetailCardProps = {
    readonly details: Array<string>;
    readonly dynamicClass: string;
    readonly title: string;
    readonly to: string;
};
const DetailCard = ({ details, dynamicClass, title, to }: DetailCardProps) => (
    <GlowingButton className={`${dynamicClass} visible`}>
        <Link
            to={getLocalizedPath(to)}
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

export const DetailsContainer = () => {
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
            title: t("about.me.card.title"),
            to: ROUTES.aboutMe,
        },
    ];

    return (
        <div
            ref={elementRef}
            className="details-container"
            style={{ gap: width + 80, height }}
        >
            {cards.map(card => <DetailCard key={card.to} {...card} />)}
        </div>
    );
};
