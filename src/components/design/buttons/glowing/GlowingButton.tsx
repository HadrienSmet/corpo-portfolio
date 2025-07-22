import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import "./glowingButton.scss";

export const GlowingButton = ({ children, className = "", onClick, ...props }: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) => (
    <button
        {...props}
        className={`glowing-button button-styleless ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);
