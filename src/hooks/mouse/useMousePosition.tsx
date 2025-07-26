import { useEffect, useState } from "react";

const DEFAULT_POSITION = { x: 0, y: 0 };
export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ ...DEFAULT_POSITION });

    const updateMousePosition = (e: MouseEvent) =>
        setMousePosition({ x: e.clientX, y: e.clientY });

    useEffect(() => {
        document.addEventListener("mousemove", updateMousePosition);
        return () =>
            document.removeEventListener("mousemove", updateMousePosition);
    }, []);

    return (mousePosition);
};
