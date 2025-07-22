import { Aws, Docker, Express, MongoDB, NextJS, NodeJs, PostgreSQL, Sass, SocketIO, SvgReact, TypeScript, VueJs } from "@/assets";
import { useElementVisibility } from "@/hooks";

import "./sectionStacks.scss";

const ICON_PROPS = { size: 60 } as const;
export const SectionStacks = () => {
    const { elementRef } = useElementVisibility({});

    return (
        <div id="stacks" className="section-stacks" ref={elementRef}>
            <h2>Stacks</h2>
            <div className="stacks-container">
                <TypeScript {...ICON_PROPS} />
                <SvgReact {...ICON_PROPS} />
                <NextJS {...ICON_PROPS} />
                <VueJs {...ICON_PROPS} />
                <Sass {...ICON_PROPS} />
                <NodeJs {...ICON_PROPS} />
                <Express {...ICON_PROPS} />
                <SocketIO {...ICON_PROPS} />
                <MongoDB {...ICON_PROPS} />
                <PostgreSQL {...ICON_PROPS} />
                <Aws {...ICON_PROPS} />
                <Docker {...ICON_PROPS} />
            </div>
        </div>
    );
};
