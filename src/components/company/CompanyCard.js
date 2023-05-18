import Image from 'next/image';
import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';
import dynamic from 'next/dynamic'

const Odometer = dynamic(import('react-odometerjs'), {
    ssr: false,
    loading: () => 0
});

const CompanyCard = ({data}) => {
  const {id, title, count, icon} = data;
  const [show, setShow] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setShow(true)
    }
    else{
      setShow(false)
    }
  };

  return (
    <div className="w-1/2 md:w-1/4 text-center">
      <Image src={icon} className="mx-auto" alt="trophy" width={49} height={48}/>
        <h3 className="py-3 md:py-6 text-white text-[32px] lg:text-[56px] font-bold">
          <VisibilitySensor onChange={onVisibilityChange} offset={{top: 10}} delayedCall>
            <span>
            <Odometer
              format="d"
              duration={2000}
              value={show ? count : 0}
            />
            {id === 'c2' && '+'}
            </span>
          </VisibilitySensor>
          </h3>
      <p className="font-inter text-sm md:text-base text-white font-medium">{title}</p>
    </div>
  )
}

export default CompanyCard