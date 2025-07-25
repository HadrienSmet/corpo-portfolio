import { useEffect, useRef, useState } from "react";

import { LocaleSelect, Modal, MODAL_TYPES, Navigation, ThemeToggler } from "@/components";
import { LOCKED_VIEW, useHeaderContext } from "@/contexts";

import "./header.scss";

export const Header = () => {
    const [shouldRender, setShouldRender] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const { headerRef, setLockedView } = useHeaderContext();

    const onClose = () => {
        setLockedView(undefined);
        setIsNavOpen(false);
    };
    const onOpen = () => {
        setLockedView(LOCKED_VIEW.show);
        setIsNavOpen(true);
    };
    const toggleExpansion = () => {
        if (!shouldRender) {
            setShouldRender(true);
        }

        if (isNavOpen) {
            onClose();
        } else {
            onOpen();
        }
    };

    useEffect(() => {
        if (isNavOpen) {
            buttonRef.current?.classList.add("opened");
            headerRef.current?.classList.add("opened");
        } else {
            buttonRef.current?.classList.remove("opened");
            headerRef.current?.classList.remove("opened");
        }
    }, [isNavOpen, headerRef]);

    return (
        <header className="header" ref={headerRef}>
            <span>Hadrien Smet</span>
            <div className="header-actions">
                <ThemeToggler containerWidth={60} />
                <LocaleSelect onBackground />
                <button
                    ref={buttonRef}
                    className="menu button-styleless"
                    onClick={toggleExpansion}
                    aria-label="Main Menu"
                >
                    <svg
                        id="toggle-nav-button"
                        width={50}
                        height={50}
                        viewBox={`0 0 100 100`}
                    >
                        <path
                            className="line line1"
                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path className="line line2" d="M 20,50 H 80" />
                        <path
                            className="line line3"
                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>
            </div>

            {shouldRender && (
                <Modal
                    close={onClose}
                    isOpen={isNavOpen}
                    type={MODAL_TYPES.right}
                >
                    <Navigation
                        close={onClose}
                        isOpen={isNavOpen}
                    />
                </Modal>
            )}
        </header>
    );
};
