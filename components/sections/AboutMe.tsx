import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import FadeInOnScroll from "../FadeIn"

const AboutMe = () => {
  return (
    <div id="about" className="ml-[150px] xl:w-10/12 md:w-[1000px] h-[500px] text-white">
      <FadeInOnScroll duration={0.5}>
        <h1 className="p-5 text-6xl font-bold xl:ml-[98px]">About Me</h1>
      </FadeInOnScroll>

      <FadeInOnScroll duration={0.4}>
        <div className="flex flex-row items-center justify-center">
          <div className="w-[200px]">
            <Avatar className="w-[200px] h-[200px]">
              <AvatarImage src="/pfp.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <div className="w-[400px] mx-10 ">
            <p>
              I am a software developer from Albania who loves building things, because I think the best way to learn is by doing.
              Coding is the path I have chosen that will lead me to my goals. <br/>
              I want to become someone that is able to change the world and help others with my skillset.
            </p>

            <p className="text-xl mt-5">
              My <span className="font-bold text-gradient">main priciple</span> of work is: <br/>
              Getting things done <span className="font-bold text-gradient">fast</span> without losing the <span className="font-bold text-gradient">quality</span>.
            </p>
          </div>
        </div>
      </FadeInOnScroll>
    </div>
  )
}

export default AboutMe