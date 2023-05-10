import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/footer/Footer';
import { blogs } from '@/data/blog';
import { createContext, useState } from 'react';

export const SharedContext = createContext();

const Layout = ({children}) => {
  // service page tabs
  const [activeTab, setActiveTab] = useState(0);

  // blog page filter blogs
  const [allBlogs, setAllBlogs] = useState(blogs);
  const [activeCategory, setActiveCategory] = useState('all');

  const handleFilter = (category) => {
    if(category.toLowerCase() === 'all'){
      setAllBlogs(blogs);
      setActiveCategory('all');
    }
    else{
      setAllBlogs(blogs.filter((blog) => blog.category.toLowerCase() === category.toLowerCase()));
      setActiveCategory(category);
    }
  }

  const allContexts = {
    activeTab, setActiveTab, allBlogs, setAllBlogs, handleFilter, activeCategory
  };

  return (
    <SharedContext.Provider value={allContexts}>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </SharedContext.Provider>
  )
}

export default Layout