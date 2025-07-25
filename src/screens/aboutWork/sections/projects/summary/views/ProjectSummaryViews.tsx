import { ProjectType } from "@/data";

import { NAVIGATION_SUMMARY, NavigationId } from "../navigation";

import { ArticleView } from "./article";
import { ScreenShotsView } from "./screenshots";
import { VideosView } from "./videos";

type ProjectSummaryViewsProps = {
    readonly project: ProjectType;
    readonly selectedId: NavigationId;
}
export const ProjectSummaryViews = ({ project, selectedId }: ProjectSummaryViewsProps) => {
    if (selectedId === NAVIGATION_SUMMARY.article) {
        return (<ArticleView project={project} />);
    }
    if (selectedId === NAVIGATION_SUMMARY.screenshots) {
        return (<ScreenShotsView project={project} />);
    }

    return (<VideosView project={project} />);
};
