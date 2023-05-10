import Link from "next/link";
import { blogCategory, blogs } from "@/data/blog";
import { useContext } from "react";
import { SharedContext } from "@/app/layout";
import Image from "next/image";

const BlogSidebar = () => {
  const {handleFilter} = useContext(SharedContext);
  const popularBlogs = blogs.filter((blog) => blog.status.toLowerCase() === 'popular');
  const blogTags = ["Adventures", "Business", "WordPress", "SEO"];
  
  return (
    <div>
      <div className="p-4 rounded-2xl bg-white shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
        <h4 className="p-3 text-2xl font-bold text-primary-text text-center">Categories</h4>
        <ul className="blog-filter-btns">
          {
            blogCategory.map(({id, title, count}) => (
              <li key={id}>
                <Link href="/blog" onClick={() => handleFilter(title)} className="flex items-center justify-between py-[7px] pl-4 text-base font-inter text-primary-text">
                  {title}
                  <span className="flex items-center justify-center h-[30px] w-[30px] rounded bg-[#FCE3E4] font-medium text-base">{count}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-8 py-5 px-3 xl:p-6 rounded-2xl bg-white shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
        <h4 className="pb-5 lg:pb-6 text-2xl font-bold text-primary-text text-center">Popular Feeds</h4>
        <ul className="space-y-5 lg:space-y-6">
          {
            popularBlogs.map(({id, image, title, date}) => (
              <li key={id}>
                <Link href={`/blog/${id}`} className="flex items-center gap-3 w-full">
                  <div className="rounded overflow-hidden w-[68px] xl:w-20 h-[68px] xl:h-[74px] flex-shrink-0">
                    <Image src={image} className="w-full h-full object-cover" alt="popular blog" width={324} height={175}/>
                  </div>
                  <div>
                    <h5 className="text-sm xl:text-base font-inter text-primary-text font-medium xl:font-bold popular-blog-title">{title}</h5>
                    <p className="text-xs xl:text-base font-inter text-primary-text">{date}</p>
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="mt-8 p-6 rounded-2xl bg-white shadow-[0px_0px_16px_rgba(198,198,198,0.24)]">
        <h4 className="pb-6 text-xl font-bold text-primary-text">Tags</h4>
        <ul className="flex gap-4 flex-wrap">
          {
            blogTags.map((tag, i) => (
              <li key={i}>
                <Link href="/" className="inline-block text-xs lg:text-base font-medium font-inter text-primary-text py-[10px] w-[114px] xl:w-[146px] text-center rounded-3xl bg-[#F2F2F2]">{tag}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default BlogSidebar;