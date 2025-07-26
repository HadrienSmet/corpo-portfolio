import { ReactNode, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { ProjectType } from "@/data";

import "./articleView.scss";
import { useLocale } from "@/hooks";

export const ArticleView = ({ project }: { project: ProjectType; }) => {
    const { locale } = useLocale();
    const { t } = useTranslation();

    const i18nPrefix = `projects.online.${project.id}`;

    const descriptionParagraph = useMemo(() => {
        const output: Array<ReactNode> = [];

        for (let i = 0; i < project.descriptionsSegments; i++) {
            output.push(<p key={`description-${i}`}>{t(`${i18nPrefix}.descriptions.${i}`)}</p>);
        }

        return (output);
    }, [locale, project]);
    const comingSoonParagraph = useMemo(() => {
        const output: Array<ReactNode> = [];

        if (!project.comingSoonSegments) {
            return (output);
        }

        for (let i = 0; i < project.comingSoonSegments; i++) {
            output.push(<p key={`comin-soon-${i}`}>{t(`${i18nPrefix}.comingSoon.${i}`)}</p>);
        }

        return (output);
    }, [locale, project]);
    return (
        <div className="project-summary-data">
            <em>{project.tools.join(", ")}.</em>
            <div className="project-summary-description">
                {descriptionParagraph}
            </div>
            {project.comingSoonSegments !== undefined && (
                <div className="project-summary-description">
                    {comingSoonParagraph}
                </div>
            )}
        </div>
    );
};
