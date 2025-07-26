import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Github, Internet } from "@/assets";
import { Modal, MODAL_TYPES } from "@/components";
import { ONLINE_PROJECTS } from "@/data";
import { useCssVariable } from "@/hooks";

import { NAVIGATION_SUMMARY, NavigationId, ProjectSummaryNavigation } from "./navigation";
import { ProjectSummaryViews } from "./views";
import "./projectSummary.scss";

type ProjectSummaryProps = {
    readonly close: () => void;
    readonly isOpen: boolean;
    readonly projectId: string;
};
export const ProjectSummary = ({ close, isOpen, projectId }: ProjectSummaryProps) => {
    const [selectedId, setSelectedId] = useState<NavigationId>(NAVIGATION_SUMMARY.article);

    const iconColor = useCssVariable("--clr-txt-onBg");
    const { t } = useTranslation();

    const project = useMemo(() => ONLINE_PROJECTS[projectId], [projectId]);

    const [year, month] = project.period.split("/");
    const i18nPrefix = `projects.online.${project.id}`;

    useEffect(() => {
        if (isOpen) {
            setSelectedId(NAVIGATION_SUMMARY.article);
        }
    }, [isOpen]);

    return (
        <Modal
            close={close}
            isOpen={isOpen}
            type={MODAL_TYPES.center}
        >
            <div className={`project-summary ${isOpen ? "visible" : ""}`}>
                <div className="project-summary-header">
                    <h3>{t(`${i18nPrefix}.name`)}</h3>
                    <span>{t(`months.${month}`)} {year}</span>
                </div>
                <div className="project-summary-body">
                    <ProjectSummaryNavigation
                        project={project}
                        selectedId={selectedId}
                        setSelectedId={setSelectedId}
                    />
                    <div className="project-summary-content">
                        <div className="project-summary-views">
                            <ProjectSummaryViews
                                project={project}
                                selectedId={selectedId}
                            />
                        </div>
                        <div className="project-summary-links">
                            {Object.keys(project.links).map((key) => (
                                <a
                                    key={project.links[key as keyof typeof project.links]}
                                    href={project.links[key as keyof typeof project.links]}
                                    target="_blank"
                                >
                                    {key === "prod"
                                        ? (<Internet size={20} color={iconColor} />)
                                        : (<Github size={20} color={iconColor} />)
                                    }
                                    <span>{t(`projects.links.${key}`)}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
