import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const DoubleUp = ({ color, size = DEFAULT_SIZE }: IconProps) => (
    <svg
        stroke={color}
        fill={color}
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z" />
        <path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z" />
    </svg>
);
