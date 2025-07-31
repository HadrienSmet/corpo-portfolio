import { Trans, useTranslation } from "react-i18next";

import { ThemedInkBackground } from "@/layout";

import { SectionJobs, SectionProjects, SectionStacks } from "./sections";
import "./aboutWork.scss";

export const AboutWork = () => {
    const { i18n } = useTranslation();

    return (
        <div className="about-work-page">
            <ThemedInkBackground parentClassName="about-work" />
            <div className="about-work first-screen-view">
                <Trans
                    i18nKey="about.work.title"
                    lang={i18n.language}
                    components={{
                        default: <h1></h1>,
                        styled: <span></span>,
                    }}
                />
                <SectionStacks />
                <SectionJobs />
                <SectionProjects />
            </div>
        </div>
    );
};
