import { RefObject, useEffect, useRef } from "react";

import "./gradientButton.scss";

export const findDegree = (
    element: HTMLDivElement,
    event: MouseEvent
): number => {
    const rect = element !== null
        ? element.getBoundingClientRect()
        : undefined;

    if (rect !== undefined) {
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const radianDegree = Math.atan2(y, x);
        const degree = (radianDegree * 180) / Math.PI + 180;

        return (degree);
    } else {
        return (0);
    }
};

const useGradientButton = (): RefObject<HTMLDivElement | null> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) {
                return;
            }

            const degree = findDegree(ref.current, e);

            ref.current?.style.setProperty(
                "--gradient-rotation",
                `${degree + 110}deg`
            );
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (ref);
};

type GradientButtonProps = {
    readonly label: string;
    readonly onClick: () => void;
};
export const GradientButton = ({ label, onClick }: GradientButtonProps) => {
    const ref = useGradientButton();

    return (
        <div ref={ref} className="gradient">
            <button onClick={onClick}>{label}</button>
        </div>
    );
};
