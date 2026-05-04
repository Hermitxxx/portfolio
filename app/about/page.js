"use client";

import { motion } from "framer-motion";
import Skills from "@/components/Skills";

export default function AboutPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col gap-24 lg:gap-32">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-base-content/50 uppercase">
              The Story
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tighter leading-[1.1]">
            Bridging the gap between <span className="text-secondary">Code</span> and <span className="italic font-serif">Aesthetics</span>.
          </h1>
          <p className="text-lg text-base-content/60 leading-relaxed mb-8">
            I am Hermit, a Full-stack Developer and Digital Experience Designer based in Dhaka. 
            For the past 3 years, I've been obsessed with creating high-performance web applications 
            that don't just work—they wow.
          </p>
          <p className="text-lg text-base-content/60 leading-relaxed">
            My approach combines technical rigor with a designer's eye, ensuring that every 
            pixel serves a purpose and every line of code is optimized for the best possible 
            user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl"
        >
          <img
            src="/assets/logo.jpg"
            alt="Hermit Profile"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </motion.div>
      </section>

      {/* Experience Timeline */}
      <section className="space-y-12">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-accent"></span>
          <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-base-content/50 uppercase">
            Professional Journey
          </span>
        </div>
        
        <div className="space-y-16">
          {[
            {
              year: "2023 - Present",
              role: "Senior Full-stack Developer",
              company: "Design Alchemy Studio",
              description: "Leading the development of high-performance SaaS platforms and internal tools using the MERN stack and Next.js.",
            },
            {
              year: "2021 - 2023",
              role: "Frontend Specialist",
              company: "Pixel Perfect Agency",
              description: "Crafted complex, responsive user interfaces for international clients, focusing on accessibility and performance.",
            },
            {
              year: "2020 - 2021",
              role: "Junior Web Developer",
              company: "Tech Spark Solutions",
              description: "Developed and maintained corporate websites while mastering modern JavaScript frameworks.",
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 group"
            >
              <span className="text-sm font-black uppercase tracking-widest text-base-content/30 group-hover:text-base-content transition-colors">
                {exp.year}
              </span>
              <div>
                <h3 className="text-2xl font-black mb-2 tracking-tight group-hover:text-secondary transition-colors">
                  {exp.role} <span className="text-base-content/20 mx-2">@</span> {exp.company}
                </h3>
                <p className="text-base-content/50 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Integration */}
      <Skills />
    </main>
  );
}
