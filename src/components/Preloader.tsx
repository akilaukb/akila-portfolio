"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading for now, or hook into image loading logic
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setLoaded(true);
                    return 100;
                }
                return prev + 1;
            });
        }, 20); // Adjust speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {!loaded && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-6xl font-bold tracking-tighter">
                        {progress}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
