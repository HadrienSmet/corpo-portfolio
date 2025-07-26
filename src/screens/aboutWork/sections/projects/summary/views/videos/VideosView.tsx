import { useTranslation } from "react-i18next";

import { ProjectType } from "@/data";

import "./videosView.scss";

export const VideosView = ({ project }: { project: ProjectType }) => {
    const { t } = useTranslation();

    const i18nPrefix = `projects.online.${project.id}.videos`;

    return (
        <div className="project-summary-videos">
            {project.videos && project.videos.map(video => (
                <div
                    className="project-summary-video"
                    key={video.id}
                >
                    <iframe
                        src={`https://www.youtube.com/embed/${video.url}`}
                        title={t(`${i18nPrefix}.${video.id}.title`)}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                    />
                    <div>
                        <p className="project-summary-video-title">{t(`${i18nPrefix}.${video.id}.title`)}</p>
                        <p className="project-summary-video-description">{t(`${i18nPrefix}.${video.id}.description`)}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
