//import React, { useState } from "react";
// import { Link } from "react-scroll";
// import { HiArrowNarrowRight } from "react-icons/hi";
import me from "../assets/Me_noBG.png";

export const HomePage = () => {
  //const [nav, setNav] = useState(false);
  //const handleClick = () => setNav(!nav);

  return (
    <div id="home" className="w-full h-screen flex items-center">
      <div className="ml-4 flex-1 text-white">
        <p className="text-5xl md:text-8xl font-serif">
          Ragnhild Fjærbu Solheim
        </p>
        <div className="font-bold">
          <ul>3D generalist</ul>
          <ul>Front-end developer in the making</ul>
        </div>
      </div>
      <div className="h-full flex items-end">
        <img
          className="h-[80vh] min-h-[300px] min-w-[300px]"
          src={me}
          alt="me"
        />
      </div>
    </div>
  );
};
