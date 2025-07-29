import React, { useRef, useEffect, useState } from "react";

import { SCALE } from "./carousel.constants";
import { CarouselItem } from "./item";
import "./Carousel.scss";

const PADDING_INLINE = 16 as const;

type CarouselProps<T> = {
    readonly index: number;
    readonly items: Array<T>;
    readonly itemHeight: number;
    readonly itemWidth: number;
    readonly onClick?: (index: number) => void;
    readonly perspective?: boolean;
    readonly renderItem: (item: T, isActive: boolean) => React.ReactNode;
};
export const Carousel = <T,>({
    items,
    itemHeight,
    itemWidth,
    index,
    onClick,
    perspective = true,
    renderItem,
}: CarouselProps<T>) => {
    const [scrollLeft, setScrollLeft] = useState(0);

    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current || !wrapperRef.current) return;

        const wrapperWidth = wrapperRef.current.clientWidth;
        const sidePadding = (wrapperWidth - itemWidth) / 2;

        containerRef.current.style.paddingInline = "0px";
        containerRef.current.style.paddingInline = `${sidePadding}px`;

        containerRef.current.scrollTo({
            left: itemWidth * index,
            behavior: "smooth",
        });
    }, [index, itemWidth]);
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => setScrollLeft(container.scrollLeft);

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const wrapperHeight = (itemHeight * SCALE.max) + (16 + 2 + 8);

    return (
        <div
            className="carousel-wrapper"
            ref={wrapperRef}
            style={{ minHeight: wrapperHeight}}
        >
            <div
                className="carousel"
                ref={containerRef}
                style={{
                    minHeight: wrapperHeight,
                    paddingTop: PADDING_INLINE,
                }}
            >
                {items.map((item, i) => (
                    <CarouselItem
                        i={i}
                        index={index}
                        item={item}
                        itemHeight={itemHeight}
                        itemWidth={itemWidth}
                        key={i}
                        onClick={onClick}
                        perspective={perspective}
                        renderItem={renderItem}
                        scrollLeft={scrollLeft}
                        wrapperRef={wrapperRef}
                    />
                ))}
            </div>
        </div>
    );
};
