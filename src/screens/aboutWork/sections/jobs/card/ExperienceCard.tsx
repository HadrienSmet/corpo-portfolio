import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { JobItem } from "@/data";

import "./experienceCard.scss";

export const ExperienceCard = (props: JobItem & { itemHeight: number; }) => {
    const { t } = useTranslation();

    const descriptions = useMemo(() => {
        const output: Array<string> = [];

        for (let i = 0; i <= props.descriptionsAmount; i++) {
            const description = t(`experiences.${props.id}.descriptions.${i}`);

            output.push(description);
        }

        return (output);
    }, [t]);

    return (
        <div
            className="experience-card"
            style={{ height: props.itemHeight }}
        >
            <div className="experience-card__header">
                <div className="experience-card__company">
                    <div className="experience-card__company-logo">
                        <img
                            src={`/images/${props.id}/${props.id}-logo.webp`}
                            alt={`Logo ${props.company}`}
                        />
                    </div>
                    <p>{props.company}</p>
                </div>
                <p>{props.period.end
                    ? t("periodWithEnd", { start: props.period.start, end: props.period.end })
                    : t("periodWithoutEnd", { start: props.period.start })
                }</p>

            </div>
            <div className="experience-card__content">
                <h3>{t(`experiences.${props.id}.title`)}</h3>
                <em>{props.stacks.join(", ")}.</em>
                <div className="experience-card__descriptions">
                    {descriptions.map((description, index) => (
                        <p key={`${props.id}-${index}`}>{description}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

type FutureExperienceCardProps = {
    readonly itemHeight: number;
    readonly i18nKey: string;
};
export const FutureExperienceCard = ({ itemHeight, i18nKey }: FutureExperienceCardProps) => {
    const { t } = useTranslation();

    return (
        <div
            style={{ height: itemHeight }}
            className="experience-card empty"
        >
            <p>{t(i18nKey)}</p>
        </div>
    );
};
