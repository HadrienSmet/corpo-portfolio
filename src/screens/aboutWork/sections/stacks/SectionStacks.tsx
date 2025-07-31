import { MouseEvent, ReactNode, useState } from "react";

import {
    Aws,
    Docker,
    Express,
    MongoDB,
    NextJS,
    NodeJs,
    PostgreSQL,
    Sass,
    SvgReact,
    TypeScript,
    VueJs,
} from "@/assets";
import { useElementVisibility } from "@/hooks";

import "./sectionStacks.scss";

type StackWithLabelProps = {
    readonly icon: ReactNode;
    readonly label: string;
}

const ICON_PROPS = { size: 60 } as const;
const STACKS: Array<StackWithLabelProps> = [
    {
        label: "TypeScript",
        icon: <TypeScript {...ICON_PROPS} />,
    },
    {
        label: "React",
        icon: <SvgReact {...ICON_PROPS} />,
    },
    {
        label: "Next JS",
        icon: <NextJS {...ICON_PROPS} />,
    },
    {
        label: "Node JS",
        icon: <NodeJs {...ICON_PROPS} />,
    },
    {
        label: "Aws",
        icon: <Aws {...ICON_PROPS} />,
    },
    {
        label: "Docker",
        icon: <Docker {...ICON_PROPS} />,
    },
    {
        label: "MongoDB",
        icon: <MongoDB {...ICON_PROPS} />,
    },
    {
        label: "PostgreSQL",
        icon: <PostgreSQL {...ICON_PROPS} />,
    },
    {
        label: "Express",
        icon: <Express {...ICON_PROPS} />,
    },
    {
        label: "Vue JS",
        icon: <VueJs {...ICON_PROPS} />,
    },
    {
        label: "Sass",
        icon: <Sass {...ICON_PROPS} />,
    },
];
const StackWithLabel = ({ label, icon }: StackWithLabelProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState<{ x: number; y: number; }>({ x: 0, y: 0 });

    const handlePosition = (e: MouseEvent<HTMLDivElement>) => setPosition({ x: e.clientX, y: e.clientY });

    return (
        <>
            <div
                className="stack-with-label"
                onMouseEnter={() => setIsVisible(true)}
                onMouseLeave={() => setIsVisible(false)}
                onMouseMove={handlePosition}
            >
                {icon}
            </div>
            {isVisible && (
                <div
                    className="stack-label"
                    style={{
                        left: position.x + 16,
                        top: position.y,
                    }}
                >
                    <p>{label}</p>
                </div>
            )}
        </>
    );
};
export const SectionStacks = () => {
    const { elementRef } = useElementVisibility({});

    return (
        <div id="stacks" className="section-stacks" ref={elementRef}>
            <h2>Stacks</h2>
            <div className="stacks-container">
                {STACKS.map(stack => (
                    <StackWithLabel
                        {...stack}
                        key={stack.label}
                    />
                ))}
            </div>
        </div>
    );
};
