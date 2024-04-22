"use client"

import { InfiniteMovingCards } from "../infiniteMovingCards"
import { techLogos } from "../../lib/utils"
import FadeInOnScroll from "../FadeIn"

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col xl:w-[1200px] md:w-[800px] w-[400px] mt-[150px]">
        <FadeInOnScroll duration={0.5}>
          <h1 className="text-6xl text-white font-bold">Skills</h1>
        </FadeInOnScroll>

        <FadeInOnScroll duration={0.4}>
          <InfiniteMovingCards
            items={techLogos}
            className="mt-10 flex flex-row gap-10"
            speed="slow"
          />
        </FadeInOnScroll>
    </div>
  )
}

export default Skills