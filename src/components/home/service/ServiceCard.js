import { useContext } from "react";
import Link from "next/link";
import { SharedContext } from "@/app/layout";

const ServiceCard = ({service}) => {
  const {id, icon, title, shortDescription} = service;
  const {setActiveTab} = useContext(SharedContext);

  return (
    <div className="single-item bg-white rounded-xl border border-[rgba(1,68,101,0.15)] px-6 py-4 md:p-6 text-center transition-all duration-300 hover:shadow-[4px_20px_23px_rgba(71,71,71,0.13)]">
      <div 
        className="h-16 md:h-24 w-16 md:w-24 rounded-full shadow-[0px_11px_16px_rgba(198,198,198,0.24)] flex items-center justify-center mx-auto"
        dangerouslySetInnerHTML={{__html: icon}}
      />

      <h3 className="text-lg md:text-2xl font-bold text-primary-text py-5">{title}</h3>
      <p className="font-inter text-secondary-text text-xs md:text-base pb-8">{shortDescription}</p>
      <Link onClick={() => setActiveTab(id)} href="/service" className="more-btn mx-auto flex items-center justify-center h-6 w-6">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 12H3" stroke="#012C3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21.7152 11.7966L16.265 7.90356C15.7355 7.52535 15 7.90385 15 8.55455V15.4454C15 16.0961 15.7355 16.4746 16.265 16.0964L21.7152 12.2034C21.8548 12.1037 21.8548 11.8963 21.7152 11.7966Z" fill="#012C3D"/>
        </svg>                
      </Link>
    </div>
  )
}

export default ServiceCard