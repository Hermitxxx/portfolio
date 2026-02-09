'use client';

import { motion } from 'framer-motion';
import { Github, Instagram, Facebook, Send } from 'lucide-react';

const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/Hermitxxx', label: 'GitHub' },
    { icon: <Instagram size={24} />, href: 'https://www.instagram.com/_nothermit/', label: 'Instagram' },
    { icon: <Facebook size={24} />, href: 'https://www.facebook.com/zzZMELCX', label: 'Facebook' },
    { icon: <Send size={24} />, href: 'https://t.me/gabimaru_op', label: 'Telegram' },
];

export default function About() {
    return (
        <section id="about" className="md:min-h-screen bg-[#050505] text-white flex items-center justify-center py-8 md:py-20 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-3xl xs:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 md:mb-12"
                >
                    THE <span className="text-[#DC143C]">HERMIT</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-base md:text-xl lg:text-2xl text-white/60 font-light leading-relaxed mb-8 md:mb-16 max-w-2xl mx-auto"
                >
                    Calm in chaos. Precise in execution. I build digital experiences with the
                    discipline of the blade and the creativity of the brush. Currently forging
                    next-generation web applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex justify-center gap-4 md:gap-8 flex-wrap"
                >
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-full border border-white/10 hover:bg-[#DC143C] hover:border-[#DC143C] hover:text-white transition-all duration-300 hover:scale-110"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
