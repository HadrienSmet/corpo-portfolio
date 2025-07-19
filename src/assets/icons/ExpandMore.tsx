import { DEFAULT_SIZE } from "./icons.const";
import { IconProps } from "./icons.types";

export const ExpandMore = ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <svg
        fill={color}
        height={size}
        stroke={color}
        stroke-width="0"
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </svg>
);
