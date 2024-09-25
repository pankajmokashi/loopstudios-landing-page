import ImageGallary from "./ImageGallary";

function Main() {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-screen-xl px-8 py-24 sm:px-24">
        <div className="mb-12 sm:mb-20">
          <picture className="w-full lg:relative">
            <source
              media="(max-width: 767px)"
              srcSet="/src/assets/mobile/image-interactive.jpg"
            />
            <source
              media="(max-width: 767px)"
              srcSet="/src/assets/desktop/image-interactive.jpg"
            />
            <img
              className="mx-auto lg:w-3/5 lg:mx-0 sm:mb-8"
              src="/src/assets/desktop/image-interactive.jpg"
              alt="image-interactive"
            />
            <div className="text-center px-6 py-4 lg:p-0 lg:pt-16 lg:pl-16 bg-white lg:absolute lg:w-7/12 lg:text-left bottom-0 right-0">
              <h2 className="mb-4 text-2xl sm:text-3xl">
                THE LEADER IN INTERACTIVE VR
              </h2>
              <p className="text-sm sm:text-base lg:text-sm text-gray-500">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </picture>
        </div>
        <div className="flex items-center justify-center mb-12 gallary-title sm:justify-between">
          <h2 className="text-center font-light text-3xl">OUR CREATIONS</h2>
          <button className="border border-black px-6 py-1 text-sm sm:text-base hidden sm:block hover:bg-black hover:text-white">
            SEE ALL
          </button>
        </div>
        <ImageGallary />
        <div className="w-full flex justify-center">
          <button className="border border-black mt-12 px-8 py-2 text-base sm:hidden hover:bg-black hover:text-white">
            SEE ALL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
