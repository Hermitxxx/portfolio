"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      id="projects"
      className="py-12"
    >
      <div className="flex items-center justify-between mb-8 lg:mb-12">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
          <span className="text-[11px] sm:text-xs xl:text-sm font-semibold tracking-[0.2em] text-base-content/50 uppercase">
            Featured Work
          </span>
        </div>
        <Link 
          href="/projects" 
          className="text-xs font-bold uppercase tracking-widest text-base-content/40 hover:text-base-content transition-colors group flex items-center gap-2"
        >
          View All Projects 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-10 lg:mb-16 text-base-content tracking-tighter leading-[1.1]">
        Creative Solutions <br className="hidden sm:block" />
        for Modern Problems
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-8 lg:gap-12">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden w-full overflow-hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          className="pb-12 w-full"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
}

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      className="group relative bg-base-200 border border-base-300 rounded-[3rem] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-2xl flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative p-6 pb-0">
        <div className="relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-base-300">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Floating Tech Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 2).map((t) => (
              <span key={t} className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold text-white uppercase tracking-wider">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">
            {project.category}
          </span>
          <div className="flex gap-3 text-base-content/20 group-hover:text-primary transition-colors">
            <i className="fa-solid fa-bolt text-xs"></i>
          </div>
        </div>
        
        <h3 className="text-2xl lg:text-3xl font-black mb-4 text-base-content tracking-tight group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm lg:text-base text-base-content/40 leading-relaxed mb-8 flex-grow">
          {project.description}
        </p>

        {/* Action Buttons - Always Visible */}
        <div className="flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-grow flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-base-content text-base-100 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <i className="fa-solid fa-eye"></i>
            Live Demo
          </a>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-base-content/10 text-base-content hover:bg-base-content hover:text-base-100 transition-all duration-300"
              title="View Repository"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
