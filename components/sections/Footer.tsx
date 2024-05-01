import { socials } from "@/lib/utils"
import Button from "../ButtonX"
import { SocialIcon } from "react-social-icons"
import FadeInOnScroll from "../FadeIn"

const Footer = () => {
  return (
    <div className="flex flex-row items-center justify-evenly w-full h-[200px] text-white">
      <div>
        <FadeInOnScroll duration={0.5}>
          <div className="flex flex-row gap-4">
            {socials.map((social) => (
              <SocialIcon 
                url={social.link}  
                style={{ height: 40, width: 40 }}
                bgColor="#212121"
                className="mb-5"
              />
            ))}
          </div>
        </FadeInOnScroll>

        <FadeInOnScroll duration={0.6}>
          <div className="flex flex-col items-start">
            <span>Personal Portfolio</span>
            <span>Ijon Kushta ©</span>
          </div>
        </FadeInOnScroll>
      </div>
      <FadeInOnScroll duration={0.7}>
        <div>
          <a href={`mailto: ${process.env.EMAIL}`} target="_blank">
            <Button title="Email Me" />
          </a>
        </div>
      </FadeInOnScroll>
    </div>
  )
}

export default Footer