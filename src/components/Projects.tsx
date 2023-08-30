import React from "react";

const Projects = () => {
  return (
    <div id="3Dprojects" className="w-full h-screen flex items-center text-white ">
      <div className="m-auto ">
        <div className="w-full text-center">
          <p className="text-4xl font-bold">
            3D models
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 m-4 p-2  bg-white rounded">
          <div className="m-2">
            <iframe title="PostBee"
            className="w-[30vw] h-[30vh]"
              allowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
              src="https://sketchfab.com/models/fd040219049d4c7096eefcd530378dea/embed"/>
          </div>
          <div className="m-2">
            <iframe title="Sea Creature - Octopus"
            className="w-[30vw] h-[30vh]"
              allowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
              src="https://sketchfab.com/models/ba5087b68ea24656ae1be044b2e0258f/embed"/>
          </div>
          <div className="m-2">
            <iframe title="3D environment - Folder exam Spring 2020"
            className="w-[30vw] h-[30vh]"
              allowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
              src="https://sketchfab.com/models/4fac2d1ede4247b4b84447576dfc7afb/embed"/>
          </div>
          <div className="m-2">
            <iframe title="Car Wreck" 
            className="w-[30vw] h-[30vh]"
              allowFullScreen={true}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
              src="https://sketchfab.com/models/5d9e5172661b443fa561627b47c6bc88/embed"/>
          </div>
        </div>
      </div>
    </div>


  );
};

export default Projects;
