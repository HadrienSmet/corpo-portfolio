import { PropsWithChildren, RefObject, useEffect, useRef } from "react";

import "./gradientButton.scss";

const findDegree = (
  element: HTMLDivElement,
  event: MouseEvent
): number => {
    const rect = element.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = event.clientX - cx;
    const dy = event.clientY - cy;

    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI + 90;

    return ((deg + 360) % 360);
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

type GradientButtonProps =
    | {
        readonly label: string;
        readonly onClick: () => void;
    }
    | PropsWithChildren;
export const GradientButton = (props: GradientButtonProps) => {
    const ref = useGradientButton();

    return (
        <div ref={ref} className="gradient">
            {"label" in props
                ? (<button onClick={props.onClick}>{props.label}</button>)
                : (props.children)
            }
        </div>
    );
};
