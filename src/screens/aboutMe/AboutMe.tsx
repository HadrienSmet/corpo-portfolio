import { ReactNode, useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { useLocale } from "@/hooks";

import { Hobbies } from "./sections";
import "./aboutMe.scss";

const DESCRIPTION_SEGMENTS = 4 as const;
export const AboutMe = () => {
    const [myDescription, setMyDescription] = useState<Array<ReactNode>>([]);

    const { locale } = useLocale();
    const { t } = useTranslation();

    useEffect(() => {
        const output: Array<ReactNode> = [];

        for (let i = 0; i < DESCRIPTION_SEGMENTS; i++) {
            output.push(<p key={`my-description-${i}`}>{t(`about.me.description.${i}`)}</p>);
        }

        setMyDescription(output);
    }, [locale]);

    return (
        <div className="about-me">
            <section className="section-details first-screen-view">
                <Trans
                    i18nKey={"about.me.title"}
                    components={{
                        default: <h1 />,
                        styled: <span />,
                    }}
                />
                <div className="my-description">
                    {myDescription}
                </div>
                <div className="personality-tests">
                    <a
                        href="https://drive.google.com/file/d/1-QeTq0lufeknbFwk2UyQT3n9cbgYitUm/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >MBTI</a>
                    <a
                        href="https://drive.google.com/file/d/1t7oAlXpJPd9hf5D8XtfAjNhEVxJVACWR/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Talents</a>
                </div>
                <h2>{t("about.me.hobbies.title")}</h2>
            </section>
            <Hobbies />
        </div>
    );
};
