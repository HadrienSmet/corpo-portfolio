import { PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router";

import { LocaleContext } from "./LocaleContext";

export const LocaleProvider = ({ children }: PropsWithChildren) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    useEffect(() => {
        const localeFromUrl = location.pathname.split("/").filter(Boolean)[0];
        if (localeFromUrl) {
            i18n.changeLanguage(localeFromUrl);
        }
    }, []);

    const setLocale = (newLocale: string) => {
        if (newLocale === i18n.language) return;

        const [_, __, pageName] = location.pathname.split("/");

        navigate(`/${newLocale}/${pageName ?? ""}`, { replace: true });
    };

    const value = {
        setLocale,
    };

    return (
        <LocaleContext.Provider value={value}>
            {children}
        </LocaleContext.Provider>
    );
};
