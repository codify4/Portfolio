import Button from './Button'
import { ShieldCheck } from 'lucide-react';

type CardProps = {
    services: {
        title: string
        price: string
        description: string[]
    }[]
}

const Card = ({ services }: CardProps) => {
  return (
    <div className='w-full h-full rounded-xl bg-accent p-0.5'>
      {services.map((service) => (
        <div key={service.title} className="bg-black rounded-xl shadow-lg overflow-hidden border-white">
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-4xl font-bold mb-4 text-white">{service.price}</p>
            <p className="text-gray-400 mb-8">per month</p>
            <ul className="text-left space-y-3 text-white">
              {service.description.map((desc, index) => (
                <li key={index} className="flex items-center">
                  <span className='flex flex-row'>
                    <ShieldCheck/>{desc}
                  </span>
                </li>
              ))}
            </ul>
            <Button title='Email Me' className='mt-8'/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
