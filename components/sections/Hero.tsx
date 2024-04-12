"use client"
import { HeroHighlight, Highlight } from "../DotBg"
import Button from "../Button"

const Hero = () => {
  
  //TODO: TAKE A PIC AND PUT IT HERE, NO BG

  return (
    <div id="hero" className="bg-black text-white">
        <HeroHighlight className="flex flex-row items-center justify-center text-6xl gap-[600px]">
          <div className="flex flex-col items-start gap-y-3">
            <span className="font-bold">Hello,</span>
            <span className="font-bold"> I am Ijon Kushta!!! </span>
            <Highlight className="text-6xl rounded-[20px] font-bold">Front-End Developer!</Highlight>
            
            <a href={`mailto:${process.env.EMAIL}`} target="_blank" >
              <Button />
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