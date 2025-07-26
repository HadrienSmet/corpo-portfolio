import { useTranslation } from "react-i18next";

import { ProjectType } from "@/data";

import "./screenShotsView.scss";

export const ScreenShotsView = ({ project }: { project: ProjectType }) => {
    const { t } = useTranslation();

    return (
        <div className="project-summary-screenshots">
            <div className="screenshots-container">
                {project.images?.map(image => (
                    <img
                        alt={t(`projects.online.${project.id}.alts.${image.id}`)}
                        key={image.url}
                        src={`/images/projects/${project.id}/${image.url}`}
                    />
                ))}
            </div>
        </div>
    );
};
