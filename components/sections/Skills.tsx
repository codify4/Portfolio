import TechCard from "../TechCard"
import { techLogos } from "../../lib/utils"

const Skills = () => {
  return (
    <div id="skills" className="w-[700px]">
        <h1 className="text-6xl text-white font-bold">Skills</h1>

        <div className="grid grid-cols-4 gap-y-5 gap-x-16 m-4">
            {techLogos.map((tech) => <TechCard name={tech.name} logo={tech.logo} />)}
        </div>
    </div>
  )
}

export default Skills