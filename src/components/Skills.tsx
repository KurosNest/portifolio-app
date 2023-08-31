import React from "react";
// import Event from "../assets/event-icon.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full sm:h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="font-bold ">
          <p className="text-4xl">
            Skills
          </p>
          <p className="py-4">Take a look at my skills</p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 text-center py-8">
          <div className="bg-[#edede9] pt-4 rounded">
            <p className="my-4 font-semibold">Code</p>
            <p className="my-4 p-5">
              <ul>Java</ul>
              <ul>Python</ul>
              <ul>JavaScript</ul>
              <ul>TypeScript</ul>
              <ul>HTML</ul>
              <ul>CSS</ul>
              <ul>React</ul>
              <ul>Tailwind</ul>
            </p>
          </div>

          <div className="bg-[#edede9] pt-4 rounded">
            <p className="my-4 font-semibold">Design</p>
            <p className="my-4 p-5">
              <ul>Maya</ul>
              <ul>ZBrush</ul>
              <ul>Substance Painter</ul>
              <ul>PhotoShop</ul>
              <ul>Unreal Engine</ul>
              <ul>Figma</ul>
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
