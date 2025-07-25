import { useCssVariable } from "@/hooks";

import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const NextJS = ({ dynamicClass = "", size = DEFAULT_SIZE }: IconProps) => {
    const txtClr = useCssVariable("--clr-txt");

    return (
        <svg
            className={dynamicClass}
            fill={txtClr}
            height={size}
            viewBox="0 0 128 128"
            width={size}
        >
            <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"></path>
        </svg>
    );
};
