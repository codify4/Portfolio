import Card from "../Card"
import { servicesStarter, servicesPro, servicesEnterprise } from "@/lib/utils"

const Services = () => {
  return (
    <section id="services" className="lg:w-[1500px] w-full py-12 md:py-24 lg:py-32 lg:px-20 dark:bg-gray-950">
      <h1 className="text-6xl text-white font-bold mb-6 ml-[80px]">Services</h1>
      <div className="grid lg:grid-cols-3 sm:grid-cols-1 px-24 gap-10">
        <Card services={servicesStarter}/>
        <Card services={servicesPro}/>
        <Card services={servicesEnterprise}/>
      </div>
    </section>
  )
}

export default Services