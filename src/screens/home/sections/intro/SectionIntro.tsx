import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";

import "./sectionIntro.scss";

const DEVELOPPER_NAME = "Hadrien Smet";
export const SectionIntro = () => {
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    return (
        <section className="intro">
            <h1
                className="intro-title"
                ref={elementRef}
            >
                <span className="developper-name">{DEVELOPPER_NAME}</span>
                <span className="profession">{t("profession")}</span>
            </h1>
        </section>
    );
};
