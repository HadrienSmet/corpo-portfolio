import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const Work = ({ color, dynamicClass, size = DEFAULT_SIZE }: IconProps) => (
    <svg
        className={dynamicClass ?? ""}
        stroke={color}
        fill={color}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="none" d="M0 0h24v24H0V0z" />
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
)
