import { useTranslation } from "react-i18next";

import { useElementVisibility } from "@/hooks";

import "./sectionIntro.scss";

const DEVELOPPER_NAME = "Hadrien Smet";
export const SectionIntro = () => {
    const { elementRef: titleRef } = useElementVisibility({});
    const { elementRef: linkRef } = useElementVisibility({});
    const { i18n, t } = useTranslation();

    return (
        <section className="intro">
            <div className="intro-title-container">
                <h1
                    className="intro-title"
                    ref={titleRef}
                >
                    <span className="developper-name">{DEVELOPPER_NAME}</span>
                    <span className="profession">{t("profession")}</span>
                </h1>
            </div>

            <div
                className="cv-row"
                ref={linkRef}
            >
                <a
                    href={i18n.language === "en"
                        ? "/docs/cv_hadrien-smet_fullstack-developer.pdf"
                        : "/docs/cv_hadrien-smet_developpeur-fullstack.pdf"
                    }
                    download
                >
                    {t("contact.curriculum")}
                </a>
            </div>
        </section>
    );
};
