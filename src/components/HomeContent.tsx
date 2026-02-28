"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, MapPin, Mail, Phone, Download, Shield, Terminal, Monitor, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const stats = [
    { label: "Certifications", value: "20+" },
    { label: "Years Experience", value: "5+" },
    { label: "Success Projects", value: "15+" },
];

const services = [
    {
        id: "01",
        title: "Technical Support",
        description: "Tier 2/3 Enterprise Application support with 90%+ first-day resolution rate, managing 500+ monthly tickets, and ITIL framework operational excellence.",
        icon: <Monitor size={32} className="text-blue-500" />
    },
    {
        id: "02",
        title: "Security Operations",
        description: "ISO 27001 compliant SOC support, SIEM management (Kibana/Wazuh), threat detection, and vigilant incident response for enterprise environments.",
        icon: <Shield size={32} className="text-emerald-500" />
    },
    {
        id: "03",
        title: "System Administration",
        description: "Windows Server Management, Active Directory, DNS/DHCP, and precise patch management ensuring high-availability systems.",
        icon: <Terminal size={32} className="text-orange-500" />
    },
    {
        id: "04",
        title: "Freelance Web Developer",
        description: "Designing and developing modern, user-friendly, and customer-facing websites using WordPress, HTML5, PHP, and responsive design frameworks.",
        icon: <Globe size={32} className="text-purple-500" />
    }
];

export default function HomeContent() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const { current } = scrollContainerRef;
            const scrollAmount = current.clientWidth > 768 ? current.clientWidth / 2 : current.clientWidth;
            current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative bg-white text-black py-20 px-4 md:px-12 z-20 rounded-t-[3rem] -mt-10 mb-0 shadow-2xl">

            {/* Personal Header / Intro */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-8xl font-manrope font-black tracking-tighter leading-tight">
                            BUILD<span className="text-gray-300">.</span><br />
                            SECURE<span className="text-blue-500">.</span><br />
                            SCALE<span className="text-gray-300">.</span>
                        </h2>
                        <div className="flex flex-col gap-4 text-gray-600 font-manrope font-medium">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-blue-600" size={20} />
                                <span>Pannipitiya, Sri Lanka</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-blue-600" size={20} />
                                <a href="mailto:akilaukb@gmail.com" className="hover:text-black transition-colors">akilaukb@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-blue-600" size={20} />
                                <a href="tel:+94701318334" className="hover:text-black transition-colors">+94 70 131 8334</a>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="https://drive.google.com/file/d/1Q9MZCvCSYnTuCz2PpYxqz2DTR7z-UlXc/view?usp=drive_link" target="_blank" className="px-8 py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors flex items-center gap-2">
                                Download CV <Download size={18} />
                            </a>
                            <Link href="/projects" className="px-8 py-4 border border-gray-200 text-gray-800 rounded-full font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors flex items-center gap-2">
                                View Work <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100">
                        <h3 className="text-xl font-manrope font-bold text-gray-400 mb-6 uppercase tracking-widest">About Me</h3>
                        <p className="text-xl md:text-[22px] font-manrope font-medium leading-[1.6] text-gray-800 mb-8">
                            <span className="text-blue-600 font-bold block mb-4 text-2xl">Technical Support & Security Engineer</span>
                            With 4+ years of experience managing enterprise infrastructure and cloud environments. Proven expertise in L1/L2 Incident Management achieving 90% FCR, solving complex system issues while meeting strict SLAs. Proven track record managing 500+ monthly tickets, executing patch management, and ensuring high system availability while maintaining ISO 27001 compliance.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white p-6 sm:p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                                    <h3 className="text-4xl sm:text-3xl md:text-4xl font-bold font-manrope text-blue-600 mb-1">{stat.value}</h3>
                                    <p className="text-xs text-gray-500 font-manrope uppercase tracking-wider font-bold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Professional Experience Preview */}
            <div className="max-w-7xl mx-auto mb-32">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-manrope font-light uppercase tracking-widest text-gray-400">Professional Journey</h3>
                    <Link href="/about" className="text-sm font-bold uppercase underline decoration-2 underline-offset-4 decoration-blue-500 hover:text-blue-600 transition-colors">View Full History</Link>
                </div>

                <div className="space-y-8">
                    {/* Role 1 */}
                    <div className="group relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-colors duration-300">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300"></span>
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h4 className="text-2xl font-bold font-manrope text-gray-900 group-hover:text-blue-600 transition-colors">Associate Information Security Engineer</h4>
                            <span className="text-gray-500 font-mono text-sm">2025 - Present</span>
                        </div>
                        <p className="text-gray-500 font-bold mb-4">OREL IT (PVT) LTD</p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            Deploying WAF & SIEM solutions, conducting Proof of Concepts (POC) for threat detection, and managing ISO 27001 compliant security operations.
                        </p>
                    </div>
                    {/* Role 2 */}
                    <div className="group relative pl-8 border-l-2 border-gray-200 hover:border-blue-500 transition-colors duration-300">
                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-gray-300 group-hover:border-blue-500 transition-colors duration-300"></span>
                        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                            <h4 className="text-2xl font-bold font-manrope text-gray-900 group-hover:text-blue-600 transition-colors">Associate Application Support Engineer</h4>
                            <span className="text-gray-500 font-mono text-sm">2023 - 2025</span>
                        </div>
                        <p className="text-gray-500 font-bold mb-4">OREL IT (PVT) LTD</p>
                        <p className="text-gray-600 leading-relaxed max-w-3xl">
                            Tier 2/3 Support for enterprise apps, resolving 15+ security alerts monthly with Kibana/Cynet XDR, and bridging DevOps operations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Services List - Redesigned Cards */}
            <div className="max-w-7xl mx-auto mb-32 w-full relative">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
                    <h3 className="text-3xl font-manrope font-light uppercase tracking-widest text-gray-400 text-center md:text-left">Services I Provide</h3>

                    {/* Navigation Buttons for Desktop */}
                    <div className="hidden md:flex items-center gap-3">
                        <button onClick={() => scroll('left')} className="p-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory hide-scrollbar relative scroll-smooth">
                    {services.map((service, index) => (
                        <div key={index} className="w-[85vw] md:min-w-[400px] md:w-[calc(33.333%-1rem)] shrink-0 snap-center group relative bg-gray-50 hover:bg-[#0a0a0a] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden cursor-default border border-gray-100 hover:border-white/10">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-5 transition-opacity">
                                <span className="text-6xl font-black font-manrope">{service.id}</span>
                            </div>
                            <div className="mb-8 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:bg-white/10 group-hover:backdrop-blur-md transition-colors">
                                {service.icon}
                            </div>
                            <h4 className="text-xl font-bold font-manrope text-gray-900 mb-4 group-hover:text-white transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center gap-2 justify-center md:hidden pt-4">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-[#0a0a0a] text-white rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-50 pointer-events-none" />

                <p className="text-gray-400 font-manrope uppercase tracking-widest mb-6 relative z-10">Available for Opportunities</p>
                <h2 className="text-6xl md:text-9xl font-manrope font-black mb-12 tracking-tighter relative z-10">LET&apos;S TALK</h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
                    <a href="mailto:akilaukb@gmail.com" className="px-10 py-5 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-bold uppercase tracking-widest transition-all duration-300 shadow-xl shadow-white/10">
                        Email Me
                    </a>
                    <a href="https://linkedin.com/in/akila-ukb" target="_blank" className="px-10 py-5 border border-white/20 hover:bg-white/10 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                        <Linkedin size={20} /> LinkedIn
                    </a>
                    <a href="tel:+94701318334" className="px-10 py-5 border border-white/20 hover:bg-white/10 rounded-full font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2">
                        <Phone size={20} /> Call Now
                    </a>
                </div>
                <div className="mt-24 flex justify-between items-end border-t border-white/10 pt-8 text-xs md:text-sm text-gray-500 font-manrope uppercase relative z-10">
                    <span>© 2026 Akila Umayanga</span>
                    <span>Tech Support & Security Portfolio</span>
                </div>
            </div>

        </section>
    );
}
