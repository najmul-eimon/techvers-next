import { blogs } from "@/data/blog"
import BlogCard from "../shared/BlogCard"

const Blog = () => {
  return (
    <section className="blog pt-8 pb-16 md:py-20">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-6 md:pb-10">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Latest Blog</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px] md:leading-10">Articles on Tech and Development</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            blogs.slice(0,3).map((blog) => <BlogCard key={blog.id} blog={blog}/>)
          }
        </div>
      </div>
    </section>
  )
}

export default Blog;