import React from "react";
import Design from "../assets/design-icon.png";
import Developing from "../assets/developing-icon.png";
// import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen bg-gradient-to-r from-green-500 to-yellow-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-2 border-grey-500">
            Skills
          </p>
          <p className="py-4">Take a look at my skills</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-center py-8">
          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-4">
            <img
              className="w-10 mx-auto"
              src={Developing}
              alt="Developing icon"
            />
            <p className="my-4 font-semibold">Code</p>
            <p className="my-4 p-5">
              <ul>Java</ul>
              <ul>Python</ul>
              <ul>JavaScript</ul>
              <ul>HTML</ul>
              <ul>CSS</ul>
            </p>
          </div>

          <div className="bg-[#edede9] shadow-md shadow-gray-500 hover:scale-105 duration-500 pt-4">
            <img className="w-10 mx-auto" src={Design} alt="Design icon" />
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4 p-5">
              <ul>Maya</ul>
              <ul>ZBrush</ul>
              <ul>Substance Painter</ul>
              <ul>PhotoShop</ul>
              <ul>Unreal Engine</ul>

            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Skills;

//Programmeringsspråk
//Andre skills (Presentation) (kan klikke seg inn på bilder av foredrag og arbeid jeg har gjort)
//Design

//Arrangering
