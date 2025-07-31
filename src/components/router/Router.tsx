import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation, useParams } from "react-router";

import { LocaleProvider } from "@/contexts";
import i18n from "@/i18n";
import { SUPPORTED_LANGUAGES } from "@/i18n/translations";
import { Layout } from "@/layout";
import { AboutMe, AboutWork, Home } from "@/screens";

import { ROUTES } from "./routes";

const LanguageHandler = ({ children }: { children: React.ReactNode; }) => {
    const { locale } = useParams();

    useEffect(() => {
        if (locale && i18n.language !== locale) {
            i18n.changeLanguage(locale);
        }
    }, [locale]);

    if (!Object.keys(SUPPORTED_LANGUAGES).includes(locale || "")) {
        return (<Navigate to="/en" replace />);
    }

    return (children);
};
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, [pathname]);

    return (null);
};

export const Router = () => (
    <BrowserRouter>
        <LocaleProvider>
            <ScrollToTop />
            <Routes>
                <Route
                    element={(
                        <LanguageHandler>
                            <Layout />
                        </LanguageHandler>
                    )}
                    path=":locale"
                >
                    <Route
                        element={<Home />}
                        index
                    />
                    <Route
                        element={<AboutMe />}
                        path={ROUTES.aboutMe}
                    />
                    <Route
                        element={<AboutWork />}
                        path={ROUTES.aboutWork}
                    />
                </Route>
                <Route
                    element={<Navigate to="/en" replace />}
                    path="*"
                />
            </Routes>
        </LocaleProvider>
    </BrowserRouter>
);
