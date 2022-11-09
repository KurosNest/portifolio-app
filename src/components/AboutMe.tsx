import React from "react";
import photo from "../assets/smiley.png";


const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen bg-[url('/src/assets/pattern.png')] bg-cover text-gray-700">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 bg-white shadow-md shadow-gray-500">
          <div className="sm:text-right pb-8 pl-4 ">
            <p className="text-4xl font-bold inline border-b-4 border-gray-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 bg-white shadow-md shadow-gray-500">
          <div className="sm:text-right text-3xl ">
          <img
              className="w-20"
              src={photo}
              alt="Smiley"
            />
            <p>Hi, I´m Ragnhild! *waves* </p>
          </div>
          <div>
            <p>I like solving problems with code, and making it look pretty!</p>
            <p>Currently, I study informatics. From before, I have a bachelors degree in 3D modeling and animation for games.</p>
            <p>My plan is to somehow mix the two - maybe working front-end, or maybe by being a tech-artist or something. I dunno, we'll see :D</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
