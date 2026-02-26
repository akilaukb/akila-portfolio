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
                className="fixed top-0 left-0 right-0 z-[60] flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
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
                        className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors relative z-[70] mix-blend-difference"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Outside the blended nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#0a0a0a] z-[65] flex flex-col md:hidden pointer-events-auto overflow-hidden"
                    >
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />

                        {/* Menu Header */}
                        <div className="flex justify-between items-center px-6 py-7 border-b border-white/10">
                            <span className="text-xl font-playfair font-black tracking-tighter text-white/40 italic">NAVIGATION</span>
                            <div className="h-[1px] flex-grow mx-4 bg-gradient-to-r from-white/10 to-transparent" />
                        </div>

                        {/* Menu Links */}
                        <div className="flex-grow flex flex-col justify-center px-10 gap-8">
                            {[
                                { name: "Home", href: "/", icon: "01" },
                                { name: "About", href: "/about", icon: "02" },
                                { name: "Projects", href: "/projects", icon: "03" },
                                { name: "Tools", href: "/tools", icon: "04" },
                                { name: "Resume", href: "/resume", icon: "05" }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="group"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-end gap-4"
                                    >
                                        <span className="text-blue-500 font-mono text-sm mb-2 group-hover:translate-x-1 transition-transform">{item.icon}</span>
                                        <span className="text-5xl md:text-6xl font-playfair font-black text-white group-hover:text-blue-400 transition-colors duration-300 uppercase">
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Menu Footer */}
                        <div className="p-10 border-t border-white/5 bg-white/[0.02] backdrop-blur-3xl mt-auto">
                            <div className="flex flex-col gap-8">
                                <div className="space-y-2">
                                    <p className="text-[10px] text-white/30 uppercase tracking-[0.5em] font-bold">Contact Details</p>
                                    <p className="text-white/90 font-manrope text-lg">akilaukb@gmail.com</p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-white hover:-translate-y-1"><Linkedin size={24} /></a>
                                    <a href="https://github.com/akila-ukb" target="_blank" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-white hover:-translate-y-1"><Github size={24} /></a>
                                    <a href="mailto:akilaukb@gmail.com" className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-all text-white hover:-translate-y-1"><Mail size={24} /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

