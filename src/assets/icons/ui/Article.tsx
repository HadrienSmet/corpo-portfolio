import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const Article = ({ color, dynamicClass = "", size = DEFAULT_SIZE }: IconProps) => (
    <svg
        className={dynamicClass}
        stroke={color}
        fill={color}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
    </svg>
);
