"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ArrowUpRight, Github, ExternalLink, ShieldCheck, Network, Plane, Coffee, Car, ShoppingBag, Code2, Globe, Server } from "lucide-react";
import Link from "next/link";

const professionalProjects = [
    {
        title: "Building a Threat Detection SOC with Wazuh",
        period: "Jan 2026 - Feb 2026",
        description: "Built a functional Security Operations Center (SOC) environment to simulate threat detection and endpoint monitoring.",
        achievements: [
            "Deployed Wazuh Manager on a cloud-based Ubuntu server.",
            "Connected Windows endpoints using secure agents for real-time log analysis.",
            "Configured network bridging and firewall policies to allow secure communication between the SIEM and agents.",
            "Managed version control and documentation via GitHub."
        ],
        tags: ["SIEM", "Wazuh", "Linux", "Ubuntu", "Firewall Policies"],
        links: [
            { label: "GitHub Repository", url: "https://github.com/akilaukb/Wazuh-SOC-Lab", icon: <Github size={18} /> }
        ],
        icon: <ShieldCheck size={40} className="text-blue-400 group-hover:text-blue-300 transition-colors" />,
        image: "https://github.com/akilaukb/Wazuh-SOC-Lab/raw/main/images/1-wazuh-architecture.png"
    },
    {
        title: "Site to Site IPsec & OpenVPN Remote Access Lab",
        period: "Dec 2025 - Jan 2026",
        description: "Designed and implemented a cloud hosted network security lab using two pfSense firewalls, OpenVPN Remote Access, and an IPsec IKEv2 site to site VPN.",
        achievements: [
            "Deployed pfSense Firewall A & B in separate cloud VPCs.",
            "Built an IPsec IKEv2 site-to-site tunnel connecting LANs.",
            "Configured OpenVPN Remote Access with certificate-based authentication.",
            "Implemented VPC routing for 0.0.0.0/0 traffic via Firewall A.",
            "Troubleshot routing, Phase 2 selectors, and NAT states."
        ],
        tags: ["pfSense", "OpenVPN", "IPsec IKEv2", "VPC Routing", "Network Security"],
        links: [],
        icon: <Network size={40} className="text-blue-400 group-hover:text-blue-300 transition-colors" />,
        image: "https://media.licdn.com/dms/image/v2/D562DAQHGUBjC9vxyyQ/profile-treasury-image-shrink_160_160/B56Zu2lhZmIwAo-/0/1768294849300?e=1772038800&v=beta&t=tNFTAX0Ucd-tBRQp3ZTogS4tBtvgP-cF0QZpJ3W3HcU"
    }
];

const freelanceProjects = [
    {
        title: "Bike Selling Site",
        description: "Modern e-commerce platform for bike sales with a seamless React frontend.",
        tags: ["React"],
        icon: <Code2 size={24} className="text-emerald-400" />,
        link: "https://rad-tapioca-8644e0.netlify.app/"
    },
    {
        title: "Rental Management SAAS",
        description: "Vehicle rental management system built for scalability and performance.",
        tags: ["Next.js", "WARP", "SAAS"],
        icon: <Server size={24} className="text-indigo-400" />,
        link: "https://rentvehicle.hstn.me/?i=1"
    },
    {
        title: "Food Ordering System",
        description: "Full-stack food ordering platform providing a fast user experience.",
        tags: ["Next.js"],
        icon: <Coffee size={24} className="text-orange-400" />,
        link: "https://mr-food-ordering-website.vercel.app/"
    },
    {
        title: "Private Cinema Site",
        description: "Vibe coded movie streaming and cinema booking interface.",
        tags: ["React", "Vibe Coded"],
        icon: <Globe size={24} className="text-rose-400" />,
        link: "https://spiffy-longma-e3c22f.netlify.app/"
    }
];

export default function Projects() {
    return (
        <main className="bg-[#020202] min-h-screen text-white selection:bg-blue-500/30 relative overflow-hidden">
            {/* Background Abstract Gradients */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <Navbar />

            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-6xl md:text-8xl font-black font-manrope mb-8 tracking-tighter">
                        PRO<span className="text-blue-600">JECTS</span>
                    </h1>

                    {/* Professional Section */}
                    <section className="mb-32">
                        <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                            <Server className="text-blue-500" size={32} />
                            <h2 className="text-3xl font-bold font-manrope tracking-widest text-gray-200">
                                SECURITY & INFRASTRUCTURE
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-12">
                            {professionalProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 hover:bg-white/10 transition-all duration-300 group shadow-lg"
                                >
                                    <div className="flex flex-col lg:flex-row gap-12">
                                        <div className="lg:w-2/3">
                                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                                                <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                                                    {project.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                                                        <h3 className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
                                                            {project.title}
                                                        </h3>
                                                        <span className="text-blue-400 font-mono text-sm border border-blue-500/30 px-3 py-1 rounded-full bg-blue-500/10 mt-2 md:mt-0 w-fit shrink-0">
                                                            {project.period}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <p className="text-lg text-gray-300 mb-8 leading-relaxed font-manrope">
                                                {project.description}
                                            </p>

                                            <div className="mb-8 bg-black/20 p-6 rounded-2xl border border-white/5">
                                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                                    <ShieldCheck size={16} /> Key Achievements
                                                </h4>
                                                <ul className="grid grid-cols-1 gap-3">
                                                    {project.achievements.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm md:text-base">
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex flex-wrap gap-3 mb-8">
                                                {project.tags.map(tag => (
                                                    <span key={tag} className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-xs font-bold text-blue-300 uppercase tracking-wider group-hover:bg-blue-900/20 group-hover:border-blue-500/30 transition-colors">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {project.links && project.links.length > 0 && (
                                                <div className="flex gap-4">
                                                    {project.links.map((link, l) => (
                                                        <a key={l} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 hover:shadow-blue-500/40 hover:-translate-y-1">
                                                            {link.icon} {link.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Image Area */}
                                        <div className="lg:w-1/3">
                                            <div className="aspect-square bg-[#0a0f14] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center relative group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all">
                                                {project.image ? (
                                                    <div className="absolute inset-0 p-8 flex items-center justify-center relative">
                                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 transition-opacity scale-95 group-hover:scale-100 duration-500 grayscale group-hover:grayscale-0" />
                                                        <div className="absolute z-20 flex items-center justify-center inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-md border border-blue-400/50">
                                                                <ArrowUpRight className="text-blue-200" size={32} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <ShieldCheck size={64} className="text-gray-700 group-hover:text-blue-500/50 transition-colors" />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Freelance Section - Redesigned */}
                    <section className="mb-20 relative p-8 md:p-12 lg:p-16 rounded-[3rem] border border-white/5 overflow-hidden">
                        {/* Section specific background layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-[#0a0f12] to-[#040608] -z-10" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none -z-10" />
                        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

                        <div className="flex items-center gap-4 mb-16 border-b border-indigo-500/20 pb-6">
                            <Code2 className="text-indigo-500" size={32} />
                            <h2 className="text-3xl font-bold font-manrope tracking-widest text-gray-200">
                                WEB DEV & FREELANCE
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                            {freelanceProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative bg-[#080b0f] border border-white/5 rounded-3xl p-8 overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_rgba(99,102,241,0.1)]"
                                >
                                    {/* Abstract Shapes/Background */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-indigo-500/20 transition-colors" />
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-tr-full pointer-events-none" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-4 bg-black/40 rounded-2xl border border-white/10 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/40 transition-colors shadow-inner">
                                                {project.icon}
                                            </div>
                                            {project.link ? (
                                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-indigo-500/20 transition-colors hover:scale-110">
                                                    <ExternalLink className="text-gray-500 group-hover:text-indigo-400 transition-colors" size={18} />
                                                </a>
                                            ) : (
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-indigo-500/20 transition-colors">
                                                    <ExternalLink className="text-gray-500 group-hover:text-indigo-400 transition-colors" size={18} />
                                                </div>
                                            )}
                                        </div>

                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors font-manrope">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-indigo-500/50 transition-colors">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-black/40 border border-white/10 px-3 py-2 rounded-lg group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                </motion.div>
            </div>
        </main>
    );
}
