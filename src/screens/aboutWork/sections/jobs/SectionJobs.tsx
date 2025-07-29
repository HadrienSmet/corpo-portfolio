import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Carousel, SCALE } from "@/components";
import { Experience, EXPERIENCE_TYPE, JOBS } from "@/data";
import { useElementVisibility, useWindowSize } from "@/hooks";

import { ExperienceCard, FutureExperienceCard } from "./card";
import "./sectionJobs.scss";

const useJobDimensions = () => {
    const { height } = useWindowSize();

    const stacksHeight = 105;
    const spaceUpInSection = 28 + 29;
    const maxHeight = height - (stacksHeight + spaceUpInSection + 20 + (2*16));

    const originalHeight = maxHeight/SCALE.max;

    return (originalHeight);
};

export const SectionJobs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();
    const { width } = useWindowSize();

    const onClick = (num: number) => setActiveIndex(num);

    const itemHeight = useJobDimensions();

    const renderItem = (exp: Experience) => {
        if (exp.type === EXPERIENCE_TYPE.past) {
            return (
                <ExperienceCard
                    {...exp.item}
                    itemHeight={itemHeight}
                />
            );
        }

        return (
            <FutureExperienceCard
                {...exp.item}
                itemHeight={itemHeight}
            />
        );
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
