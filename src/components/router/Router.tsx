import { BrowserRouter, Route, Routes } from "react-router";

import { Layout } from "@/layout";
import { AboutMe, AboutWork, Home } from "@/screens";

import { ROUTES } from "./routes";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={ROUTES.aboutMe} element={<AboutMe />} />
                <Route path={ROUTES.aboutWork} element={<AboutWork />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
