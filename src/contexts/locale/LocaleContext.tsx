import { createContext, useContext } from "react";

import { getContextError } from "../utils";

type LocaleContextValue = {
    readonly setLocale: (lng: string) => void;
};
export const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
    const ctx = useContext(LocaleContext);

    if (!ctx) {
        throw new Error(getContextError("useLocale", "LocaleProvider"));
    }

    return (ctx);
};
