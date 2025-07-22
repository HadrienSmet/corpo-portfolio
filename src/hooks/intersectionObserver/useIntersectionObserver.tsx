import { useEffect, useState } from "react";

const INVISIBLE = "invisible";
const VISIBLE = "visible";

export type IntersectionObserverProps = {
    readonly rootMargin: string;
    readonly threshold: number;
};
export const useIntersectionObserver = ({
    threshold,
    rootMargin,
}: IntersectionObserverProps) => {
    const [observer, setObserver] = useState<IntersectionObserver | null>(null);
    useEffect(() => {
        const options = {
            root: null,
            threshold: threshold,
            rootMargin: rootMargin,
        };
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove(INVISIBLE);
                    entry.target.classList.add(VISIBLE);
                } else {
                    entry.target.classList.remove(VISIBLE);
                    entry.target.classList.add(INVISIBLE);
                }
            });
        }, options);
        setObserver(observer);
    }, [rootMargin, threshold]);

    return (observer);
};
