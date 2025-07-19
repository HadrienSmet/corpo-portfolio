import { Router } from "@/components";
import { ThemeProvider } from "@/contexts";

import "./app.classes.scss";
import "./app.keyframes.scss";
import "./app.root.scss";
import "./app.tags.scss";
import "./app.scss";

export const App = () => (
    <ThemeProvider>
        <Router />
    </ThemeProvider>
);
