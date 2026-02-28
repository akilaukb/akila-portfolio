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
                    className="flex-1 flex flex-col mb-10"
                >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-8 group">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-playfair font-black tracking-tighter">RESUME</h1>
                            <div className="h-1 w-20 bg-blue-600 rounded-full mt-2 group-hover:w-32 transition-all duration-500" />
                        </div>
                        <a
                            href="https://drive.google.com/file/d/1_vStCWaPxyomRR0aE0Fy2TZMyyfp_Jer/view?usp=sharing"
                            target="_blank"
                            className="bg-white text-black px-8 py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-gray-200 transition-all shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
                        >
                            <Download size={20} /> Download PDF
                        </a>
                    </div>

                    <div className="flex-1 w-full bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden relative min-h-[600px] shadow-2xl">
                        {/* Google Docs Viewer */}
                        <iframe
                            src="https://drive.google.com/file/d/1_vStCWaPxyomRR0aE0Fy2TZMyyfp_Jer/preview"
                            className="w-full h-full relative z-10"
                            title="Resume Preview"
                            allow="autoplay"
                        ></iframe>

                        {/* Enhanced Fallback Info */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/40 backdrop-blur-sm -z-10">
                            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                                <Download className="text-blue-400" size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Loading Preview...</h3>
                            <p className="text-gray-400 text-sm max-w-xs mb-8">
                                If the preview doesn&apos;t load in a few seconds, it may be blocked by your browser settings.
                            </p>
                            <a
                                href="https://drive.google.com/file/d/1_vStCWaPxyomRR0aE0Fy2TZMyyfp_Jer/view?usp=sharing"
                                target="_blank"
                                className="text-blue-500 font-bold hover:underline"
                            >
                                Open Directly in Google Drive
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
