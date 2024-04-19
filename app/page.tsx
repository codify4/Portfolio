import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
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
      </DotBackgroundDemo>
    </main>
  );
}


export default Home