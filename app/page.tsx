'use client';
import Navbar from "@/components/NavBar";
import Welcome from "@/components/Welcome";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen text-text">
      <Navbar />

      <div className="relative z-10 mt-0 px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        <section
          className="
            grid
            grid-cols-3
            gap-2
            lg:grid-cols-5
          "
        >
          <Welcome />
          <Hero />
          <About />
          <Socials />
          <Skills />
          <Projects />
          <Contact />
        </section>

      </div>
    </main>
  );
}
