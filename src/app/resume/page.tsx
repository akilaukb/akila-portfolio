"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Download } from "lucide-react";

export default function Resume() {
    return (
        <main className="bg-black min-h-screen text-white">
            <Navbar />
            <div className="pt-32 px-6 md:px-20 max-w-7xl mx-auto h-screen flex flex-col">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 flex flex-col"
                >
                    <div className="flex justify-between items-end mb-8">
                        <h1 className="text-5xl md:text-6xl font-playfair font-bold">RESUME</h1>
                        <a
                            href="https://drive.google.com/file/d/1_vStCWaPxyomRR0aE0Fy2TZMyyfp_Jer/view?usp=sharing"
                            target="_blank"
                            className="bg-white text-black px-6 py-3 rounded-full font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-gray-200 transition-colors"
                        >
                            <Download size={20} /> Download PDF
                        </a>
                    </div>

                    <div className="flex-1 w-full bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden relative">
                        {/* PDF Viewer using Google Drive Preview */}
                        <iframe
                            src="https://drive.google.com/file/d/1_vStCWaPxyomRR0aE0Fy2TZMyyfp_Jer/preview"
                            className="w-full h-full relative z-10"
                            title="Resume Preview"
                            allow="autoplay"
                        ></iframe>

                        {/* Fallback if no PDF found */}
                        <div className="absolute inset-0 -z-10 flex items-center justify-center text-gray-600">
                            <p>Loading Resume Preview...</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
