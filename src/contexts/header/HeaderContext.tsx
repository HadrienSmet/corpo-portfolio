import { createContext, Dispatch, RefObject, SetStateAction, useContext } from "react";

import { getContextError } from "../utils";

export const LOCKED_VIEW = {
    hide: "hide",
    show: "show",
} as const;
export type LockedView = typeof LOCKED_VIEW[keyof typeof LOCKED_VIEW];
type HeaderContextValue = {
    readonly shouldDisplay: boolean;
    readonly headerRef: RefObject<HTMLDivElement | null>;
    readonly setLockedView: Dispatch<SetStateAction<LockedView | undefined>>;
};
export const HeaderContext = createContext<HeaderContextValue | null>(null);
export const useHeaderContext = () => {
    const ctx = useContext(HeaderContext);

    if (!ctx) {
        throw new Error(getContextError("useHeaderContext", "HeaderContextProvider"));
    }

    return (ctx);
};
