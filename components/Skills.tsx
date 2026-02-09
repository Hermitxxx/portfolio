'use client';

import { motion } from 'framer-motion';

interface Skill {
    name: string;
    icon: string;
}

interface SkillCategory {
    title: string;
    description: string;
    color: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        title: "Frontend",
        description: "Building beautiful interfaces",
        color: "#DC143C",
        skills: [
            { name: "React", icon: "⚛️" },
            { name: "Next.js", icon: "▲" },
            { name: "TypeScript", icon: "📘" },
            { name: "Tailwind", icon: "🎨" },
            { name: "Framer Motion", icon: "✨" },
        ]
    },
    {
        title: "Backend",
        description: "Powering the logic",
        color: "#8B0000",
        skills: [
            { name: "Node.js", icon: "🟢" },
            { name: "PostgreSQL", icon: "🐘" },
            { name: "Supabase", icon: "⚡" },
            { name: "GraphQL", icon: "◈" },
            { name: "REST APIs", icon: "🔗" },
        ]
    },
    {
        title: "Tools",
        description: "Optimizing the workflow",
        color: "#DC143C",
        skills: [
            { name: "Git", icon: "🔀" },
            { name: "Docker", icon: "🐳" },
            { name: "Figma", icon: "🎯" },
            { name: "VS Code", icon: "💻" },
            { name: "Linux", icon: "🐧" },
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="md:min-h-screen bg-[#050505] text-white py-12 md:py-24 px-4 md:px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#DC143C]/5 rounded-full blur-[200px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#8B0000]/8 rounded-full blur-[180px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#DC143C]/3 rounded-full blur-[150px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 md:mb-20"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-3 py-1 md:px-4 md:py-2 rounded-full border border-[#DC143C]/30 bg-[#DC143C]/10 text-[#DC143C] text-[10px] md:text-sm font-medium mb-3 md:mb-6"
                    >
                        WHAT I WORK WITH
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-2 md:mb-4">
                        My <span className="text-[#DC143C]">Arsenal</span>
                    </h2>
                    <p className="text-white/40 text-sm md:text-lg max-w-2xl mx-auto px-4">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative"
                        >
                            {/* Card glow effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                                style={{ background: `${category.color}20` }}
                            />

                            <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-[#DC143C]/40 transition-all duration-500 h-full">
                                {/* Category header */}
                                <div className="mb-4 md:mb-8">
                                    <h3
                                        className="text-xl md:text-3xl font-bold mb-1 transition-colors duration-300"
                                        style={{ color: category.color }}
                                    >
                                        {category.title}
                                    </h3>
                                    <p className="text-white/40 text-xs md:text-sm">{category.description}</p>
                                </div>

                                {/* Skills */}
                                <div className="space-y-3">
                                    {category.skills.map((skill, skillIdx) => (
                                        <motion.div
                                            key={skillIdx}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.1 + skillIdx * 0.05 }}
                                            whileHover={{ x: 8, transition: { duration: 0.2 } }}
                                            className="flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-lg md:rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
                                        >
                                            <span className="text-lg md:text-2xl">{skill.icon}</span>
                                            <span className="text-white/80 font-medium text-xs md:text-base">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Decorative corner */}
                                <div
                                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                                    style={{
                                        background: `linear-gradient(135deg, ${category.color} 0%, transparent 60%)`,
                                        borderTopRightRadius: '1rem'
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom decorative line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="mt-12 md:mt-20 h-px bg-gradient-to-r from-transparent via-[#DC143C]/50 to-transparent"
                />
            </div>
        </section>
    );
}
