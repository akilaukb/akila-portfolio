"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0, opacity: 1 },
                    hidden: { y: -100, opacity: 0 }
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 py-6 md:px-12 text-white pointer-events-none ${!isOpen ? "mix-blend-difference" : ""}`}
            >
                {/* Logo */}
                <div className="pointer-events-auto">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-playfair font-black tracking-tight">
                        PORTFOLIO.
                    </Link>
                </div>

                {/* Desktop Navigation - Pill Shape */}
                <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-2 rounded-full border border-white/5 pointer-events-auto">
                    {[
                        { name: "Home", href: "/" },
                        { name: "About", href: "/about" },
                        { name: "Projects", href: "/projects" },
                        { name: "Tools", href: "/tools" },
                        { name: "Resume", href: "/resume" }
                    ].map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-5 py-2 text-sm font-manrope font-medium text-white/80 hover:bg-white hover:text-black rounded-full transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Socials & Mobile Menu Button */}
                <div className="flex items-center gap-4 pointer-events-auto">
                    <div className="hidden md:flex items-center gap-3 pr-4 border-r border-white/20">
                        <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Linkedin size={20} /></a>
                        <a href="https://github.com/akila-ukb" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={20} /></a>
                        <a href="mailto:akilaukb@gmail.com" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Mail size={20} /></a>
                    </div>
                    {/* Mobile Menu Button - Only visible on mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 hover:bg-white/10 rounded-full transition-colors relative z-[100] ${!isOpen ? "" : "text-white"}`}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Outside the blended nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "tween", duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#050505] z-[90] flex flex-col md:hidden pointer-events-auto overflow-hidden"
                    >
                        {/* Subtle Background Textures */}
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
                        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10 translate-x-1/4 -translate-y-1/4" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none -z-10" />

                        {/* Menu Header Area */}
                        <div className="px-6 pt-20 pb-10">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-3 text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase font-bold mb-8"
                            >
                                <div className="w-8 h-px bg-blue-500" />
                                Index
                            </motion.div>

                            {/* Menu Links */}
                            <div className="flex flex-col gap-6">
                                {[
                                    { name: "Home", href: "/", icon: "01" },
                                    { name: "About", href: "/about", icon: "02" },
                                    { name: "Projects", href: "/projects", icon: "03" },
                                    { name: "Tools", href: "/tools", icon: "04" },
                                    { name: "Resume", href: "/resume", icon: "05" }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 + i * 0.1 }}
                                        className="group"
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-6"
                                        >
                                            <span className="text-white/20 font-playfair italic text-2xl group-hover:text-blue-500 transition-colors duration-300">{item.icon}</span>
                                            <span className="text-5xl font-playfair font-black text-white hover:italic hover:translate-x-4 transition-all duration-500 uppercase tracking-tighter">
                                                {item.name}
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Menu Footer */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-auto p-8 border-t border-white/5 bg-[#080808]"
                        >
                            <div className="space-y-6">
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/30 text-[9px] uppercase tracking-[0.4em] font-black">Connection</span>
                                    <a href="mailto:akilaukb@gmail.com" className="text-white/80 font-manrope text-sm hover:text-white transition-colors">akilaukb@gmail.com</a>
                                </div>
                                <div className="flex gap-4">
                                    <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="p-4 bg-white/[0.03] border border-white/5 rounded-full text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"><Linkedin size={20} /></a>
                                    <a href="https://github.com/akila-ukb" target="_blank" className="p-4 bg-white/[0.03] border border-white/5 rounded-full text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"><Github size={20} /></a>
                                    <a href="mailto:akilaukb@gmail.com" className="p-4 bg-white/[0.03] border border-white/5 rounded-full text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all"><Mail size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

