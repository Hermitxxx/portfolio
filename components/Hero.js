"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col pt-4 sm:pt-8 lg:pt-12"
    >
      {/* Badge */}
      <div className="flex items-center gap-2 mb-8 lg:mb-10">
        <span className="w-2.5 h-2.5 rounded-full bg-warning"></span>
        <span className="text-[11px] sm:text-xs xl:text-base font-semibold tracking-[0.2em] text-base-content/50 uppercase">
          Digital Experience Designer
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.12] mb-8 lg:mb-10">
        <span className="text-base-content">Focus on</span>
        <br />
        <span className="text-base-content">Performance</span>
        <br />
        <span className="text-base-content">& Visuals.</span>
      </h1>

      {/* Description */}
      <p className="text-base-content/40 text-base sm:text-lg xl:text-xl leading-relaxed max-w-xl mb-8 lg:mb-10">
        I am a Full-stack Developer specializing in building high-performance web
        applications with a focus on clean code and exceptional user experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-12 lg:mb-16">
        <a
          href="#projects"
          className="px-8 py-3.5 rounded-full bg-base-content text-base-100 text-sm font-semibold hover:opacity-85 transition-opacity duration-300 inline-flex items-center gap-2"
        >
          My Portfolio
        </a>
        <a
          href="#contact"
          className="link-hover-line px-4 py-3.5 text-base-content text-sm font-semibold inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-70"
        >
          Let's Talk
          <span className="w-7 h-7 flex items-center justify-center rounded-full border border-base-content/20 text-base-content text-[10px]">
            <Icon icon="mdi:arrow-right" className="-rotate-45" />
          </span>
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 sm:gap-10 border-t border-base-300 pt-8 lg:pt-10">
        <div>
          <p className="text-[10px] sm:text-[11px] xl:text-xs tracking-[0.15em] text-base-content/30 uppercase font-semibold mb-2">
            Experience
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-bold italic text-base-content">
            +03 Years
          </p>
        </div>
        <div>
          <p className="text-[10px] sm:text-[11px] xl:text-xs tracking-[0.15em] text-base-content/30 uppercase font-semibold mb-2">
            Projects
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-bold italic text-base-content">
            50+ Done
          </p>
        </div>
        <div>
          <p className="text-[10px] sm:text-[11px] xl:text-xs tracking-[0.15em] text-base-content/30 uppercase font-semibold mb-2">
            Global Clients
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-serif font-bold italic text-base-content">
            20+ Clients
          </p>
        </div>
      </div>
    </motion.section>
  );
}
