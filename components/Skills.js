"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

const skillSections = [
  {
    id: "frontend",
    title: "Frontend Development",
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "DaisyUI", icon: "logos:daisyui-icon" },
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "skill-icons:expressjs-dark" },
      { name: "JWT", icon: "logos:jwt-icon" },
      { name: "Socket.io", icon: "logos:socket-io" },
      { name: "Firebase", icon: "logos:firebase" },
      { name: "Vercel", icon: "logos:vercel-icon" },
    ],
  },
  {
    id: "database",
    title: "Database & Tools",
    skills: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "Mongoose", icon: "devicon:mongoose" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Prisma", icon: "logos:prisma" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  const currentSection = skillSections.find((s) => s.id === activeTab);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="skills"
      className="min-h-[500px]"
    >
      <div className="flex items-center gap-2 mb-6 lg:mb-8">
        <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
        <span className="text-[11px] sm:text-xs xl:text-sm font-semibold tracking-[0.2em] text-base-content/50 uppercase">
          Tech Stack
        </span>
      </div>

      <div className="flex flex-col gap-8 mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-base-content">
          Technologies I Use
        </h2>

        {/* Tab Controls */}
        <div className="bg-base-200 p-1.5 rounded-2xl border border-base-300 flex items-center gap-1 self-start">
          {skillSections.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-300 rounded-xl
                         ${activeTab === tab.id ? "text-base-100" : "text-base-content/40 hover:text-base-content"}`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-base-content rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.id}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-8"
          >
            <h3 className="text-sm font-bold text-base-content/30 uppercase tracking-[0.3em] pl-1">
              {currentSection.title}
            </h3>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-5 sm:gap-8">
              {currentSection.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="group flex flex-col items-center justify-center gap-4"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-base-200 border border-base-300 rounded-[2rem] flex items-center justify-center p-4.5 shadow-sm group-hover:shadow-xl group-hover:border-base-content/10 group-hover:rounded-2xl transition-all duration-500">
                    <Icon 
                      icon={skill.icon} 
                      className="w-full h-full transition-all duration-500" 
                    />
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-base-content/40 group-hover:text-base-content transition-colors duration-300">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
