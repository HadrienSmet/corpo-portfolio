import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router";

export const useLocale = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { locale = "en" } = useParams();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    const setLocale = (newLocale: string) => {
        if (newLocale === locale) return;

        const [_, __, pageName] = location.pathname.split("/");

        navigate(`/${newLocale}/${pageName ?? ""}`, { replace: true });
    };

    return ({
        locale,
        setLocale,
    });
};
