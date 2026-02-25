"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" }
    ];

    return (
        <>
            {/* Floating Toggle Button */}
            <div className="fixed top-8 right-8 z-[100]">
                <button
                    onClick={toggleMenu}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-3 md:px-6 md:py-3 hover:bg-white/20 transition-all group"
                >
                    <span className="text-sm font-manrope font-semibold text-white uppercase tracking-widest hidden md:block">
                        Menu
                    </span>
                    <div className="relative w-6 h-6 flex items-center justify-center">
                        <Menu className={`absolute w-5 h-5 text-white transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                        <X className={`absolute w-5 h-5 text-white transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`} />
                    </div>
                </button>
            </div>

            {/* Full Screen Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={{
                    open: {
                        clipPath: "circle(150% at calc(100% - 4rem) 4rem)",
                        transition: { type: "spring", stiffness: 20, damping: 10 }
                    },
                    closed: {
                        clipPath: "circle(0% at calc(100% - 4rem) 4rem)",
                        transition: { type: "spring", stiffness: 400, damping: 40 }
                    }
                }}
                className="fixed inset-0 bg-[#0a0a0a] z-[90] flex items-center justify-center"
            >
                <nav className="flex flex-col items-center gap-8">
                    {menuItems.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                open: { opacity: 1, y: 0, transition: { delay: 0.1 * i + 0.3 } },
                                closed: { opacity: 0, y: 20 }
                            }}
                        >
                            <Link
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-5xl md:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-white transition-all"
                            >
                                {item.label}
                            </Link>
                        </motion.div>
                    ))}

                    <motion.div
                        variants={{
                            open: { opacity: 1, transition: { delay: 0.8 } },
                            closed: { opacity: 0 }
                        }}
                        className="mt-12 flex flex-col items-center gap-4"
                    >
                        <p className="text-gray-500 font-manrope text-sm uppercase tracking-widest">Connect</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-white hover:text-blue-400 transition-colors">LinkedIn</a>
                            <a href="#" className="text-white hover:text-gray-400 transition-colors">GitHub</a>
                            <a href="#" className="text-white hover:text-pink-400 transition-colors">Email</a>
                        </div>
                    </motion.div>
                </nav>
            </motion.div>
        </>
    );
}
