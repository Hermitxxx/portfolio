"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Only show on home page
  if (pathname !== "/") return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 max-w-[92vw]
                 ${currentTheme === "light" ? "bg-white" : "bg-base-content/6"}
                 backdrop-blur-md rounded-full py-2 px-3 flex flex-row items-center gap-2 shadow-xl border border-base-300
                 xl:static xl:translate-x-0 xl:sticky xl:top-[50%] xl:-translate-y-1/2
                 xl:flex-col xl:py-6 xl:px-2.5 xl:gap-4 xl:rounded-full xl:self-start xl:justify-self-end
                 order-3`}
    >
      {/* Theme Toggle (Restored) */}
      <div
        className={`theme-toggle relative w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 
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

      <div className="w-px h-5 bg-base-content/10 xl:w-5 xl:h-px"></div>

      {/* Nav Links - Pure Black icons, Fixed size to ensure visibility */}
      <a
        href="#hero"
        className="nav-link w-11 h-11 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-base-content/10 transition-all duration-200"
        title="Home"
      >
        <i className="fa-solid fa-house" style={{ fontSize: '20px', display: 'block' }}></i>
      </a>
      <a
        href="#projects"
        className="nav-link w-11 h-11 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-base-content/10 transition-all duration-200"
        title="Projects"
      >
        <i className="fa-solid fa-gem" style={{ fontSize: '20px', display: 'block' }}></i>
      </a>
      <a
        href="#skills"
        className="nav-link w-11 h-11 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-base-content/10 transition-all duration-200"
        title="Skills"
      >
        <i className="fa-solid fa-code" style={{ fontSize: '20px', display: 'block' }}></i>
      </a>
      <a
        href="#contact"
        className="nav-link w-11 h-11 flex items-center justify-center rounded-full text-black dark:text-white hover:bg-base-content/10 transition-all duration-200"
        title="Contact"
      >
        <i className="fa-solid fa-envelope" style={{ fontSize: '20px', display: 'block' }}></i>
      </a>
    </nav>
  );
}
