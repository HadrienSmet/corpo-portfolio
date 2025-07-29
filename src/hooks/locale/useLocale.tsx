import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router";
export const useLocale = () => {
    const { i18n } = useTranslation();
    const { locale = "en" } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
    }, [locale, i18n]);

    const setLocale = (newLocale: string) => {
        if (newLocale === locale) return;

        const splitted = location.pathname.split("/");

        navigate(`/${newLocale}/${splitted[splitted.length-1]}`, { replace: true });
    };

    return ({
        locale,
        setLocale,
    });
};
