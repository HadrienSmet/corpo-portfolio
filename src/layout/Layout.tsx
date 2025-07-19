import { Outlet } from "react-router";
import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);
