import Image from 'next/image';
import { circle } from '@/data/circleBg';

const Address = () => {
  return (
    <div>
      {/* section title */}
      <div className="pb-2">
        <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Contact Us</span>
        <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px] md:leading-10">Have a project? <br/> Let’s get in touch with us!</h2>
      </div>

      <div className="address h-[422px] w-full max-w-[465px] flex items-center justify-center relative overflow-hidden">
        <ul className="space-y-4 lg:space-y-6">
          <li>
            <h3 className="flex items-center gap-3 text-[10px] lg:text-base font-bold font-inter text-primary-text mb-2 md:mb-4">
              <Image src="/images/icons/alarmclock.svg" alt="alarmclock" width={23} height={23}/>
              Visit time
            </h3>
            <p className="text-[10px] lg:text-base font-inter text-secondary-text">Monday-Saturday</p>
            <p className="text-[10px] lg:text-base font-inter text-secondary-text">9AM to 7PM</p>
          </li>
          <li>
            <p className="flex items-center gap-2 text-[10px] lg:text-sm text-secondary-text font-inter">
              <Image src="/images/icons/email-sm.svg" alt="email" width={19} height={20}/>
              yourname@mail.com
            </p>
          </li>
          <li>
            <p className="flex items-center gap-2 text-[10px] lg:text-sm text-secondary-text font-inter">
              <Image src="/images/icons/phone-sm.svg" alt="phone" width={19} height={19}/>
              yourname@mail.com
            </p>
          </li>
        </ul>
        {circle}               
      </div>
    </div>
  )
}

export default Address