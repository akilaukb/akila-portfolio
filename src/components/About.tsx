"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Server,
    Globe,
    GraduationCap,
    Award,
    Terminal,
    Briefcase,
    ExternalLink,
    Code2
} from "lucide-react";

// --- Data ---

const experience = [
    {
        company: "Orel IT (Pvt) Ltd",
        location: "Maharagama, Sri Lanka",
        roles: [
            {
                title: "Associate Information Security Engineer",
                period: "2025 – Present",
                desc: [
                    "Deployment & Config of Cloud WAF, Firewalls, and SIEM solutions.",
                    "Investigate security alerts and apply corrective actions.",
                    "POCs for threat detection and SOP documentation."
                ]
            },
            {
                title: "Associate Application Support Engineer",
                period: "2023 – 2025",
                desc: [
                    "Tier 2/3 support, achieving 90%+ First Day Resolution rate.",
                    "Monitored 15+ security alerts/month (Kibana, Cynet XDR).",
                    "Collaborated with DevOps/System teams."
                ]
            },
            {
                title: "Application Support Assistant",
                period: "2021 – 2023",
                desc: [
                    "Processed 200+ monthly tickets & JIRA escalations.",
                    "Created root cause summaries and KB documentation."
                ]
            }
        ]
    }
];

const projects = [
    {
        title: "Enterprise Network Security Lab",
        subtitle: "pfSense & VPN Architecture",
        desc: "Architected a cloud-hosted dual firewall network connecting VPCs via IPsec IKEv2 and OpenVPN. Implemented VPN Chaining and certificate-based auth.",
        tags: ["pfSense", "IPsec", "OpenVPN", "NAT"],
        icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
        title: "Cloud-Based Threat Detection SOC",
        subtitle: "Wazuh SIEM Implementation",
        desc: "Designed a cloud-based SIEM with Wazuh Manager on Ubuntu. Configured secure agent-server comms (ports 1514/55000) and network security controls.",
        tags: ["Wazuh", "Ubuntu", "SIEM", "GitHub"],
        icon: <Terminal className="w-6 h-6 text-orange-400" />
    }
];

const certifications = [
    "Azure AI Fundamentals (AI-900)",
    "Huawei Cloud Tech Essentials",
    "Huawei Cloud Migration",
    "Huawei Cloud Solution Arch.",
    "Oracle Cloud Foundations 2023",
    "VMware Cloud 2023 (VCP-VMC)",
    "Fortinet Cybersecurity (FCF)"
];

const freelance = {
    role: "Vibe Code Developer",
    desc: "Delivered custom web solutions (WordPress, HTML/CSS) and managed hosting/DNS/SSL for diverse clients."
};

const education = [
    {
        degree: "BSc (Hons) Computing",
        school: "Wrexham University (2024)",
        detail: "Second Class Division 1"
    },
    {
        degree: "Master Java Developer Diploma",
        school: "IJSE (2022)"
    },
    {
        degree: "BIT Program",
        school: "UCSC (2023)"
    }
];

// --- Components ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <div className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 ${className}`}>
        {children}
    </div>
);

const Badge = ({ text }: { text: string }) => (
    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-manrope">
        {text}
    </span>
);

export default function About() {
    return (
        <section className="relative z-20 bg-[#0a0a0a] text-white py-20 px-4 md:px-12 overflow-hidden">

            {/* Intro / Bio */}
            <div className="max-w-5xl mx-auto mb-20 text-center md:text-left">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-playfair font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
                >
                    Engineering Resilience.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 font-manrope max-w-3xl leading-relaxed"
                >
                    I am an Information Security & Support Engineer with 4+ years of experience managing enterprise infrastructure and hybrid cloud environments.
                    My expertise covers L2/L3 Incident Management, Firewall Administration (Fortinet/pfSense), and SIEM Monitoring.
                    I have a proven track record of maintaining ISO 27001 compliance and executing system patch management for high-availability systems.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column: Experience & Projects (8 cols) */}
                <div className="lg:col-span-8 space-y-8">

                    {/* Experience Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6">
                            <Briefcase className="w-6 h-6 text-blue-400" />
                            <h3 className="text-2xl font-playfair font-bold">Experience</h3>
                        </div>
                        <div className="space-y-6">
                            {experience.map((exp, i) => (
                                <Card key={i}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                                            <p className="text-gray-400 text-sm font-manrope">{exp.location}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-6 pl-4 border-l-2 border-white/10 ml-2">
                                        {exp.roles.map((role, j) => (
                                            <div key={j} className="relative">
                                                <div className="absolute -left-[21px] top-1.5 w-3 h-3 bg-blue-500 rounded-full" />
                                                <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                                                    <h5 className="text-lg font-semibold text-gray-200">{role.title}</h5>
                                                    <span className="text-xs text-gray-500 font-mono bg-white/5 px-2 py-1 rounded">{role.period}</span>
                                                </div>
                                                <ul className="list-disc list-outside ml-4 text-gray-400 text-sm space-y-1 font-manrope">
                                                    {role.desc.map((d, k) => (
                                                        <li key={k}>{d}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section>
                        <div className="flex items-center gap-3 mb-6 mt-12">
                            <Code2 className="w-6 h-6 text-purple-400" />
                            <h3 className="text-2xl font-playfair font-bold">Key Projects</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((proj, i) => (
                                <Card key={i} className="group relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        {proj.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{proj.title}</h4>
                                    <p className="text-xs text-blue-300 mb-4 uppercase tracking-wider">{proj.subtitle}</p>
                                    <p className="text-gray-400 text-sm mb-6 font-manrope leading-relaxed">
                                        {proj.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {proj.tags.map(tag => <Badge key={tag} text={tag} />)}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right Column: Sidebar Stats (4 cols) */}
                <div className="lg:col-span-4 space-y-8">

                    {/* Certifications */}
                    <Card>
                        <div className="flex items-center gap-2 mb-6">
                            <Award className="w-5 h-5 text-yellow-400" />
                            <h3 className="text-xl font-playfair font-bold">Credentials</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {certifications.map((cert, i) => (
                                <Badge key={i} text={cert} />
                            ))}
                        </div>
                    </Card>

                    {/* Freelance */}
                    <Card className="bg-gradient-to-br from-purple-900/20 to-transparent">
                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="w-5 h-5 text-pink-400" />
                            <h3 className="text-xl font-playfair font-bold">Freelance</h3>
                        </div>
                        <h4 className="text-lg font-bold text-white">{freelance.role}</h4>
                        <p className="text-gray-400 text-sm mt-2 font-manrope">
                            {freelance.desc}
                        </p>
                    </Card>


                    {/* Education */}
                    <Card>
                        <div className="flex items-center gap-2 mb-6">
                            <GraduationCap className="w-5 h-5 text-white" />
                            <h3 className="text-xl font-playfair font-bold">Education</h3>
                        </div>
                        <div className="space-y-4">
                            {education.map((edu, i) => (
                                <div key={i} className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
                                    <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                                    <p className="text-gray-500 text-xs mt-1">{edu.school}</p>
                                    {edu.detail && <p className="text-blue-400 text-xs mt-1">{edu.detail}</p>}
                                </div>
                            ))}
                        </div>
                    </Card>

                    <div className="mt-8 pt-8">
                        <a
                            href="/Akila-Umayanga-Resume.pdf"
                            download
                            className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                        >
                            Download Resume
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
