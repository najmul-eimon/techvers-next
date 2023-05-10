import { useContext } from 'react';
import { blogCategory } from '@/data/blog';
import { SharedContext } from '@/app/layout';

const BlogCategory = () => {
  const {handleFilter, activeCategory} = useContext(SharedContext);

  return (
    <ul className="flex items-center gap-4 my-10 overflow-x-auto w-full scrollbar-hide blog-filter-btns">
      <li>
        <button onClick={() => handleFilter('all')} type="button" data-filter="all" className="whitespace-nowrap rounded-lg border border-[#D2D1E0] px-4 py-2 flex items-center gap-3 text-primary-text text-xs md:text-base font-inter">
          All
        </button>
      </li>
      {
        blogCategory.map(({id, title, count}) => (
          <li key={id}>
            <button onClick={() => handleFilter(title)} type="button" className={`${activeCategory === title && 'active'} whitespace-nowrap rounded-lg border border-[#D2D1E0] py-1 md:py-[6px] pr-3 pl-[14px] md:pr-[14px] flex items-center gap-3 text-primary-text text-xs md:text-base font-inter`}>
              {title}
              <span className="flex items-center justify-center h-[30px] w-[30px] rounded bg-[#FCE3E4] font-medium text-sm md:text-base">{count}</span>
            </button>
          </li>
        ))
      }
    </ul>
  )
}

export default BlogCategory;