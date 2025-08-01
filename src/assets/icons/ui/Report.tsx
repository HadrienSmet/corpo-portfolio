import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const Report = ({ color, dynamicClass = "", size = DEFAULT_SIZE }: IconProps) => (
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
        <path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
    </svg>
);
