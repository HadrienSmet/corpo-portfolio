import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const Home = ({ color, dynamicClass, size = DEFAULT_SIZE }: IconProps) => (
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
        <path
            fill="none"
            d="M0 0h24v24H0z"
        />
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
);
