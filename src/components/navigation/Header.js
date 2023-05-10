import { useContext, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SharedContext } from '@/layout/Layout';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {setActiveTab, handleFilter} = useContext(SharedContext);
  const basePath = usePathname();
  const path = basePath.split('/')[1];

  const handleNavLink = () => {
    setShowMenu(false);
    setActiveTab(0);
    handleFilter('all');
  }

  return (
    <>
      <header className="header fixed top-0 left-0 w-full z-40 bg-[#FAFAFC] shadow-[0px_0px_22px_rgba(119,119,119,0.19)] box-border md:shadow-none md:border-b md:border-black/10 transition-all duration-300">
        <div className="container">
          <div className="grid grid-cols-12 items-center py-2 md:py-0">
            <div className="col-span-6 md:col-span-2">
              <Link href="/">
                <Image src="/images/logo.svg" className="main-logo" alt="Logo" width={133} height={32}/>
                <Image src="/images/logo-white.svg" className="white-logo hidden" alt="Logo" width={133} height={32}/>
              </Link>
            </div>

            <div className="col-span-6 md:col-span-10">
              <button type="button" onClick={() => setShowMenu(!showMenu)} className="mobile-menu-toggle ml-auto h-6 w-6 rounded-full bg-[#F0F0F1] flex items-center justify-center md:hidden">
                {
                  showMenu ? 
                  <Image src="/images/icons/close.svg" alt="Close" width={12} height={13} /> 
                  : <Image src="/images/icons/list.svg" width={16} height={10} alt="Menu" />
                }
              </button>
              
              <div className={`${showMenu ? 'md:flex' : 'hidden md:flex'} mobile-menu fixed top-[72px] left-0 md:static bg-white md:bg-transparent rounded md:rounded-none border border-[#D2D1E0] shadow-[4px_20px_23px_rgba(71,71,71,0.13)] md:shadow-none md:border-0 py-12 px-6 md:p-0 w-[calc(100%-48px)] md:w-auto mx-6 md:mx-0 items-center justify-between md:pl-6`}>
                <ul className="w-full md:w-auto flex flex-col md:flex-row md:items-center gap-6">
                  <li>
                    <Link href="/" onClick={handleNavLink} className={`${path === '' && 'active'} nav-link w-full md:w-auto border-b border-black/20 md:border-0 font-bold inline-block text-primary-text py-2 px-3 lg:px-5 text-base capitalize transition-all duration-300`}>Home</Link>
                  </li>
                  <li>
                    <Link href="/service" onClick={handleNavLink} className={`${path === 'service' && 'active'} nav-link w-full md:w-auto border-b border-black/20 md:border-0 font-bold inline-block text-primary-text py-2 px-3 lg:px-5 text-base capitalize transition-all duration-300`}>Service</Link>
                  </li>
                  <li>
                    <Link href="/testimonial" onClick={handleNavLink} className={`${path === 'testimonial' && 'active'} nav-link w-full md:w-auto border-b border-black/20 md:border-0 font-bold inline-block text-primary-text py-2 px-3 lg:px-5 text-base capitalize transition-all duration-300`}>Testimonial</Link>
                  </li>
                  <li>
                    <Link href="/blog" onClick={handleNavLink} className={`${path === 'blog' && 'active'} nav-link w-full md:w-auto border-b border-black/20 md:border-0 font-bold inline-block text-primary-text py-2 px-3 lg:px-5 text-base capitalize transition-all duration-300`}>Blog</Link>
                  </li>
                  <li className="md:hidden">
                    <Link href="/contact" onClick={handleNavLink} className={`${path === 'contact' && 'active'} nav-link w-full md:w-auto border-b border-black/20 md:border-0 font-bold inline-block text-primary-text py-2 px-3 lg:px-5 text-base capitalize transition-all duration-300`}>Contact</Link>
                  </li>
                </ul>

                <Link href="/contact" className="contact-btn relative z-10 hidden md:flex w-fit items-center gap-[10px] py-6 lg:py-7 px-7 lg:px-8 text-white text-base bg-secondary font-bold transition-all duration-300">
                  Contacts 
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 15L15 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.875 5H15V13.125" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* mobile screen overlay start */}
      {showMenu && <div className="h-screen w-full fixed inset-0 z-30 overlay" onClick={() => setShowMenu(!showMenu)}></div>}
      {/* mobile screen overlay end */}
    </>
  )
}

export default Header