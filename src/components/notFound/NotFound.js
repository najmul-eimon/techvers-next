import NotFoundHeader from './NotFoundHeader';
import image from '../../assets/images/404.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <NotFoundHeader/>
      <main>
        <section className="w-full mt-12 md:mt-20">
          <div className="container">
            <div className="min-h-[calc(100vh-81px)] w-full flex items-center justify-center py-10">
              <div className="text-center">
                <img src={image} alt="Not Found"/>
                <p className="font-inter text-secondary-text font-bold text-lg md:text-xl tracking-widest uppercase pt-20 pb-12">opps! page not found</p>
                <Link to="/" className="back-to-home whitespace-nowrap relative overflow-hidden inline-block py-[10px] px-20 md:px-24 text-sm md:text-lg font-inter font-semibold text-white bg-[#7A1403] rounded-xl">
                  <span className="relative z-10">Back to home page</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NotFound;