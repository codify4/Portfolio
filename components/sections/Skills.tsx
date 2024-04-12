import TechCard from "../TechCard"
import { techLogos } from "../../lib/utils"

//TODO: Align the cards to the center and also add fade in animation
const Skills = () => {
  return (
    <div id="skills" className="flex flex-col ml-[200px] w-[700px]">
        <h1 className="text-6xl text-white font-bold">Skills</h1>

        <div className="grid grid-cols-3 gap-y-5 gap-x-10 m-4 justify-center items-center">
            {techLogos.map((tech) => <TechCard name={tech.name} logo={tech.logo} />)}
        </div>
    </div>
  )
}

export default Skills