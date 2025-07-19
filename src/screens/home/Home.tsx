import { ThemedInkBackground } from "@/layout";

import { AboutSection, SectionIntro } from "./sections";
import "./home.scss";


export const Home = () => (
    <>
        <div className="home">
            <ThemedInkBackground parentClassName="home" />
            <SectionIntro />
            <AboutSection />
        </div>
    </>
);
