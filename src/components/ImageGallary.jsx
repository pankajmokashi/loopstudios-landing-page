function ImageGallary() {
  return (
    <div className="mx-auto max-w-[1280px] grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-4">
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-deep-earth.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/desktop/image-deep-earth.jpg"
        />
        <img
          src="/src/assets/desktop/image-deep-earth.jpg"
          alt="image-deep-earth"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>DEEP</span> <span>EARTH</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-night-arcade.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-night-arcade.jpg"
        />
        <img
          src="/src/assets/desktop/image-night-arcade.jpg"
          alt="image-night-arcade"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>NIGHT</span> <span>ARCADE</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-soccer-team.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-soccer-team.jpg"
        />
        <img
          src="/src/assets/desktop/image-soccer-team.jpg"
          alt="image-soccer-team"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>SOCCER</span> <span>TEAM VR</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-grid.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-grid.jpg"
        />
        <img src="/src/assets/desktop/image-grid.jpg" alt="image-grid" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>THE</span> <span>GRID</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-from-above.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-from-above.jpg"
        />
        <img
          src="/src/assets/desktop/image-from-above.jpg"
          alt="image-from-above"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>FROP UP</span> <span>ABOVE VR</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-pocket-borealis.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-pocket-borealis.jpg"
        />
        <img
          src="/src/assets/desktop/image-pocket-borealis.jpg"
          alt="image-pocket-borealis"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>POCKET</span> <span>BOREALIS</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-curiosity.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-curiosity.jpg"
        />
        <img
          src="/src/assets/desktop/image-curiosity.jpg"
          alt="image-curiosity"
        />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>THE</span> <span>CUROSITY</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source
          media="(max-width: 767px)"
          srcSet="/src/assets/mobile/image-fisheye.jpg"
        />
        <source
          media="(min-width: 767px)"
          srcSet="/src/assets/desktop/image-fisheye.jpg"
        />
        <img src="/src/assets/desktop/image-fisheye.jpg" alt="image-fisheye" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light ">
          <span>MAKE IT</span> <span>FISHEYE</span>
        </p>
      </picture>
    </div>
  );
}

export default ImageGallary;
