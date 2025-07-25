import { ProjectType } from "@/data";

import "./articleView.scss";

export const ArticleView = ({ project }: { project: ProjectType; }) => (
    <div className="project-summary-data">
        <em>{project.tools.join(", ")}.</em>
        <div className="project-summary-description">
            {project.descriptions.map((description, index) => (
                <p key={`description-${index}`}>{description}</p>
            ))}
        </div>
        {project.comingSoon && (
            <div className="project-summary-description">
                {project.comingSoon.map((paragraph, index) => (
                    <p key={`coming-soon-${index}`}>{paragraph}</p>
                ))}
            </div>
        )}
    </div>
);
