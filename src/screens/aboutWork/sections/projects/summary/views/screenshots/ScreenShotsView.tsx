import { ProjectType } from "@/data";

import "./screenShotsView.scss";

export const ScreenShotsView = ({ project }: { project: ProjectType }) => (
    <div className="project-summary-screenshots">
        <div className="screenshots-container">
            {project.images?.map(image => (
                <img
                    alt={image.alt}
                    key={image.url}
                    src={`/images/projects/${project.id}/${image.url}`}
                />
            ))}
        </div>
    </div>
);
