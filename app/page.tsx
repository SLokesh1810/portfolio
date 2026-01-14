'use client';

import Image from "next/image";
import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Socials from "@/components/Socials";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundSnowfall from "@/components/SnowfallBackground";
import CloudImg from "@/public/BgImg/cloudImg2.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text">
      <BackgroundSnowfall />
      <div className="fixed top-0 left-0 w-full h-[120px] sm:h-[160px] md:h-[200px] lg:h-[220px] z-0 pointer-events-none">
        <Image
          src={CloudImg}
          alt="ground"
          fill
          priority
          className="object-cover opacity-90"
        />
      </div>

      <Navbar />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        <section
          className="
            grid
            grid-cols-3
            gap-3
            sm:gap-4
            lg:gap-2
          "
        >
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
