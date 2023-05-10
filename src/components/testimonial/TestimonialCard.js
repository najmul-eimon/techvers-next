import Image from "next/image";

const TestimonialCard = ({testimonial}) => {
  const {rating, comment, author, authorImg, designation, companyLogo} = testimonial;

  return (
    <div className="p-6 rounded-[22px] md:rounded-lg border-t-4 border-primary shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
      <ul className="flex items-center gap-1">
        {
          [...Array(rating)].map((item, i) => (
            <li key={i}>
              <Image src="/images/icons/star-fill.svg" alt="Icon" width={20} height={19} />
            </li>
          ))
        }
      </ul>
      <p className="py-8 text-xs leading-[18px] md:text-sm lg:text-base font-inter text-secondary-text">&quot;{comment}&quot;</p>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex items-center gap-3 lg:gap-4 pb-4 lg:pb-0 border-b lg:border-b-0 lg:pr-4 lg:border-r border-primary-text">
          <div className="h-12 md:h-14 w-12 md:w-14 rounded-full overflow-hidden flex-shrink-0">
            <Image src={authorImg} className="w-full" alt="Avatar" width={56} height={57}/>
          </div>

          <div>
            <h4 className="text-sm md:text-base font-inter text-primary-text font-bold whitespace-nowrap truncate">{author}</h4>
            <p className="text-sm md:text-base font-inter text-primary-text whitespace-nowrap truncate">{designation}</p>
          </div>
        </div>

        <div className="lg:pl-4 flex-shrink-0">
          <Image src={companyLogo} alt="Logo" width={150} height={49}/>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard