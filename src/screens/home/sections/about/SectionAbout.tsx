import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";

import { DoubleImageDivision } from "./doubleImage";
import "./aboutSection.scss";

export const SectionAbout = () => {
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    return (
        <section id="about" className="about" ref={elementRef}>
            <h2>{t("about.title")}</h2>
            <DoubleImageDivision />
        </section>
    );
};
