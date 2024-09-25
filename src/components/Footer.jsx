import Logo from "../assets/logo.svg";
import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import Pinterest from "../assets/icon-pinterest.svg";

function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl text-center flex gap-16 flex-col p-8 sm:p-16 lg:h-56 lg:flex-row">
        <div className="w-full flex gap-8 flex-col items-center justify-between lg:w-1/2 lg:items-start">
          <div className="cursor-pointer">
            <img src={Logo} alt="logo" />
          </div>
          <nav className="">
            <ul className="flex flex-col gap-6 lg:flex-row">
              <li className="cursor-pointer pb-1 relative group text-center">
                About
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </li>
              <li className="cursor-pointer pb-1 relative group text-center">
                Careers
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </li>
              <li className="cursor-pointer pb-1 relative group text-center">
                Events
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </li>
              <li className="cursor-pointer pb-1 relative group text-center">
                Products
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </li>
              <li className="cursor-pointer pb-1 relative group text-center">
                Support
                <span className="absolute left-1/2 bottom-0 w-0 h-[1px] bg-white group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-full flex gap-8 flex-col items-center justify-between lg:w-1/2 lg:items-end">
          <ul className="flex gap-8 items-center">
            <li className="relative cursor-pointer group">
              <img className="pb-2" src={Facebook} alt="icon-facebook" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 transform"></span>
            </li>
            <li className="relative cursor-pointer group">
              <img className="pb-2" src={Instagram} alt="icon-instagram" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 transform"></span>
            </li>
            <li className="relative cursor-pointer group">
              <img className="pb-2" src={Twitter} alt="icon-twitter" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 transform"></span>
            </li>
            <li className="relative cursor-pointer group">
              <img className="pb-2" src={Pinterest} alt="icon-pinterest" />
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300 transform"></span>
            </li>
          </ul>
          <div className="text-center text-gray-500 text-xs sm:text-sm pb-1">
            © 2021 Loopstudios. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
