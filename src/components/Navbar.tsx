"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Linkedin, Github, Mail, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
        >
            {/* Logo */}
            <div className="pointer-events-auto">
                <Link href="/" className="text-2xl font-playfair font-black tracking-tight">
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

            {/* Socials & Mobile Menu */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <div className="hidden md:flex items-center gap-3 pr-4 border-r border-white/20">
                    <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Linkedin size={20} /></a>
                    <a href="https://github.com/akila-ukb" target="_blank" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Github size={20} /></a>
                    <a href="mailto:akilaukb@gmail.com" className="p-2 hover:bg-white/10 rounded-full transition-colors"><Mail size={20} /></a>
                </div>
                {/* Mobile Menu Button - Only visible on mobile */}
                <button className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Menu size={24} />
                </button>
            </div>
        </motion.nav>
    );
}

