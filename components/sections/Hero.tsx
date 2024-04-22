"use client"
import { HeroHighlight, Highlight } from "../DotBg"
import Button from "../Button"

const Hero = () => {
  
  //TODO: TAKE A PIC AND PUT IT HERE, NO BG

  return (
    <div id="hero" className="bg-black text-white">
        <HeroHighlight className="flex md:flex-row flex-col items-center justify-center text-6xl 2xl:gap-x-[500px] xl:gap-x-[100px] md:gap-x-[100px] xl:px-[100px] lg:px-[200px] gap-y-10">
          <div className="flex flex-col xl:w-full md:w-[600px] w-[400px] items-start gap-y-2 xl:mt-0 sm:mt-24">
            <span className="font-bold">Hello,</span>
            <span className="font-bold xl:w-[600px] md:w-[300px] text-6xl"> I am Ijon Kushta </span>
            <Highlight className="xl:w-[700px] md:w-[360px] w-[350px] text-6xl rounded-[20px] font-bold">Front-End Developer</Highlight>
            
            <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
              <Button title="Email Me"/>
            </a>
          </div>

          <div>
            My Photo
          </div>

        </HeroHighlight>
      
    </div>
  )
}

export default Hero