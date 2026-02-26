"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";

const FRAME_COUNT = 136; // Updated to match actual frames
const IMAGE_PATH_PREFIX = "/sequence/frame_";

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const isMobile = useIsMobile();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        // Preload images
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const promises: Promise<void>[] = [];

            for (let i = 0; i < FRAME_COUNT; i++) {
                const promise = new Promise<void>((resolve) => {
                    const img = new window.Image();
                    const formattedIndex = i.toString().padStart(3, "0");
                    img.src = `${IMAGE_PATH_PREFIX}${formattedIndex}.webp`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = () => {
                        console.error(`Failed to load image: ${img.src}`);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setImagesLoaded(true);
        };

        if (isMobile === false) {
            loadImages();
        }
    }, [isMobile]);

    // Handle Resize separately
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame on resize
                if (imagesLoaded && images.length > 0) {
                    const frameIndex = Math.round(currentIndex.get());
                    renderFrame(frameIndex);
                }
            }
        };

        window.addEventListener("resize", handleResize);
        // Initial size
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesLoaded, images, currentIndex]);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Ensure dimensions

        const img = images[index];

        if (!img || !img.complete || img.naturalWidth === 0) {
            return; // Skip rendering if image is not ready, preserving previous frame
        }

        // Object-fit: cover logic
        const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
        const x = (canvas.width / 2) - (img.naturalWidth / 2) * scale;
        const y = (canvas.height / 2) - (img.naturalHeight / 2) * scale;

        if (!Number.isFinite(scale) || !Number.isFinite(x) || !Number.isFinite(y)) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.naturalWidth * scale, img.naturalHeight * scale);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (imagesLoaded && !isMobile) {
            renderFrame(Math.round(latest));
        }
    });

    // Initial render after load
    useEffect(() => {
        if (imagesLoaded && !isMobile && images.length > 0) {
            // Ensure canvas size is set before first render
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
            renderFrame(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imagesLoaded, isMobile, images]);


    const heroScrollHeight = isMobile ? "h-[350vh]" : "h-[700vh]";

    return (
        <div ref={containerRef} className={`relative ${heroScrollHeight} w-full bg-black`}>
            <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
                {isMobile ? (
                    <div className="h-full w-full relative flex items-center justify-center bg-black">
                        <div className="absolute inset-0">
                            <Image
                                src="/sequence/frame_000.webp"
                                alt="Hero"
                                fill
                                className="object-cover opacity-60"
                                priority
                            />
                        </div>
                        {/* HUD style scroll indicator for mobile */}
                        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to Explore</span>
                            <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                        </div>
                    </div>
                ) : (
                    <canvas ref={canvasRef} className="block h-full w-full object-cover" />
                )}
            </div>
        </div>
    );
}
