import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { ProjectType } from "@/data";

import "./articleView.scss";
import { useLocale } from "@/hooks";

export const ArticleView = ({ project }: { project: ProjectType; }) => {
    const [description, setDescription] = useState<Array<ReactNode>>([]);
    const [comingSoon, setComingSoon] = useState<Array<ReactNode>>([]);

    const { locale } = useLocale();
    const { t } = useTranslation();

    const i18nPrefix = `projects.online.${project.id}`;

    useEffect(() => {
        const handleComingSoon = () => {
            const output: Array<ReactNode> = [];

            if (!project.comingSoonSegments) {
                setComingSoon(output);
                return;
            }

            for (let i = 0; i < project.comingSoonSegments; i++) {
                output.push(<p key={`comin-soon-${i}`}>{t(`${i18nPrefix}.comingSoon.${i}`)}</p>);
            }

            setComingSoon(output)
        };
        const handleDescription = () => {
            const output: Array<ReactNode> = [];

            for (let i = 0; i < project.descriptionsSegments; i++) {
                output.push(<p key={`description-${i}`}>{t(`${i18nPrefix}.descriptions.${i}`)}</p>);
            }

            setDescription(output);
        };

        handleComingSoon();
        handleDescription();
    }, [locale, project]);
    return (
        <div className="project-summary-data">
            <em>{project.tools.join(", ")}.</em>
            <div className="project-summary-description">
                {description}
            </div>
            {project.comingSoonSegments !== undefined && (
                <div className="project-summary-description">
                    {comingSoon}
                </div>
            )}
        </div>
    );
};
