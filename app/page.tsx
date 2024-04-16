import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

import DotBackgroundDemo from "../components/staticBg";

const Home = () => {
  return (
    <main className="flex flex-col justify-center">
      <Hero />
      <DotBackgroundDemo>
        <AboutMe />
        <Skills />
        <Projects />
        <Services />
      </DotBackgroundDemo>
    </main>
  );
}


export default Home