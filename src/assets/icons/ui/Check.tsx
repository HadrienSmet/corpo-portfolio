import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const Check = ({ color, dynamicClass = "", size = DEFAULT_SIZE }: IconProps) => (
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
        <path
            fill="none"
            d="M0 0h24v24H0z"
        />
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
);
