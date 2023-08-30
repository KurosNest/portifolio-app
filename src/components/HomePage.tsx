//import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/nyttPBFun.png";


export const HomePage = () => {
  //const [nav, setNav] = useState(false);
  //const handleClick = () => setNav(!nav);

  return (
    <div id="home" className="w-full h-screen flex items-center bg-[#7ebbce]">
      <div className="ml-4 flex-1 text-white">
        <p className="text-3xl md:text-6xl font-serif">
          Ragnhild Fjærbu Solheim
        </p>
        <div className="font-bold">
          <ul>3D generalist</ul>
          <ul>Front-end developer in the making</ul>
        </div>
      </div>
      <div className="h-full flex items-end">
        <img
          className="h-[80vh] min-w-[500px]"
          src={me}
          alt="me"
        />
      </div>
    </div>
  );
};
