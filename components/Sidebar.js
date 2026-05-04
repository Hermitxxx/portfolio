"use client";

import { motion } from "framer-motion";

export default function Sidebar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="hero"
      className="bg-base-200 border border-base-300 rounded-3xl overflow-hidden flex flex-col lg:sticky lg:top-28 order-1 self-start"
    >
      {/* Top area */}
      <div className="px-5 pt-5 pb-2 flex justify-between items-center gap-3">
        <div className="w-9 h-9 flex items-center justify-center rounded-lg border border-base-300 text-base-content/50">
          <i className="fa-solid fa-circle-nodes" style={{ fontSize: '14px' }}></i>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-success"></span>
          <span className="text-success text-xs font-medium">Available</span>
        </div>
      </div>

      {/* Profile Image */}
      <div className="relative aspect-[4/5] sm:aspect-[3/4] mx-4 rounded-2xl overflow-hidden">
        <img
          src="/assets/logo.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
        <h2 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white drop-shadow-lg">
          Hermit
        </h2>
      </div>

      {/* Info below image */}
      <div className="px-5 pt-4 pb-1 space-y-1 text-center">
        <p className="text-base-content text-sm font-medium">
          hermitxxx.dev@gmail.com
        </p>
        <p className="text-base-content/50 text-xs">Based in Dhaka, Bangladesh</p>
      </div>

      {/* Social Icons */}
      <div className="px-5 py-4 flex items-center justify-center gap-2">
        <a
          href="https://discord.com/users/901784245255671848"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-base-300 text-base-content text-sm"
        >
          <i className="fa-brands fa-discord" style={{ fontSize: '16px' }}></i>
        </a>
        <a
          href="https://github.com/Hermitxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-base-300 text-base-content text-sm"
        >
          <i className="fa-brands fa-github" style={{ fontSize: '16px' }}></i>
        </a>
        <a
          href="https://www.linkedin.com/in/hermitdev"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-base-300 text-base-content text-sm"
        >
          <i className="fa-brands fa-linkedin-in" style={{ fontSize: '16px' }}></i>
        </a>
      </div>

      {/* Let's Talk CTA */}
      <div className="px-5 pb-5">
        <a
          href="#contact"
          className="cta-pulse flex items-center justify-between w-full bg-base-content text-base-100 rounded-full px-6 py-3.5 hover:opacity-90 transition-opacity duration-300 group"
        >
          <span className="font-semibold text-sm tracking-wide">Get Started</span>
          <span className="w-9 h-9 flex items-center justify-center rounded-full bg-base-100/15 text-base-100 group-hover:bg-base-100/25 transition-colors">
            <i className="fa-solid fa-arrow-right -rotate-45" style={{ fontSize: '14px' }}></i>
          </span>
        </a>
      </div>
    </motion.section>
  );
}
