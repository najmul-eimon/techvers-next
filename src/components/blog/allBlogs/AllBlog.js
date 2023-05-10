import { useContext, useState } from 'react';
import BlogCard from '../../shared/BlogCard';
import ReactPaginate from 'react-paginate';
import BlogCategory from './BlogCategory';
import {IoChevronForwardSharp, IoChevronBackSharp} from 'react-icons/io5';
import { SharedContext } from '@/layout/Layout';

const AllBlog = () => {
  const {allBlogs} = useContext(SharedContext);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allBlogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allBlogs.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allBlogs.length;
    setItemOffset(newOffset);
  };

  return (
    <section className="blog pt-20">
      <div className="container">
        {/* section title */}
        <div className="text-center pb-8">
          <span className="text-xs md:text-base font-semibold md:font-bold font-inter text-primary block">Latest Blog</span>
          <h2 className="text-primary-text pt-2 font-bold text-lg md:text-2xl lg:text-[32px]">Articles on Tech and Development</h2>
        </div>

        {/* blog category filter */}
        <BlogCategory/>

        <div id="blog-grid-container" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 md:gap-y-10">
          {
            currentItems.map((blog) => <BlogCard key={blog.id} blog={blog}/>)
          }
        </div>

        {/* pagination */}
        <ReactPaginate
          className="pagination flex items-center justify-end gap-4 mt-7 w-full"
          activeClassName="active"
          breakLabel="..."
          nextLabel={<IoChevronForwardSharp className='text-lg'/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<IoChevronBackSharp className='text-lg'/>}
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  )
}

export default AllBlog