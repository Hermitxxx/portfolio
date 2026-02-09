'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-[#050505]/95 backdrop-blur-md border-b border-[#DC143C]/10 py-2' : 'bg-transparent py-3 md:py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-[#DC143C]/50 hover:border-[#DC143C] transition-colors">
                            <Image
                                src="/logo.jpg"
                                alt="HERMIT Logo"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-[#DC143C] font-bold text-lg md:text-xl tracking-tighter">HERMIT</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <ScrollLink
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={800}
                                className="text-white/60 hover:text-[#DC143C] text-sm font-medium tracking-wide cursor-pointer transition-colors"
                            >
                                {link.name.toUpperCase()}
                            </ScrollLink>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg border border-white/10 hover:border-[#DC143C]/50 hover:bg-[#DC143C]/10 text-white/70 hover:text-[#DC143C] transition-all duration-300"
                        aria-label="Toggle menu"
                    >
                        <motion.div
                            animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </motion.div>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu - Full Screen Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 md:hidden"
                    >
                        {/* Background */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#050505]/98 backdrop-blur-xl"
                        />

                        {/* Red glow effect */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#DC143C]/10 rounded-full blur-[100px]" />

                        {/* Menu Content */}
                        <div className="relative h-full flex flex-col items-center justify-center pt-16">
                            <nav className="flex flex-col items-center gap-8">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    >
                                        <ScrollLink
                                            to={link.to}
                                            smooth={true}
                                            duration={800}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="text-3xl font-bold tracking-tight text-white/90 hover:text-[#DC143C] transition-colors cursor-pointer"
                                        >
                                            {link.name.toUpperCase()}
                                        </ScrollLink>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Decorative bottom line */}
                            <motion.div
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute bottom-20 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#DC143C] to-transparent"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
