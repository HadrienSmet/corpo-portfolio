import { DEFAULT_SIZE } from "../icons.const";
import { IconProps } from "../icons.types";

export const VueJs = ({ dynamicClass = "", size = DEFAULT_SIZE }: IconProps) => (
    <svg
        className={dynamicClass}
        viewBox="0 0 128 128"
        width={size}
        height={size}
    >
        <path
            fill="#42b883"
            d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
            data-v-a5664777=""
        />
        <path
            fill="#35495e"
            d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
        />
    </svg>
);
