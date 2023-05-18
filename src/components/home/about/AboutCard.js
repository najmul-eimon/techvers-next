import Image from "next/image";

const AboutCard = ({data}) => {
  const {icon, count, title, description} = data;

  return (
    <div className="sm:col-span-2 lg:col-span-1 rounded-xl shadow-[0px_0px_21px_rgba(92,92,92,0.12)] p-6 bg-white">
      <div className="flex items-center gap-3">
        <Image src={icon} alt="Icon" width={27} height={28}/>
        <h3 className="text-primary-text text-2xl md:text-[32px] font-bold">{count}+</h3>
      </div>
      <h4 className="text-primary-text font-inter text-sm md:text-base font-bold pt-4 pb-5 md:py-5">{title}</h4>
      <p className="text-secondary-text text-sm md:text-base font-inter">{description}</p>
    </div>
  )
}

export default AboutCard