import Link from 'next/link';
import { services } from '@/data/service';
import ServiceCard from './ServiceCard';

const Service = () => {
  return (
    <section className="service py-8 md:py-20 bg-[#FDFDFD]">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-6 md:pb-10">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Our Services</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px] md:leading-10">We run all kinds of services in form of <br className="hidden sm:block"/> Information & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            services.map((service) => <ServiceCard key={service.id} service={service}/>)
          }
        </div>

        {/* more button */}
        <div className="flex items-center justify-center pt-10">
          <Link href="/service" className="inline-block w-full sm:w-fit text-white text-center bg-primary font-bold text-sm lg:text-base xl:text-lg py-2 px-12 rounded-lg md:rounded-xl">More</Link>
        </div>
      </div>
    </section>
  )
}

export default Service;