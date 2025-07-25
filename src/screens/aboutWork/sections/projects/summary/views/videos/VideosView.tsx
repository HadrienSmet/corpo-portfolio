import { ProjectType } from "@/data";

import "./videosView.scss";

export const VideosView = ({ project }: { project: ProjectType }) => (
    <div className="project-summary-videos">
        {project.videos && project.videos.map(video => (
            <div
                className="project-summary-video"
                key={video.title}
            >
                <iframe
                    src={`https://www.youtube.com/embed/${video.url}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-xl"
                />
                <p>{video.description}</p>
            </div>
        ))}
    </div>
);
