
import { projects } from '@/lib/utils';
import { ParallaxScrollSecond } from "../parallax-scroll";
import FadeInOnScroll  from "../FadeIn";

const Projects = () => {

  return (
    <FadeInOnScroll duration={0.5}>
      <div id='projects' className='text-white xl:w-[1200px] md:w-[800px] w-[400px] mt-14'>
        <h1 className='text-6xl font-bold mb-10'>Projects</h1>
          <div className='grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
            {projects.map((image, index) => (
              <img src={image.src} alt={image.alt} key={index} className='mt-2 ml-[40px] w-[300px]' />
            ))}
          </div>
      </div>
    </FadeInOnScroll>
  )
}

export default Projects