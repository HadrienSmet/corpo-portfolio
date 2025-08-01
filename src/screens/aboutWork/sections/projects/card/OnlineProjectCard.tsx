import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { ProjectType } from "@/data";
import { useElementVisibility, useWindowSize } from "@/hooks";

import "./onlineProjectCard.scss";

export const useProjectOnMouseMove = () => {
    const [isHover, setIsHover] = useState(false);

    const imgRef = useRef<HTMLImageElement | null>(null);

    const { width } = useWindowSize();

    const onMouseEnter = () => setIsHover(() => true);
    const onMouseLeave = () => setIsHover(() => false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const rect = imgRef.current?.getBoundingClientRect();
            if (rect) {
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ratioX = -(x / rect.width) * 40 + 20;
                const ratioY = -(y / rect.height) * 40 + 20;

                imgRef.current!.style.setProperty(
                    `--${imgRef.current?.id}-trans-x`,
                    `${ratioX}px`
                );
                imgRef.current!.style.setProperty(
                    `--${imgRef.current?.id}-trans-y`,
                    `${ratioY}px`
                );
            }
        };
        if (width && width >= 1025) {
            if (isHover) window.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isHover, width]);

    return {
        imgRef,
        onMouseEnter,
        onMouseLeave,
    };
};

const IMAGE_SIZE = 300 as const;
type OnlineProjectCardProps = {
    readonly project: ProjectType;
    readonly onClick: MouseEventHandler<HTMLDivElement>
};
export const OnlineProjectCard = ({ project, onClick }: OnlineProjectCardProps) => {
    const { elementRef } = useElementVisibility({});
    const { imgRef, onMouseEnter, onMouseLeave } = useProjectOnMouseMove();
    const { t } = useTranslation();

    return (
        <div
            onClick={onClick}
            className="online-project__card"
            id={project.id}
            ref={elementRef}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                ref={imgRef}
                id={`${project.id}-img`}
                src={`/images/projects/${project.id}/${project.imageLink}`}
                alt={t(`projects.cardAlt`, { name: t(`projects.online.${project.id}.name`) })}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
            />
            <div className="online-project__card-content ">
                <h3>{t(`projects.online.${project.id}.name`)}</h3>
                <p className="project-card-overview">{t(`projects.online.${project.id}.overview`)}</p>
                <ul>
                    {project.tools.map((tool) => (
                        <li key={tool}>{tool}</li>
                    ))}
                </ul>
                <p className="project-card-explanation">{t("learnMore")}</p>
            </div>
        </div>
    );
};
