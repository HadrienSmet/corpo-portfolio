import { useEffect, useState } from "react";

import { Theme, THEME, useTheme } from "@/contexts";
import { useWindowSize } from "@/hooks";

import { BackgroundLayout } from "../BackgroundLayout";

const IMAGE_SIZE = 2700 as const;
const REFERENCE_WIDTH = 1648 as const;

type ThemedInkBackgroundProps ={
    readonly parentClassName: string;
};
export const ThemedInkBackground = ({ parentClassName }: ThemedInkBackgroundProps) => {
    const [scale, setScale] = useState(1);

    const { theme } = useTheme();
    const { width } = useWindowSize();

    useEffect(() => {
        const ratio = width / REFERENCE_WIDTH;
        setScale(ratio);
    }, [width]);

    const getClassName = (t: Theme) =>
        `${parentClassName}-background ${theme === t ? "visible" : ""}`;


    return (
        <BackgroundLayout>
            <img
                alt="Splash of ink"
                className={getClassName(THEME.DARK)}
                height={IMAGE_SIZE}
                loading="lazy"
                src={`/images/${THEME.DARK}-ink-splash.webp`}
                style={{ transform: `translate(-45%, -50%) scale(${scale})` }}
                width={IMAGE_SIZE}
            />
            <img
                alt="Splash of ink"
                className={getClassName(THEME.LIGHT)}
                height={IMAGE_SIZE}
                loading="lazy"
                src={`/images/${THEME.LIGHT}-ink-splash.webp`}
                style={{ transform: `translate(-45%, -50%) scale(${scale})` }}
                width={IMAGE_SIZE}
            />
        </BackgroundLayout>
    );
};
// 1648x874
