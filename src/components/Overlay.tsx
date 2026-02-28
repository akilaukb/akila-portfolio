"use client";

import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Overlay() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [stage, setStage] = useState(1);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest <= 0.18) {
            setStage(1);
        } else if (latest > 0.18 && latest < 0.38) {
            setStage(2);
        } else if (latest >= 0.38 && latest < 0.58) {
            setStage(3);
        } else if (latest >= 0.58 && latest < 0.78) {
            setStage(4);
        } else {
            setStage(5);
        }
    });

    const transitions = {
        initial: { opacity: 0, filter: "blur(10px)", scale: 0.95 },
        animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
        exit: { opacity: 0, filter: "blur(10px)", scale: 1.05 },
        transition: { duration: 0.8, ease: "easeInOut" as const }
    };

    return (
        <div ref={containerRef} className="absolute inset-0 h-full w-full pointer-events-none z-10">
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden perspective-1000">

                <div className="absolute top-24 left-0 right-0 flex justify-center gap-6 md:gap-12 z-20 pointer-events-none" />

                {/* Main Content Area */}
                <div className="relative flex-grow flex items-center justify-center w-full h-full">
                    <AnimatePresence mode="wait">
                        {stage === 1 && (
                            /* Section 1 - Intro */
                            <motion.div
                                key="s1"
                                {...transitions}
                                className="absolute inset-0 flex flex-col justify-end items-center pb-32 px-4 w-full max-w-[1920px] mx-auto z-10"
                            >
                                <div className="text-center">
                                    <h1 className="text-4xl md:text-7xl xl:text-8xl leading-none font-playfair font-black text-white tracking-tight mb-6 drop-shadow-2xl">
                                        AKILA UMAYANGA
                                    </h1>
                                    <h2 className="text-[10px] md:text-xl text-neutral-300 font-manrope font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase flex items-center justify-center gap-2 md:gap-4">
                                        <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/50 drop-shadow-md">SUPPORT</motion.span>
                                        <span className="text-neutral-600">|</span>
                                        <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-white/50 drop-shadow-md">OPERATIONS</motion.span>
                                        <span className="text-neutral-600">|</span>
                                        <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="text-white/50 drop-shadow-md">SECURITY</motion.span>
                                    </h2>
                                </div>
                            </motion.div>
                        )}

                        {stage === 2 && (
                            /* Section 2 - Core Competencies */
                            <motion.div
                                key="s2"
                                {...transitions}
                                className="absolute inset-0 flex items-center justify-between px-4 md:px-16 lg:px-24 w-full max-w-[1920px] mx-auto"
                            >
                                {/* Left Column */}
                                <div className="flex flex-col items-start justify-center h-full w-[45%] md:w-[40%] gap-8 md:gap-12">
                                    <div className="space-y-2">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl">Build.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs uppercase tracking-tighter md:normal-case md:tracking-normal">Designing resilient cloud infrastructure.</p>
                                    </div>
                                    <div className="space-y-2 pl-4 md:pl-8 border-l border-neutral-700">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl">Monitor.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs uppercase tracking-tighter md:normal-case md:tracking-normal">24/7 SIEM & SOC operations.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl">Defend.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs uppercase tracking-tighter md:normal-case md:tracking-normal">Proactive threat hunting.</p>
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div className="flex flex-col items-end justify-center h-full w-[45%] md:w-[40%] text-right gap-8 md:gap-12">
                                    <div className="space-y-2">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl">Scale.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs ml-auto uppercase tracking-tighter md:normal-case md:tracking-normal">Optimizing performance.</p>
                                    </div>
                                    <div className="space-y-2 pr-4 md:pr-8 border-r border-neutral-700">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl">Automate.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs ml-auto uppercase tracking-tighter md:normal-case md:tracking-normal">Streamlining DevOps.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl text-blue-400">Experience.</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-base leading-relaxed max-w-xs ml-auto uppercase tracking-tighter md:normal-case md:tracking-normal">5+ Years dedication.</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {stage === 3 && (
                            /* Section 3 - Side Details & Technical Focus */
                            <motion.div
                                key="s3"
                                {...transitions}
                                className="absolute inset-0 flex items-center justify-between px-8 md:px-20 w-full max-w-[1920px] mx-auto opacity-90"
                            >
                                {/* Left Side Details */}
                                <div className="flex flex-col gap-12 md:gap-24 top-1/2 -translate-y-1/2 relative mt-4 md:mt-20">
                                    <div className="space-y-3 md:space-y-4 border-l-2 border-emerald-500/50 pl-4 md:pl-6 py-2">
                                        <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold font-manrope uppercase tracking-widest rounded-full mb-1">
                                            Enterprise Ready
                                        </div>
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl uppercase tracking-wider">Mission Critical</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-sm leading-relaxed font-manrope max-w-[180px] md:max-w-[280px]">
                                            Securing zero-downtime environments for global scale.
                                        </p>
                                    </div>

                                    {/* Animated Ring */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                        className="w-24 h-24 md:w-40 md:h-40 ml-4 flex items-center justify-center border border-white/5 rounded-full relative"
                                    >
                                        <div className="absolute inset-2 border border-dashed border-white/20 rounded-full" />
                                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-emerald-400 rounded-full blur-[2px]" />
                                        <span className="text-white/30 text-[8px] md:text-xs font-manrope uppercase tracking-[0.2em] text-center w-full">24/7<br />Uptime</span>
                                    </motion.div>
                                </div>

                                {/* Right Side Details */}
                                <div className="flex flex-col items-end gap-12 md:gap-24 top-1/2 -translate-y-1/2 relative mt-4 md:mt-20 text-right">
                                    <div className="space-y-3 md:space-y-4 border-r-2 border-rose-500/50 pr-4 md:pr-6 py-2">
                                        <div className="inline-flex justify-end w-full">
                                            <div className="px-3 py-1 bg-rose-500/10 text-rose-400 text-[10px] font-bold font-manrope uppercase tracking-widest rounded-full mb-1">
                                                Zero Trust
                                            </div>
                                        </div>
                                        <h3 className="text-white font-manrope font-bold text-xl md:text-3xl uppercase tracking-wider">Secure Design</h3>
                                        <p className="text-neutral-400 text-[10px] md:text-sm leading-relaxed font-manrope max-w-[180px] md:max-w-[280px] ml-auto">
                                            Advanced threat detection and security at every layer.
                                        </p>
                                    </div>

                                    {/* Animated Ring */}
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                        className="w-24 h-24 md:w-40 md:h-40 mr-4 flex items-center justify-center border border-white/5 rounded-full relative"
                                    >
                                        <div className="absolute inset-2 border border-dashed border-white/20 rounded-full" />
                                        <div className="absolute bottom-0 right-1/2 w-2 h-2 bg-rose-400 rounded-full blur-[2px]" />
                                        <span className="text-white/30 text-[8px] md:text-xs font-manrope uppercase tracking-[0.2em] text-center w-full">Threat<br />Intel</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {stage === 4 && (
                            /* Section 4 - Advanced Tech Details & Animation */
                            <motion.div
                                key="s4"
                                {...transitions}
                                className="absolute inset-0 flex flex-col items-center justify-center px-4 w-full h-full max-w-[1920px] mx-auto z-10"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 w-full max-w-7xl items-center justify-between px-4 md:px-10">
                                    {/* Left Content */}
                                    <div className="space-y-8 order-2 md:order-1 flex justify-center md:justify-start w-full">
                                        <div className="bg-[#050505]/80 backdrop-blur-xl border border-emerald-500/20 p-8 rounded-3xl w-72 shadow-[0_0_30px_rgba(16,185,129,0.1)] relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                                <div className="relative flex items-center justify-center">
                                                    <div className="w-3 h-3 bg-emerald-500 rounded-sm animate-ping absolute opacity-70" />
                                                    <div className="w-2 h-2 bg-emerald-400 rounded-sm relative z-10" />
                                                </div>
                                                <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase font-bold">System Core</span>
                                            </div>
                                            <div className="space-y-5 relative z-10">
                                                <div className="flex flex-col gap-2">
                                                    <div className="flex justify-between items-center text-xs font-mono">
                                                        <span className="text-white/60">NODE_01_CPU</span>
                                                        <span className="text-emerald-400 font-bold">12%</span>
                                                    </div>
                                                    <div className="w-full bg-black h-1.5 rounded-full overflow-hidden border border-white/5">
                                                        <motion.div initial={{ width: "0%" }} whileInView={{ width: "12%" }} transition={{ duration: 1 }} className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-2 pt-2">
                                                    <div className="flex justify-between items-center text-xs font-mono">
                                                        <span className="text-white/60">NET_TRAFFIC</span>
                                                        <span className="text-blue-400 font-bold">STABLE</span>
                                                    </div>
                                                    <div className="w-full bg-black h-1.5 rounded-full overflow-hidden border border-white/5">
                                                        <motion.div initial={{ width: "0%" }} whileInView={{ width: "85%" }} transition={{ duration: 1 }} className="bg-gradient-to-r from-blue-600 to-blue-400 h-full shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Content */}
                                    <div className="space-y-8 order-3 flex justify-center md:justify-end md:ml-auto w-full">
                                        <div className="bg-[#050505]/80 backdrop-blur-xl border border-rose-500/20 p-8 rounded-3xl w-72 shadow-[0_0_30px_rgba(244,63,94,0.1)] relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
                                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                                <div className="w-2 h-2 bg-rose-500 rounded-sm animate-pulse rotate-45" />
                                                <span className="text-rose-400 font-mono text-sm tracking-widest uppercase font-bold">Threat Matrix</span>
                                            </div>
                                            <div className="space-y-6 relative z-10">
                                                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                                    <span className="text-xs text-white/50 font-mono uppercase">Blocked</span>
                                                    <span className="text-2xl font-black font-manrope text-rose-400 tracking-wider">2,451</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-white/50 font-mono uppercase">Status</span>
                                                    <span className="text-2xl font-black font-manrope text-emerald-400 tracking-wider border border-emerald-500/30 px-3 py-1 bg-emerald-500/10 rounded-lg">SECURE</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {stage === 5 && (
                            /* Section 5 - Final Call SOFTWARE ENGINEER style */
                            <motion.div
                                key="s5"
                                {...transitions}
                                className="absolute inset-0 flex flex-col justify-center items-center pb-20 pt-20 md:pt-0 w-full h-full max-w-[1920px] mx-auto px-4"
                            >
                                {/* Clean Stacked Brand Message */}
                                <div className="text-center relative w-full flex flex-col items-center justify-center gap-1 md:gap-2 select-none mt-16 md:mt-0">
                                    <h2 className="text-[10vw] md:text-[7vw] leading-none font-playfair font-black text-white tracking-tight uppercase">
                                        DESIGN
                                    </h2>

                                    <h2 className="text-[10vw] md:text-[7vw] leading-none font-playfair font-black text-white/50 tracking-tight uppercase">
                                        BUILD
                                    </h2>

                                    <h2 className="text-[10vw] md:text-[7vw] leading-none font-playfair font-black text-white tracking-tight uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                        DELIVER
                                    </h2>
                                </div>

                                {/* Bottom Contact Info (No Location) */}
                                <div className="absolute bottom-20 right-8 md:right-20 flex flex-col gap-6 text-right">
                                    <a href="mailto:akilaukb@gmail.com" className="group flex items-center justify-end gap-4 text-white hover:text-blue-400 transition-colors pointer-events-auto">
                                        <span className="text-sm font-manrope uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity font-bold">Email Me</span>
                                        <Mail size={32} />
                                    </a>
                                    <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="group flex items-center justify-end gap-4 text-white hover:text-blue-400 transition-colors pointer-events-auto">
                                        <span className="text-sm font-manrope uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity font-bold">Connect</span>
                                        <Linkedin size={32} />
                                    </a>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Bottom Scroller Indicator */}
                <motion.div
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
                    <div className="w-[1px] h-8 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
                </motion.div>

            </div>
        </div>
    );
}
