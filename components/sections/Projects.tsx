import { projects } from '@/lib/utils';
import { ParallaxScrollSecond } from "../parallax-scroll";
import FadeInOnScroll  from "../FadeIn";

const Projects = () => {
  return (
    <FadeInOnScroll duration={0.5}>
      <div id='projects' className='text-white xl:w-[1200px] md:w-[800px] mt-14'>
        <h1 className='text-6xl font-bold'>Projects</h1>
        <ParallaxScrollSecond images={projects} className='mt-2' />
      </div>
    </FadeInOnScroll>
  )
}

export default Projects