import MobileDeepEarth from "../assets/mobile/image-deep-earth.jpg";
import DesktopDeepEarth from "../assets/desktop/image-deep-earth.jpg";

import MobileNightArcade from "../assets/mobile/image-night-arcade.jpg";
import DesktopNightArcade from "../assets/desktop/image-night-arcade.jpg";

import MobileSoccerTeam from "../assets/mobile/image-soccer-team.jpg";
import DesktopSoccerTeam from "../assets/desktop/image-soccer-team.jpg";

import MobileGrid from "../assets/mobile/image-grid.jpg";
import DesktopGrid from "../assets/desktop/image-grid.jpg";

import MobileFromAbove from "../assets/mobile/image-from-above.jpg";
import DesktopFromAbove from "../assets/desktop/image-from-above.jpg";

import MobilePocketBorealis from "../assets/mobile/image-pocket-borealis.jpg";
import DesktoPocketBorealis from "../assets/desktop/image-pocket-borealis.jpg";

import MobileCuriosity from "../assets/mobile/image-curiosity.jpg";
import DesktopCuriosity from "../assets/desktop/image-curiosity.jpg";

import MobileFisheye from "../assets/mobile/image-fisheye.jpg";
import DesktopFisheye from "../assets/desktop/image-fisheye.jpg";

function ImageGallary() {
  return (
    <div className="mx-auto max-w-[1280px] grid gap-12 lg:gap-16 grid-cols-1 md:grid-cols-4">
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileDeepEarth} />
        <source media="(max-width: 767px)" srcSet={DesktopDeepEarth} />
        <img src={DesktopDeepEarth} alt="image-deep-earth" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>DEEP</span> <span>EARTH</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileNightArcade} />
        <source media="(min-width: 767px)" srcSet={DesktopNightArcade} />
        <img src={DesktopNightArcade} alt="image-night-arcade" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>NIGHT</span> <span>ARCADE</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileSoccerTeam} />
        <source media="(min-width: 767px)" srcSet={DesktopSoccerTeam} />
        <img src={DesktopSoccerTeam} alt="image-soccer-team" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>SOCCER</span> <span>TEAM VR</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileGrid} />
        <source media="(min-width: 767px)" srcSet={DesktopGrid} />
        <img src={DesktopGrid} alt="image-grid" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>THE</span> <span>GRID</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileFromAbove} />
        <source media="(min-width: 767px)" srcSet={DesktopFromAbove} />
        <img src={DesktopFromAbove} alt="image-from-above" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>FROP UP</span> <span>ABOVE VR</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobilePocketBorealis} />
        <source media="(min-width: 767px)" srcSet={DesktoPocketBorealis} />
        <img src={DesktoPocketBorealis} alt="image-pocket-borealis" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>POCKET</span> <span>BOREALIS</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileCuriosity} />
        <source media="(min-width: 767px)" srcSet={DesktopCuriosity} />
        <img src={DesktopCuriosity} alt="image-curiosity" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light">
          <span>THE</span> <span>CUROSITY</span>
        </p>
      </picture>
      <picture className="relative cursor-pointer text-white hover:opacity-60">
        <source media="(max-width: 767px)" srcSet={MobileFisheye} />
        <source media="(min-width: 767px)" srcSet={DesktopFisheye} />
        <img src={DesktopFisheye} alt="image-fisheye" />
        <div className="absolute gallary-img top-0 left-0 w-full h-full"></div>
        <p className="absolute bottom-4 md:bottom-8 left-8 md:left-4 flex flex-col text-xl xl:text-3xl font-light ">
          <span>MAKE IT</span> <span>FISHEYE</span>
        </p>
      </picture>
    </div>
  );
}

export default ImageGallary;
