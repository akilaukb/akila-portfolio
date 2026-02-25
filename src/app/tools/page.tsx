"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Cloud, Shield, Settings, Code, Server, CheckCircle } from "lucide-react";

const tools = [
    {
        category: "Cloud Platforms",
        icon: <Cloud className="text-blue-400 mb-4" size={32} />,
        bg: "from-blue-900/20 to-transparent",
        items: ["Microsoft Azure Portal", "VMware vSphere", "Oracle Cloud Console", "Huawei Cloud Console"]
    },
    {
        category: "Monitoring & Security",
        icon: <Shield className="text-emerald-400 mb-4" size={32} />,
        bg: "from-emerald-900/20 to-transparent",
        items: ["Kibana (Elastic Stack)", "Cynet XDR", "FortiGate Firewall", "pfSense", "Sophos Central"]
    },
    {
        category: "Administration",
        icon: <Settings className="text-orange-400 mb-4" size={32} />,
        bg: "from-orange-900/20 to-transparent",
        items: ["Microsoft 365 Admin Center", "Exchange Admin Center", "Azure AD / Entra ID", "Intune", "SharePoint Admin"]
    },
    {
        category: "Development",
        icon: <Code className="text-purple-400 mb-4" size={32} />,
        bg: "from-purple-900/20 to-transparent",
        items: ["VS Code", "Git / GitHub", "WordPress Admin", "cPanel / WHM", "Postman"]
    },
    {
        category: "Virtualization",
        icon: <Server className="text-teal-400 mb-4" size={32} />,
        bg: "from-teal-900/20 to-transparent",
        items: ["VirtualBox", "VMware Workstation", "Windows Sandbox", "Azure VMs"]
    },
    {
        category: "Ticketing & ITSM",
        icon: <CheckCircle className="text-rose-400 mb-4" size={32} />,
        bg: "from-rose-900/20 to-transparent",
        items: ["JIRA", "ServiceNow", "Confluence"]
    }
];

export default function Tools() {
    return (
        <main className="bg-[#020202] min-h-screen text-white overflow-hidden relative selection:bg-blue-500/30">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

            <Navbar />

            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center text-center mb-20">
                        <h1 className="text-6xl md:text-8xl font-black font-manrope tracking-tighter">
                            TOOLS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">TECH</span>
                        </h1>
                        <p className="mt-6 text-gray-400 max-w-2xl text-lg relative">
                            The comprehensive arsenal of platforms, tools, and systems I leverage to architect, secure, and manage enterprise environments.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tools.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`relative group p-8 rounded-3xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] transition-all duration-300 overflow-hidden hover:-translate-y-2 hover:shadow-2xl`}
                            >
                                {/* Card internal gradient glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10">
                                    <div className="p-4 bg-white/5 inline-block rounded-2xl border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-manrope font-bold text-white mb-6 tracking-wide">{section.category}</h2>
                                    <ul className="space-y-3">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-200 transition-colors font-medium border-b border-white/5 pb-2">
                                                <div className="w-1.5 h-1.5 rounded-sm bg-white/20 group-hover:bg-current transition-colors rotate-45" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
