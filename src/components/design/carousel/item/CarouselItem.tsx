import { RefObject, useMemo } from "react";

import "./carouselItem.scss";

const OPACITY = {
    max: 0,
    min: 1,
} as const;
export const SCALE = {
    max: 1,
    min: 0.5,
} as const;
/** Refers to a percentage */
const TRANSLATE_Y = {
    max: 0,
    min: -2,
} as const;

/**
 * @param minValue value returned when item is far from the center
 * @param maxValue value returned when item is on the center
 * @param distance distance between the center of the item and the center of the viewport
 * @returns
 *  A number included within a range depending on a distance
 *  Max value is returned when the item is centered
 *  Min value is returned when the item is at the extreme side of the viewport
 */
const getValueOnDistance = ({min, max, distance }: {min: number, max: number, distance: number}) => max - Math.min(Math.abs(distance), 1) * (max - min);
type CarouselItemProps<T> = {
    readonly i: number;
    readonly index: number;
    readonly item: T;
    readonly itemHeight: number;
    readonly itemWidth: number;
    readonly onClick?: (num: number) => void;
    readonly perspective?: boolean;
    readonly renderItem: (item: T, isActive: boolean) => React.ReactNode;
    readonly scrollLeft: number;
    readonly wrapperRef: RefObject<HTMLDivElement | null>;
};
export const CarouselItem = <T,>({
    i,
    index,
    item,
    itemHeight,
    itemWidth,
    onClick,
    perspective,
    renderItem,
    scrollLeft,
    wrapperRef,
}: CarouselItemProps<T>) => {
    const isActive = i === index;

    const transformStyles = useMemo(() => {
        const wrapperWidth = wrapperRef.current?.clientWidth ?? 0;
        const itemStart = itemWidth * i;
        const itemCenter = itemStart + itemWidth / 2;
        const sidePadding = (wrapperWidth - itemWidth) / 2;
        const viewportCenter = scrollLeft + (wrapperWidth / 2) - sidePadding;
        const distance = (itemCenter - viewportCenter) / itemWidth;

        const clampedDistance = Math.min(Math.max(distance, -2), 2);

        const opacity = getValueOnDistance({
            ...OPACITY,
            distance: clampedDistance,
        });
        const scale = getValueOnDistance({
            ...SCALE,
            distance: clampedDistance,
        });
        const translateY = getValueOnDistance({
            ...TRANSLATE_Y,
            distance: clampedDistance,
        });

        return ({
            item: perspective
                ? {
                    transform: `
                        scale(${scale})
                        translateY(${translateY}%)
                    `,
                    }
                : {},
            filter: { opacity }
        });
    }, [itemWidth, scrollLeft, perspective]);

    return (
        <div
            className={`carousel-item ${isActive ? "active" : ""}`}
            onClick={() => onClick?.(i)}
            style={{
                ...transformStyles.item,
                minHeight: itemHeight,
                minWidth: itemWidth,
                width: itemWidth,
            }}
        >
            <div
                className="carousel-item__content"
                style={{
                    minHeight: itemHeight,
                    minWidth: itemWidth,
                    width: itemWidth,
                }}
            >
                {renderItem(item, isActive)}
            </div>
            <div
                className="carousel-item__filter"
                style={transformStyles.filter}
            />
        </div>
    );
};
