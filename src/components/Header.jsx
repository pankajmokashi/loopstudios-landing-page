import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="relative w-full min-h-[168px] hero-img flex items-center justify-center text-white sm:pt-16">
      <div className="absolute top-0 mx-auto w-full max-w-screen-xl flex items-center justify-between p-8 sm:p-16">
        <div className="cursor-pointer">
          <img src="/src/assets/logo.svg" alt="logo" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
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
        <div
          className="block md:hidden cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <img src="/src/assets/icon-hamburger.svg" alt="icon-hamburger" />
        </div>
        {show && (
          <div className="absolute bottom-10 right-8 left-8 h-0 rounded-md">
            <ul className="flex gap-0 flex-col bg-white rounded-md p-8">
              <li className="cursor-pointer px-4 py-2 rounded-md text-black hover:bg-slate-200 hover:text-black hover:opacity-60">
                About
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-md text-black hover:bg-slate-200 hover:text-black hover:opacity-60">
                Careers
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-md text-black hover:bg-slate-200 hover:text-black hover:opacity-60">
                Events
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-md text-black hover:bg-slate-200 hover:text-black hover:opacity-60">
                Products
              </li>
              <li className="cursor-pointer px-4 py-2 rounded-md text-black hover:bg-slate-200 hover:text-black hover:opacity-60">
                Support
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="mx-auto w-full max-w-screen-xl px-8 sm:px-16 my-32">
        <h1 className="w-full sm:max-w-lg border-4 font-light tracking-widest heading sm:text-5xl lg:text-6xl p-4 sm:p-8">
          IMMERSIVE EXPERIENCES THAT DELIVER
        </h1>
      </div>
    </header>
  );
}

export default Header;
