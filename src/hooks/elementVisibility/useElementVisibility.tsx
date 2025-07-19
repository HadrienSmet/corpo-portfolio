import { useEffect, useRef } from "react";

import { IntersectionObserverProps, useIntersectionObserver } from "../intersectionObserver";

const ROOT_MARGIN = "0px";
const THRESHOLD = 0.2 as const;
export const useElementVisibility = ({ rootMargin = ROOT_MARGIN, threshold = THRESHOLD }: Partial<IntersectionObserverProps>) => {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const observer = useIntersectionObserver({ rootMargin, threshold });

    useEffect(() => {
        if (elementRef.current) {
            observer?.observe(elementRef.current);
        }
    }, [elementRef, observer]);

    return ({ elementRef });
};
