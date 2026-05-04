"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-base-content/50 uppercase">
            Full Portfolio
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 tracking-tighter">
          My <span className="text-primary italic">Ventures</span> & Projects
        </h1>
        <p className="text-base-content/40 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          A deep dive into the digital experiences I've crafted, focusing on performance, 
          scalability, and cutting-edge user interfaces.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -12 }}
            className="group relative bg-base-200 border border-base-300 rounded-[3.5rem] overflow-hidden flex flex-col h-full transition-all duration-500 hover:shadow-2xl hover:border-primary/20"
          >
            {/* Image Section - Padded & Premium */}
            <div className="relative p-6 sm:p-8 pb-0">
              <div className="relative aspect-[16/8] rounded-[2.5rem] overflow-hidden bg-base-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Category/Tech Labels */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-12 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">
                  {project.category}
                </span>
                <div className="flex gap-4 text-base-content/10 group-hover:text-primary transition-colors duration-300">
                  <i className="fa-solid fa-code text-sm"></i>
                </div>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black mb-5 group-hover:text-primary transition-colors tracking-tighter leading-none">
                {project.title}
              </h2>
              
              <p className="text-base-content/50 text-base leading-relaxed mb-10 flex-grow group-hover:text-base-content/70 transition-colors">
                {project.description}
              </p>

              {/* Action Buttons - Permanent */}
              <div className="flex items-center gap-4 mb-10">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow flex items-center justify-center gap-2 py-5 rounded-full bg-base-content text-base-100 font-black uppercase tracking-[0.15em] text-xs hover:opacity-90 transition-opacity"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                  Live Demo
                </a>
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-base-content/10 text-base-content hover:bg-base-content hover:text-base-100 transition-all duration-300"
                    title="View GitHub Repository"
                  >
                    <i className="fa-brands fa-github text-2xl"></i>
                  </a>
                )}
              </div>

              {/* Detailed Tech Stack Bar */}
              <div className="pt-8 border-t border-base-300">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3.5 py-1.5 bg-base-300 rounded-xl text-[10px] font-black text-base-content/40 uppercase tracking-widest hover:text-primary transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Conversion Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-32 p-12 lg:p-20 bg-base-content text-base-100 rounded-[4rem] text-center shadow-2xl"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 tracking-tighter leading-tight">
          Ready to bring <br className="sm:hidden" /> your vision to life?
        </h2>
        <Link
          href="/contact"
          className="inline-flex px-12 py-5 rounded-full bg-base-100 text-base-content font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform"
        >
          Start a Conversation
        </Link>
      </motion.div>
    </main>
  );
}
