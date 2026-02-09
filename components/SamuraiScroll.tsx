'use client';

import { useScroll, useTransform, useSpring, motion, MotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 239; // Updated to match actual assets
const SCROLL_HEIGHT_MOBILE = 200; // 200vh on mobile
const SCROLL_HEIGHT_DESKTOP = 400; // 400vh on desktop

interface OverlayProps {
    scrollProgress: MotionValue<number>;
}

const TextOverlay = ({ scrollProgress }: OverlayProps) => {
    // Helper for opacity transform
    const useOpacity = (start: number, end: number) =>
        useTransform(scrollProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);

    // Helper for y-axis movement
    const useY = (start: number, end: number) =>
        useTransform(scrollProgress, [start, end], [20, -20]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
            {/* Beat A: Silence of Steel (0-20%) */}
            <motion.div
                style={{ opacity: useOpacity(0, 0.2), y: useY(0, 0.2) }}
                className="absolute text-center"
            >
                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90 mb-4">
                    SILENCE OF <span className="text-[#DC143C]">STEEL</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
                    A single motion. Total control.
                </p>
            </motion.div>

            {/* Beat B: The Draw (25-45%) */}
            <motion.div
                style={{ opacity: useOpacity(0.25, 0.45), y: useY(0.25, 0.45) }}
                className="absolute left-10 md:left-32 text-left"
            >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 mb-4">
                    THE <span className="text-[#DC143C]">DRAW</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
                    Precision over power.
                </p>
            </motion.div>

            {/* Beat C: Control (50-70%) */}
            <motion.div
                style={{ opacity: useOpacity(0.5, 0.7), y: useY(0.5, 0.7) }}
                className="absolute right-10 md:right-32 text-right"
            >
                <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90 mb-4">
                    <span className="text-[#DC143C]">CONTROL</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide">
                    Every movement is intentional.
                </p>
            </motion.div>

            {/* Beat D: Final Form (75-95%) */}
            <motion.div
                style={{ opacity: useOpacity(0.75, 0.95), y: useY(0.75, 0.95) }}
                className="absolute text-center"
            >
                <h2 className="text-7xl md:text-9xl font-bold tracking-tighter text-white/90 mb-6">
                    FINAL <span className="text-[#DC143C]">FORM</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide mb-8">
                    The moment of stillness.
                </p>
                <button className="px-8 py-3 bg-[#DC143C] text-white text-lg font-medium rounded-full hover:bg-[#8B0000] transition-colors pointer-events-auto">
                    Begin Journey
                </button>
            </motion.div>
        </div>
    );
};

export default function SamuraiScroll() {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [scrollHeight, setScrollHeight] = useState(SCROLL_HEIGHT_DESKTOP);

    // Responsive scroll height
    useEffect(() => {
        const updateHeight = () => {
            setScrollHeight(window.innerWidth < 768 ? SCROLL_HEIGHT_MOBILE : SCROLL_HEIGHT_DESKTOP);
        };
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    // Scroll tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth spring physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = new Array(FRAME_COUNT);

        const loadImages = async () => {
            const promises = Array.from({ length: FRAME_COUNT }).map((_, i) => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = `${basePath}/sequence/frame_${i}.jpg`;
                    img.onload = () => {
                        loadedCount++;
                        setLoadingProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                        imgArray[i] = img;
                        resolve(null);
                    };
                    img.onerror = () => {
                        console.error(`Failed to load frame ${i}`);
                        resolve(null);
                    };
                });
            });

            await Promise.all(promises);
            setImages(imgArray);
            setIsLoaded(true);
        };

        loadImages();
    }, [basePath]);

    // Canvas drawing loop
    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // High-DPI scaling
        const render = () => {
            // We use the spring value for smoothness
            const progress = smoothProgress.get();

            // Map 0-1 to frame index
            // Clamp between 0 and FRAME_COUNT - 1
            let frameIndex = Math.floor(progress * (FRAME_COUNT - 1));
            if (frameIndex < 0) frameIndex = 0;
            if (frameIndex >= FRAME_COUNT) frameIndex = FRAME_COUNT - 1;

            const img = images[frameIndex];
            if (!img) return;

            // Resize canvas to window size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Draw image "contain" style
            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const w = img.width * scale;
            const h = img.height * scale;
            const x = (canvas.width - w) / 2;
            const y = (canvas.height - h) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, x, y, w, h);
        };

        // Need to update on scroll change. 
        // Framer Motion values don't trigger re-renders by themselves in useEffect, 
        // but we can use onChange or just requestAnimationFrame loop
        const unsubscribe = smoothProgress.on("change", render);

        // Also render on resize
        window.addEventListener('resize', render);

        // Initial render
        render();

        return () => {
            unsubscribe();
            window.removeEventListener('resize', render);
        };
    }, [isLoaded, images, smoothProgress]);


    // Scroll indicator opacity - moved to top level to avoid conditional hook call
    const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: `${scrollHeight}vh` }}>
            {/* Loading Overlay */}
            {!isLoaded && (
                <div className="fixed inset-0 bg-[#050505] flex flex-col items-center justify-center z-50">
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mb-4">
                        <motion.div
                            className="h-full bg-white"
                            initial={{ width: 0 }}
                            animate={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                    <p className="text-white/40 font-mono text-sm">
                        LOADING SEQUENCE {loadingProgress}%
                    </p>
                </div>
            )}

            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#050505]">
                <canvas
                    ref={canvasRef}
                    className="block w-full h-full object-contain"
                />

                {/* Only show overlay and text when loaded */}
                {isLoaded && (
                    <>
                        <TextOverlay scrollProgress={scrollYProgress} />

                        {/* Scroll Indicator */}
                        <motion.div
                            style={{ opacity: scrollIndicatorOpacity }}
                            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm font-mono"
                        >
                            SCROLL TO EXPLORE
                        </motion.div>
                    </>
                )}
            </div>
        </div>
    );
}
