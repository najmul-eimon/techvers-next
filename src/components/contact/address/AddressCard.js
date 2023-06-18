import Link from "next/link";
import { address } from "@/data/about";
import Image from "next/image";

const AddressCard = ({data}) => {
  const {icon, title, description} = data;
  const emailData = address.find((item) => item.title.toLowerCase() === 'email');
  const email = emailData.description;

  const callData = address.find((item) => item.title.toLowerCase() === 'phone');
  const phone = callData.description.split(':')[1]

  return (
    <div className="p-8 bg-white rounded-[22px] shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
      <span className="h-12 w-12 flex items-center justify-center">
        <Image src={icon} alt="icon" width={40} height={40}/>
      </span>
      <h4 className="py-4 text-sm md:text-base font-bold text-primary-text font-inter">{title}</h4>
      <p className="pb-4 text-xs lg:text-sm xl:text-base font-inter text-primary-text">{description}</p>

      <Link href={title.toLowerCase() === 'email' ? `mailto:${email}` : title.toLowerCase() === 'phone' ? `tel:${phone}` : ''} className="inline-block w-full sm:w-40 text-center py-2 rounded-md border border-primary text-primary font-inter font-bold text-sm md:text-base transition-all duration-300 hover:bg-primary hover:text-white">
        {title.toLowerCase() === 'email' ? 'Contact' : title.toLowerCase() === 'phone' ? 'Call' : 'Location'}
      </Link>
    </div>
  )
}

export default AddressCard