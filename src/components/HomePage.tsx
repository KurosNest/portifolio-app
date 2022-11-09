import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

export const HomePage = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div id="home" className="w-full h-screen bg-gradient-to-b from-[#F3F2E0] to-[#C5DCA0]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-black mx-auto my-3">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl mx-auto font-bold text-gray-700">
          Ragnhild Fjærbu Solheim
        </h1>
        <h2 className="text-2xl sm:text-4xl mx-auto font-bold text-[#848794]">
          I´m a developer in the making
        </h2>
        <p className="text-[#848794] mx-auto py-4 max-w-[700px]">
          Thanks for visiting my page! Check it out
        </p>
        <div>
          <button className="text-gray-700 mx-auto group border-2 px-6 py-3 my-5 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
            <Link onClick={handleClick} to="projects" smooth={true} duration={800}>
              Look at some stuff I've done!
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
