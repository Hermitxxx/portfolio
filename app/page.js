import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Full layout wrapper */}
      <div
        className="w-full min-h-screen px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12
                    grid grid-cols-1 lg:grid-cols-[320px_1fr] xl:grid-cols-[320px_1fr_auto]
                    gap-10 lg:gap-16 xl:gap-20 items-start"
      >
        {/* Left Column */}
        <Sidebar />

        {/* Center Column */}
        <div className="flex flex-col gap-16 lg:gap-36 order-2">
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </div>

        {/* Right Column / Fixed Nav */}
        <Navbar />
      </div>
    </main>
  );
}
