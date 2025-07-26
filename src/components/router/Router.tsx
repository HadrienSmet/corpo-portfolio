import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";

import { Layout } from "@/layout";
import { AboutMe, AboutWork, Home } from "@/screens";

import { ROUTES } from "./routes";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (null);
};

export const Router = () => (
    <BrowserRouter>
        <ScrollToTop />
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.aboutMe} element={<AboutMe />} />
                <Route path={ROUTES.aboutWork} element={<AboutWork />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
