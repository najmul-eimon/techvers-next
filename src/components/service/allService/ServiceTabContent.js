import Image from "next/image";

const ServiceTabContent = ({data}) => {
  const {title, image, description} = data;

  return (
    <div id="tab1" className="tab-content">
      <div className="rounded-lg md:rounded-xl overflow-hidden h-full mb-6 md:mb-8">
        <Image src={image} className="w-full" alt="Service" width={736} height={316}/>
      </div>

      <h3 className="pb-2 text-primary-text text-lg xl:text-2xl font-bold">{title}</h3>
      <p className="text-xs md:text-base font-inter text-secondary-text text-justify">{description?.about}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 md:my-8">
        <div className="rounded-2xl p-4 border border-[#CDEEFE]">
          <h3 className="pb-[10px] text-center text-primary-text text-lg xl:text-2xl font-bold">Why choosing us</h3>
          <p className="text-xs md:text-base font-inter text-secondary-text">{description?.why}</p>
        </div>
        <div className="rounded-2xl p-4 border border-[#CDEEFE]">
          <h3 className="pb-[10px] text-center text-primary-text text-lg xl:text-2xl font-bold">What we Offer</h3>
          <p className="text-xs md:text-base font-inter text-secondary-text">{description?.offer}</p>
        </div>
      </div>

      <h3 className="pb-2 text-primary-text text-lg xl:text-2xl font-bold">Analyzing {title} Service</h3>
      <p className="text-xs md:text-base font-inter text-secondary-text text-justify">{description?.analyzing}</p>

      <div className="mt-6 md:mt-8">
        <h3 className="pb-2 text-primary-text text-lg xl:text-2xl font-bold">{title} Service</h3>
        <ul className="space-y-3">
          {
            description?.services.map((service, index) => (
              <li key={index} className="flex items-start gap-4">
                <Image src="/images/icons/verify-red.svg" className="pt-1" alt="verify" width={24} height={24}/>
                <p className="text-xs md:text-base font-inter text-secondary-text">{service}</p>
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default ServiceTabContent