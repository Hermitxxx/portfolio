import SamuraiScroll from "@/components/SamuraiScroll";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />

      <section id="hero">
        <SamuraiScroll />
      </section>

      <About />
      <Skills />
      <Footer />
    </main>
  );
}
