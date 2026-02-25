"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { BadgeCheck, Calendar, Briefcase, GraduationCap, Award, Server, Shield, Globe } from "lucide-react";

export default function About() {
    const journey = [
        {
            role: "Associate Information Security Engineer",
            company: "OREL IT (PVT) LTD",
            period: "2025 - Present",
            description: [
                "Assisted in the deployment and configuration of security solutions such as WAF, firewall, and SIEM in cloud.",
                "Contributed to Proof of Concept (POC) for evaluating web app protection and threat detection capabilities.",
                "Prepared Standard Operating Procedures and documented security processes to ensure consistency and compliance.",
                "Supported the implementation of new Information Security controls, policies, and procedures.",
                "Responded to security incidents by working closely with engineering and cloud teams to investigate alerts and apply corrective actions."
            ]
        },
        {
            role: "Associate Application Support Engineer",
            company: "OREL IT (PVT) LTD",
            period: "2023 - 2025",
            description: [
                "Provided tier 2/3 technical support for enterprise applications and cloud services, achieving 90%+ first day resolution rate.",
                "Coordinated with DevOps, Cloud, and System teams to address advanced technical issues.",
                "Monitored, investigated and resolved 15+ security alerts per month using Kibana and Cynet XDR.",
                "Handled support tickets in JIRA and maintained clear communication with users.",
                "Worked under ISO 27001:2002 ISMS and ISO 27701:2019 PIMS, ensuring compliance with security standards."
            ]
        },
        {
            role: "Application Support Assistant",
            company: "OREL IT (PVT) LTD",
            period: "2022 - 2023",
            description: [
                "Handled Level 1 application support processing 200+ monthly tickets, troubleshooting user issues.",
                "Assisted engineering teams by collecting logs, testing fixes, and documenting root cause summaries.",
                "Created and maintained technical documentation to support knowledge sharing.",
                "Maintained service desk documentation for repetitive issues and resolutions."
            ]
        },
        {
            role: "Trainee Application Support Assistant",
            company: "OREL IT (PVT) LTD",
            period: "2021 - 2022",
            description: [
                "Delivered basic application support for internal teams and learned escalation workflows.",
                "Worked with senior engineers to troubleshoot escalated issues.",
                "Developed clear technical documentation to support knowledge sharing."
            ]
        }
    ];

    const certifications = [
        { name: "Huawei Cloud Certified Developer (Professional) – Cloud Architect", img: "https://lh3.googleusercontent.com/d/1h8xAqHp2NJZrNzvX8Myb7_BV2BEjxlha" },
        { name: "Huawei Cloud Certified Developer (Professional) – Cloud Migration", img: "https://lh3.googleusercontent.com/d/1bzhDTjzB9LxsjaYzU-UbpjwkLYaO1j_m" },
        { name: "Azure AI Fundamentals (AI-900)", img: "https://lh3.googleusercontent.com/d/1B6G0dnyXbUt6dYOV3DyVsZFDs-TGBF3O" },
        { name: "Huawei Cloud Tech Essentials", img: "https://lh3.googleusercontent.com/d/1ptl1dAzBu3r_PGw_MW6_spUfMLqgw1iI" },
        { name: "Devops Pre-Requisite Course - KodeKloud", img: "https://lh3.googleusercontent.com/d/1yD6PQ6gkfTUX8YM3EFIyMKfRu14q-cnY" },
        { name: "Huawei Cloud Certified Developer (Associate) – AI", img: "https://media.licdn.com/dms/image/v2/D562DAQGOqJX0Z-1R6w/profile-treasury-image-shrink_160_160/B56Zva_f2RHcAk-/0/1768905639065?e=1772038800&v=beta&t=sgzYpeSMYJgYaqe1YlxdZg9xH8Vaf2Ti2E6r6xFUmy8" },
        { name: "Huawei Cloud Certified Developer (Associate) – Cloud Native", img: "https://lh3.googleusercontent.com/d/1MkQ-JlBp9vjXF06P-rpTsQaFim7BnLad" },
        { name: "Tenable Cloud Security", img: "https://media.licdn.com/dms/image/v2/D562DAQGzmkK3_Umv5Q/profile-treasury-document-cover-images_480/B56ZsBPJf4L0BM-/0/1765252308917?e=1772038800&v=beta&t=i_LdM90od3dVo1coC2KfjR-GaPRwHYwzyFf91bw8LkU" },
        { name: "LFC108: Cybersecurity Essentials", img: "https://images.credly.com/size/680x680/images/e79f9317-b3f7-4b57-a859-f24d5f25fe36/blob" },
        { name: "OPSWAT Introduction to Critical Infrastructure Protection (ICIP)", img: "https://images.credly.com/size/680x680/images/f9f3c533-9b5a-47eb-8a3e-5734663116c0/image.png" },
        { name: "Fortinet Certified Associate Cybersecurity", img: "https://images.credly.com/size/680x680/images/20082fc1-94af-4773-9df0-28856b566748/image.png" },
        { name: "Network Technician Career Path", img: "https://images.credly.com/size/680x680/images/978f88dc-c247-4093-9d39-6efac3651297/image.png" },
        { name: "Fortinet Fundamentals", img: "https://media.licdn.com/dms/image/v2/D4E2DAQFoCT9GQvHPxQ/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1728576252206?e=1772038800&v=beta&t=yEDeey2uRlw0i_AobwW49YO3b6_tnbmVfCl_lKLiYj0" },
        { name: "Oracle Cloud Foundations", img: "https://lh3.googleusercontent.com/d/1VrKZqMtxpu_OMTPXM5V3mh45sgyTnY01" }
    ];

    return (
        <main className="bg-[#020202] min-h-screen text-white overflow-x-hidden selection:bg-blue-500/30 relative">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-rose-900/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <Navbar />

            <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">

                {/* Intro Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-24"
                >
                    <h1 className="text-6xl md:text-8xl font-black font-manrope mb-8 tracking-tighter">
                        ABOUT <span className="text-blue-600">ME</span>
                    </h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="flex flex-col gap-6">
                            <span className="text-blue-500 font-bold font-mono tracking-widest uppercase text-sm">Akila Umayanga</span>
                            <h2 className="text-3xl md:text-4xl font-manrope font-bold text-white">Technical Support &<br />Security Engineer</h2>
                            <p className="text-lg text-gray-400 font-manrope leading-relaxed">
                                With 4+ years of experience managing enterprise infrastructure and cloud environments. Proven expertise in L1/L2 Incident Management achieving 90% First Call Resolution, troubleshooting complex software and system issues while consistently meeting strict SLAs and Security (Fortinet/pfSense Firewalls, WAF, SIEM).
                            </p>
                            <p className="text-lg text-gray-400 font-manrope leading-relaxed">
                                Proven track record of managing <span className="text-gray-200 font-bold">500+ monthly tickets</span>, executing system patch management, and authoring technical SOPs. Skilled in bridging the gap between end user support and backend engineering, ensuring high system availability while maintaining <span className="text-emerald-400 font-bold">ISO 27001 compliance</span>.
                            </p>
                        </div>

                        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                            <h3 className="text-xl font-bold font-manrope text-blue-500 mb-6 flex items-center gap-2">
                                <BadgeCheck /> SKILLS OVERVIEW
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">Technical</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Monitoring (Elastic/Cynet), Firewalls (FortiGate, pfSense, Sophos), Web Defacement Protection, ITIL, Patch Management, SSL/TLS, DNS, WAF (Safeline, Radware, Imperva), Backups, DHCP, Huawei/Orel Cloud, JIRA.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">Soft Skills</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Work Under Pressure, Analytical Thinking, Problem Solving, Team Working, Time Management.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-3">Languages</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        English, Sinhala
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Experience Journey */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-12 flex items-center gap-4">
                        <Briefcase className="text-blue-600" size={40} /> MY JOURNEY
                    </h2>

                    <div className="space-y-12 relative border-l-2 border-white/10 pl-8 md:pl-12 ml-4">
                        {journey.map((job, index) => (
                            <div key={index} className="relative group">
                                <span className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 rounded-full bg-[#050505] border-2 border-gray-600 group-hover:border-blue-500 group-hover:bg-blue-600 transition-all duration-300"></span>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors">
                                        {job.role}
                                    </h3>
                                    <span className="text-sm font-mono text-gray-500 bg-white/5 px-3 py-1 rounded-full border border-white/10 mt-2 md:mt-0 w-fit">
                                        {job.period}
                                    </span>
                                </div>
                                <h4 className="text-lg font-bold text-gray-400 mb-4">{job.company}</h4>
                                <ul className="space-y-2">
                                    {job.description.map((desc, i) => (
                                        <li key={i} className="text-gray-400 leading-relaxed text-sm md:text-base pl-4 border-l border-white/10 hover:border-blue-500/50 transition-colors">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Certifications Grid */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-12 flex items-center gap-4">
                        <Award className="text-blue-600" size={40} /> CERTIFICATIONS and Badge
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                                <div className="h-40 w-full mb-6 bg-black/50 rounded-xl overflow-hidden flex items-center justify-center border border-white/5">
                                    {cert.img ? (
                                        <img src={cert.img} alt={cert.name} className="w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 transition-opacity" />
                                    ) : (
                                        <Award className="text-gray-700" size={48} />
                                    )}
                                </div>
                                <h3 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                                    {cert.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* Education */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-12 flex items-center gap-4">
                        <GraduationCap className="text-blue-600" size={40} /> EDUCATION
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold mb-2">BSc (Hons) Computing</h3>
                            <p className="text-blue-400 font-bold mb-1">Wrexham University</p>
                            <p className="text-gray-500 text-sm">Second Class Upper Division</p>
                        </div>
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h3 className="text-xl font-bold mb-2">DIT-BIT Program</h3>
                            <p className="text-blue-400 font-bold mb-1">UCSC</p>
                            <p className="text-gray-500 text-sm">University of Colombo School of Computing</p>
                        </div>
                    </div>
                </motion.section>

                {/* Extra-Curricular Activities */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32 max-w-4xl"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-manrope mb-12 flex items-center gap-4 uppercase tracking-widest">
                        Extra-Curricular<br />Activities
                    </h2>

                    <div className="space-y-8 pl-4 border-l-2 border-white/10">
                        <div className="relative group pl-6">
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-blue-500 group-hover:bg-blue-500 transition-colors"></span>
                            <p className="text-lg text-gray-300 font-medium leading-relaxed">
                                Quiz team member at Sri Wijananandarama Dharma School&apos;s, Arawwala
                            </p>
                            <span className="text-sm text-gray-500 font-mono">(2016)</span>
                        </div>

                        <div className="relative group pl-6">
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-colors"></span>
                            <p className="text-lg text-gray-300 font-medium leading-relaxed">
                                Siyapatha Youth Club member at, Arawwala.
                            </p>
                            <span className="text-sm text-gray-500 font-mono">(2017)</span>
                        </div>

                        <div className="relative group pl-6">
                            <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-black border-2 border-gray-600 group-hover:border-rose-500 group-hover:bg-rose-500 transition-colors"></span>
                            <p className="text-lg text-gray-300 font-medium leading-relaxed">
                                Dancing club member at President&apos;s Collage, Maharagam
                            </p>
                            <span className="text-sm text-gray-500 font-mono">(2008-2013)</span>
                        </div>
                    </div>
                </motion.section>

            </div>
        </main>
    );
}
