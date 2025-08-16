import { useTranslation } from "react-i18next";

import { Github, Linkedin } from "@/assets";
import { useCssVariable } from "@/hooks";

import "./contactHeader.scss";

export const ContactHeader = () => {
    const mainText = useCssVariable("--clr-txt");
    const { i18n, t } = useTranslation();

    return (
        <div className="contact-header">
            <div className="contact-header__first-section">
                <div className="contact-header__titles">
                    <h2>{t("contact.title")}</h2>
                    <h3>{t("contact.subtitle")}</h3>
                </div>
                <div
                    className="contact-header__badge"
                >
                    <span>H</span>
                    <span>S</span>
                </div>
            </div>
            <div className="social-media-container">
                <a
                    href="https://github.com/HadrienSmet"
                    target="_blank"
                    aria-label="Link to my github"
                >
                    <Github
                        color={mainText}
                        dynamicClass="active"
                    />
                    <Github color={mainText} />
                </a>
                <a
                    href="https://www.linkedin.com/in/hadrien-smet-b80022207/"
                    target="_blank"
                    aria-label="Link to my linkedin"
                >
                    <Linkedin
                        color="#0172b1"
                        dynamicClass="active"
                    />
                    <Linkedin color={mainText} />
                </a>
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
        </div>
    );
};
