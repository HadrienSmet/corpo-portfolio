import { BrowserRouter, Route, Routes } from "react-router";

import { Layout } from "@/layout";
import { Home, Projects } from "@/screens";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
