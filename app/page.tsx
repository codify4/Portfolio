import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Services />
    </main>
  );
}
