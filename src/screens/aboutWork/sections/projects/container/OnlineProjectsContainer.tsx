import { MouseEvent, useState } from "react";

import { LOCKED_VIEW, useHeaderContext } from "@/contexts";
import { ONLINE_PROJECTS } from "@/data";

import { OnlineProjectCard } from "../card";
import { ProjectSummary } from "../summary";

import "./onlineProjectsContainer.scss";

const parsePeriod = (period: string): number => {
    const [month, year] = period.split('/').map(Number);

    return (year * 100 + month);
};
export const OnlineProjectsContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [projectId, setProjectId] = useState<string>("leonorapp");

    const { setLockedView } = useHeaderContext();

    const openModal = () => {
        setLockedView(LOCKED_VIEW.hide);
        setIsOpen(true);
    };
    const closeModal = () => {
        setLockedView(undefined);
        setIsOpen(false);
    };

    const onClick = (e: MouseEvent<HTMLDivElement>) => {
        openModal();
        setProjectId((e.target as HTMLDivElement).id);
    };

    return (
        <div className="online-projects-container">
            {Object.keys(ONLINE_PROJECTS)
                .sort((a, b) => parsePeriod(ONLINE_PROJECTS[b].period) - parsePeriod(ONLINE_PROJECTS[a].period))
                .map((key) => (
                    <OnlineProjectCard
                        key={ONLINE_PROJECTS[key].id}
                        project={ONLINE_PROJECTS[key]}
                        onClick={onClick}
                    />
                ))}

            <ProjectSummary
                close={closeModal}
                isOpen={isOpen}
                projectId={projectId}
            />
        </div>
    );
};
