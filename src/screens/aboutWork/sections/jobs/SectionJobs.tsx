import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Carousel } from "@/components";
import { Experience, EXPERIENCE_TYPE, JOBS } from "@/data";
import { useElementVisibility, useWindowSize } from "@/hooks";

import { ExperienceCard, FutureExperienceCard } from "./card";
import "./sectionJobs.scss";

const SPACE_UPPON_CAROUSEL = 162 as const;

export const SectionJobs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { elementRef } = useElementVisibility({});
    const { height, width } = useWindowSize();
    const { t } = useTranslation();

    const onClick = (num: number) => setActiveIndex(num);

    const itemHeight = Math.min((height * .95)- (SPACE_UPPON_CAROUSEL + (12*2)), 750);

    const renderItem = (exp: Experience) => {
        if (exp.type === EXPERIENCE_TYPE.past) {
            return (<ExperienceCard {...exp.item} itemHeight={itemHeight} />);
        }

        return (<FutureExperienceCard {...exp.item} itemHeight={itemHeight} />);
    };

    return (
        <section
            className="section-experiences"
            ref={elementRef}
        >
            <h2>{t("experiences.title")}</h2>
            <div className="experiences-container">
                <Carousel
                    items={JOBS}
                    itemHeight={itemHeight}
                    itemWidth={Math.min(width*.6, 1050)}
                    index={activeIndex}
                    onClick={onClick}
                    renderItem={renderItem}
                />
            </div>
        </section>
    );
};
