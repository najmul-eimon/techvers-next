import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/footer/Footer';
import { blogs } from '@/data/blog';
import Head from 'next/head';
import { createContext, useEffect, useState } from 'react';

export const SharedContext = createContext();

const Layout = ({children}) => {
  // service page tabs
  const [activeTab, setActiveTab] = useState(0);

  // blog page filter blogs
  const [activeCategory, setActiveCategory] = useState('');
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('category') !== null){
      setActiveCategory(JSON.parse(localStorage.getItem('category')));
    }
    else{
      localStorage.setItem('category', JSON.stringify('all'))
      setActiveCategory('all')
    }
    setAllBlogs(activeCategory === "all" ? blogs : blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase()))
  }, [activeCategory])

  const allContexts = {
    activeTab, setActiveTab, allBlogs, setAllBlogs, activeCategory, setActiveCategory
  };

  return (
    <>
      <SharedContext.Provider value={allContexts}>
        <Header/>
        <main>
          {children}
        </main>
        <Footer/>
      </SharedContext.Provider>
    </>
  )
}

export default Layout