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
    setActiveCategory(JSON.parse(localStorage.getItem('category')));
    setAllBlogs(activeCategory === "all" ? blogs : blogs.filter((blog) => blog.category.toLowerCase() === activeCategory.toLowerCase()))
  }, [activeCategory])

  const allContexts = {
    activeTab, setActiveTab, allBlogs, setAllBlogs, activeCategory, setActiveCategory
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"/>
      </Head>
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