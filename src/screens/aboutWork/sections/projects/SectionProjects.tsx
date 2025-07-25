import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";

import { OnlineProjectsContainer } from "./container";
import "./sectionProjects.scss";

export const SectionProjects = () => {
    const { elementRef } = useElementVisibility({});
    const { t } = useTranslation();

    return (
        <section ref={elementRef} className="projects">
            <h2>{t("projects.title")}</h2>
            <div className="online-projects-division">
                <OnlineProjectsContainer  />
            </div>
        </section>
    );
};
