import { ThemedInkBackground } from "@/layout";

import { SectionAbout, SectionContact, SectionIntro } from "./sections";
import "./home.scss";


export const Home = () => (
    <div className="home">
        <ThemedInkBackground parentClassName="home" />
        <SectionIntro />
        <SectionAbout />
        <SectionContact />
    </div>
);
