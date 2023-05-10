import Link from 'next/link';
import AboutCard from './AboutCard';
import { about } from '@/data/about';
import Image from 'next/image';
import { aboutBgLeft } from '@/data/aboutBgLeft';
import { aboutBgRight } from '@/data/aboutBgRight';

const About = () => {
  return (
    <section className="about pt-16 md:pt-[160px] pb-8 md:pb-[132px] relative overflow-x-hidden">
      <div className="container relative z-10">
        {/* section title */}
        <div className="text-center pb-8">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">About</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px]">We are tech agency since 2015</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 md:gap-[34px]">
          {
            about.map((item) => <AboutCard key={item.id} data={item}/>)
          }

          <div className="sm:col-span-4 lg:col-span-2 lg:px-[34px]">
            <h3 className="text-primary-text text-lg md:text-2xl font-bold">The More Important the Work.</h3>
            <p className="font-inter text-sm md:text-base text-secondary-text py-4 md:py-[22px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <ul className="space-y-3 mb-[22px]">
              <li className="flex items-center gap-5 py-1">
                <Image src="/images/icons/verify-blue.svg" alt="verify" height={24} width={24}/>
                <p className="font-inter text-sm md:text-base text-secondary-text">Digital Creative Agency</p>
              </li>
              <li className="flex items-center gap-5 py-1">
                <Image src="/images/icons/verify-blue.svg" alt="verify" height={24} width={24}/>
                <p className="font-inter text-sm md:text-base text-secondary-text">Web Design & Development</p>
              </li>
            </ul>
            <Link href="/" className="inline-block w-full sm:w-fit text-white text-center bg-primary font-bold text-sm lg:text-base xl:text-lg py-2 px-12 rounded-lg md:rounded-xl">More</Link>
          </div>
        </div>
      </div>

      {/* background */}
      {/* left */}
      <span className="absolute bottom-0 -left-[10%] z-0 hidden xl:block">
        {aboutBgLeft}
      </span>

      {/* right */}
      <span className="absolute bottom-0 -right-[10%] z-0 hidden xl:block">
        {aboutBgRight}         
      </span>
    </section>
  )
}

export default About