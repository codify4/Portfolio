import Card from "../Card"
import { servicesStarter, servicesPro, servicesEnterprise } from "@/lib/utils"
import FadeInOnScroll from "../FadeIn"

const Services = () => {
  return (
    <section id="services" className="lg:w-[1500px] w-full py-12 md:py-24 lg:py-32 lg:px-20 dark:bg-gray-950">
      <FadeInOnScroll duration={0.5}>
        <h1 className="text-6xl text-white font-bold mb-6 ml-[80px]">Services</h1>
      </FadeInOnScroll>
      <FadeInOnScroll duration={0.6}>
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:px-24 px-10 gap-10">
          <Card services={servicesStarter}/>
          <Card services={servicesPro}/>
          <Card services={servicesEnterprise}/>
        </div>
      </FadeInOnScroll>
    </section>
  )
}

export default Services