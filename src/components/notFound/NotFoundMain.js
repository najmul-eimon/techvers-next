import Link from 'next/link';
import Image from 'next/image';

const NotFoundMain = () => {
  return (
    <section className="w-full mt-12 md:mt-20">
      <div className="container">
        <div className="min-h-[calc(100vh-81px)] w-full flex items-center justify-center py-10">
          <div className="text-center">
            <Image src="/images/404.svg" alt="Not Found" width={634} height={455}/>
            <p className="font-inter text-secondary-text font-bold text-lg md:text-xl tracking-widest uppercase pt-20 pb-12">opps! page not found</p>
            <Link href="/" className="back-to-home whitespace-nowrap relative overflow-hidden inline-block py-[10px] px-20 md:px-24 text-sm md:text-lg font-inter font-semibold text-white bg-[#7A1403] rounded-xl">
              <span className="relative z-10">Back to home page</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundMain;