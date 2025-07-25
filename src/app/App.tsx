import { Router } from "@/components";
import { HeaderProvider, ThemeProvider } from "@/contexts";

import "./app.classes.scss";
import "./app.keyframes.scss";
import "./app.root.scss";
import "./app.tags.scss";
import "./app.scss";

export const App = () => (
    <ThemeProvider>
        <HeaderProvider>
            <Router />
        </HeaderProvider>
    </ThemeProvider>
);
