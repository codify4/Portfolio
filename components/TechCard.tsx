import Image from "next/image"

type TechCardProps = {
    name: string
    logo: string
}

const TechCard = ({ name, logo }: TechCardProps) => {
  return (
      <div className="flex flex-col items-center justify-center w-[150px] h-[150px] bg-secondaryBg rounded-xl">
        <Image
          src={logo}
          alt={name}
          width={100}
          height={100}
          className="m-2"
        />
        <span className="text-white">{name}</span>
      </div>
  )
}

export default TechCard