import { RefObject, useEffect, useRef } from "react";

import { useIntersectionObserver, useWindowSize } from "@/hooks";

import { useDoubleImageDimensions } from "../useDoublieImageDimensions";

import "./doubleImageContainer.scss";

type ImgOnScrollPropsType = {
    readonly doubleImgRef: RefObject<HTMLDivElement | null>;
};
const handleDoubleImageTranslateX = (
    ratio: number,
    element: RefObject<HTMLDivElement | null>
) => {
    if (element.current !== null) {
        // -300px < translateInPx < 300px
        let translateInPx = 300 - 2 * 3 * ratio;

        element.current.style.setProperty(
            "--div-translation",
            `${translateInPx}px`
        );
    }
};

const handleContainersWidth = (
    ratio: number,
    firstRef: RefObject<HTMLDivElement | null>,
    secondRef: RefObject<HTMLDivElement | null>
) => {
    if (firstRef.current !== null && secondRef.current !== null) {
        if (ratio <= 25) {
            firstRef.current.style.setProperty("--first-div-width", `100%`);
            secondRef.current.style.setProperty("--second-div-width", `0%`);
            return;
        }
        if (ratio >= 75) {
            firstRef.current.style.setProperty("--first-div-width", `0%`);
            secondRef.current.style.setProperty("--second-div-width", `100%`);
            return;
        }
        firstRef.current.style.setProperty(
            "--first-div-width",
            `${100 - (ratio - 25) * 2}%`
        );
        secondRef.current.style.setProperty(
            "--second-div-width",
            `${(ratio - 25) * 2}%`
        );
    }
};

const useImageMouseMove = () => {
    const { width: windowWidth } = useWindowSize();

    const doubleImgRef = useRef<HTMLDivElement | null>(null);
    const firstImgContainerRef = useRef<HTMLDivElement | null>(null);
    const secondImgContainerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handlePictureOnMouseMove = (e: MouseEvent) => {
            const ratioX = (e.clientX / windowWidth) * 100;

            handleContainersWidth(
                ratioX,
                firstImgContainerRef,
                secondImgContainerRef
            );
            handleDoubleImageTranslateX(ratioX, doubleImgRef);
        };

        window.addEventListener("mousemove", handlePictureOnMouseMove);
        return () => {
            window.removeEventListener("mousemove", handlePictureOnMouseMove);
        };
    }, [windowWidth]);

    useEffect(() => {
        handleContainersWidth(
            50,
            firstImgContainerRef,
            secondImgContainerRef,
        );
        handleDoubleImageTranslateX(50, doubleImgRef);
    }, []);

    return ({
        doubleImgRef,
        firstImgContainerRef,
        secondImgContainerRef,
    });
};

const useImageOnScroll = ({ doubleImgRef }: ImgOnScrollPropsType) => {
    const observer = useIntersectionObserver({
        threshold: 0.5,
        rootMargin: "0px",
    });

    useEffect(() => {
        if (doubleImgRef.current !== null && observer !== null) {
            observer.observe(doubleImgRef.current);
        }
    }, [doubleImgRef, observer]);
};

export const DoubleImageContainer = () => {
    const { height, width } = useDoubleImageDimensions();
    const {
        doubleImgRef,
        firstImgContainerRef,
        secondImgContainerRef,
    } = useImageMouseMove();

    useImageOnScroll({ doubleImgRef });

    return (
        <div
            id="double-image"
            ref={doubleImgRef}
            className="double-img-container"
            style={{ transform: `translateX(var(--div-translation))`, width }}
        >
            <div ref={firstImgContainerRef} className="first-img-container">
                <img
                    src="/images/dev-portrait-pochoir.webp"
                    alt="Illustration of myself"
                    height={height}
                    width={width}
                />
            </div>
            <div ref={secondImgContainerRef} className="second-img-container">
                <img
                    src="/images/dev-portrait.webp"
                    alt="Picture of myself"
                    height={height}
                    width={width}
                />
            </div>
        </div>
    );
};
