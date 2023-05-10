import Link from 'next/link';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="banner pt-12 md:pt-20 relative">
      <div className="w-full h-fit lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0">
        <div className="container">
          <div className="grid lg:grid-cols-12">
            <div className="lg:col-span-7 pt-8 2xl:pt-0 xl:pr-10">
              <h1 className="lg:pt-20 text-[32px] md:text-4xl xl:text-5xl 2xl:text-[56px] leading-9 md:leading-[52px] xl:leading-[58px] 2xl:leading-[64px] font-bold text-primary-text">
                Empowering your business with 
                <span className="text-primary"> innovative </span>
                IT solutions<span className="text-primary">*</span>
              </h1>
              <ul className="flex flex-col sm:flex-row items-center gap-4 mt-4 md:mt-10 mb-8 xl:mb-24">
                <li className="w-full sm:w-fit">
                  <Link href="/service" className="inline-block py-[9px] md:py-[10px] w-full sm:w-[137px] sm:shadow-[0px_20px_24px_-4px_rgba(0,0,0,0.08),0px_8px_8px_-4px_rgba(0,0,0,0.03)] text-center rounded-xl text-sm md:text-base leading-[20px] font-bold text-white bg-primary">Get Started</Link>
                </li>
                <li className="w-full sm:w-fit">
                  <Link href="/service" className="inline-block py-[9px] md:py-[9px] w-full sm:w-[137px] text-center rounded-xl text-sm md:text-base leading-[18px] font-bold text-primary-text bg-transparent border border-primary-text">Services</Link>
                </li>
              </ul>
              <div className="flex items-start gap-4 md:gap-10 border-t border-[rgba(0,0,0,0.04)] pt-8 xl:pt-[46px]">
                <Image src="/images/icons/pointer.svg" alt="Icon" width={44} height={44}/>
                <div>
                  <h4 className="text-base md:text-xl font-semibold md:font-bold font-inter text-primary-text pb-4">We can upgrade your business a full 360</h4>
                  <p className="text-xs md:text-sm font-inter text-secondary-text">Lorem ipsum dolor sit amet consectetur. Tellus suspendisse cursus enim vel volutpat ut orci nullam purus. Rhoncus at tempus congue aenean suspendisse lorem congue nec.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end w-full px-4 lg:px-0">
        <div className="image lg:w-[45%]">
          <Image src="/images/banner-img.svg" alt="Banner" width={768} height={716}/>
        </div>
      </div>
    </section>
  )
}

export default Banner