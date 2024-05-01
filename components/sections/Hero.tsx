"use client"
import { HeroHighlight, Highlight } from "../DotBg"
import ButtonX from "../ButtonX"

const Hero = () => {
  
  //TODO: TAKE A PIC AND PUT IT HERE, NO BG

  return (
    <div id="hero" className="bg-black text-white xl:text-7xl md:text-7xl text-6xl">
        <HeroHighlight className="flex md:flex-row flex-col items-center justify-center w-screen 2xl:gap-x-[100px] xl:gap-x-[50px] md:gap-x-[50px] xl:px-[100px] lg:px-[200px] gap-y-10">
          <div className="flex flex-col xl:w-full md:w-[600px] w-[400px] md:items-center gap-y-2">
            <span className="font-bold">Hello</span>
            <span className="font-bold xl:w-[680px] md:w-[620px] xl:ml-20">I am Ijon Kushta</span>
            <Highlight className="xl:w-[805px] md:w-[805px] w-[350px] rounded-[20px] font-bold">Front-End Developer</Highlight>
            
            <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
              <ButtonX title="Email Me"/>
            </a>
          </div>
        </HeroHighlight>
      
    </div>
  )
}

export default Hero