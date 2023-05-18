import Image from 'next/image';

const CompanyCard = ({data}) => {
  const {id, title, count, icon} = data;

  return (
    <div className="w-1/2 md:w-1/4 text-center">
      <Image src={icon} className="mx-auto" alt="trophy" width={49} height={48}/>
      <h3 className="py-3 md:py-6 text-white text-[32px] lg:text-[56px] font-bold">
        {count}
        {id === 'c2' && '+'}
      </h3>
      <p className="font-inter text-sm md:text-base text-white font-medium">{title}</p>
    </div>
  )
}

export default CompanyCard