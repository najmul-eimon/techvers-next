import logo from '../../assets/images/logo.svg';
import logoWhite from '../../assets/images/logo-white.svg';
import { Link } from 'react-router-dom';

const NotFoundHeader = () => {
  return (
    <header className="header fixed top-0 left-0 w-full z-40 bg-[#FAFAFC] shadow-[0px_0px_22px_rgba(119,119,119,0.19)] box-border md:shadow-none md:border-b md:border-black/10 transition-all duration-300">
      <div className="container">
        <div className="flex items-center justify-center py-2 md:py-6">
          <Link to="/">
            <img src={logo} className="main-logo" alt="Logo"/>
            <img src={logoWhite} className="white-logo hidden" alt="Logo"/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NotFoundHeader