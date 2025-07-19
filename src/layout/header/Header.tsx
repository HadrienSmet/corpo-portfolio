import { LocaleSelect, ThemeToggler } from "@/components";

import "./header.scss";

export const Header = () => {
    return (
        <header className="header">
            <span>Hadrien Smet</span>
            <div className="header-actions">
                <ThemeToggler containerWidth={60} />
                <LocaleSelect onBackground />
            </div>
        </header>
    );
};
