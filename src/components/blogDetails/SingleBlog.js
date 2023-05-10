import BlogSidebar from './BlogSidebar';
import BlogComments from './BlogComments';
import { blogs } from '@/data/blog';
import {IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SingleBlog = ({blogId}) => {
  const router = useRouter();
  const singleBlog = blogs.find((blog) => blog.id === blogId);
  const {introduction, image, conclusion, author, authorImg, designation, comments} = singleBlog || {};

  const prevBlog = blogs[blogs.indexOf(singleBlog)-1]?.id
  const nextBlog = blogs[blogs.indexOf(singleBlog)+1]?.id

  const handleBlog = (prop) => {
    router.push(`/blog/${prop}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  return (
    <section className="blog-details pt-16 pb-8 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* left part */}
          <div className="lg:col-span-2">
            <h3 className="py-2 text-lg md:text-2xl xl:text-[32px] font-bold text-primary-text">Introduction</h3>
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text pb-4">{introduction[0]}</p>
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text lg:pb-4">{introduction[1]}</p>
          
            <figure className="my-4 md:my-6 xl:my-8">
              <div className="rounded-[22px] overflow-hidden">
                <Image src={image} className="w-full" alt="Blog" width={324} height={175}/>
              </div>
              <figcaption className="mt-4 font-inter text-secondary-text text-sm pl-2 relative before:content before:h-full before:w-[2px] before:rounded before:bg-gradient-to-r before:from-[#00D0DD] before:to-[#0DA8FF] before:absolute before:left-0 before:top-0">Image caption goes here</figcaption>
            </figure>

            <blockquote className="pt-5 pb-4 font-inter text-primary-text text-lg xl:text-xl font-semibold md:font-bold">{introduction[2]}</blockquote>
            
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text pb-4">{introduction[3]}</p>
            
            <blockquote className="mt-5 mb-8 py-3 rounded-lg bg-[#011C27]/10 text-primary-text font-inter text-base xl:text-xl font-medium">
              <p className="pl-5 md:pl-7 relative before:content before:h-full before:w-1 before:rounded-[1px] before:bg-primary-text before:absolute before:left-0 before:top-0">“{introduction[4]}”</p>
            </blockquote>
            
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text lg:pb-4">{introduction[5]}</p>
          
            <h3 className="py-4 md:pt-6 md:pb-5 text-2xl font-bold text-primary-text">Conclusion</h3>
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text pb-4">{conclusion[0]}</p>
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text pb-4">{conclusion[1]}</p>
            <p className="text-xs md:text-sm xl:text-base font-inter text-secondary-text pb-4">{conclusion[2]}</p>
          
            <div className="pt-4 pb-5 md:py-8 border-b border-[#D6F0FD]">
              <h4 className="text-sm lg:text-lg font-inter font-semibold lg:font-bold text-primary-text pb-4">Share this post</h4>
              <ul className="flex items-center gap-2">
                <li>
                  <a href="#!" className="flex items-center justify-center h-8 w-8 bg-[#F2F2F2] rounded-full">
                    <Image src="/images/icons/linkedIn-color.svg" alt="linkedIn" width={24} height={24}/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="flex items-center justify-center h-8 w-8 bg-[#F2F2F2] rounded-full">
                    <Image src="/images/icons/twitter-color.svg" alt="twitter" width={24} height={24}/>
                  </a>
                </li>
                <li>
                  <a href="#!" className="flex items-center justify-center h-8 w-8 bg-[#F2F2F2] rounded-full">
                    <Image src="/images/icons/facebook-color.svg" alt="facebook" width={24} height={24}/>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 md:gap-4 my-5 md:my-8">
              <div className="h-10 md:h-14 w-10 md:w-14 rounded-full overflow-hidden flex-shrink-0">
                <Image src={authorImg} className="w-full" alt="avatar" width={56} height={56}/>
              </div>
              <div>
                <h4 className="text-sm md:text-base font-inter font-bold text-primary-text">{author}</h4>
                <p className="text-xs md:text-base font-inter text-secondary-text">{designation}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* previous button */}
              <button onClick={()=>handleBlog(prevBlog)} disabled={blogs.indexOf(singleBlog)=== 0} type="button" className="flex items-center gap-4 text-start">
                <span className="flex items-center justify-center h-8 md:h-10 w-8 md:w-10 rounded-full border border-secondary-text">
                  <IoChevronBackSharp className='text-base md:text-xl text-secondary-text'/>
                </span>
                <div>
                  <span className="text-sm font-inter text-secondary-text block">PREVIOUS</span>
                  <small className="text-base font-inter text-primary-text hidden md:block">How does screen work</small>
                </div>
              </button>

              {/* next button */}
              <button onClick={()=>handleBlog(nextBlog)} disabled={blogs.indexOf(singleBlog)=== blogs.length-1} type="button" className="flex items-center gap-4 text-end">
                <div>
                  <span className="text-sm font-inter text-secondary-text block">NEXT</span>
                  <small className="text-base font-inter text-primary-text hidden md:block">How does screen work</small>
                </div>
                <span className="flex items-center justify-center h-8 md:h-10 w-8 md:w-10 rounded-full border border-secondary-text">
                  <IoChevronForwardSharp className='text-base md:text-xl text-secondary-text'/>
                </span>
              </button>
            </div>

            {/* comments */}
            <BlogComments comments={comments}/>
          </div>

          {/* right-part */}
          <BlogSidebar/>
        </div>
      </div>
    </section>
  )
}

export default SingleBlog;