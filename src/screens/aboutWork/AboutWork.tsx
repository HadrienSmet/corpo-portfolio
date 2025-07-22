import { Trans, } from "react-i18next";

import { SectionJobs, SectionProjects, SectionStacks } from "./sections";
import "./aboutWork.scss";

export const AboutWork = () => {

    return (
        <div className="about-work first-screen-view">
            <Trans
                i18nKey="about.work.title"
                components={{
                    default: <h1></h1>,
                    styled: <span></span>,
                }}
            />
            <SectionStacks />
            <SectionJobs />
            <SectionProjects />
        </div>
    );
};
