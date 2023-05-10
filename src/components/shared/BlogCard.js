import Link from 'next/link';
import Image from 'next/image';

const BlogCard = ({blog}) => {
  const {id, title, image, shortDescription, date, author} = blog;
  const firstDate = date.split(' ')[0];
  const secondDate = date.split(' ').slice(1).join(' ');

  return (
    <div className="px-4 py-6 bg-white border border-[#D2D1E0] rounded-lg transition-all duration-300 hover:shadow-[4px_20px_23px_rgba(71,71,71,0.13)]">
      <h3 className="text-base font-bold text-primary-text">{title}</h3>
      <div className="rounded overflow-hidden my-5">
        <Image src={image} className="w-full" alt="Blog" width={324} height={175}/>
      </div>
      <p className="text-sm font-inter text-secondary-text">{shortDescription}</p>
      
      <ul className="flex items-center gap-3 my-5">
        <li className="flex items-center gap-2">
          <Image src="/images/icons/calendar.svg" alt="calendar" width={20} height={20}/>
          <p className="text-sm font-inter text-primary-text font-bold">
            {firstDate} 
            <span className="font-medium text-secondary-text"> {secondDate}</span>
          </p>
        </li>
        <li className="flex items-center gap-2">
          <Image src="/images/icons/user.svg" alt="user" width={24} height={24}/>
          <p className="text-sm font-inter text-primary-text font-bold">{author}</p>
        </li>
      </ul>

      <Link href={`/blog/${id}`} className="flex items-center gap-[10px] py-3 font-inter text-base font-medium text-primary">
        Read more
        <Image src="/images/icons/arrow-red.svg" alt="Arrow" width={24} height={24}/>
      </Link>
    </div>
  )
}

export default BlogCard