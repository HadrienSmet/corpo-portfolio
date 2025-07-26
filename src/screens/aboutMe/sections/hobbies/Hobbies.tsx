import { useState, MouseEvent } from "react";

import { HOBBIES } from "@/data";
import { useMousePosition } from "@/hooks";

import { Hobby } from "./hobby";
import { HobbyImage } from "./hobbyImage";
import "./hobbies.scss";

const useHobbies = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleActiveIndex = (e: MouseEvent<HTMLLIElement>) => {
        const element = e.target as HTMLElement;
        const elementIndex = element.id.split("-")[1];

        setActiveIndex(parseInt(elementIndex));
    };
    const resetActiveIndex = () => setActiveIndex(-1);

    return ({
        activeIndex,
        handleActiveIndex,
        resetActiveIndex,
    });
};

export const Hobbies = () => {
    const { x, y } = useMousePosition();
    const { activeIndex, handleActiveIndex, resetActiveIndex } = useHobbies();

    return (
        <section id="hobbies" className="hobbies">
            <ul>
                {Object.keys(HOBBIES).map((index) => (
                    <Hobby
                        {...HOBBIES[index as keyof typeof HOBBIES]}
                        key={HOBBIES[index as keyof typeof HOBBIES].index}
                        handleActiveIndex={handleActiveIndex}
                        resetActiveIndex={resetActiveIndex}
                    />
                ))}
            </ul>
            <div className="hobbies-pictures">
                {Object.keys(HOBBIES).map((index) => (
                    <HobbyImage
                        {...HOBBIES[index as keyof typeof HOBBIES]}
                        activeIndex={activeIndex}
                        key={index}
                        x={x}
                        y={y}
                    />
                ))}
            </div>
        </section>
    );
};
