"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 border-b
                 ${scrolled || isMobileMenuOpen
                   ? (currentTheme === "light" ? "bg-white/90 backdrop-blur-md border-base-300/50 py-3 shadow-sm" : "bg-black/90 backdrop-blur-md border-white/10 py-3 shadow-xl") 
                   : "bg-transparent border-transparent py-5"}`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-xl sm:text-2xl font-black tracking-tighter text-base-content hover:opacity-80 transition-opacity z-[70]"
        >
          HERMIT<span className="text-secondary">.dev</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-200
                         ${pathname === link.href ? "text-base-content" : "text-base-content/40 hover:text-base-content"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Theme Toggle Switch (Integrated from Navbar) */}
          <div
            className={`theme-toggle relative w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 hidden sm:block
                       ${currentTheme === "dark" ? "bg-white/15" : "bg-black/12"}`}
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            role="button"
            tabIndex={0}
            aria-label="Toggle theme"
          >
            <div
              className={`toggle-knob absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full transition-all duration-300 
                         ${currentTheme === "dark" ? "translate-x-5 bg-[#ededed]" : "translate-x-0 bg-[#333]"}`}
            ></div>
          </div>

          {/* Hire Me (Hidden on smallest mobile) */}
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-6 py-2 rounded-full border-2 border-base-content text-base-content text-xs font-black uppercase tracking-widest hover:bg-base-content hover:text-base-100 transition-all duration-300"
          >
            Hire Me
          </Link>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-[70] p-2 text-base-content hover:bg-base-content/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden overflow-hidden border-t ${currentTheme === "light" ? "bg-white border-base-300/50" : "bg-black border-white/10"}`}
          >
            <nav className="px-4 pt-6 pb-10 flex flex-col gap-6">
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between py-2 px-1">
                <span className="text-sm font-bold uppercase tracking-widest text-base-content/40">Theme</span>
                <div
                  className={`theme-toggle relative w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 
                             ${currentTheme === "dark" ? "bg-white/15" : "bg-black/12"}`}
                  onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                >
                  <div
                    className={`toggle-knob absolute top-[3px] left-[3px] w-[18px] h-[18px] rounded-full transition-all duration-300 
                               ${currentTheme === "dark" ? "translate-x-5 bg-[#ededed]" : "translate-x-0 bg-[#333]"}`}
                  ></div>
                </div>
              </div>

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black uppercase tracking-tighter transition-colors
                               ${pathname === link.href ? "text-secondary" : "text-base-content hover:text-secondary"}`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full justify-center inline-flex px-8 py-4 rounded-full bg-base-content text-base-100 text-sm font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
                >
                  Hire Me
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
