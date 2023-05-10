import Link from 'next/link';
import Image from 'next/image';

const NotFoundHeader = () => {
  return (
    <header className="header fixed top-0 left-0 w-full z-40 bg-[#FAFAFC] shadow-[0px_0px_22px_rgba(119,119,119,0.19)] box-border md:shadow-none md:border-b md:border-black/10 transition-all duration-300">
      <div className="container">
        <div className="flex items-center justify-center py-2 md:py-6">
          <Link href="/">
            <Image src="/images/logo.svg" className="main-logo" alt="Logo" width={133} height={32}/>
            <Image src="/images/logo-white.svg" className="white-logo hidden" alt="Logo" width={133} height={32}/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default NotFoundHeader