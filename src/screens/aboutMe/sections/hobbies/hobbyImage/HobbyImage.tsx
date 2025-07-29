import { useWindowSize } from "@/hooks";

import "./hobbyImage.scss";

type HobbyImgProps = {
    readonly activeIndex: number;
    readonly index: number;
    readonly url: string;
    readonly x: number;
    readonly y: number;
};
export const HobbyImage = ({ activeIndex, index, url, x, y, }: HobbyImgProps) => {
    const { width } = useWindowSize();

    const isActive = index === activeIndex;
    const posX = isActive ? x : 0;
    const posY = isActive ? y : 0;

    return (
        <img
            className={`hobby-image ${isActive ? "is-active" : ""}`}
            src={"/images/hobbies/" + url}
            alt={`Picture of my ${index}th hobby`}
            width={width*.3}
            style={{
                transform: `translate(${posX + 50}px, ${posY - 120}px) rotate(10deg)`,
            }}
        />
    );
};
