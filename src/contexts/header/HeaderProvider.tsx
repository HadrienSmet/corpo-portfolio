import { PropsWithChildren, useEffect, useRef, useState } from "react";

import { HeaderContext, LOCKED_VIEW, LockedView } from "./HeaderContext";

export const HeaderProvider = ({ children }: PropsWithChildren) => {
    const [lockedView, setLockedView] = useState<LockedView | undefined>(undefined);
    const [scrollY, setScrollY] = useState(0);
    const [shouldDisplay, setShouldDisplay] = useState(true);

    const prevScrollValue = useRef(0);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setScrollY(window.scrollY);
        prevScrollValue.current = window.scrollY;
    }, [lockedView]);
    useEffect(() => {
        if (headerRef.current === null) {
            return;
        }
        if (shouldDisplay) {
            headerRef.current.style.translate = "0 0";
        } else {
            headerRef.current.style.translate = "0 -104px";
        }
    }, [shouldDisplay]);
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        window.addEventListener("scroll", handleScroll);

        setShouldDisplay(true);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        if (lockedView !== undefined) {
            switch (lockedView) {
                case LOCKED_VIEW.hide:
                    setShouldDisplay(false);
                    break;
                case LOCKED_VIEW.show:
                    setShouldDisplay(true);
                    break;
            }

            return;
        }

        if (prevScrollValue.current === scrollY) {
            return;
        }

        if (prevScrollValue.current > scrollY) {
            setShouldDisplay(true);
            prevScrollValue.current = scrollY;
        } else {
            setShouldDisplay(false);
            prevScrollValue.current = scrollY;
        }
    }, [scrollY, lockedView]);

    const value = {
        headerRef,
        shouldDisplay,
        setLockedView,
    };

    return (
        <HeaderContext.Provider value={value}>
            {children}
        </HeaderContext.Provider>
    )
};
