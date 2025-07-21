import { useEffect, useState } from "react";

import { useWindowSize } from "@/hooks";

const IMAGE_HEIGHT = 575 as const;
const IMAGE_WIDTH = 434 as const;
export const useDoubleImageDimensions = () => {
    const [scale, setScale] = useState(1);

    const REFERENCE_WIDTH = 1424 as const;

    const { width } = useWindowSize();

    useEffect(() => {
        const handleResize = () => {
            const ratio = width / REFERENCE_WIDTH;
            const clampedScale = Math.max(0.85, Math.min(ratio, 1.5));
            setScale(clampedScale);
        };

        handleResize();
    }, [width]);

    return ({
        height: IMAGE_HEIGHT * scale,
        width: IMAGE_WIDTH * scale,
    });
};
