import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Article, Photo, Video } from "@/assets";
import { ProjectType } from "@/data";
import { useCssVariable } from "@/hooks";

import "./projectSummaryNavigation.scss";

export const NAVIGATION_SUMMARY = {
    article: "article",
    screenshots: "screenshots",
    videos: "videos",
} as const;
export type NavigationId = typeof NAVIGATION_SUMMARY[keyof typeof NAVIGATION_SUMMARY];

type NavigationItemProps = {
    readonly id: NavigationId;
    readonly selectedId: string;
    readonly setSelectedId: Dispatch<SetStateAction<NavigationId>>;
};
const NavigationItem = ({ id, selectedId, setSelectedId }: NavigationItemProps) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const defaultColor = useCssVariable("--clr-txt-04");
    const focusColor = useCssVariable("--clr-txt");
    const { t } = useTranslation();

    const icon = useMemo(() => {
        const color = (isSelected || isHovered)
            ? focusColor
            : defaultColor;
        switch (id) {
            case NAVIGATION_SUMMARY.article:
                return (<Article color={color} />);
            case NAVIGATION_SUMMARY.screenshots:
                return (<Photo color={color} />);
            case NAVIGATION_SUMMARY.videos:
                return (<Video color={color} />);
        }
    }, [id, isHovered, isSelected]);

    const onClick = () => setSelectedId(id);

    useEffect(() => {
        if (id === selectedId) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }, [id, selectedId]);

    return (
        <button
            className={`button-styleless${(isSelected || isHovered) ? " active" : ""}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {icon}
            <span>{t(`projects.${id}`)}</span>
        </button>
    );
};

type ProjectSummaryNavigationProps = {
    readonly project: ProjectType;
    readonly selectedId: NavigationId;
    readonly setSelectedId: Dispatch<SetStateAction<NavigationId>>;
};
export const ProjectSummaryNavigation = ({ project, selectedId, setSelectedId }: ProjectSummaryNavigationProps) => (
    <div className="project-summary-navigation">
        <NavigationItem
            id={NAVIGATION_SUMMARY.article}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
        />
        {project.videos && (
            <NavigationItem
                id={NAVIGATION_SUMMARY.videos}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
            />
        )}
        {project.images && (
            <NavigationItem
                id={NAVIGATION_SUMMARY.screenshots}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
            />
        )}
    </div>
);
